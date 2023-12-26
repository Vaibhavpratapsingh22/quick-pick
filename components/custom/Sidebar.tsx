import { availOptions } from "@/app/helper/availOptions";
import { cn } from "@/lib/utils";
import { Wind } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const pathName = window.location.pathname;
  return (
    <>
      <div className="h-full px-3 py-4 overflow-y-auto bg-slate-100">
        <ul className="space-y-2 font-medium ">
          <li className="underline border-b-2 ">
            <a
              href="/dashoard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Wind />
              <h1 className="ms-3 text-2xl font-bold text-[#111827]">
                QuickPick
              </h1>
            </a>
          </li>
          {availOptions?.map((menu) => (
            <li>
              <a
                href={menu.href}
                className={cn(
                  "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                  pathName === menu.href ? "bg-gray-200" : null
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
    </>
  );
};

export default Sidebar;
