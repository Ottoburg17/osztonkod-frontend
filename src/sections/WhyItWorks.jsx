// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import WhyItWorksBrain from "../components/whyItWorks/WhyItWorksBrain";
import AutomaticThinkingCard from "../components/whyItWorks/AutomaticThinkingCard";
import EmotionalPatternCard from "../components/whyItWorks/EmotionalPatternCard";

export default function WhyItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-200 to-white"
    >
      {/* Glow háttér */}
      <div className="absolute top-[-10%] left-[15%] w-[280px] h-[280px] bg-emerald-300 opacity-20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-10%] right-[15%] w-[260px] h-[260px] bg-green-400 opacity-20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            TESZT 123
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Nem egy újabb tanács vagy technika – hanem egy másfajta
            rálátás arra, hogyan működnek az automatikus érzelmi
            reakcióid.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          <WhyItWorksBrain />

          <AutomaticThinkingCard />

          <EmotionalPatternCard />
        </div>
      </motion.div>
    </section>
  );
}