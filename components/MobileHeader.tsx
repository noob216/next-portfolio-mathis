'use client'

import { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-800/40 bg-slate-950/70 backdrop-blur md:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Nom */}
          <span className="text-sm font-semibold text-slate-200">Mathis Ali</span>

          {/* Bouton menu (trois points) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
            aria-label="Ouvrir le menu"
          >
            <svg
              className="w-6 h-6 text-slate-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
