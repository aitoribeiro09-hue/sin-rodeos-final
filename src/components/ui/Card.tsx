import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-sm border-t border-zinc-900 bg-transparent text-brand-text p-6 md:p-8 hover:bg-zinc-900/30 transition-colors duration-500",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export { Card }
