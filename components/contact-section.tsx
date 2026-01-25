"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "916265470873"
    const message = `Hello! I'm ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")

    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 pb-32 px-4 md:px-[5vw] bg-white relative overflow-hidden">
      {/* Self-contained font imports */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @font-face {
          font-family: 'Awesome_Serif';
          src: url('/fonts/AwesomeSerif-Italic.woff2') format('woff2');
          font-style: italic;
        }
      `}} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 aos-fade-up">
          <p className="font-['Bebas_Neue'] text-[#834024] text-xl tracking-[0.4em] mb-4 uppercase opacity-80">
            Get In Touch
          </p>
          <h2 className="font-['Awesome_Serif'] italic text-[12vw] sm:text-7xl md:text-8xl text-[#834024] mb-6 leading-none">
            Contact Us
          </h2>
          <div className="w-24 h-[1px] bg-[#834024] mx-auto mb-6 opacity-40" />
          <p className="font-['Lato'] font-bold text-[#834024] max-w-xl mx-auto opacity-90 leading-relaxed text-[4vw] sm:text-base">
            Have a question or want to share your experience? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-none p-6 md:p-8 border border-[#834024]/10 aos-fade-right shadow-lg">
            <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wide text-[#834024] mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/50 border-[#834024]/20 text-[#834024] placeholder:text-[#834024]/50 font-['Lato'] rounded-none focus:border-[#834024]/50 h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/50 border-[#834024]/20 text-[#834024] placeholder:text-[#834024]/50 font-['Lato'] rounded-none focus:border-[#834024]/50 h-12"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/50 border-[#834024]/20 text-[#834024] placeholder:text-[#834024]/50 font-['Lato'] rounded-none min-h-[120px] focus:border-[#834024]/50"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#834024] text-[#F6EEE5] hover:bg-[#834024]/90 rounded-none font-['Bebas_Neue'] tracking-wider text-lg py-6 shadow-md transition-transform active:scale-[0.98]">
                <Send className="h-4 w-4 mr-2" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6 aos-fade-left">
            {[
              { icon: MapPin, title: "Visit Us", content: "Find us on Google Maps", link: "#branches", linkText: "Get Directions" },
              { icon: Clock, title: "Opening Hours", content: "Mon - Sat: 9:00 AM - 10:00 PM\nSunday: 10:00 AM - 9:00 PM" },
              { icon: Phone, title: "Call Us", content: "For orders and inquiries", link: "tel:+916265470873", linkText: "+91 6265470873" },
              { icon: Instagram, title: "Follow Us", content: "@brownlandcoffee", link: "https://www.instagram.com/brownlandcoffee", linkText: "View on Instagram", external: true }
            ].map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-xl rounded-none p-5 md:p-6 border border-[#834024]/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#834024]/10 p-3 rounded-full shrink-0">
                    <item.icon className="h-5 w-5 md:h-6 md:w-6 text-[#834024]" />
                  </div>
                  <div>
                    <h4 className="font-['Bebas_Neue'] text-lg md:text-xl tracking-wide text-[#834024] mb-1">{item.title}</h4>
                    {item.content.split('\n').map((line, i) => (
                      <p key={i} className="font-['Lato'] text-[#834024]/80 text-sm md:text-base">{line}</p>
                    ))}
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="font-['Lato'] text-[#834024] hover:underline text-sm mt-2 inline-block font-bold"
                      >
                        {item.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Section Divider */}
        <div className="mt-20 flex items-center justify-center">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#834024]/30 to-[#834024]/30"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#834024]/40"></div>
              <div className="w-2 h-2 rounded-full bg-[#834024]/60"></div>
              <div className="w-2 h-2 rounded-full bg-[#834024]/40"></div>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#834024]/30 to-[#834024]/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
