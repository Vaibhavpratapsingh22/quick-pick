"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import axios from "axios";

type TSubscriptionBtnProps = {
  isPro: boolean;
};

const SubscriptionBtn = ({ isPro = false }: TSubscriptionBtnProps) => {
  const [loading, setLoading] = useState(false);
  const onclick = async () => {
    try {
        setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (err) {
        console.log(err, "BILLING ERROR");
    } finally{
        setLoading(false);
    }
  };
  return (
      <Button disabled={loading} onClick={onclick}>
      {isPro ? "Manage Subscription" : "Subscribe Now"}
      {!isPro && <Zap className="w-4 h-4 ms-2 fill-white" />}
    </Button>
  );
};

export default SubscriptionBtn;
