"use client";
import React, { use, useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { MAX_FREE_COUNT } from "@/constants";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import { useProModel } from "@/hooks/useProModal";

type TFreeCounterProps = {
  apiLimitCount: number;
  isPro: boolean;
};
const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: TFreeCounterProps) => {
  const proModal = useProModel();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  if (isPro) return null;
  return (
    <>
      <div className="px-3">
        <Card className="bg-black/20 border-0">
          <CardContent className="py-6">
            <div className="text-center text-sm text-white mb-4 space-y-2">
              <p>
                {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
              </p>
              <Progress className="h-3 " value={(apiLimitCount * 100) / 5} />
            </div>
            <Button className="w-full" onClick={proModal.onOpenPro}>
              Get Premium <Zap className="w-4 h-4 ml-1 fill-white" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FreeCounter;
