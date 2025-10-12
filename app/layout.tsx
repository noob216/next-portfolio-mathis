
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mathis Ali — Portfolio',
  description: 'Portfolio de Mathis Ali — Étudiant ingénieur (Cloud & Cybersécurité).'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 text-[17px] md:text-[18px]">
        <main className="mx-auto max-w-6xl px-4 md:px-6">{children}</main>
      </body>
    </html>
  )
}

