'use client'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/40 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        {/* 3 zones : gauche (nom) / centre (onglets) / droite (CV) */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-14">
          {/* Gauche : nom */}
          <div className="justify-self-start text-sm font-semibold text-slate-200">
            Mathis Ali
          </div>

          {/* Centre : onglets */}
          <ul className="flex items-center gap-6 justify-self-center">
            <li><a href="#projects" className="text-sky-400 hover:text-sky-300">Projets</a></li>
            <li><a href="#xp" className="text-sky-400 hover:text-sky-300">Expériences</a></li>
            <li><a href="#contact" className="text-sky-400 hover:text-sky-300">Contact</a></li>
          </ul>

          {/* Droite : bouton CV */}
          <div className="justify-self-end">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center rounded-full border border-slate-700/60 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800/50"
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
