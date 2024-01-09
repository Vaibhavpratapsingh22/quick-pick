import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const checkUserSubscription = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  const subscription = await prismadb.userSubscription.findUnique({
    where: {
      userId: userId,
      
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });
  if (!subscription) {
    return false;
  }
  const isValid =
    subscription.stripePriceId &&
    subscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();
  return !!isValid;
};
