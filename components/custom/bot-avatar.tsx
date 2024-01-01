import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="/favicon.ico"></AvatarImage>
    </Avatar>
  );
};

export default BotAvatar;
