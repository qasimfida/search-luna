import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

export const CustomTooltip = ({ children, tooltipContent }) => {
  return (
    <TooltipProvider >
      <Tooltip>
        <TooltipTrigger className="cc-rounded-xl cc-max-w-full cc-w-full">{children}</TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
