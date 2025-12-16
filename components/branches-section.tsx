"use client"

import { MapPin, Navigation, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const branches = [
  {
    id: 1,
    name: "Shailendra Nagar",
    address: "Behind Zudio, Old Rajendra Nagar, Shailendra Nagar, Raipur, Chhattisgarh 492001",
    mapUrl:
      "https://maps.google.com/?q=Behind+Zudio,+Old+Rajendra+Nagar,+Shailendra+Nagar,+Raipur,+Chhattisgarh+492001",
    coords: { lat: 21.2514, lng: 81.6296 },
  },
  {
    id: 2,
    name: "Colours Mall",
    address: "Colours mall, Amrapali Society, Pachpedi Naka, Raipur, Tikrapara, Chhattisgarh 492001",
    mapUrl:
      "https://maps.google.com/?q=Colours+mall,+Amrapali+Society,+Pachpedi+Naka,+Raipur,+Tikrapara,+Chhattisgarh+492001",
    coords: { lat: 21.2365, lng: 81.6337 },
  },
  {
    id: 3,
    name: "Pandri",
    address: "No 5, opp. gate, near police station, Sector 1, Pandri, Devendra Nagar, Raipur, Chhattisgarh 492004",
    mapUrl:
      "https://maps.google.com/?q=No+5,+opp.+gate,+near+police+station,+Sector+1,+Pandri,+Devendra+Nagar,+Raipur,+Chhattisgarh+492004",
    coords: { lat: 21.2288, lng: 81.6352 },
  },
  {
    id: 4,
    name: "Shankar Nagar",
    address: "L-5, Avanti Vihar, Shankar Nagar, Raipur, Chhattisgarh 492001",
    mapUrl: "https://maps.google.com/?q=L-5,+Avanti+Vihar,+Shankar+Nagar,+Raipur,+Chhattisgarh+492001",
    coords: { lat: 21.2456, lng: 81.6198 },
  },
]

export function BranchesSection() {
  return (
    <section id="branches" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 aos-fade-up">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Find Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Branches</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visit any of our 4 locations across Raipur for the perfect cup of coffee
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group aos-fade-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-full group-hover:bg-primary/30 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{branch.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{branch.address}</p>
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
                <Clock className="h-4 w-4" />
                <span>9:00 AM - 10:00 PM</span>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
              >
                <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-border aos-fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59524.04697404!2d81.5878!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde17cb25c31%3A0x9e5f0f9e8b8b8b8b!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brownland Coffee Locations in Raipur"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Order Online CTA */}
        <div className="mt-12 text-center aos-fade-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#E23744]/10 to-primary/10 rounded-2xl p-6 border border-[#E23744]/20">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">Can't visit us?</h3>
              <p className="text-muted-foreground text-sm">Order your favorite coffee online!</p>
            </div>
            <Button asChild size="lg" className="bg-[#E23744] text-white hover:bg-[#E23744]/90">
              <a
                href="https://www.zomato.com/raipur/brownland-coffee-1-civil-lines"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Zomato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
