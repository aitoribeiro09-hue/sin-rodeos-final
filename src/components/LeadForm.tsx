// @ts-nocheck
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteCopy } from "@/content/siteCopy"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Check, AlertCircle } from "lucide-react"

export function LeadForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('loading')
        setMessage('')

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            caseText: formData.get('case'),
            consent: formData.get('consent') === 'on'
        }

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const json = await res.json()

            if (!res.ok) throw new Error(json.error || 'Error desconocido')

            setStatus('success')
            setMessage(siteCopy.form.submit.success.replace('[Nombre]', String(data.name)))
        } catch (err) {
            setStatus('error')
            setMessage(siteCopy.form.submit.error)
        }
    }

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md mx-auto p-8 rounded-[2rem] bg-zinc-900 border border-brand-red/30 text-center space-y-4"
            >
                <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto text-brand-red">
                    <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Registrado!</h3>
                <p className="text-zinc-400">{message}</p>
            </motion.div>
        )
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-zinc-900/40 p-6 md:p-10 rounded-[2.5rem] border border-zinc-800 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-8 space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{siteCopy.form.title}</h3>
                <p className="text-brand-textMuted">{siteCopy.form.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    name="name"
                    placeholder={siteCopy.form.fields.name.placeholder}
                    required
                    maxLength={50}
                />
                <Input
                    name="email"
                    type="email"
                    placeholder={siteCopy.form.fields.email.placeholder}
                    required
                />
                <Textarea
                    name="case"
                    placeholder={siteCopy.form.fields.case.placeholder}
                    required
                    minLength={40}
                    maxLength={800}
                />

                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        required
                        className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-brand-red focus:ring-brand-red"
                    />
                    <label htmlFor="consent" className="text-xs text-zinc-500 leading-relaxed">
                        {siteCopy.form.consent}

                    </label>
                </div>

                <AnimatePresence>
                    {status === 'error' && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-xl"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>

                <Button
                    type="submit"
                    className="w-full text-lg h-14 font-semibold tracking-wide"
                    isLoading={status === 'loading'}
                >
                    {siteCopy.form.submit.default}
                </Button>

                <p className="text-center text-xs text-zinc-600 mt-4">
                    {siteCopy.form.privacy}
                </p>
            </form>
        </div>
    )
}
