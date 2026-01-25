"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('/BL-HERO.png')",
          filter: "brightness(0.7)"
        }}
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 max-w-5xl mx-auto text-center">
        <p
          className="text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase text-[#d9bfa5] mb-4 md:mb-6 font-medium"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >

        </p>

        <h1
          className="font-title font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brownland-light mb-6 md:mb-8"
          style={{
            textShadow: "2px 4px 10px rgba(0,0,0,0.3)"
          }}
        >
          <span className="block">Your Daily Dose Of Brownland</span>
        </h1>

        <p
          className="font-body font-medium text-sm sm:text-base md:text-lg lg:text-xl text-brownland-light/90 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10"
        >
          More than a café — it is a shared experience. Built on the idea of being for us, for everyone. Every cup crafted with passion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-8">
          <Link href="/menu">
            <Button
              size="lg"
              className="font-heading font-bold bg-brownland-light text-brownland hover:bg-brownland hover:text-brownland-light transition-all duration-300 text-sm sm:text-base md:text-lg px-12 py-7 rounded-full shadow-xl shadow-black/30 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              View Menu
            </Button>
          </Link>
          <Link href="/franchise">
            <Button
              size="lg"
              className="font-heading font-bold bg-brownland text-brownland-light hover:bg-brownland-light hover:text-brownland transition-all duration-300 text-sm sm:text-base md:text-lg px-12 py-7 rounded-full shadow-xl shadow-black/30 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}