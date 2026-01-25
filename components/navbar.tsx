"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"


import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  const isMenuPage = pathname === "/menu"

  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const [showBackground, setShowBackground] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  useEffect(() => {
    let currentMouseY = 0

    const updateVisibility = () => {
      const isAtTop = window.scrollY < 20
      const isHoveringTop = currentMouseY < 120
      setIsVisible(isAtTop || isHoveringTop)
    }

    const handleMouseMove = (e: MouseEvent) => {
      currentMouseY = e.clientY
      updateVisibility()
    }

    const handleScroll = () => {
      updateVisibility()

      // Show background gradient when scrolled past 80% of viewport height
      const scrollThreshold = window.innerHeight * 0.8
      setShowBackground(window.scrollY > scrollThreshold)

      if (isMenuPage) {
        setIsDarkBackground(true) // Always dark bg (white text) on menu page
        return
      }

      const sections = document.querySelectorAll("section")
      // Increased detection height to match the larger navbar
      const navHeight = 120

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

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMenuPage])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, linkName: string) => {
    // If it's a direct hash link (on same page)
    if (href.startsWith("#")) {
      e.preventDefault()
      setActiveLink(linkName)
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
    // If it's a root-relative hash link (e.g. /#about) and we are on home page
    else if (href.startsWith("/#") && typeof window !== 'undefined' && window.location.pathname === "/") {
      e.preventDefault()
      const targetId = href.substring(2) // remove /#
      const element = document.querySelector(`#${targetId}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
    // Otherwise let default navigation happen
  }

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "The Story", href: "/#about", id: "story" },
    { name: "Menu", href: "/menu", id: "menu" },
    { name: "Franchise", href: "/franchise", id: "franchise" },
    { name: "Contact", href: "/#contact", id: "aboutus" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isMenuPage
        ? "bg-[#683419]"
        : showBackground
          ? "bg-gradient-to-b from-[#683419]/95 to-[#683419]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}>
      {/* Increased vertical padding from py-4 to py-6 or py-8 */}
      <div className="w-full px-6 sm:px-8 lg:px-16 py-2 md:py-3">

        {/* MOBILE LAYOUT - Logo left, menu right */}
        <div className="flex md:hidden items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <img
              src={(isDarkBackground || showBackground) ? "/BL-WHITE-LOGO (1).png" : "/BL-LOGO.png"}
              alt="Brownland Coffee"
              className="h-12 sm:h-11 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className={`p-3 transition-colors duration-500 ${(isDarkBackground || showBackground) ? "text-white" : "text-[#683419]"
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* DESKTOP LAYOUT - Left nav, Center logo, Right nav */}
        <div className="hidden md:flex items-center justify-between w-full">

          {/* LEFT NAV ITEMS */}
          <div className="flex items-center gap-8 lg:gap-12 flex-1 justify-start">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`text-sm lg:text-base uppercase tracking-[0.35em] font-medium relative group transition-colors duration-500 ${(isDarkBackground || showBackground)
                  ? "text-white/90 hover:text-white"
                  : "text-[#683419] hover:text-[#683419]/70"
                  }`}
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${(isDarkBackground || showBackground) ? "bg-white" : "bg-[#683419]"
                  }`} />
              </Link>
            ))}
          </div>

          {/* CENTER LOGO */}
          <Link href="/" className="flex-shrink-0 cursor-pointer mx-8 lg:mx-12">
            <img
              src={(isDarkBackground || showBackground) ? "/BL-WHITE-LOGO (1).png" : "/BL-LOGO.png"}
              alt="Brownland Coffee"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-500 hover:scale-105"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4)) brightness(1.1)' }}
            />
          </Link>

          {/* RIGHT NAV ITEMS */}
          <div className="flex items-center gap-8 lg:gap-12 flex-1 justify-end">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`text-sm lg:text-base uppercase tracking-[0.35em] font-medium relative group transition-colors duration-500 ${(isDarkBackground || showBackground)
                  ? "text-white/90 hover:text-white"
                  : "text-[#683419] hover:text-[#683419]/70"
                  }`}
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${(isDarkBackground || showBackground) ? "bg-white" : "bg-[#683419]"
                  }`} />
              </Link>
            ))}
          </div>

        </div>

        {/* MOBILE MENU: Increased font and padding */}
        {isOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 border-t py-14 flex flex-col items-center gap-10 animate-in fade-in slide-in-from-top-4 transition-colors duration-500 ${(isDarkBackground || showBackground)
            ? "bg-[#683419]/98 border-white/5 text-white"
            : "bg-[#FFFAF3]/98 border-[#683419]/5 text-[#683419]"
            }`}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href, item.id)
                }}
                className="text-[13px] uppercase tracking-[0.45em] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}