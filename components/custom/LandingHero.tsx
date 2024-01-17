"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-[#F3D7CA] font-bold py-28 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl space-y-5 font-extrabold">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
          Welcomne to{" "}
          <span className="text-[#FF6868] underline hover:text-[#DCFFB7]">
            QuickPick
          </span>
        </h1>
        <div className="text-transparent p-2 bg-clip-text bg-gradient-to-r from-[#9DBC98] to-[#638889]">
          <TypewriterComponent
            options={{
              strings: [
                "Tool for modern people.",
                "Generate Code Snippets",
                "Generate Videos",
                "Generate Images",
                "Generate Music",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className=" text-sm md:text-sm font-light text-zinc-400">
        Use AI to make your work easier!
      </div>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <button className="bg-[#FF9843] hover:text-[#503C3C] text-[#E4DEBE] font-bold p-2 rounded mt-5">
          Start Generating For Free!
        </button>
      </Link>
    </div>
  );
};

export default LandingHero;
