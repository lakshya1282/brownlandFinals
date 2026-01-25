"use client"

import { Coffee, Croissant, Utensils, GlassWater } from "lucide-react"

const CATEGORIES = [
    {
        id: "coffee",
        title: "Coffee",
        image: "/images/img-6405.jpeg",
        icon: Coffee,
        description: "Sip perfection with our artisanal blends, roasted to unlock deep, rich flavors.",
    },
    {
        id: "bakery",
        title: "Bakery",
        image: "/images/img-6400.jpeg",
        icon: Croissant,
        description: "Freshly baked pastries and treats that pair perfectly with your favorite brew.",
    },
    {
        id: "breakfast",
        title: "All Day Breakfast",
        image: "/images/img-6409.jpeg",
        icon: Utensils,
        description: "Hearty and healthy breakfast options served whenever you crave them.",
    },
    {
        id: "beverages",
        title: "Inspired Beverages",
        image: "/images/img-6415.jpeg",
        icon: GlassWater,
        description: "Refreshing handcrafted drinks, from iced delights to signature mocktails.",
    },
]

export function CategoryCardsSection() {
    return (
        <section className="py-10 bg-[#834024]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.id} className="group h-[300px] perspective-1000">
                            <div className="relative w-full h-full text-center transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end items-center pb-8 p-4">
                                        <cat.icon className="w-10 h-10 text-white mb-3" />
                                        <h3 className="text-white text-2xl font-bold uppercase tracking-wider font-['Bebas_Neue']">
                                            {cat.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-black">
                                    {/* Background Image (Same as Front) */}
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-center">
                                        <cat.icon className="w-10 h-10 text-[#d9bfa5] mb-4" />
                                        <h3 className="text-white text-2xl font-bold uppercase tracking-wider font-['Bebas_Neue'] mb-4">
                                            {cat.title}
                                        </h3>
                                        <p className="text-white/90 text-sm md:text-base leading-relaxed font-['Lato']">
                                            {cat.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </section>
    )
}
