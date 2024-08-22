"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

type SubscriptionButtonProps = {
  isPro: Boolean;
};

export default function SubscriptionButton({
  isPro = false,
}: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING_ERROR", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Button
        variant={isPro ? "default" : "premium"}
        onClick={onClick}
        disabled={loading}
      >
        {isPro ? "Manage Subscription" : "Upgrade"}
        {!isPro && <Zap className="ml-2 h-3 w-4 fill-white" />}
      </Button>
    </div>
  );
}
