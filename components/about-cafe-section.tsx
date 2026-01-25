import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';

interface JourneyStepProps {
  number: number;
  year: string;
  title: string;
  description: string;
  images: string[];
  doodles: { src: string; pos: string }[];
  isRightAligned: boolean;
  ctaLink?: string;
  ctaText?: string;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ number, year, title, description, images = [], doodles, isRightAligned, ctaLink, ctaText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalImages);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images.length]);

  // Auto-slide removed as per user request

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative w-full flex mb-[12vh] ${isRightAligned ? 'justify-end' : 'justify-start'}`}
    >


      {/* Freestanding Numbering - REMOVED */}
      {/* <div className={`absolute -top-[5vh] z-40 flex items-center justify-center
        ${isRightAligned ? 'left-[5%]' : 'right-[5%]'}`}>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Awesome_Serif'] italic text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-9xl font-bold text-[#834024]"
        >
          {number}
        </motion.span>
      </div> */}


      {/* Card Container */}
      <div className="relative z-10 w-[95%] sm:w-[90%] bg-[#F6EEE5] rounded-none min-h-[42vh] flex items-center shadow-[0_25px_50px_-15px_rgba(131,64,36,0.15)]">

        {/* Decorative Doodles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {doodles.map((doodle, idx) => (
            <motion.img
              key={idx}
              src={doodle.src}
              alt="Decoration"
              className={`absolute w-[12vw] sm:w-[8vw] opacity-15 ${doodle.pos}`}
              animate={{ x: [0, 10, -5, 0], y: [0, -10, 5, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 12 + idx * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Image Slider - Positioned completely outside the card */}
        {/* Image Slider - Positioned completely outside the card */}
        <div className={`absolute top-1/2 -translate-y-1/2 z-30 w-[30vw] sm:w-[28vw] md:w-[25vw] lg:w-[350px] group
          ${isRightAligned ? 'left-0 -translate-x-[50%]' : 'right-0 translate-x-[50%]'}`}>
          <motion.div
            className="relative aspect-square drop-shadow-[0_30px_30px_rgba(131,64,36,0.2)]"
          >
            {totalImages > 1 && (
              <>
                <button onClick={handlePrev} className="absolute -left-[2vw] top-1/2 -translate-y-1/2 z-50 bg-[#834024] text-white w-[8vw] h-[8vw] sm:w-[5vw] sm:h-[5vw] max-w-10 max-h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 text-[4vw] sm:text-lg">‹</button>
                <button onClick={handleNext} className="absolute -right-[2vw] top-1/2 -translate-y-1/2 z-50 bg-[#834024] text-white w-[8vw] h-[8vw] sm:w-[5vw] sm:h-[5vw] max-w-10 max-h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 text-[4vw] sm:text-lg">›</button>
              </>
            )}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-contain pointer-events-none"
              />
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Text Content - No overlap with clear spacing */}
        <div className={`py-[5vh] flex flex-col justify-center w-full relative z-20
          ${isRightAligned ? 'pl-[18vw] sm:pl-[16vw] md:pl-[14vw] pr-[5vw]' : 'pr-[18vw] sm:pr-[16vw] md:pr-[14vw] pl-[5vw] text-right ml-auto'}`}>

          <motion.span
            initial={{ opacity: 0, x: isRightAligned ? -20 : 20 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-[4vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-2xl text-[#834024] tracking-[0.4em] mb-[1vh]"
          >
            {year}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[8vw] sm:text-[4vw] md:text-[3.5vw] lg:text-7xl font-normal text-[#834024] mb-[2vh] font-['Bebas_Neue'] tracking-tight leading-none"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[#834024] text-[3.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-xl leading-relaxed font-['Lato'] font-normal"
          >
            {description}
          </motion.p>

          {/* Optional CTA Button */}
          {ctaLink && ctaText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-[4vh]"
            >
              <Link
                href={ctaLink}
                className="inline-block px-8 py-3 border-2 border-[#834024] text-[#834024] font-['Bebas_Neue'] text-xl tracking-widest hover:bg-[#834024] hover:text-white transition-colors duration-300"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function AboutCafeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleText = "OUR JOURNEY";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end 0.9"]
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0, 0.6], [0, 1]), { stiffness: 45, damping: 30 });

  return (
    <section id="about" ref={containerRef} className="relative bg-[#FFFFFF] py-[8vh] overflow-hidden">

      {/* Self-contained font imports */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @font-face {
          font-family: 'Awesome_Serif';
          src: url('/fonts/AwesomeSerif-Italic.woff2') format('woff2');
          font-style: italic;
        }
      `}} />

      {/* Main Section Title */}
      <div className="relative z-40 w-full text-center mb-[12vh] px-[2vw]">
        <motion.h1
          className="text-[12vw] sm:text-[8vw] md:text-[7vw] lg:text-[10rem] font-title font-bold text-brownland flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
          }}
        >
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className={char === " " ? "mr-[2vw]" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div className="max-w-[1800px] mx-auto px-[2vw] relative">
        {/* Decorative Animated Line - VISIBLE ON ALL SCREENS */}
        <div className="absolute inset-0 z-0 pointer-events-none -top-[10vh] sm:-top-[20vh] h-[120%]">
          <svg width="100%" height="100%" viewBox="0 0 1000 4000" preserveAspectRatio="none" fill="none">
            <motion.path
              d="M 500 100 C 500 400, -100 300, 150 650 L 150 1100 C -110 1450, 850 1450, 850 1800 L 900 2350 C 1000 2950, 250 2800, 150 3100 L 90 3600"
              stroke="#834024" strokeWidth="6" strokeLinecap="round" strokeDasharray="15 25"
              style={{ pathLength, opacity: 0.15 }}
              className="sm:stroke-[10]"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <JourneyStep
            number={1}
            year="EST. 2020"
            title="THE FIRST GRIND"
            description="Our story began in 2020, a year that challenged the world but inspired us to create something grounding. We opened our very first doors in Shailendra Nagar, Raipur, with a simple belief: that a neighborhood deserves a world-class coffee experience. Amidst the quiet streets, the aroma of our first roast became a beacon for coffee lovers. We didn't just want to be a cafe; we wanted to be the 'Brownland'—a reliable, earthy escape where every cup felt like coming home."
            images={["/ourjourney/Behind zudio.png", "/ourjourney/coffeebanner1.png"]}
            isRightAligned={true}
            doodles={[{ src: "/images/sandwich.png", pos: "top-4 right-4" }, { src: "/images/cake.png", pos: "bottom-4 right-4" }]}
          />

          <JourneyStep
            number={2}
            year="CITY WIDE PRESENCE"
            title="SPREADING THE AROMA"
            description="The love from our community was overwhelming, and soon, one 'Brownland' wasn't enough. We began a deliberate journey to bring our signature experience to every corner of Raipur. We moved into the bustling Colours Mall, the professional heart of Devendra Nagar, the vibrant lanes of Avanti Vihar, the strategic hub of Tatibandh, and the classic charm of Samta Colony. Each new branch was designed to mirror its surroundings while keeping the soul of our original Shailendra Nagar roots intact—becoming the go-to destination for creators, families, and coffee connoisseurs alike."
            images={["/ourjourney/Colours mall.png", "/ourjourney/coffeebanner3.png", "/ourjourney/Shankar nagar re baba - Copy.png", "/ourjourney/coffeebanner4.png"]}
            isRightAligned={false}
            doodles={[{ src: "/images/coffee.png", pos: "top-4 left-4" }, { src: "/images/girl.png", pos: "bottom-4 left-4" }]}
            ctaText="Find Your Nearest BROWNLAND"
            ctaLink="#branches"
          />

          <JourneyStep
            number={3}
            year="7 CHAPTERS & COUNTING"
            title="THE NEXT HORIZON"
            description="As we look toward the future, our passion for the perfect pour remains unchanged. We are currently thrilled to be bringing the BROWNLAND experience to Mowa, marking our seventh location. This expansion isn't just about numbers; it’s about accessibility and the joy of seeing the 'Brownland Family' grow. From a single corner in 2020 to a city-wide presence today, we are committed to brewing excellence and creating spaces where Raipur can connect, one cup at a time."
            images={["/ourjourney/Sarvodya nagar - Copy.png", "/ourjourney/coffeebanner2.jpeg", "/ourjourney/coffeebanner5.png"]}
            isRightAligned={true}
            doodles={[{ src: "/images/girl.png", pos: "top-4 right-4" }, { src: "/images/cake.png", pos: "bottom-4 right-4" }]}
            ctaText="Bring BROWNLAND to Your Neighborhood"
            ctaLink="/franchise"
          />
        </div>
      </div>
    </section>
  );
}
