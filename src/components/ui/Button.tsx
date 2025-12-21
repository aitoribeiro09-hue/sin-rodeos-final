"use client";

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', fullWidth, children, ...props }, ref) => {

        // Editorial Style: Sharp corners (rounded-sm), high contrast, uppercase text often used in buttons
        const variants = {
            primary: "bg-brand-accent hover:bg-[#8a0e1d] text-white border border-transparent shadow-sm",
            outline: "bg-transparent border border-brand-textSecondary/50 text-brand-text hover:border-brand-text hover:text-white",
            ghost: "bg-transparent text-brand-textSecondary hover:text-brand-text",
        }

        return (
            <motion.button
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-textSecondary disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    fullWidth ? "w-full" : "",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </motion.button>
        )
    }
)
Button.displayName = "Button"

export { Button }
