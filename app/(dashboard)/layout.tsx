import React, { ReactNode } from "react";
import DasboardLayout from "./DashBoardLayout";
import { getApiCount } from "@/lib/apiLimitCheck";

interface RootDashboardProps {
  children: ReactNode;
}

const RootDashboard = async({ children }: RootDashboardProps) => {
  const count = await getApiCount();
  return (
    <>
      <DasboardLayout count ={count}>{children}</DasboardLayout>
    </>
  );
};

export default RootDashboard;
