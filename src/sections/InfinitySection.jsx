import { Link } from "react-router-dom";


export default function InfinitySection() {
  return (
    <section className="relative pt-24 pb-32 px-6 md:px-16 
  bg-gradient-to-b from-gray-50 via-gray-100 to-gray-100 
  overflow-hidden">
      
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
        
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">
          A változás végtelen lehetősége
        </h2>

        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          
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

         
        <div className="mt-12 flex justify-center">
          <Link
            to="/test"
            className="
            px-8 py-4 
            bg-green-600 text-white 
            rounded-2xl 
            font-semibold 
            shadow-xl
            hover:bg-green-700 
            hover:scale-105 
            active:scale-95
            transition-all duration-200
            relative
            before:absolute before:inset-0
            before:rounded-2xl
            before:blur-xl before:opacity-0
            hover:before:opacity-40
            before:bg-green-400"
            >
            Tudd meg, mi irányít valójában →
          </Link>
        </div>

      </div>
       
    </section>
  );
}
