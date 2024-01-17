import { availOptions } from "@/app/helper/availOptions";
import { cn } from "@/lib/utils";
import { Wind } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import FreeCounter from "./FreeCounter";

type TSidebar = {
  apiLimitCounter: number;
  isPro: boolean;
};
const Sidebar = ({ apiLimitCounter, isPro = false }: TSidebar) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <>
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#BBAB8C] flex justify-between flex-col">
        <div>
          <ul className="space-y-2 font-medium cursor-pointer ">
            <li className=" border-b-2 ">
              <a
                onClick={() => router.push("/dashboard")}
                className="flex cursor-pointer items-center p-2 text-[#2D3250] rounded-lg group"
              >
                <Wind />
                <h1 className="ms-3 text-2xl font-bold text-[#111827]">
                  QuickPick
                </h1>
              </a>
            </li>
            {availOptions?.map((menu, index) => (
              <li key={index}>
                <a
                  onClick={() => router.push(menu.href)}
                  className={cn(
                    "flex items-center p-2 text-[#FAEED1] rounded-lg hover:text-[#6B240C]  hover:bg-[#FBF9F1] dark:hover:bg-gray-700 group",
                    pathName === menu.href
                      ? "bg-[#FBF9F1] text-[#6B240C]"
                      : null
                  )}
                >
                  <div className={cn("p-2 w-fit rounded-md", menu.bgColor)}>
                    <menu.icon className={cn("w-4 h-4", menu.color)} />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FreeCounter apiLimitCount={apiLimitCounter} isPro={isPro} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
