"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutCafeSection } from "@/components/about-cafe-section"
// import HappyCustomersSection from "@/components/customer";
import { InstagramSection } from "@/components/instagram-section"
import { BranchesSection } from "@/components/branches-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { AOSProvider } from "@/components/aos-provider"
// import HeroBanner from '@/components/cont';
import BestSellers from '@/components/best';

import CoffeeQualitySection from '@/components/quality';
export default function Home() {
  return (
    <>
      <AOSProvider>
        <main className="min-h-screen bg-background">
          <Navbar />
          <HeroSection />
          <AboutCafeSection />
          <BestSellers />
          <InstagramSection />
          {/* <CoffeeQualitySection/> */}
          {/* <HeroBanner /> */}
          {/* <HappyCustomersSection/> */}

          <BranchesSection />
          <ContactSection />
          <Footer />

        </main>
      </AOSProvider>
    </>
  )
}
