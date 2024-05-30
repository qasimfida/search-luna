import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "cc-z-50 cc-overflow-hidden cc-rounded-md cc-border cc-border-slate-200 cc-bg-black cc-px-3 cc-py-1.5 cc-text-sm cc-text-wh cc-shadow-md cc-animate-in cc-fade-in-0 cc-zoom-in-95 data-[state=closed]:cc-animate-out data-[state=closed]:cc-fade-out-0 data-[state=closed]:cc-zoom-out-95 data-[side=bottom]:cc-slide-in-from-top-2 data-[side=left]:cc-slide-in-from-right-2 data-[side=right]:cc-slide-in-from-left-2 data-[side=top]:cc-slide-in-from-bottom-2 dark:cc-border-slate-800 dark:cc-bg-slate-950 dark:cc-text-slate-50",
      className
    )}
    {...props} />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
