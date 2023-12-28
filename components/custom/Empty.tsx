import React from "react";
import { EmptyConversation } from "../ui/emptyConversation";

type TEmpty = {
  label: string;
  Icon?: React.FC<{}>;
};
export const Empty = ({ label, Icon }: TEmpty) => {
  return (
    <div className="h-full p-20 flex flex-com items-center justify-center">
      <div className="relative h-72 w-72">
        <p className="text-muted-foreground text-sm flex justify-center flex-col items-center">
          {Icon && <Icon />}
          {label}
        </p>
      </div>
    </div>
  );
};
