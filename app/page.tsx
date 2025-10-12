
import Navbar from '@/components/Navbar'
import ProjectsCarousel from '@/components/ProjectsCarousel'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-10 md:py-14">
        <section id="projects" className="py-12 scroll-mt-20" data-top>
          <div className="grid grid-cols-[auto,1fr] gap-5 items-center">
            <img className="size-28 rounded-full border border-border" src="/profile-circle.png" alt="Photo de Mathis Ali" />
            <div>
              <h1 className="text-4xl font-bold">Étudiant ingénieur — Cloud & cybersécurité</h1>
              <p className="text-muted mt-2 max-w-prose">
                Je conçois des solutions fiables et performantes, avec un intérêt pour l'automatisation (Python), les réseaux, et l'hygiène sécurité (OWASP Top 10).
              </p>
              <div className="flex gap-4 mt-3">
                <a href="https://github.com/noob216" target="_blank" rel="noopener">GitHub</a>
                <a href="https://www.linkedin.com/in/mathis-ali/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="mailto:mathisalipro@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-10 md:py-14 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">Projets réalisés</h2>
        <p className="mt-2 text-slate-400">Ensemble de projets menés en contexte académique ou personnel.</p>
        {/* Carrousel */}
        <div className="mt-6">
          <ProjectsCarousel />
        </div>
      </section>

      <section id="xp" className="py-10 md:py-14 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">Expériences</h2>
          <div className="relative ml-7 pl-7">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border"></div>

            <div className="relative my-6">
              <div className="absolute -left-7 top-2 size-2.5 rounded-full bg-accent"></div>
              <div className="text-accent font-bold mb-2">2025</div>
              <h3 className="text-xl font-semibold">Stagiaire Automatisation & No-Code — InnovQube</h3>
              <p className="text-muted">Micro-services légers, intégrations API, n8n.</p>
              <ul className="list-disc ml-5">
                <li>Mise en place de workflows et durcissement (secrets, scopes, validation).</li>
                <li>Automatisation de processus RH avec traçabilité et contrôles d’accès.</li>
              </ul>
            </div>

            <div className="relative my-6">
              <div className="absolute -left-7 top-2 size-2.5 rounded-full bg-accent"></div>
              <div className="text-accent font-bold mb-2">2024</div>
              <h3 className="text-xl font-semibold">Assistant administratif & Suivi qualité — 3D SOFT</h3>
              <p className="text-muted">Traitement de données, reporting, support déploiement.</p>
              <ul className="list-disc ml-5">
                <li>Nettoyage et suivi de dossiers, coordination installation.</li>
                <li>Tableaux de bord (Webtraining) pour l’équipe.</li>
              </ul>
            </div>
          </div>
        </section>

      <section id="contact" className="py-10 md:py-14 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">Contact</h2>
          <p>Préférez l’email : <a href="mailto:mathisalipro@gmail.com">mathisalipro@gmail.com</a></p>
          <p>Ou via <a href="https://www.linkedin.com/in/mathis-ali/" target="_blank" rel="noopener">LinkedIn</a>.</p>
        </section>

        <footer className="py-10 border-t border-border text-muted text-sm">
          © 2025 Mathis Ali — Tous droits réservés.
        </footer>
      </main>
    </>
  )
}
