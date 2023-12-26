import { UserButton } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-end">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavBar;
