"use client";
import React from "react";
import { availOptions } from "@/app/helper/availOptions";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="px-20">
      <div className="mb-8 spacy-y-4">
        <h2 className="text-2xl text-[#3E3232] md:text-3xl font-bold text-center">
          Welcome to QuickPick Dashboard
        </h2>
        <p className="text-center text-muted-foreground font-light">
          Start interacting with the powerful AI tool
        </p>
      </div>
      {availOptions?.map((menu, index) => {
        if (menu.name === "Dashboard") {
          return null;
        }
        return (
          <div
            key={index}
            className="rounded-none border border-l-0 border-r-0 border-t-0 border-[#503C3C] bg-transparent"
          >
            <h2 className="mb-0" id="flush-headingOne">
              <div className="group relative flex w-full items-center rounded-none border-0 bg-transparent px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_#503C3C] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]">
                <div className={cn("p-2 mr-2 w-fit rounded-md", menu.bgColor)}>
                  <menu.icon className={cn("w-4 h-4", menu.color)} />
                </div>
                {menu.name}
                <span className="-mr-1 ml-auto h-5 w-5 ">
                  <ArrowRight
                    color="#111827"
                    className="cursor-pointer"
                    onClick={() => router.push(menu.href)}
                  />
                </span>
              </div>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
