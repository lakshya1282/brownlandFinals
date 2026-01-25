"use client"

import { MapPin, Navigation, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const branches = [
  {
    id: 1,
    name: "Shailendra Nagar",
    address: "Shailendra Nagar, Raipur, Chhattisgarh 492001",
    mapUrl:
      "https://www.google.com/maps/place/Brownland+Coffee/@21.2430078,81.6670497,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd0064a4b2c3:0x926c56c5dc0b2d83!8m2!3d21.2430078!4d81.6696246!16s%2Fg%2F11xlcjtmnp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 21.2514, lng: 81.6296 },
  },
  {
    id: 2,
    name: "Colours Mall",
    address: "Colours mall, Amrapali Society, Pachpedi Naka, Raipur, Tikrapara, Chhattisgarh 492001",
    mapUrl:
      "https://www.google.com/maps/place/BROWNLAND+COFFEE/@21.2165171,81.6537386,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd9f06603401:0xa0364442653eb07e!8m2!3d21.2165171!4d81.6563135!16s%2Fg%2F11xn542tlm?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 21.2365, lng: 81.6337 },
  },
  {
    id: 3,
    name: "Devendra Nagar",
    address: "No 5, opp. gate, near police station, Sector 1, Pandri, Devendra Nagar, Raipur, Chhattisgarh 492004",
    mapUrl:
      "https://www.google.com/maps/place/Brownland+Coffee/@21.2576823,81.6415454,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd003f42456b:0x34691268097e5a5c!8m2!3d21.2576824!4d81.6464163!16s%2Fg%2F11wc30z3vk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 21.2288, lng: 81.6352 },
  },
  {
    id: 4,
    name: "Avanti Vihar",
    address: "L-5, Avanti Vihar, Shankar Nagar, Raipur, Chhattisgarh 492001",
    mapUrl: "https://www.google.com/maps/place/Brownland+Coffee/@21.2430078,81.6670497,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dd0064a4b2c3:0x926c56c5dc0b2d83!8m2!3d21.2430078!4d81.6696246!16s%2Fg%2F11xlcjtmnp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 21.2456, lng: 81.6198 },
  },
  {
    id: 5,
    name: "Tatibandh",
    address: "Hirapur Rd, opposite Singhania Sarovar Portico, Sarvodaya Nagar, Brownland, Tatibandh, Raipur, Chhattisgarh 492099",
    mapUrl: "https://www.google.com/maps/place/Brownland+Coffee/@21.2611911,81.5809391,17z/data=!3m1!4b1!4m6!3m5!1s0x3a28dff035731c93:0x65320b00d663b110!8m2!3d21.2611911!4d81.583514!16s%2Fg%2F11ydv73_yq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 21.2456, lng: 81.6198 },
  },
  {
    id: 6,
    name: "Samta Colony",
    address: "Samta Colony Main Rd, in front of New Bharat Sweets, near Agrasen Chowk, Santhoshi Nagar, Samta Colony, Raipur, Chhattisgarh 492001",
    mapUrl: "https://www.google.com/maps/place/Brownland+Coffee/@21.2462863,81.6204899,17z/data=!4m14!1m7!3m6!1s0x3a28dd002ea29e49:0xb2f8c597d7f0115c!2sBrownland+Coffee!8m2!3d21.2462813!4d81.6230648!16s%2Fg%2F11ywdb5lct!3m5!1s0x3a28dd002ea29e49:0xb2f8c597d7f0115c!8m2!3d21.2462813!4d81.6230648!16s%2Fg%2F11ywdb5lct?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    coords: { lat: 21.2462813, lng: 81.6230648 },
  },
  {
    id: 7,
    name: "Mowa (Opening Soon)",
    address: " ",
    mapUrl: "",
    coords: { lat: 21.2456, lng: 81.6198 },
  },
]

export function BranchesSection() {
  return (
    <section id="branches" className="pt-32 pb-24 px-4 md:px-[5vw] bg-[#F6EEE5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 aos-fade-up">
          <p className="font-['Bebas_Neue'] text-[#834024] text-xl tracking-[0.4em] mb-4 uppercase opacity-80">
            Find Us
          </p>
          <h2 className="font-['Awesome_Serif'] italic text-[12vw] sm:text-7xl md:text-8xl text-[#834024] mb-6 leading-none">
            Our Branches
          </h2>
          <div className="w-24 h-[1px] bg-[#834024] mx-auto mb-6 opacity-40" />
          <p className="font-['Lato'] font-bold text-[#834024] max-w-xl mx-auto opacity-90 leading-relaxed text-[4vw] sm:text-base">
            Visit any of our 7 locations across Raipur for the perfect cup of coffee
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className={`bg-white/70 backdrop-blur-xl rounded-none p-6 border border-[#834024]/10 hover:border-[#834024] transition-all duration-300 group aos-fade-up shadow-md hover:shadow-2xl hover:-translate-y-1 ${index === 6 ? 'opacity-60 pointer-events-none' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#834024]/10 p-3 rounded-full group-hover:bg-[#834024]/20 transition-colors shrink-0">
                  <MapPin className="h-5 w-5 text-[#834024]" />
                </div>
                <h3 className="font-['Bebas_Neue'] text-xl tracking-wide text-[#834024] leading-tight">{branch.name}</h3>
              </div>
              <p className="font-['Lato'] text-[#834024]/80 text-sm mb-4 leading-relaxed min-h-[60px]">{branch.address}</p>
              {index !== 6 && (
                <div className="flex items-center gap-2 text-[#834024]/60 text-xs mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="font-['Lato']">9:00 AM - 10:00 PM</span>
                </div>
              )}
              <Button
                asChild={index !== 6}
                variant="outline"
                size="sm"
                className="w-full border-2 border-[#834024] text-[#834024] hover:bg-[#834024]/10 bg-transparent rounded-none font-['Bebas_Neue'] tracking-wider"
                disabled={index === 6}
              >
                {index === 6 ? (
                  <span>
                    <Navigation className="h-4 w-4 mr-2 inline" />
                    Coming Soon...
                  </span>
                ) : (
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="rounded-none overflow-hidden border border-[#834024]/10 aos-fade-up shadow-2xl">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1SIV5LRhYpL4sR_rrrdWuo4y8D_tWqUg&ehbc=2E312F&noprof=1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brownland Coffee Locations in Raipur"
            className="grayscale hover:grayscale-0 transition-all duration-500 min-h-[300px]"
          />
        </div>

        {/* Order Online CTA */}
        <div className="mt-12 text-center aos-fade-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/60 backdrop-blur-lg rounded-none p-8 border border-[#834024]/15 shadow-lg w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-[#834024] mb-1">Can't visit us?</h3>
              <p className="font-['Lato'] text-[#834024]/80 text-sm">Order your favorite coffee online!</p>
            </div>
            <Button asChild size="lg" className="bg-[#E23744] text-white hover:bg-[#E23744]/90 rounded-none font-['Bebas_Neue'] tracking-wider px-8 w-full sm:w-auto">
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
