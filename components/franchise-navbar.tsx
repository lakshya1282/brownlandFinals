"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-background via-background/95 to-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="Brownland Coffee" className="h-12 w-auto object-contain" />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Brownland
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <button
              onClick={() => scrollToSection("#why-us")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button onClick={() => scrollToSection("#franchise-form")}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Apply Now</Button>
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors px-4"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("#why-us")}
                className="text-foreground/80 hover:text-primary transition-colors text-left px-4"
              >
                Why Us
              </button>
              <button onClick={() => scrollToSection("#franchise-form")} className="px-4">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Apply Now</Button>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
