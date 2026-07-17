// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import GlowOrb from "../components/GlowOrb";
import PlatformPreview from "../components/platformPreview/PlatformPreview";



export default function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (                        
    <section
      ref={ref}
      className="relative
                pt-24
                md:pt-28
                pb-28
                flex
                flex-col
                justify-center
                items-center
                text-center
                px-8
                overflow-hidden
                bg-gray-100"
                    >
      {/** -------------------------------------------------------- */}
      {/** 1) FULL MESH GRADIENT BACKGROUND (SVG)                   */}
      {/** -------------------------------------------------------- */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="meshGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#meshGradient1)" opacity="0.35" />
      </svg>

      {/** -------------------------------------------------------- */}
      {/** 2) ANIMATED NOISE OVERLAY                                */}
      {/** -------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0.05 }}
        animate={{ opacity: 0.10, x: [-10, 10, -10], y: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-10"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')", // szép, finom zaj
          backgroundSize: "300%",
        }}
      />

      {/** -------------------------------------------------------- */}
      {/** TOP TWO GLOWING ORBS (maradnak)                          */}
      {/** -------------------------------------------------------- */}
      <GlowOrb
        id="glowTop"
        rotate={360}
        originX="20%"
        originY="50%"
        className="absolute w-[26vw] left-1/2 -translate-x-1/2 -translate-y-[34%] opacity-50 pointer-events-none"
      />

      <GlowOrb
        id="glowBottom"
        rotate={-360}
        originX="20%"
        originY="50%"
        className="absolute w-[26vw] left-1/2 -translate-x-1/2 translate-y-[32%] opacity-45 pointer-events-none"
      />

      {/** -------------------------------------------------------- */}
      {/** LOWER LEFT + RIGHT BLUR HIGHLIGHTS                       */}
      {/** -------------------------------------------------------- */}
      <div
        className="absolute bottom-[-12%] left-[8%] w-[32vw] h-[32vw] 
          bg-emerald-300 opacity-25 blur-[100px] rounded-full pointer-events-none"
      />

      <div
        className="absolute bottom-[-10%] right-[8%] w-[28vw] h-[28vw]
          bg-emerald-400 opacity-20 blur-[110px] rounded-full pointer-events-none"
      />

      {/** -------------------------------------------------------- */}
      {/** TEXT ELEMENTS (TITLE + DESCRIPTION + CTA)               */}
      {/** -------------------------------------------------------- */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1 }}
        className="max-w-3xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-amber-400 drop-shadow-md relative z-10 leading-tight"
      >
        Miért reagálsz mindig ugyanúgy? <br />

       <span className="block mt-2 text-green-800">
          Fedezd fel az érzelmi reakcióid mögötti <br className="hidden sm:block" />
          <span className="text-amber-500 font-semibold drop-shadow-sm">
            valódi mintát
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl mt-6 max-w-xl md:max-w-2xl text-gray-700 leading-relaxed relative z-10"
      >
      Érzelmi Ösztönkód – egy önismereti módszer,
      amely segít megérteni az automatikus érzelmi reakcióidat,
      és kilépni a visszatérő mintákból.
      </motion.p>

      <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-base md:text-lg mt-4 text-gray-600 relative z-10"
    >
     Ha már próbáltál változtatni, de mégis ugyanazokba a helyzetekbe jutsz vissza
    </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="text-sm md:text-base mt-6 max-w-xl text-gray-600 italic relative z-10"
      >
        Ez nem személyiségteszt, és nem tanácsadás –
        hanem egy másfajta ránézés arra, ahogyan működsz.
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-10 md:mt-12 relative z-10"
      >

        <Link
          to="/instinctsarticle"
          className="px-10 py-4 rounded-2xl text-lg font-semibold 
                    bg-gradient-to-r from-green-500 to-emerald-600 
                    hover:from-green-600 hover:to-emerald-700
                    text-white shadow-xl transition transform hover:scale-[1.06] active:scale-[0.98]"
        >
         Fedezd fel most →
        </Link>



       <div className="mt-5 flex flex-wrap justify-center gap-2 relative z-10">
        <span className="px-3 py-1 bg-white/70 backdrop-blur-md border border-gray-200 rounded-full text-xs text-gray-700 shadow-sm">
          🔒 Biztonságos
        </span>
        <span className="px-3 py-1 bg-white/70 backdrop-blur-md border border-gray-200 rounded-full text-xs text-gray-700 shadow-sm">
          ⏱ 2 perc
        </span>
        <span className="px-3 py-1 bg-white/70 backdrop-blur-md border border-gray-200 rounded-full text-xs text-gray-700 shadow-sm">
          🚫 Nincs regisztráció
        </span>
      </div>

      </motion.div>

        <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6, duration: 1 }}
      className="relative z-10 w-full max-w-7xl mx-auto mt-24 px-2 md:px-0"
    >
      <PlatformPreview />

            
      </motion.div>
     
    </section>
  );
}
