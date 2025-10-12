'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ProjectCard from './ProjectCard'
import { projects, type Project } from './projects.data'

export default function ProjectsCarousel() {
  const CARD_H = 'min-h-[340px] md:min-h-[360px]'

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
  })

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    if (!emblaApi) return

    const startAuto = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!isPausedRef.current) emblaApi.scrollNext()
      }, 2500)
    }

    if (emblaApi.scrollSnapList().length > 0) {
      startAuto()
    } else {
      emblaApi.on('init', startAuto)
    }

    emblaApi.on('pointerDown', () => { isPausedRef.current = true })
    emblaApi.on('pointerUp', () => { setTimeout(() => isPausedRef.current = false, 500) })

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [emblaApi])

  const onWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (!emblaApi) return
      const vertical = Math.abs(e.deltaY) > Math.abs(e.deltaX)
      if (vertical) {
        e.preventDefault()
        emblaApi[e.deltaY > 0 ? 'scrollNext' : 'scrollPrev']()
      }
    },
    [emblaApi]
  )

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-900 to-transparent" />
      <div ref={emblaRef} onWheel={onWheel} className="overflow-hidden">
        <div className="flex gap-4">
          {projects.map((p: Project, idx) => (
            <div key={'project-' + idx} className={'flex-none w-[320px] sm:w-[360px] ' + CARD_H}>
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}