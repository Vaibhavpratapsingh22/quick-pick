import React, { ReactNode } from "react";
import DasboardLayout from "./DashBoardLayout";
import { getApiCount } from "@/lib/apiLimitCheck";
import { checkUserSubscription } from "@/lib/subscription";

interface RootDashboardProps {
  children: ReactNode;
}

const RootDashboard = async({ children }: RootDashboardProps) => {
  const count = await getApiCount();
  const isPro = await checkUserSubscription();
  return (
    <>
      <DasboardLayout count ={count} isPro={isPro}>{children}</DasboardLayout>
    </>
  );
};

export default RootDashboard;
