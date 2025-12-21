"use client"

import { siteCopy } from "@/content/siteCopy"
import { Button } from "@/components/ui/Button"
import { JoinForm } from "@/components/JoinForm" // New Client Component
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {

    const scrollToJoin = () => {
        document.getElementById('acceso')?.scrollIntoView({ behavior: 'smooth' })
    }

    // Smooth scroll handler for nav links
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <main className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">

            {/* 1. HEADER */}
            <header className="fixed top-0 w-full z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-[1200px] mx-auto px-6 h-24 flex items-center justify-between">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-serif text-2xl tracking-tighter hover:opacity-80 transition-opacity text-left">
                        SIN<br />RODEOS
                    </button>

                    <nav className="hidden md:flex items-center gap-10">
                        <a
                            href="#enfoque"
                            onClick={(e) => handleNavClick(e, 'enfoque')}
                            className="text-sm font-medium text-brand-textSecondary hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {siteCopy.nav.items[0].label}
                        </a>
                        <a
                            href="#preguntas"
                            onClick={(e) => handleNavClick(e, 'preguntas')}
                            className="text-sm font-medium text-brand-textSecondary hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {siteCopy.nav.items[1].label}
                        </a>
                    </nav>

                    <Button variant="outline" className="hidden md:flex h-10 px-6 text-xs" onClick={scrollToJoin}>
                        {siteCopy.nav.cta}
                    </Button>
                </div>
            </header>

            {/* 2. HERO */}
            <section className="pt-48 pb-32 px-6 border-b border-zinc-900">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] mb-8 tracking-tight">
                            {siteCopy.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-textSecondary max-w-xl leading-relaxed mb-12 font-light">
                            {siteCopy.hero.subtitle}
                        </p>
                        <Button onClick={scrollToJoin} className="bg-brand-accent text-white px-10 py-5">
                            {siteCopy.hero.cta}
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 3. THE FOCUS (Updated ID) */}
            <section id="enfoque" className="py-32 px-6 bg-zinc-950 border-b border-zinc-900">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl mb-12 italic text-brand-textSecondary">
                        "{siteCopy.focus.title}"
                    </h2>
                    <div className="space-y-8 text-xl md:text-2xl leading-relaxed font-serif text-brand-text">
                        {siteCopy.focus.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. REGISTRATION (Updated ID, New JoinForm) */}
            <section id="acceso" className="py-32 px-6 border-b border-zinc-900">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-5xl md:text-6xl mb-6">{siteCopy.registration.title}</h2>
                        <p className="text-xl text-brand-textSecondary mb-8">{siteCopy.registration.subtitle}</p>
                        <div className="text-sm font-mono text-zinc-600 uppercase tracking-widest border-l-2 border-brand-accent pl-4">
                            {siteCopy.registration.disclaimer}
                        </div>
                    </div>

                    <div className="bg-zinc-900/10 p-1">
                        <JoinForm />
                    </div>
                </div>
            </section>

            {/* 5. FAQ (Updated ID) */}
            <section id="preguntas" className="py-24 px-6 border-b border-zinc-900">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="font-serif text-3xl md:text-4xl mb-4">{siteCopy.faq.title}</h2>
                        <div className="w-12 h-1 bg-brand-accent mb-6"></div>
                    </div>

                    <div className="md:col-span-8 space-y-12">
                        {siteCopy.faq.items.map((item, i) => (
                            <div key={i}>
                                <h4 className="text-2xl font-serif text-white mb-4">{item.q}</h4>
                                <p className="text-brand-textSecondary text-lg leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FOOTER */}
            <footer className="py-12 px-6 border-t border-zinc-900 text-brand-textSecondary text-sm">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="font-serif text-lg text-brand-text">SIN RODEOS</span>
                    <span>{siteCopy.footer.copyright}</span>
                    <div className="flex gap-6">
                        {siteCopy.footer.legal.map(l => (
                            <a key={l} href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors uppercase text-xs tracking-widest">{l}</a>
                        ))}
                    </div>
                </div>
            </footer>

        </main>
    )
}
