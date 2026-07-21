// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import GlowOrb from "../components/GlowOrb";


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
                pb-16 md:pb-24
                flex
                flex-col
               
                items-center
                text-center
                px-8
                overflow-hidden
                bg-white"
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
      {/** TOP TWO GLOWING ORBS (maradnak)                          */}
      {/** -------------------------------------------------------- */}
      <GlowOrb
        id="glowTop"
        rotate={360}
        originX="20%"
        originY="50%"
        className="absolute w-[26vw] left-1/2 -translate-x-1/2 -translate-y-[34%] opacity-30 pointer-events-none"
      />

      <GlowOrb
        id="glowBottom"
        rotate={-360}
        originX="20%"
        originY="50%"
        className="absolute w-[26vw] left-1/2 -translate-x-1/2 translate-y-[32%] opacity-25 pointer-events-none"
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


      <div
        className="
          mt-2
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-200
          bg-emerald-50
          px-4
          py-2
          text-sm
          font-medium
          text-emerald-700
          relative
          z-10
        "
      >
        🧠 Interaktív önismereti elemzés
      </div>

      {/** -------------------------------------------------------- */}
      {/** TEXT ELEMENTS (TITLE + DESCRIPTION + CTA)               */}
      {/** -------------------------------------------------------- */}
       <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1 }}
        className="
          max-w-4xl
          mx-auto
          text-2xl
          sm:text-3xl
          md:text-5xl
          lg:text-6xl
          font-extrabold
          tracking-tight
          leading-tight
          text-slate-900
          relative
          z-10
        "
      >
        Miért reagálsz mindig ugyanúgy?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="
          mt-5
          text-xl
          md:text-2xl
          font-medium
          text-slate-600
          max-w-3xl
          mx-auto
        "
      >
        Fedezd fel, mi irányítja valójában a reakcióidat.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg
        md:text-xl
        mt-8
        max-w-2xl
        leading-relaxed
        text-slate-600
        relative
        z-10"
      >
       Az Ösztönkód segít felismerni az ismétlődő érzelmi mintákat, hogy tudatosabban reagálhass a mindennapi helyzetekben.
      </motion.p>

  
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-10 md:mt-12 relative z-10"
      >

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.38, duration: 0.8 }}
        className="mb-8
                max-w-xl
                text-lg
                leading-relaxed
                text-slate-600"
          >
        Válaszolj néhány kérdésre, és fedezd fel,
        <span className="font-semibold text-green-700">
          {" "}milyen érzelmi minták alakítják a reakcióidat.
        </span>
      </motion.p>

        <Link
          to="/test"
          className="px-10 py-4 rounded-2xl text-lg font-semibold 
                    bg-gradient-to-r from-green-500 to-emerald-600 
                    hover:from-green-600 hover:to-emerald-700
                    text-white shadow-xl transition transform hover:scale-[1.06] active:scale-[0.98]"
        >
        Indítsd el az elemzést
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
     
    </section>
  );
}

