// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SocialProofPreview() {
  return (
    <section
      className="
        relative
        min-h-[600px]
        pt-24 pb-32 px-6 md:px-16
        flex flex-col items-center
        text-center
        overflow-hidden
        bg-gray-100
      "
    >
      {/* ===================== MESH BACKGROUND ===================== */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="meshGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#meshGradient1)" opacity="0.4" />
      </svg>

      {/* ===================== BAL ALSÓ GLOW ===================== */}
      <div
        className="
          absolute
          bottom-[-20%]
          left-[-22%]
          w-[360px] h-[360px] md:w-[560px] md:h-[560px]
          rounded-full
          bg-emerald-300/15 md:bg-emerald-300/25
          blur-[120px] md:blur-[180px]
          pointer-events-none
        "
      />

      

      {/* ===================== JOBB ALSÓ GLOW (TÜKRÖZVE) ===================== */}
      <div
        className="
          absolute
          bottom-[-20%]
          right-[-22%]
          w-[360px] h-[360px] md:w-[560px] md:h-[560px]
          rounded-full
          bg-emerald-300/15 md:bg-emerald-300/25
          blur-[120px] md:blur-[180px]
          pointer-events-none
        "
      />

      

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-600 mb-6"
        >
          Akiknek már segített a módszer
        </motion.h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-14">
          Valós visszajelzések olyan emberektől, akik mélyebb önismeretre és
          stabilabb érzelmi működésre tettek szert.
        </p>

        {/* ===================== KÁRTYÁK ===================== */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { name: "Anna, 29", text: "„Segített megérteni önmagam.”" },
            { name: "Gábor, 34", text: "„Először érzem, hogy képes vagyok változtatni.”" },
            { name: "Laura, 25", text: "„Végre értem, mi zajlik bennem.”" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                bg-white
                border border-emerald-200
                rounded-2xl p-6
                shadow-lg
                transition
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              <p className="italic text-gray-700 mb-3">{item.text}</p>
              <span className="text-green-700 font-semibold">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        <Link
          to="/socialproof"
          className="
            inline-block
            px-8 py-3
            bg-green-600 hover:bg-green-700
            text-white
            rounded-2xl
            shadow-lg
            transition
            transform hover:scale-[1.05]
          "
        >
          További történetek →
        </Link>
      </div>
    </section>
  );
}
