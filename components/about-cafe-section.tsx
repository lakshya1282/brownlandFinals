import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Interface to prevent TypeScript 'any' errors
interface JourneyStepProps {
  number: number;
  year: string;
  title: string;
  description: string;
  image: string;
  doodles: { src: string; pos: string }[]; 
  isRightAligned: boolean;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ number, year, title, description, image, doodles, isRightAligned }) => {
  return (
    <div className={`relative w-full flex mb-60 md:mb-96 ${isRightAligned ? 'justify-end' : 'justify-start'}`}>
      
      {/* 1. Freestanding Numbering - Visible on white background */}
      <div className={`absolute -top-16 z-40 hidden md:flex items-center justify-center
        ${isRightAligned ? 'left-[10%] lg:left-[15%]' : 'right-[10%] lg:right-[15%]'}`}>
        <span className="font-['Awesome_Serif'] italic text-7xl font-bold text-[#834024]">
          {number}
        </span>
      </div>

      {/* 2. Content Overlay - Cream background with enhanced shadows for white section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full md:w-[85%] bg-[#F6EEE5] rounded-none min-h-[500px] flex items-center shadow-[0_35px_60px_-15px_rgba(131,64,36,0.2)]"
      >
        {/* 3. Local Doodle Container - overflow-hidden stays here so doodles don't leak out */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {doodles.map((doodle, idx) => (
            <motion.img
              key={idx}
              src={doodle.src}
              alt="Decoration"
              className={`absolute w-32 md:w-48 opacity-20 ${doodle.pos}`}
              /* Animate moving along a simulated hand-drawn path */
              animate={{ 
                x: [0, 20, -15, 0], 
                y: [0, -25, 15, 0],
                rotate: [0, 8, -8, 0] 
              }}
              transition={{ 
                duration: 10 + idx * 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>

        {/* 4. 3D Overlapping Image - Now fully visible with deeper drop-shadow */}
        <div className={`absolute top-1/2 -translate-y-1/2 z-20 w-64 md:w-[450px] lg:w-[500px] 
          ${isRightAligned ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}>
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-[0_45px_45px_rgba(131,64,36,0.3)] filter"
          >
            <img src={image} alt={title} className="w-full h-auto object-contain select-none" />
          </motion.div>
        </div>

        {/* 5. Text Area - Colors adjusted for clarity on white/cream */}
        <div className={`py-20 flex flex-col justify-center max-w-2xl relative z-10
          ${isRightAligned ? 'pl-48 md:pl-72 lg:pl-96 pr-10' : 'pr-48 md:pr-72 lg:pr-96 pl-10 text-right ml-auto'}`}>
          <span className="font-['Bebas_Neue'] text-xl text-[#834024] opacity-50 tracking-[0.25em] mb-2">{year}</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#834024] mb-8 font-['Awesome_Serif',_serif] italic uppercase">
            {title}
          </h2>
          <p className="text-[#834024] text-xl lg:text-2xl leading-relaxed font-bold font-['Lato',_sans-serif]">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export function OurJourneySection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleText = "OUR JOURNEY";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end 0.9"]
  });

  // Fast draw logic: completes at 60% scroll
  const fastProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const pathLength = useSpring(fastProgress, { stiffness: 40, damping: 25 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    /* Section Background updated to White */
    <section ref={containerRef} className="relative bg-[#FFFFFF] py-32 overflow-hidden min-h-screen">
      
      {/* Title Reveal - Color updated to Brown for visibility on white */}
      <div className="relative z-40 w-full text-center mb-64 flex flex-col items-center">
        <motion.h1 
          className="text-7xl md:text-[11rem] font-black font-['Bebas_Neue'] tracking-[0.2em] text-[#834024] leading-none flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {titleText.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants} className={char === " " ? "mr-8" : ""}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative">
        
        {/* Navigation Line - Stroke color updated to Brown for visibility */}
        <div className="absolute inset-0 z-0 hidden md:block pointer-events-none -top-80">
          <svg width="100%" height="100%" viewBox="0 0 1000 4000" preserveAspectRatio="none" fill="none">
            <motion.path
              /* Path connects Title center -> 1st -> 2nd -> 3rd image centers */
              d="M 500 100 
                 C 500 400, -130 300, 150 650 
                 L 150 1100 
                 C -110 1450, 850 1450, 850 1800 
                 L 900 2350 
                 C 1000 2950, 250 2800, 150 3100 
                 L 90 3600"
              stroke="#834024"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="20 30"
              style={{ pathLength, opacity: 0.25 }}
            />
          </svg>
        </div>

        {/* Journey Content */}
        <div className="relative z-10">
          <JourneyStep 
            number={1}
            year="EST. 2024" 
            title="The First Spark" 
            description="Your daily dose of Brownland Magic started here. We began with a mission to build a lifestyle and a community."
            image="/images/BL-STICKERS.png" 
            isRightAligned={true}
            doodles={[
              { src: "/images/sandwich.png", pos: "top-0 -right-0" }, 
              { src: "/images/cake.png", pos: "-bottom-5 right-0" }  
            ]}
          />

          <JourneyStep 
            number={2}
            year="FRANCHISE ALPHA" 
            title="Scaling the Dream" 
            description="Taking our signature blends to new locations while maintaining artisanal quality."
            image="/images/BL-STICKERS.png"
            isRightAligned={false}
            doodles={[
              { src: "/images/coffee.png", pos: "-top-0 left-0" },   
              { src: "/images/girl.png", pos: "bottom-0 left-0" } 
            ]}
          />

          <JourneyStep 
            number={3}
            year="THE FUTURE" 
            title="The Best is Brewing" 
            description="A lot more is brewing, and the best is yet to come. The story has only just begun."
            image="/images/BL-STICKERS.png"
            isRightAligned={true}
            doodles={[
              { src: "/images/girl.png", pos: "top-0 -right-0" }, 
              { src: "/images/cake.png", pos: "-bottom-5 right-0" } 
            ]}
          />
        </div>
      </div>
    </section>
  );
}