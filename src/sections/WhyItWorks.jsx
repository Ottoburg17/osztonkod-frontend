// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-gray-100 to-white"
    >
      {/* 🔥 háttér glow (Hero-hoz illesztve) */}
      <div className="absolute top-[-10%] left-[15%] w-[280px] h-[280px] bg-emerald-300 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[15%] w-[260px] h-[260px] bg-green-400 opacity-20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* CÍM */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
          Miért működik ez a módszer?
        </h2>

        {/* SUBTEXT (nagyon fontos!) */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Nem egy újabb tanács vagy technika — hanem egy másfajta rálátás arra,
          hogyan működsz belül.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* CARD */}
          <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition">
            <p className="text-lg font-semibold text-green-800 mb-2">
               Mélyebb szintet céloz
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nem a viselkedést próbálja megváltoztatni,
              hanem a mögöttes érzelmi mintát tárja fel.
            </p>
          </div>

          {/* CARD */}
          <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition">
            <p className="text-lg font-semibold text-green-800 mb-2">
              Ismétlődések felismerése
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Segít észrevenni azokat a helyzeteket,
              amelyek újra és újra visszatérnek.
            </p>
          </div>

          {/* CARD */}
          <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition">
            <p className="text-lg font-semibold text-green-800 mb-2">
              ⚡ Gyors felismerés
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Már percek alatt rálátást ad arra,
              hogyan működsz valójában.
            </p>
          </div>

          {/* CARD */}
          <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition">
            <p className="text-lg font-semibold text-green-800 mb-2">
              Nem tanács, hanem megértés
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nem mondja meg mit tegyél —
              segít felismerni, mi történik benned.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}