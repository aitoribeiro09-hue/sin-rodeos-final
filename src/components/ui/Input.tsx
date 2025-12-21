import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, ...props }, ref) => {
        return (
            <div className="space-y-2 w-full">
                <input
                    type={type}
                    className={cn(
                        "flex h-14 w-full rounded-sm border border-zinc-800 bg-transparent px-4 py-2 text-base text-brand-text placeholder:text-zinc-700 focus-visible:outline-none focus-visible:border-brand-textConfig transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium",
                        error && "border-red-900",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="text-sm text-red-900">{error}</p>}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
