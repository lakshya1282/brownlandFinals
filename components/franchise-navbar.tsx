"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function FranchiseNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const [showBackground, setShowBackground] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const sections = document.querySelectorAll("section")
      const navHeight = 120

      // Show background gradient when scrolled past 80% of viewport height
      const scrollThreshold = window.innerHeight * 0.8
      setShowBackground(currentScrollY > scrollThreshold)

      // Hide/Show navbar based on scroll direction
      if (currentScrollY <= 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)

      let currentBgIsDark = true

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()

        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          const bgColor = window.getComputedStyle(section).backgroundColor
          const rgb = bgColor.match(/\d+/g)
          if (rgb && rgb.length >= 3) {
            const r = parseInt(rgb[0])
            const g = parseInt(rgb[1])
            const b = parseInt(rgb[2])
            const brightness = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

            if (brightness > 180) {
              currentBgIsDark = false
            }
          }
        }
      })

      setIsDarkBackground(currentBgIsDark)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${showBackground
        ? "bg-gradient-to-b from-[#683419]/95 to-[#834024]/90 backdrop-blur-md"
        : "bg-transparent"
      }`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 py-2 md:py-3">

        {/* MOBILE LAYOUT - Logo left, menu right */}
        <div className="flex md:hidden items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={(isDarkBackground || showBackground) ? "/BL-WHITE-LOGO (1).png" : "/BL-LOGO.png"}
              alt="Brownland Coffee"
              className="h-12 sm:h-11 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 transition-colors duration-500 ${(isDarkBackground || showBackground) ? "text-white" : "text-[#683419]"
              }`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-8 w-8" aria-hidden="true" /> : <Menu className="h-8 w-8" aria-hidden="true" />}
          </button>
        </div>

        {/* DESKTOP LAYOUT - Left nav, Center logo, Right nav */}
        <div className="hidden md:flex items-center justify-between w-full">

          {/* LEFT NAV ITEMS - Home */}
          <div className="flex items-center gap-8 lg:gap-12 flex-1 justify-start">
            <Link
              href="/"
              className={`text-xs lg:text-sm uppercase tracking-[0.35em] font-medium transition-colors duration-500 relative group ${(isDarkBackground || showBackground) ? "text-white/90 hover:text-white" : "text-[#683419] hover:text-[#683419]/70"
                }`}
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Home
              <span className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${(isDarkBackground || showBackground) ? "bg-white" : "bg-[#683419]"
                }`} />
            </Link>
          </div>

          {/* CENTER LOGO */}
          <Link href="/" className="flex-shrink-0 mx-8 lg:mx-12">
            <img
              src={(isDarkBackground || showBackground) ? "/BL-WHITE-LOGO (1).png" : "/BL-LOGO.png"}
              alt="Brownland Coffee"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* RIGHT NAV ITEMS - Why Us, Apply Now */}
          <div className="flex items-center gap-8 lg:gap-12 flex-1 justify-end">
            <button
              onClick={() => scrollToSection("#why-us")}
              className={`text-xs lg:text-sm uppercase tracking-[0.35em] font-medium transition-colors duration-500 relative group text-left ${(isDarkBackground || showBackground) ? "text-white/90 hover:text-white" : "text-[#683419] hover:text-[#683419]/70"
                }`}
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Why Us
              <span className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${(isDarkBackground || showBackground) ? "bg-white" : "bg-[#683419]"
                }`} />
            </button>

            <button
              onClick={() => scrollToSection("#franchise-form")}
              className={`text-xs lg:text-sm uppercase tracking-[0.35em] font-medium transition-colors duration-500 relative group text-left ${(isDarkBackground || showBackground) ? "text-white/90 hover:text-white" : "text-[#683419] hover:text-[#683419]/70"
                }`}
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Apply Now
              <span className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${(isDarkBackground || showBackground) ? "bg-white" : "bg-[#683419]"
                }`} />
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 border-t py-14 flex flex-col items-center gap-10 animate-in fade-in slide-in-from-top-4 transition-colors duration-500 ${(isDarkBackground || showBackground)
            ? "bg-[#3b2213]/98 border-white/5 text-white"
            : "bg-[#FFFAF3]/98 border-[#683419]/5 text-[#683419]"
            }`}>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[13px] uppercase tracking-[0.45em] font-medium"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("#why-us")}
              className="text-[13px] uppercase tracking-[0.45em] font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("#franchise-form")}
              className="text-[13px] uppercase tracking-[0.45em] font-medium"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}