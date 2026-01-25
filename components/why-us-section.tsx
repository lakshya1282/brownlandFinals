export function WhyUsSection() {
  const benefits = [
    {
      title: "0% Royalty",
      description: "Keep all your profits. No recurring royalty fees ever.",
      banner: "ZERO FEES",
      accent: "from-amber-500 to-orange-600",
    },
    {
      title: "Proven Brand",
      description: "Join a trusted name with a loyal customer base.",
      banner: "TRUSTED",
      accent: "from-yellow-500 to-amber-600",
    },
    {
      title: "Complete Support",
      description: "Training, marketing, and operational support included.",
      banner: "FULL SUPPORT",
      accent: "from-orange-500 to-red-500",
    },
    {
      title: "Low Investment",
      description: "Start your business with minimal capital requirements.",
      banner: "AFFORDABLE",
      accent: "from-emerald-500 to-teal-600",
    },
    {
      title: "Premium Products",
      description: "Signature recipes and high-quality ingredients.",
      banner: "QUALITY",
      accent: "from-rose-500 to-pink-600",
    },
    {
      title: "Fast Setup",
      description: "Quick onboarding and setup process to get you started.",
      banner: "QUICK START",
      accent: "from-blue-500 to-indigo-600",
    },
  ]

  return (
    <section id="why-us" className="py-20 md:py-24 px-4 bg-brownland-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-brownland/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brownland/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 aos-fade-up">
          <p className="font-heading text-brownland text-lg tracking-[0.4em] mb-4 uppercase opacity-80">
            Benefits
          </p>
          <h2 className="font-title font-bold text-4xl sm:text-5xl md:text-6xl text-brownland mb-4 md:mb-6">
            Why Choose <span className="text-brownland">Brownland</span>
          </h2>
          <div className="w-24 h-[1px] bg-brownland mx-auto mb-6 opacity-40" />
          <p className="font-body text-brownland max-w-2xl mx-auto leading-relaxed">
            Join a growing family of successful franchisees with unmatched support and zero royalty fees
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-brownland/20 rounded-lg p-6 hover:shadow-xl hover:border-brownland/40 transition-all duration-300 aos-zoom-in group relative overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Aesthetic Banner */}
              <div className="mb-4">
                <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${benefit.accent} shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase font-heading">
                    {benefit.banner}
                  </span>
                </div>
              </div>

              {/* Decorative line */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-brownland to-transparent mb-4 group-hover:w-20 transition-all duration-300" />

              <h3 className="text-xl font-bold text-brownland mb-2 font-heading tracking-wide">{benefit.title}</h3>
              <p className="text-brownland font-body">{benefit.description}</p>

              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className={`w-full h-full bg-gradient-to-br ${benefit.accent} rounded-bl-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
