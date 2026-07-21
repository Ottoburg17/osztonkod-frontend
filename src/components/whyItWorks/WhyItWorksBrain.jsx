import whyItWorksImage from "../../assets/images/whyitworks.webp";

import PatternNetwork from "../about/PatternNetwork";


export default function WhyItWorksBrain() {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col

        w-full

        overflow-hidden
        rounded-3xl

        border border-white/60
        bg-white/60
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-emerald-200
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.16)]
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

      {/* Brain Area */}
      <div className="relative p-6">
        <div
          className="
            relative

            flex
            h-64
            items-center
            justify-center

            overflow-hidden
            rounded-2xl

            border
            border-emerald-100

            bg-gradient-to-br
            from-emerald-50
            via-white
            to-cyan-50
          "
        >
          <img
            src={whyItWorksImage}
            alt="Miért működik a módszer"
            draggable={false}
            className="
              relative
              z-10

              h-[88%]
              w-auto
              max-w-full

              select-none
              pointer-events-none

              transition-transform
              duration-700

              group-hover:scale-[1.03]
            "
          />

          {/* Animated Layers */}
          
        <PatternNetwork />

        </div>
      </div>

      {/* Bottom */}
      <div className="relative flex-1 px-6 pb-6 pt-1">
        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-emerald-100

            bg-emerald-50

            px-3
            py-1

            text-xs
            font-medium

            text-emerald-700
          "
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Neurális kapcsolatok
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Miért működik?
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Az automatikus érzelmi reakciók mögött ismétlődő minták állnak.
          Ezek felismerése segít megérteni, mi aktiválja a reakcióidat,
          így tudatosabban tudsz válaszolni a hasonló élethelyzetekre.
        </p>
      </div>
    </div>
  );
}


