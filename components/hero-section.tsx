"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"

const heroImages = ["/images/img-6396.jpeg", "/images/ss1.jpg", "/images/ss3.jpg", "/images/ss4.jpg"]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
        <p className="text-primary text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 font-medium aos-fade-up">
          Est. 2024
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight aos-fade-up"
          style={{ transitionDelay: "0.1s" }}
        >
          Brownland
          <span className="block text-primary mt-2">Coffee</span>
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed aos-fade-up"
          style={{ transitionDelay: "0.2s" }}
        >
          Bad Day? Coffee. Good Day? Coffee.
        </p>
        <p
          className="text-sm sm:text-base md:text-lg text-white/60 mb-6 sm:mb-8 max-w-xl mx-auto aos-fade-up"
          style={{ transitionDelay: "0.3s" }}
        >
          Stressed? Coffee. Happy? Coffee. Inspired? Coffee. Coffee? Coffee.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center aos-fade-up"
          style={{ transitionDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
          >
            Explore Menu
          </Button>
          <Button
            size="lg"
            asChild
            className="bg-[#E23744] text-white hover:bg-[#E23744]/90 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
          >
            <a
              href="https://www.zomato.com/raipur/brownland-coffee-1-civil-lines"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on Zomato
            </a>
          </Button>
        </div>
        <div className="mt-4 sm:mt-6 aos-fade-up" style={{ transitionDelay: "0.5s" }}>
          <Link href="/franchise">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary/80 text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base px-4 sm:px-6 group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Own a Franchise
                <span className="hidden xs:inline">|</span>
                <span className="hidden xs:inline">0% Royalty</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
