import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "cc-flex cc-h-14 cc-w-full cc-text-black cc-rounded-md cc-border cc-border-slate-200 cc-bg-white cc-px-3 cc-py-2 cc-text-sm cc-ring-offset-white file:cc-border-0 file:cc-bg-transparent file:cc-text-sm file:cc-font-medium placeholder:cc-text-slate-500 focus-visible:cc-outline-none focus-visible:cc-ring-2 focus-visible:cc-ring-slate-950 focus-visible:cc-ring-offset-2 disabled:cc-cursor-not-allowed disabled:cc-opacity-50 dark:cc-border-slate-800 dark:cc-bg-slate-950 dark:cc-ring-offset-slate-950 dark:placeholder:cc-text-slate-400 dark:focus-visible:cc-ring-slate-300",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
