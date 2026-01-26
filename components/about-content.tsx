"use client"

import { motion } from "framer-motion"

export function AboutContent() {
    const features = [
        {
            title: "0% Royalty",
            description: "Keep 100% of your generated profits. We believe in your success, which is why there are no recurring royalty fees—ever."
        },
        {
            title: "Proven Brand",
            description: "Step into a business with an established name and a loyal, ever-growing customer base in Raipur."
        },
        {
            title: "Complete Support",
            description: "You are never alone. We provide comprehensive training, marketing strategies, and operational support to ensure your outlet thrives."
        },
        {
            title: "Low Investment",
            description: "Start your entrepreneurial journey with minimal capital requirements, making it one of the most accessible premium cafe models."
        },
        {
            title: "Premium Products",
            description: "Gain access to our signature recipes and high-quality ingredients that have made us a city favorite."
        },
        {
            title: "Fast Setup",
            description: "Our streamlined onboarding and setup process gets your doors open and your coffee brewing in record time."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
        }
    }

    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFFAF3] text-[#683419]">
            <div className="max-w-[1400px] mx-auto space-y-32">

                {/* Section 1: The Chronicle - Typographic Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <h2 className="text-7xl md:text-8xl lg:text-9xl font-['Bebas_Neue'] leading-[0.85] tracking-tight">
                            THE<br />
                            BROWNLAND<br />
                            CHRONICLE
                        </h2>
                        <div className="h-[2px] w-24 bg-[#683419] mt-8"></div>
                    </motion.div>

                    <div className="lg:col-span-7 space-y-8 pt-4">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="font-['Lato'] text-xl md:text-2xl leading-relaxed font-light first-letter:float-left first-letter:text-7xl first-letter:font-['Bebas_Neue'] first-letter:mr-4 first-letter:mt-[-10px] first-letter:text-[#683419]"
                        >
                            In 2020, BROWNLAND was born in the heart of Shailendra Nagar, Raipur, during a time when the world was searching for comfort and connection. We noticed a gap in the local coffee scene: it was often a choice between impersonal, overpriced global chains or local spots that lacked a premium, modern edge. We set out to create something refreshingly different—a sanctuary that was authentically homegrown yet globally aspirational.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="font-['Lato'] text-lg text-[#683419]/80 leading-relaxed pl-8 border-l-[1px] border-[#683419]/30"
                        >
                            As our community grew, so did our footprint. We realized that the "BROWNLAND vibe"—one of high-quality artisanal standards and zero pretension—needed to be accessible to every corner of the city. We strategically expanded across Raipur’s most iconic neighborhoods, establishing thriving branches in Colours Mall, Devendra Nagar, Avanti Vihar, Tatibandh, and Samta Colony. Each location is more than just a cafe; it is a community hub.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="font-['Lato'] text-lg leading-relaxed"
                        >
                            Today, BROWNLAND stands as a testament to Raipur’s evolving hospitality landscape. With six successful branches currently in operation and our seventh location now brewing in Mowa, we are far from finished. We are not just building a coffee chain; we are cultivating a culture that values its roots while daring to reimagine the modern cafe experience.
                        </motion.p>
                    </div>
                </div>

                {/* Section 2: Why Choose Brownland - Sharp Geometry Grid */}
                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border-t-[1px] border-[#683419] pt-12"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                            <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] leading-none">
                                JOIN THE<br />REVOLUTION
                            </h2>
                            <p className="font-['Lato'] text-xl max-w-md text-right md:text-right w-full md:w-auto">
                                We invite aspiring entrepreneurs to join a family of successful franchisees with unmatched support.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l-[1px] border-t-[1px] border-[#683419]"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group border-b-[1px] border-r-[1px] border-[#683419] p-10 md:p-12 hover:bg-[#683419] hover:text-[#FFFAF3] transition-colors duration-500 cursor-default relative overflow-hidden"
                            >
                                <span className="block font-['Bebas_Neue'] text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {(index + 1).toString().padStart(2, '0')}.
                                </span>
                                <h3 className="text-4xl font-['Bebas_Neue'] mb-6 tracking-wide">{feature.title}</h3>
                                <p className="font-['Lato'] text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTAs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8"
                >
                    <a href="/menu" className="group relative px-12 py-5 bg-[#683419] text-[#FFFAF3] overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-[#834024] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative font-['Bebas_Neue'] text-2xl tracking-widest z-10">EXPLORE OUR MENU</span>
                    </a>
                    <a href="/franchise" className="group relative px-12 py-5 border-[1px] border-[#683419] text-[#683419] overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-[#683419] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative font-['Bebas_Neue'] text-2xl tracking-widest z-10 group-hover:text-[#FFFAF3] transition-colors duration-500">BECOME A PARTNER</span>
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
