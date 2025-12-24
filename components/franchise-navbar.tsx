"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function FranchiseNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

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
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/BL-WHITE-LOGO (1).png" 
              alt="Brownland Coffee" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300" 
            />
          </Link>

          {/* RIGHTMOST: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link 
              href="/" 
              className="text-[10px] lg:text-xs uppercase tracking-[0.3em] font-light text-[#f5e9dd] hover:text-white transition-all duration-300 relative group"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d9bfa5] transition-all duration-500 group-hover:w-full" />
            </Link>
            
            <button
              onClick={() => scrollToSection("#why-us")}
              className="text-[10px] lg:text-xs uppercase tracking-[0.3em] font-light text-[#f5e9dd] hover:text-white transition-all duration-300 relative group text-left"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Why Us
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d9bfa5] transition-all duration-500 group-hover:w-full" />
            </button>

            {/* Apply Now - Styled as a Nav Link */}
            <button
              onClick={() => scrollToSection("#franchise-form")}
              className="text-[10px] lg:text-xs uppercase tracking-[0.3em] font-light text-[#f5e9dd] hover:text-white transition-all duration-300 relative group text-left"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Apply Now
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d9bfa5] transition-all duration-500 group-hover:w-full" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-white ml-auto"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#3b2213]/95 backdrop-blur-xl border-t border-white/5 py-10 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[11px] uppercase tracking-[0.4em] text-[#f5e9dd] font-light"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("#why-us")}
              className="text-[11px] uppercase tracking-[0.4em] text-[#f5e9dd] font-light"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("#franchise-form")}
              className="text-[11px] uppercase tracking-[0.4em] text-[#f5e9dd] font-light"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}