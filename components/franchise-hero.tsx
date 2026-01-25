"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function FranchiseHero() {
  const scrollToForm = () => {
    const element = document.querySelector("#franchise-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/coffee-beans-bg.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32 max-w-5xl mx-auto text-center">
        <p
          className="font-heading text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase text-brownland-light/80 mb-4 md:mb-6"
        >
          Franchise Opportunity
        </p>

        <h1
          className="font-title font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brownland-light mb-6 md:mb-8"
          style={{
            textShadow: "2px 4px 10px rgba(0,0,0,0.3)"
          }}
        >
          <span className="block">Brownland Franchise</span>
        </h1>

        <p
          className="font-body font-medium text-sm sm:text-base md:text-lg lg:text-xl text-brownland-light/90 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10"
        >
          Become a Member of BROWNLAND COFFEE Family with 0% Royalty!
        </p>

        <Button
          size="lg"
          onClick={scrollToForm}
          className="font-heading font-bold mt-6 sm:mt-8 bg-brownland-light text-brownland hover:bg-brownland hover:text-brownland-light transition-all duration-300 text-sm sm:text-base md:text-lg px-12 py-7 rounded-full shadow-xl shadow-black/30 uppercase tracking-widest"
        >
          Apply for Franchise
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="text-base sm:text-lg px-6 sm:px-8 border-white/30 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
        >
          <a href="tel:+916265470873">Call: +916265470873</a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
