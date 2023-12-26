import { cn } from "@/lib/utils";
import React from "react";

type TmenuItems = {
  menuItems: string[];
};

const Sidebar = ({ menuItems }: TmenuItems) => {
  const pathName = window.location.pathname;
  return (
    <>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li className="underline border-b-2">
            <a
              href="/dashoard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#111827"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              <h1 className="ms-3 text-2xl font-bold text-[#111827]">
                QuickPick
              </h1>
            </a>
          </li>
          {menuItems?.map((itemName: string) => (
            <li>
              <a
                href={`/${itemName.toLocaleLowerCase().replace(/\s+/g, "-")}`}
                className={cn(
                  "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                  pathName ===
                    `/${itemName.toLocaleLowerCase().replace(/\s+/g, "-")}`
                    ? "bg-gray-200"
                    : null
                )}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 20H11V13H22V20ZM9 20H2V13H9V20ZM22 11H2V4H22V11Z"
                    fill="gray"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {itemName}
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
