"use client"

import { MenuSection } from "@/components/menu-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { useState } from "react"
import { AOSProvider } from "@/components/aos-provider"

export default function MenuPage() {
    return (
        <>
            <AOSProvider>
                <main className="min-h-screen bg-[#F6EEE5]">
                    <Navbar />
                    <div className="pt-20"> {/* Add padding for fixed navbar */}
                        <MenuSection />
                    </div>
                    <Footer />
                </main>
            </AOSProvider>
        </>
    )
}
