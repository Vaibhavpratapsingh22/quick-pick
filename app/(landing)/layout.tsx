import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#030637] overflow-auto">
      <div className="px-10 h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
