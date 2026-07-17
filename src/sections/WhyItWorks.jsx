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
      className="relative overflow-hidden bg-gradient-to-b from-gray-200 to-white px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-[15%] top-[-10%] h-[280px] w-[280px] rounded-full bg-emerald-300/15 blur-[120px]" />

      <div className="absolute bottom-[-10%] right-[15%] h-[260px] w-[260px] rounded-full bg-green-400/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-green-700 md:text-4xl">
            Miért működik ez a módszer?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Nem egy újabb tanács vagy technika, hanem egy másfajta
            rálátás arra, hogyan alakulnak ki az automatikus érzelmi
            reakciók, és miért ismétlődnek újra és újra.
          </p>
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