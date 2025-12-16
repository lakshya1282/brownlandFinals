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
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
        <p className="text-primary text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 font-medium aos-fade-up">
          More Than Coffee
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight aos-fade-up"
          style={{ transitionDelay: "0.1s" }}
        >
          Brownland
          <span className="block text-primary mt-2">Franchise Opportunity</span>
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed aos-fade-up"
          style={{ transitionDelay: "0.2s" }}
        >
          Become a Member of BROWNLAND COFFEE Family
        </p>
        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8 aos-fade-up"
          style={{ transitionDelay: "0.3s" }}
        >
          With 0% Royalty!
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center aos-fade-up"
          style={{ transitionDelay: "0.4s" }}
        >
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
          >
            Apply for Franchise
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base sm:text-lg px-6 sm:px-8 border-white/30 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
          >
            <a href="tel:+916265470873">Call: +91 6265470873</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
