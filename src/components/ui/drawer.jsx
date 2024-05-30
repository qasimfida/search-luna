import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("cc-fixed cc-inset-0 cc-z-50 cc-bg-black/80", className)}
    {...props} />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "responsive-drawer md:cc-bottom-[-10px] cc-w-auto md:cc-mx-auto md:cc-my-7 md:cc-max-w-[95%] cc-fixed cc-bg-black cc-inset-x-0 cc-bottom-0 cc-z-[5000] cc-mt-24 cc-flex cc-h-auto cc-flex-col cc-rounded-t-[10px] cc-border cc-border-slate-200 dark:cc-border-slate-800 dark:cc-bg-slate-950",
        className
      )}
      {...props}>
      <div
        className="cc-mx-auto cc-mt-4 cc-h-2 cc-w-[100px] cc-rounded-full cc-bg-[#6DC3F7]" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("cc-grid cc-gap-1.5 cc-p-4 cc-text-center sm:cc-text-left", className)}
    {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("cc-mt-auto cc-flex cc-flex-col cc-gap-2 cc-p-4", className)}
    {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("cc-text-lg cc-font-semibold cc-leading-none cc-tracking-tight", className)}
    {...props} />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("cc-text-sm cc-text-slate-500 dark:cc-text-slate-400", className)}
    {...props} />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
