import { auth, currentUser } from "@clerk/nextjs";

import { absoluteUrl } from "@/lib/utils";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

const settingUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();
    if (userId) {
      const userSubscription = await prismadb.userSubscription.findUnique({
        where: {
          userId,
        },
      });
      if (userSubscription?.stripeCustomerId) {
        const stripeSession = await stripe.billingPortal.sessions.create({
          customer: userSubscription.stripeCustomerId,
          return_url: settingUrl,
        });
        return new NextResponse(JSON.stringify({ url: stripeSession.url }));
      }
      const stripeSession = await stripe.checkout.sessions.create({
        success_url: settingUrl,
        cancel_url: settingUrl,
        payment_method_types: ["card"],
        mode: "subscription",
        billing_address_collection: "required",
        customer_email: user ? user.emailAddresses[0].emailAddress : "",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "QuickPick Pro",
                description:
                  "An open AI powered tool to help you find solutions to your problems.",
              },
              unit_amount: 1000,
              recurring: { interval: "month" },
            },
            quantity: 1,
          },
        ],
        metadata: {
          userId: userId,
        },
      });
      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }
    return {
      status: 401,
      body: {
        message: "Unauthorized",
      },
    };
  } catch (error) {
    console.log("STRIPE_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
