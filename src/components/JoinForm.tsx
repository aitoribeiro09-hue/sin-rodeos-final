"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { siteCopy } from "@/content/siteCopy"

export function JoinForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email })
            })

            const data = await res.json()

            if (res.ok && data.ok) {
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
                placeholder={siteCopy.registration.placeholderName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent border-b border-zinc-700 rounded-none px-0 h-16 text-xl focus:border-brand-text"
            />
            <Input
                type="email"
                placeholder={siteCopy.registration.placeholderEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-b border-zinc-700 rounded-none px-0 h-16 text-xl focus:border-brand-text"
            />
            <div className="pt-8 relative">
                <Button
                    fullWidth
                    disabled={status === 'loading'}
                    className={status === 'success' ? 'bg-green-700 hover:bg-green-700' : ''}
                >
                    {status === 'loading' && 'ENVIANDO...'}
                    {status === 'success' && 'RECIBIDO.'}
                    {status === 'error' && 'NO HA ENTRADO.'}
                    {status === 'idle' && 'SOLICITAR ACCESO'}
                </Button>
                {status === 'error' && (
                    <p className="text-red-500 text-xs mt-2 text-center uppercase tracking-widest">Intenta otra vez.</p>
                )}
            </div>
            <p className="text-center text-xs font-mono text-zinc-600 uppercase tracking-widest mt-2">{siteCopy.registration.micro}</p>
        </form>
    )
}
