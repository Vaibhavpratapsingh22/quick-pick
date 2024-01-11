"use client";
import NavBar from "@/components/custom/NavBar";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/custom/Sidebar";
import { getApiCount } from "@/lib/apiLimitCheck";
import { checkUserSubscription } from "@/lib/subscription";

const DasboardLayout = async ({
  children,
  count,
}: {
  children: React.ReactNode;
  count: number;
}) => {
  const [show, setShow] = useState(false);
  const isPro = await checkUserSubscription();
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={() => setShow(!show)}
        className={`inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 sm:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
          show ? "!ml-[260px]" : "ml-0"
        }`}
      >
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        )}
      </button>

      <aside
        id="default-sidebar"
        className={
          show
            ? "fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 transform-none"
            : "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        }
        aria-label="Sidebar"
      >
        <Sidebar apiLimitCounter={count} isPro={isPro} />
      </aside>
      <div className="p-0 sm:ml-64">
        <div className=" p-5">
          <NavBar />
        </div>
        <main className="mt-5 p-2">{children}</main>
      </div>
    </>
  );
};

export default DasboardLayout;
