"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}

export const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border-b border-zinc-800 last:border-0">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between py-6 text-left text-lg font-medium transition-all hover:text-white text-zinc-300"
            >
                {question}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="h-5 w-5 text-zinc-500" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", marginBottom: 24 },
                            collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden text-brand-textMuted"
                    >
                        <div>{answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
