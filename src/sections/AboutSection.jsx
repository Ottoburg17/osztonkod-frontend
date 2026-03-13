// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="pt-20 pb-16 px-6 md:px-16 bg-gradient-to-b from-gray-100 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* CÍM */}
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600 mb-8">
          Miért ismétled a mintákat?
        </h2>

        {/* RÖVID, ÜTŐS MAGYARÁZAT – HOME VERZIÓ */}
        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-6 text-left mx-auto max-w-3xl">
          <p>
            Lehet, hogy észrevetted: hiába változik a helyzet, a reakció ugyanaz marad.
            Mintha a tudattalan újra és újra ugyanarra az útra terelne —
            még akkor is, amikor tudod, hogy máshogyan szeretnél reagálni.
          </p>

          <p>
            Ennek oka nem gyengeség, hanem az agy természetes működése.
            Az idegrendszer korai tapasztalatok alapján
            gyors, automatikus mintákat alakít ki,
            amelyek biztonságérzetet adnak — még akkor is,
            ha ezek a minták már nem szolgálnak téged.
          </p>

          <p className="mt-10 mb-8 font-semibold text-green-600">
            A felismerés az első lépés ahhoz,
            hogy ne a múlt vezesse a jelenedet —
            hanem te alakítsd az irányt.
          </p>
        </div>

        {/* CTA */}
        <Link
          to="/deepunderstand"
          className="inline-block mt-6 text-green-700 font-semibold hover:underline"
        >
          Mélyebb magyarázat →
        </Link>

      </motion.div>
    </section>
  );
}
