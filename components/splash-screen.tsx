"use client"

import { useState, useEffect } from "react"

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 2500)

    // Complete and unmount after fade animation
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      <div className="animate-[scaleIn_0.8s_ease-out_forwards] mb-8">
        <img src="/BL-LOGO.png" alt="Brownland Coffee Logo" className="h-64 w-auto md:h-80 object-contain drop-shadow-2xl brightness-110 bg-transparent" />
      </div>

      {/* Tagline with typewriter effect */}
      <div className="overflow-hidden">
        <p className="text-primary font-sans text-xl md:text-2xl font-bold animate-[fadeSlideUp_0.8s_ease-out_0.5s_forwards] opacity-0">

        </p>
      </div>

      {/* Loading dots */}
      {/* Loading dots removed */}
    </div>
  )
}
