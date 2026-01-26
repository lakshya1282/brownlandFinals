import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AOSProvider } from "@/components/aos-provider"

export default function AboutPage() {
    return (
        <AOSProvider>
            <main className="min-h-screen bg-background">
                <Navbar />
                <AboutHero />
                <AboutContent />
                <Footer />
            </main>
        </AOSProvider>
    )
}
