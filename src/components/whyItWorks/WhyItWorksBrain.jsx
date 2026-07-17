import whyItWorksImage from "../../assets/images/whyitworks.webp";

import NeuronLayer from "./NeuronLayer";
import ConnectionLayer from "./ConnectionLayer";

export default function WhyItWorksBrain() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[420px]
        mx-auto
        rounded-3xl
        overflow-hidden

        bg-white/60
        backdrop-blur-xl

        border
        border-white/60

        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.16)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-emerald-400/10
          via-cyan-300/5
          to-blue-400/10
          pointer-events-none
        "
      />

      {/* Brain */}
      <div className="relative p-6">
        <div className="relative overflow-hidden rounded-2xl">

          <img
            src={whyItWorksImage}
            alt="Miért működik a módszer"
            draggable={false}
            className="
              w-full
              h-auto
              select-none
              pointer-events-none
            "
          />

          {/* Animated Layers */}
          <ConnectionLayer />
          <NeuronLayer />

        </div>
      </div>

      {/* Content */}
      <div className="relative px-6 pb-6">

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-emerald-50

            border
            border-emerald-100

            px-3
            py-1

            text-xs
            font-medium

            text-emerald-700
          "
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Élő neurális kapcsolatok
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Miért működik?
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Az automatikus érzelmi reakciók mögött ismétlődő minták állnak.
          A módszer ezek felismerésében segít, hogy tudatosabban reagálhass
          a hasonló élethelyzetekre.
        </p>

      </div>
    </div>
  );
}