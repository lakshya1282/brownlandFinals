"use client"

export function OurCafeSection() {
  const cafeImages = [
    {
      src: "/images/img-6405.jpeg",
      alt: "Brownland Night Ambiance",
      caption: "Night Vibes",
    },
    {
      src: "/images/img-6409.jpeg",
      alt: "Brownland Cafe Exterior",
      caption: "Our Kiosk",
    },
    {
      src: "/images/img-6415.jpeg",
      alt: "Branded Coffee Cups Display",
      caption: "Signature Cups",
    },
    {
      src: "/images/img-6416.jpeg",
      alt: "Barista at Work",
      caption: "Crafted With Care",
    },
  ]

  return (
    <section id="gallery" className="py-16 bg-secondary/30">
      {/* Header */}
      <div className="px-4 max-w-7xl mx-auto mb-12">
        <div className="text-center aos-fade-up">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Cafe</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Where every corner tells a story and every cup sparks joy
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row h-auto md:h-[70vh] gap-4 md:gap-2 px-4 justify-center max-w-[1920px] mx-auto">
          {cafeImages.map((image, index) => (
            <div key={index} className="relative w-full md:flex-1 h-80 md:h-full group overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <p className="text-[#F6EEE5] font-bebas text-3xl tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
