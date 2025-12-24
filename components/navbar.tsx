"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, linkName: string) => {
    e.preventDefault()
    setActiveLink(linkName)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "The Story", href: "#about", id: "story" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "Franchise", href: "/franchise", id: "franchise", isExternal: true },
    { name: "Contact", href: "#dishes", id: "aboutus" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
           ? "bg-gradient-to-b from-background via-background/95 to-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* LEFTMOST: Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <img 
              src="/BL-WHITE-LOGO (1).png" 
              alt="Brownland Coffee" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
            />
          </div>

          {/* RIGHTMOST: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-[10px] lg:text-xs uppercase tracking-[0.3em] font-light text-[#f5e9dd] hover:text-white transition-colors duration-300"
                  onClick={() => setActiveLink(item.id)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`text-[10px] lg:text-xs uppercase tracking-[0.3em] font-light relative group transition-colors duration-300 ${
                    activeLink === item.id 
                      ? "text-white font-normal" 
                      : "text-[#f5e9dd]/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {item.name}
                  {/* The underline color matches the coffee cream aesthetic */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d9bfa5] transition-all duration-500 group-hover:w-full" />
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#3b2213]/95 backdrop-blur-xl border-t border-white/5 py-10 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top-4">
            {navItems.map((item) => (
               <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if(!item.isExternal) handleNavClick(e, item.href, item.id)
                }}
                className="text-[11px] uppercase tracking-[0.4em] text-[#f5e9dd] font-light"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}