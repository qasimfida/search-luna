import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "cc-fixed cc-inset-0 cc-z-50 cc-bg-black/80 cc- data-[state=open]:cc-animate-in data-[state=closed]:cc-animate-out data-[state=closed]:cc-fade-out-0 data-[state=open]:cc-fade-in-0",
      className
    )}
    {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "cc-fixed cc-left-[50%] cc-top-[50%] cc-z-50 cc-grid cc-w-full cc-max-w-lg cc-translate-x-[-50%] cc-translate-y-[-50%] cc-gap-4 cc-border cc-border-slate-200 cc-bg-white cc-p-6 cc-shadow-lg cc-duration-200 data-[state=open]:cc-animate-in data-[state=closed]:cc-animate-out data-[state=closed]:cc-fade-out-0 data-[state=open]:cc-fade-in-0 data-[state=closed]:cc-zoom-out-95 data-[state=open]:cc-zoom-in-95 data-[state=closed]:cc-slide-out-to-left-1/2 data-[state=closed]:cc-slide-out-to-top-[48%] data-[state=open]:cc-slide-in-from-left-1/2 data-[state=open]:cc-slide-in-from-top-[48%] sm:cc-rounded-lg dark:cc-border-slate-800 dark:cc-bg-slate-950",
        className
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close
        className="cc-absolute cc-right-4 cc-top-4 cc-rounded-sm cc-opacity-70 cc-ring-offset-white cc-transition-opacity hover:cc-opacity-100 focus:cc-outline-none focus:cc-ring-2 focus:cc-ring-slate-950 focus:cc-ring-offset-2 disabled:cc-pointer-events-none data-[state=open]:cc-bg-slate-100 data-[state=open]:cc-text-slate-500 dark:cc-ring-offset-slate-950 dark:focus:cc-ring-slate-300 dark:data-[state=open]:cc-bg-slate-800 dark:data-[state=open]:cc-text-slate-400">
        <X className="cc-h-4 cc-w-4" />
        <span className="cc-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "cc-flex cc-flex-col cc-space-y-1.5 cc-text-center sm:cc-text-left",
      className
    )}
    {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "cc-flex cc-flex-col-reverse sm:cc-flex-row sm:cc-justify-end sm:cc-space-x-2",
      className
    )}
    {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("cc-text-lg cc-font-semibold cc-leading-none cc-tracking-tight", className)}
    {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("cc-text-sm cc-text-slate-500 dark:cc-text-slate-400", className)}
    {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
