import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cc-inline-flex cc-items-center cc-justify-center cc-whitespace-nowrap cc-rounded-md cc-text-sm cc-font-medium cc-ring-offset-white cc-transition-colors focus-visible:cc-outline-none focus-visible:cc-ring-2 focus-visible:cc-ring-slate-950 focus-visible:cc-ring-offset-2 disabled:cc-pointer-events-none disabled:cc-opacity-50 dark:cc-ring-offset-slate-950 dark:focus-visible:cc-ring-slate-300 ",
  {
    variants: {
      variant: {
        default: "cc-bg-slate-900 cc-text-slate-50 hover:cc-bg-slate-900/90 dark:cc-bg-slate-50 dark:cc-text-slate-900 dark:hover:cc-bg-slate-50/90",
        destructive:
          "cc-bg-red-500 cc-text-slate-50 hover:cc-bg-red-500/90 dark:cc-bg-red-900 dark:cc-text-slate-50 dark:hover:cc-bg-red-900/90",
        outline:
          "cc-border-2 cc-border-black cc-bg-white hover:cc-bg-slate-100 hover:cc-text-slate-900 dark:cc-border-slate-800 dark:cc-bg-slate-950 dark:hover:cc-bg-slate-800 dark:hover:cc-text-slate-50",
        secondary:
          "cc-bg-slate-100 cc-text-slate-900 hover:cc-bg-slate-100/80 dark:cc-bg-slate-800 dark:cc-text-slate-50 dark:hover:cc-bg-slate-800/80",
        ghost: "hover:cc-bg-slate-100 hover:cc-text-slate-900 dark:hover:cc-bg-slate-800 dark:hover:cc-text-slate-50",
        link: "cc-text-slate-900 cc-underline-offset-4 hover:cc-underline dark:cc-text-slate-50",
      },
      size: {
        default: "cc-h-10 cc-px-4 cc-py-2",
        sm: "cc-h-9 cc-rounded-md cc-px-3",
        lg: "cc-h-11 cc-rounded-md cc-px-8",
        icon: "cc-h-10 cc-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
