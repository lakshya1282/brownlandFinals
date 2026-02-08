"use client"

import { useState, useEffect, useMemo } from "react"

export function SplashScreen() {
  // Check localStorage immediately on component mount (before first render)
  const isFirstVisit = useMemo(() => {
    if (typeof window === 'undefined') return false
    return !localStorage.getItem("brownland-visited")
  }, [])

  const [showSplash, setShowSplash] = useState(isFirstVisit)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (isFirstVisit) {
      // Mark as visited
      localStorage.setItem("brownland-visited", "true")

      // Start fade out after 2.5 seconds
      const fadeTimer = setTimeout(() => {
        setFadeOut(true)
      }, 2500)

      // Hide splash after fade animation
      const hideTimer = setTimeout(() => {
        setShowSplash(false)
      }, 3200)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [isFirstVisit])

  if (!showSplash) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#683419] flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      <div className="animate-[scaleIn_0.8s_ease-out_forwards] mb-8">
        <img
          src="/BL-LOGO.png"
          alt="Brownland Coffee Logo"
          className="h-64 w-auto md:h-80 object-contain drop-shadow-2xl brightness-110 bg-transparent"
        />
      </div>

      {/* Loading bar */}
      <div className="w-48 h-1 bg-[#fffaf3]/20 rounded-full overflow-hidden">
        <div className="h-full bg-[#fffaf3] animate-[loadingBar_2.5s_ease-in-out_forwards]" />
      </div>
    </div>
  )
}
