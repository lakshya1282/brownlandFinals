"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-background via-background/95 to-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="Brownland Coffee" className="h-12 w-auto object-contain" />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Brownland
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "#gallery")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <a
              href="#dishes"
              onClick={(e) => handleNavClick(e, "#dishes")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Dishes
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "#menu")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Menu
            </a>
            <Link href="/franchise" className="text-foreground/80 hover:text-primary transition-colors">
              Franchise
            </Link>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-4 px-2">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
              >
                About
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, "#gallery")}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Gallery
              </a>
              <a
                href="#dishes"
                onClick={(e) => handleNavClick(e, "#dishes")}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Dishes
              </a>
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, "#menu")}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Menu
              </a>
              <Link
                href="/franchise"
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Franchise
              </Link>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Contact Us</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
