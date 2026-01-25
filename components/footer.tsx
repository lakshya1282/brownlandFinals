"use client"

import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#683419] border-t border-[#fffaf3]/10 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="aos-fade-up">
            <div className="mb-6 cursor-pointer" onClick={scrollToTop} title="Back to Top">
              <img src="/BL-WHITE-LOGO (1).png" alt="Brownland Coffee" className="h-24 w-auto object-contain brightness-110 drop-shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="text-[#fffaf3]/80 leading-relaxed font-['Lato']">
             Think  coffee, Think Brownland!. 
            </p>
          </div>

          {/* Hours */}
          <div className="aos-fade-up" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold text-[#fffaf3] mb-4 flex items-center gap-2 font-['Bebas_Neue'] tracking-wide">
              <Clock className="h-5 w-5 text-[#fffaf3]" />
              Hours
            </h3>
            <div className="space-y-2 text-[#fffaf3]/80 font-['Lato']">
              <p>Monday - Saturday</p>
              <p className="text-[#fffaf3] font-medium">9:00 AM - 10:00 PM</p>
              <p className="mt-4">Sunday</p>
              <p className="text-[#fffaf3] font-medium">10:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div className="aos-fade-up" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-[#fffaf3] mb-4 font-['Bebas_Neue'] tracking-wide">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="#branches"
                className="flex items-center gap-3 text-[#fffaf3]/80 hover:text-[#fffaf3] transition-colors font-['Lato']"
              >
                <MapPin className="h-5 w-5 text-[#fffaf3]" />
                <span>Find us on Google Maps</span>
              </a>
              <a
                href="https://www.instagram.com/brownlandcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#fffaf3]/80 hover:text-[#fffaf3] transition-colors font-['Lato']"
              >
                <Instagram className="h-5 w-5 text-[#fffaf3]" />
                <span>@brownlandcoffee</span>
              </a>
              <a
                href="tel:+916265470873"
                className="flex items-center gap-3 text-[#fffaf3]/80 hover:text-[#fffaf3] transition-colors font-['Lato']"
              >
                <Phone className="h-5 w-5 text-[#fffaf3]" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#fffaf3]/10 text-center">
          <p className="text-[#fffaf3]/70 text-sm font-['Lato']">© 2025 Brownland Coffee. All rights reserved. Made with love.</p>
        </div>
      </div>
    </footer>
  )
}
