import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("cc-border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="cc-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "cc-flex cc-flex-1 cc-items-center cc-justify-between cc-py-4 cc-font-medium cc-transition-all [&[data-state=open]>svg]:cc-rotate-180",
        className
      )}
      {...props}>
      {children}
      <ChevronDown
        className="cc-h-4 cc-w-4 cc-shrink-0 cc-transition-transform cc-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="cc-overflow-hidden cc-text-sm cc-transition-all data-[state=closed]:cc-animate-accordion-up data-[state=open]:cc-animate-accordion-down"
    {...props}>
    <div className={cn("cc-pb-4 cc-pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
