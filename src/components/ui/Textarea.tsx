import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, ...props }, ref) => {
        const id = React.useId()
        return (
            <div className="space-y-2 w-full">
                {label && (
                    <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-brand-textMuted">
                        {label}
                    </label>
                )}
                <textarea
                    id={id}
                    className={cn(
                        "flex min-h-[120px] w-full rounded-2xl border border-brand-border bg-zinc-900/50 px-4 py-3 text-sm ring-offset-zinc-950 placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-y",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
