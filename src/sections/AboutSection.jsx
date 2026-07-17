// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import {
  Brain,
  Network,
  Sprout,
} from "lucide-react";

import AboutAnimation from "../components/about/AboutAnimation";
import AboutFeatureCard from "../components/about/AboutFeatureCard";

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-gray-100
        via-white
        to-gray-50
        px-6
        pt-28
        pb-32
        md:px-16
      "
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 md:text-5xl">
            Miért ismétled a mintákat?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A régi minták nem azért ismétlődnek,
            mert gyenge vagy.
            Az agy egyszerűen mindig a már ismert
            idegi útvonalakat választja.
          </p>

        </div>

        {/* Main */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="space-y-8 text-lg leading-9 text-gray-700">

              <p>
                Lehet, hogy észrevetted:
                hiába változik a helyzet,
                a reakció ugyanaz marad.
                Mintha a tudattalan újra és újra
                ugyanarra az útra terelne —
                még akkor is,
                amikor tudod,
                hogy máshogyan szeretnél reagálni.
              </p>

              <p>
                Ennek oka nem gyengeség,
                hanem az agy természetes működése.
                A korábbi tapasztalatokból
                gyors idegi útvonalak épülnek fel,
                amelyek automatikusan aktiválódnak.
              </p>

            </div>

            <div
              className="
                mt-10

                rounded-3xl

                border border-emerald-100

                bg-emerald-50/80

                p-6

                text-xl
                font-semibold

                leading-9

                text-emerald-700

                shadow-lg
              "
            >
              A felismerés az első lépés ahhoz,
              hogy ne a múlt vezesse a jelenedet —
              hanem te alakítsd az irányt.
            </div>

          </div>

          {/* Right */}

          <AboutAnimation />

        </div>

        {/* Features */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <AboutFeatureCard
            icon={<Brain size={28} />}
            title="Tudatos felismerés"
            description="Megérted, mi aktiválja benned a régi mintákat, és miért ismétlődnek újra."
            color="emerald"
            delay={0}
          />

          <AboutFeatureCard
            icon={<Network size={28} />}
            title="Új idegi kapcsolatok"
            description="A tudatos ismétlés fokozatosan új idegpályákat épít fel."
            color="sky"
            delay={0.15}
          />

          <AboutFeatureCard
            icon={<Sprout size={28} />}
            title="Tartós változás"
            description="Az új reakciók idővel természetessé válnak és felülírják a régi mintákat."
            color="emerald"
            delay={0.3}
          />

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <Link
            to="/deepunderstand"
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border border-emerald-200

              bg-white/80

              px-8
              py-4

              font-semibold

              text-emerald-700

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-emerald-300
              hover:shadow-xl
            "
          >
            Mélyebb magyarázat

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>

      </motion.div>

    </section>
  );
}