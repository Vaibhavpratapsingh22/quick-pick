import HeadingComp from "@/components/custom/Heading";
import SubscriptionBtn from "@/components/custom/SubscriptionBtn";
import { checkUserSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";
import React from "react";

const SettingsPage = async () => {
  const isPro = await checkUserSubscription();
  return (
    <div>
      <HeadingComp
        title="Settings"
        description="Upadte your account settings here."
        Icon={Settings}
        color="text-gray-500"
        bgColor="bg-gray-500/10"
      />
      <div className="px-8 p-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently subscribed to our Pro Plan."
            : "You are currently subscribed to our Free Plan."}
        </div>
        <SubscriptionBtn isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
