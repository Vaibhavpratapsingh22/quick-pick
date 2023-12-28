import React from "react";
import EmptyConversation from "../ui/emptyConversation";

type TEmpty = {
  label: string;
};
const Empty = ({ label }: TEmpty) => {
  return (
    <div className="h-full p-20 flex flex-com items-center justify-center">
      <div className="relative h-72 w-72">
        <p className="text-muted-foreground text-sm flex justify-center flex-col items-center">
          <EmptyConversation />
          {label}
        </p>
      </div>
    </div>
  );
};

export default Empty;
