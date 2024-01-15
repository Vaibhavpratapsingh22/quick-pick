"use client";
import React, { use, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useProModel } from "@/hooks/useProModal";
import { Badge } from "../ui/badge";
import { Check, Zap } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

const ProModal = () => {
  const proModal = useProModel();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClosePro}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center text-2xl text-[#FF6868] items-center flex-row gap-y-4 pb-2 z-10">
              Upgrade to QuickPick PRO!
              <Badge className="uppercase text-sm ml-1 hover:text-black bg-[#FF6868]">
                GO Pro
              </Badge>
            </DialogTitle>
            <DialogDescription>
              <p className="text-center ">
                <span className="font-bold text-[#6B240C]">QuickPick PRO</span>{" "}
                gives you unlimited access to all of our premium features,
                including unlimited generations, unlimited results, and more!
              </p>
              <div className="flex items-start justify-start font-semibold px-14 text-[#6B240C] flex-col mt-4 gap-y-2 w-full ">
                <p className="ms-2 flex justify-between w-full items-center gap-x-8">
                  Unlimited Conversations{" "}
                  <span>
                    <Check className="w-4 h-4 text-[#6B240C]" />
                  </span>
                </p>
                <p className="ms-2 flex justify-between w-full items-center gap-x-8">
                  Unlimited Image Generation{" "}
                  <span>
                    <Check className="w-4 h-4 text-[#6B240C]" />
                  </span>
                </p>
                <p className="ms-2 flex justify-between w-full items-center gap-x-4">
                  Unlimited Music Generation{" "}
                  <span>
                    <Check className="w-4 h-4 text-[#6B240C]" />
                  </span>
                </p>
                <p className="ms-2 flex justify-between w-full  items-center gap-x-4">
                  Unlimited Video Generation{" "}
                  <span>
                    <Check className="w-4 h-4  text-[#6B240C]" />
                  </span>
                </p>
                <p className="ms-2 flex justify-between w-full items-center gap-x-4">
                  Unlimited Code Generation{" "}
                  <span>
                    <Check className="w-4 h-4 text-[#6B240C]" />
                  </span>
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="bg-[#6B240C] hover:bg-[#6B240C] "
              onClick={onSubscribe}
            >
              Upgrade
              <Zap className="w-4 h-4 ml-1 fill-white" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProModal;
