export function AboutCafeSection() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="aos-fade-right">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Our Story</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">About Brownland Coffee</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Brownland Coffee is more than just a cafe - it's a sanctuary for coffee lovers. Since 2024, we've been
              crafting exceptional beverages and creating moments that matter. Our signature drinks are made with
              premium ingredients and a whole lot of love.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From our iconic Brownlano cold coffee to our indulgent thick shakes, every sip tells a story. Whether
              you're starting your day, taking a break, or catching up with friends, Brownland is your perfect
              companion.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center aos-zoom-in" style={{ transitionDelay: "0.1s" }}>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground text-sm">Menu Items</p>
              </div>
              <div className="text-center aos-zoom-in" style={{ transitionDelay: "0.2s" }}>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="text-center aos-zoom-in" style={{ transitionDelay: "0.3s" }}>
                <p className="text-3xl font-bold text-primary">5★</p>
                <p className="text-muted-foreground text-sm">Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aos-fade-left">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/slideshow.jpg"
                alt="Brownland Coffee Kiosk - Since 2000"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-semibold">Since 2000 - Where every cup tells a story</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
