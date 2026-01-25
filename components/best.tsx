"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ------------------ DATA ------------------ */

const ALL_PRODUCTS = [
  { name: "CAPPUCCINO", img: "/bestseller/hotcappucino.png", desc: "A classic balance of foam and soul.", sizeClass: "h-[65vh] md:h-[80vh]" },
  { name: "ICED LATTE", img: ["/bestseller/icedlatte.png", "/bestseller/icedlatte(mixed).png"], desc: "The perfect summer refresher.", sizeClass: "h-[65vh] md:h-[80vh]" },
  { name: "ICED NUTELLA", img: "/bestseller/icednutellalatte.png", desc: "Chocolatey hazelnut goodness.", sizeClass: "h-[60vh] md:h-[75vh]" },
  { name: "ORANGE AMERICANO", img: "/bestseller/orangeAmericano.png", desc: "Zesty twist on a classic brew.", sizeClass: "h-[65vh] md:h-[80vh]" },
  { name: "SIGNATURE ICED LATTE", img: "/bestseller/signature_icedlatte.png", desc: "Our special house blend on ice.", sizeClass: "h-[50vh] md:h-[65vh]" },
];

/* ------------------ PRODUCT ITEM ------------------ */

const ProductScrollItem = ({ product }: { product: any }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Default size if not specified
  const sizeClass = product.sizeClass || "h-[60vh] md:h-[75vh]";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Cohesive card animation: Scale up and fade in together
  const scale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]);
  const opacity = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const textScale = useTransform(smoothProgress, [0.1, 0.5, 0.9], [0.7, 1, 0.7]);
  const textOpacity = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 0.18, 0]);

  // Handle long names (like ORANGE AMERICANO)
  const bgTextSize = product.name.length > 12 ? "text-[13vw]" : "text-[20vw]";

  return (
    <div ref={ref} className="relative h-screen w-full snap-center flex items-center justify-center overflow-hidden">

      {/* Background Text (Restored as requested) */}
      <motion.h1
        style={{ scale: textScale, opacity: textOpacity }}
        className={`font-bebas text-[#683419] ${bgTextSize} leading-none z-0 select-none pointer-events-none will-change-transform absolute text-center whitespace-nowrap top-1/2 -translate-y-1/2`}
      >
        {product.name}
      </motion.h1>

      <motion.div
        style={{ scale, opacity }}
        className="relative flex flex-col items-center justify-center z-30 w-full max-w-5xl px-4 text-center h-full"
      >

        {/* Image Container */}
        <div className="relative flex items-center justify-center w-full mb-1 z-20">
          {Array.isArray(product.img) ? (
            <div className="relative flex items-center justify-center w-full">
              <img
                src={product.img[0]}
                alt={`${product.name} 1`}
                width={1024}
                height={1536}
                className={`${sizeClass} w-auto object-contain drop-shadow-[0_40px_50px_rgba(104,52,25,0.3)] -rotate-[15deg] -translate-x-4 md:-translate-x-6 z-10`}
              />
              <img
                src={product.img[1]}
                alt={`${product.name} 2`}
                width={1024}
                height={1536}
                className={`${sizeClass} w-auto object-contain drop-shadow-[0_40px_50px_rgba(104,52,25,0.3)] rotate-[15deg] translate-x-4 md:translate-x-6 z-0`}
              />
            </div>
          ) : (
            <img
              src={product.img}
              alt={product.name}
              width={1024}
              height={1536}
              className={`${sizeClass} w-auto object-contain drop-shadow-[0_40px_50px_rgba(104,52,25,0.3)]`}
            />
          )}
        </div>

        {/* Title Below Image (New) */}
        <h2 className="font-bebas text-[#683419] text-5xl md:text-7xl leading-none z-50 drop-shadow-sm mb-2">
          {product.name}
        </h2>

        {/* Description */}
        <p className="font-lato text-[#683419] text-sm md:text-lg font-bold uppercase tracking-[0.2em] max-w-lg mx-auto z-30">
          {product.desc}
        </p>
      </motion.div>
    </div>
  );
};

/* ------------------ MAIN COMPONENT ------------------ */

export default function BestSellers() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @font-face {
          font-family: 'Awesome_Serif';
          src: url('/fonts/AwesomeSerif-Italic.woff2');
          font-style: italic;
        }

        .font-awesome { font-family: 'Awesome_Serif', serif; font-style: italic; }
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-lato { font-family: 'Lato', sans-serif; }

        .best-sellers-section {
          scroll-snap-type: y mandatory;
          background-color: #F6EEE5;
          scroll-behavior: smooth;
        }

        /* Hide scrollbar for cleaner look */
        .best-sellers-section::-webkit-scrollbar { display: none; }
      `}} />

      <section ref={containerRef} className="best-sellers-section relative w-full">

        {/* --- PROGRESS LINE (Left Side) --- */}
        {/* <div className="fixed left-6 top-1/2 -translate-y-1/2 h-32 w-[2px] bg-[#683419]/10 z-50 hidden md:block">
          <motion.div 
            className="w-full bg-[#683419] origin-top"
            style={{ scaleY: scrollYProgress, height: '100%' }}
          />
        </div> */}

        {/* --- STICKY HEADER --- */}
        <div className="sticky top-0 z-40 bg-[#F6EEE5]/80 backdrop-blur-md py-8 flex flex-col items-center space-y-4">
          <h2 className="font-awesome font-bold text-[#683419] text-6xl md:text-7xl">
            Best Sellers
          </h2>

          <div className="hidden"></div>


          <motion.a
            href="/menu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-[#683419] text-[#F6EEE5] px-8 py-2 font-bebas text-lg tracking-[0.2em] uppercase hover:bg-[#834024] transition-colors duration-300 shadow-md border border-[#F6EEE5]/20 rounded-sm"
          >
            Explore Menu
          </motion.a>
        </div>

        {/* Products List */}
        <div className="relative">
          {ALL_PRODUCTS.map((product, i) => (
            <ProductScrollItem key={i} product={product} />
          ))}
        </div>



        {/* Bottom indicator to show more is coming */}
        <div className="h-[20vh] flex items-start justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-12 bg-[#683419]/30"
          />
        </div>
      </section >
    </>
  );
}