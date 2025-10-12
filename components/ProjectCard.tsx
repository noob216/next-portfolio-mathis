import React from 'react'
import type { Project } from './projects.data'

type P = {
  title: string
  year: string
  stack: string
  bullets: string[]
  codeUrl?: string
}
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="h-full flex flex-col justify-between rounded-2xl bg-slate-900/40 border border-slate-700/40 p-5 text-slate-100">
      <div className="space-y-1">
        <h3 className="text-xl font-semibold leading-snug break-words">
          {p.title}
        </h3>
        <p className="text-sm text-slate-400">{p.meta}</p>
        <ul className="mt-3 space-y-1 text-[0.95rem] leading-relaxed">
          {p.bullets.map((b, i) => (
            <li key={i} className="list-disc ml-5 break-words">{b}</li>
          ))}
        </ul>
      </div>

      {p.href && (
        <a
          href={p.href}
          target="_blank"
          className="mt-4 self-end text-sm font-medium text-sky-300 hover:underline"
        >
          Code
        </a>
      )}
    </div>
  )
}
