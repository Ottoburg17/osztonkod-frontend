// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import WhyItWorksBrain from "../components/whyItWorks/WhyItWorksBrain";
import AutomaticThinkingCard from "../components/whyItWorks/AutomaticThinkingCard";
import EmotionalPatternCard from "../components/whyItWorks/EmotionalPatternCard";




export default function WhyItWorks() {
 

  return (
    <section className="relative
          overflow-hidden
          bg-gradient-to-b
          from-gray-100
          via-emerald-50/70
          to-white

          px-6

          pt-28
          pb-32

          md:px-16"
    >
      {/* Background Glow */}
      <div className="absolute left-[15%] top-[-10%] h-[280px] w-[280px] rounded-full bg-emerald-300/10 blur-[120px]" />

      <div className="absolute bottom-[-10%] right-[15%] h-[260px] w-[260px] rounded-full bg-green-400/10 blur-[120px]" />

         <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-7xl"
          >
        

        {/* Header */}
         <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Miért működik{" "}
            <span className="text-emerald-600">
              az Ösztönkód?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Az Ösztönkód nem új szokásokat próbál rád erőltetni.
            Segít felismerni azokat a tudattalan érzelmi mintákat,
            amelyek automatikusan befolyásolják a reakcióidat.
            Ha ezeket megérted, könnyebb tudatosabban reagálni
            ugyanazokra a helyzetekre.
          </p>

        </div>
            

        <div className="mb-8 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-emerald-50/80
              px-5
              py-3
              text-sm
              md:text-base
              font-medium
              text-emerald-700
              shadow-sm
              backdrop-blur-sm
            "
          >
            ✨
            <span>
              A változás a minták felismerésével kezdődik.
            </span>
          </div>
        </div>

        {/* Cards */}

      
        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          <WhyItWorksBrain />
          <AutomaticThinkingCard /> 
          <EmotionalPatternCard />  
 
        </div>
      
  
      </motion.div>
    </section>
  );
}


