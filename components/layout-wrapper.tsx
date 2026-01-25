"use client"

import { useState } from "react"
import { SplashScreen } from "@/components/splash-screen"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true)

    return (
        <>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            {children}
        </>
    )
}
