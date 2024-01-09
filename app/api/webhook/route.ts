import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const secret = process.env.STRIPE_WEBHOOK_KEY || "";

export async function POST(req: Request) {
  try {
    const body = await req.text();

    const signature = headers().get("stripe-signature") as string;

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
      if (!session?.metadata?.userId) {
        throw new NextResponse("User not found", { status: 400 });
      }

      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );
      await prismadb.userSubscription.create({
        data: {
          userId: session.metadata.userId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
          stripePriceId: subscription.items.data[0].price.id,
        },
      });
    }
    if (event.type === "invoice.payment_succeeded") {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );
      await prismadb.userSubscription.update({
        where: {
          stripeSubscriptionId: subscription.id,
        },
        data: {
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Webhook Error",
        ok: false,
      },
      { status: 400 }
    );
  }
}
