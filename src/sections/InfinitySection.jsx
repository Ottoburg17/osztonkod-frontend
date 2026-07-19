import { Link } from "react-router-dom";


export default function InfinitySection() {
  return (
    <section className="
          relative
          overflow-hidden

          bg-gradient-to-b
          from-gray-50
          via-emerald-25
          to-white

          px-6

          pt-28
          pb-24

          md:px-16
          ">
      
      {/* STATIKUS, HALK VÉGTELEN FORMA */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        style={{ transform: "translateY(0%)" }}
      >
        <svg
        width="520"
        height="260"
        viewBox="-130 -65 260 130"
        fill="none"
      >
        {/* STATIKUS VÉGTELEN */}
        <path
          d="
            M -100 0
            C -100 -55, -20 -55, 0 0
            C 20 55, 100 55, 100 0
            C 100 -55, 20 -55, 0 0
            C -20 55, -100 55, -100 0
          "
          stroke="#10B981"
          strokeWidth="3"
          opacity="0.14"
          fill="none"
        />

        {/* MOZGÓ FÉNYCSÍK */}
        <path
          d="
            M -100 0
            C -100 -55, -20 -55, 0 0
            C 20 55, 100 55, 100 0
            C 100 -55, 20 -55, 0 0
            C -20 55, -100 55, -100 0
          "
          stroke="#5ecfa6ff"
          strokeWidth="3"
          fill="none"
          strokeDasharray="60 260"
          style={{
            animation: "infinity-flow 24s linear infinite",
            opacity: 0.55,
            filter: "drop-shadow(0 0 2px rgba(78, 172, 142, 0.35))"
          }}
        />
      </svg>

      </div>

      {/* FINOM ATMOSZFÉRA GLOW */}
      <div
        className="absolute bottom-[-20%] left-[12%] w-[28vw] h-[28vw]
        bg-emerald-300 opacity-15 blur-[120px] rounded-full pointer-events-none"
      />
      <div
        className="absolute bottom-[-15%] right-[12%] w-[26vw] h-[26vw]
        bg-emerald-400 opacity-10 blur-[130px] rounded-full pointer-events-none"
      />

      {/* TARTALOM */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
         <h2
          className="
            text-4xl
            md:text-5xl

            font-bold

            tracking-tight

            text-slate-900

            mb-10
          "
        >
          Minden tudatos döntés{" "}
          <span className="text-emerald-600">
            egy új idegi kapcsolat.
          </span>
        </h2>

        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
          
          <p>
            A felismerés után már nem automatikusan reagálsz —
            hanem tudatosan alakítod az életedet.
            Az önismeretben tett minden apró lépés új lehetőségeket nyit meg:
            másképp értelmezed a helyzeteket, rugalmasabban reagálsz,
            és egyre közelebb kerülsz ahhoz, aki valóban lenni szeretnél.
          </p>

          <p >
            Az ember fejlődése nem előre megírt sors, hanem egy kreatív
            élettörekvés. A múlt hat rád, de nem határoz meg:
            a jelent mindig újraértelmezheted, és kialakíthatod azt a
            „belső iránytűt”, amely vezetni tud életed kapcsolataiban,
            döntéseiben és küzdelmeiben.
          </p>

          <p className="font-semibold text-green-700">
            A változás lehetősége valóban végtelen —
            mert te vagy az, aki formálja a jelentését annak, ami történik veled.
          </p>

          <p>
            Az önismeret útján nemcsak megérted a mintáidat,
            hanem új mintákat hozol létre, amelyek támogatnak, emelnek
            és megerősítenek a mindennapokban.
          </p>

        </div>

         
        <div className="mt-16 flex justify-center">
          <Link
            to="/instinctsarticle"
            className="
            group
            inline-flex
            items-center
            gap-3

            rounded-2xl

            border border-emerald-200

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
            hover:text-emerald-800"
            >
            Kezdd el megérteni önmagad

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
       
    </section>
  );
}

