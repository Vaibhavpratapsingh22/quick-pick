import { LucideIcon } from "lucide-react";
import React from "react";

type THeadingComp = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color?: string;
  bgColor?: string;
};

const HeadingComp = ({
  title,
  description,
  Icon,
  color,
  bgColor,
}: THeadingComp) => {
  return (
    <div>
      <div className={`flex items-center`}>
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-2xl ${color} ${bgColor}`}
        >
          <Icon />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className=" text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingComp;
