"use client"

import { useRef } from "react"

export function AboutHero() {
    const containerRef = useRef<HTMLElement>(null)

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-black">
            <div className="relative h-full w-full overflow-hidden flex items-center">
                <div
                    className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-no-repeat z-0 scale-105"
                    style={{
                        backgroundImage: 'url(/about/about.png)',
                        backgroundPosition: 'center 40%'
                    }}
                />
            </div>
        </section>
    )
}
