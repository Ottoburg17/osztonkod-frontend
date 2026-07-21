import { Link } from "react-router-dom";

import {
  Brain,
  Network,
  Sprout,
} from "lucide-react";

import AboutIllustration from "../components/about/AboutIllustration";
import PatternComparison from "../components/about/PatternComparison";
import AboutFeatureCard from "../components/about/AboutFeatureCard";

export default function AboutSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-gray-100
        via-emerald-50/70
        to-white

        px-6
        pt-28
        pb-28

        md:px-16
      "
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Miért ismételjük újra{" "}
            <span className="text-emerald-600">
              ugyanazokat a mintákat?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A régi minták nem azért ismétlődnek,
            mert gyengék vagyunk.
            Az agy mindig a már ismert
            idegi kapcsolatokat választja.
          </p>

        </div>

        {/* Top */}

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="space-y-8 text-lg leading-9 text-gray-700">

              <p>
                Sokszor ugyanazokat az érzelmi reakciókat
                ismételjük újra,
                még akkor is,
                amikor tudjuk,
                hogy másképp szeretnénk viselkedni.
              </p>

              <p>
                Ennek oka,
                hogy az ismétlődő tapasztalatok
                erős idegi útvonalakat alakítanak ki.
                Az agy automatikusan ezeket aktiválja,
                mert ezek jelentik számára
                a legkisebb energiafelhasználást.
              </p>

            </div>

            <div
              className="
                mt-10

                rounded-3xl

                border
                border-emerald-100

                bg-emerald-50

                p-7

                text-xl
                font-semibold
                leading-9

                text-emerald-700

                shadow-lg
              "
            >
              A felismerés az első lépés.
              Ha megérted,
              mi történik benned,
              már nem ugyanaz az automatikus
              folyamat irányít.
            </div>

          </div>

          {/* Right */}

          <AboutIllustration />

        </div>

        {/* Pattern Comparison */}

        <PatternComparison />

        {/* Features */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <AboutFeatureCard
            icon={<Brain size={28} />}
            title="Tudatos felismerés"
            description="Megérted, mi aktiválja benned a régi mintákat és hogyan indulnak el az automatikus reakciók."
            color="emerald"
          />

          <AboutFeatureCard
            icon={<Network size={28} />}
            title="Új idegi kapcsolatok"
            description="Az ismételt tudatos döntések fokozatosan új idegpályákat alakítanak ki."
            color="sky"
          />

          <AboutFeatureCard
            icon={<Sprout size={28} />}
            title="Tartós változás"
            description="Az új reakciók idővel természetessé válnak és felülírják a korábbi automatikus mintákat."
            color="emerald"
          />

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <Link
            to="/deepunderstand"
            className="
              inline-flex
              items-center
              gap-3

              rounded-2xl

              border
              border-emerald-200

              bg-white

              px-8
              py-4

              font-semibold

              text-emerald-700

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-emerald-300
              hover:shadow-lg
            "
          >
            Mélyebb magyarázat
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}