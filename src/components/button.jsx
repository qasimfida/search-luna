import { Button } from "@/components/ui/button"

export function CustomButton({children, variant, className, ...rest}) {
  return <Button variant={variant} className={className} {...rest}>{children}</Button>
}
