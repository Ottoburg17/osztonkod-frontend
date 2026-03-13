// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PRODUCTS = [
  "BrainMap",
  "Érzelmi Agytérkép",
  "Ösztönkód – Teljes Térkép",
  "Perception",
  "Reaction Break",
  "Dopamin-ciklus – napi önreflexiós rendszer",
  "Automatikus gondolatok elemzése",
  "Érzelmi Elengedési Program",
  "StruggleBreaker – Ciklusmegszakító Rendszer"
];

export default function FeedbackForm() {
  return (
    <div className="w-full min-h-screen bg-white py-24 px-6 relative overflow-hidden">

      {/* Finom háttér glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      >
        <div className="absolute top-0 left-[20%] w-[50vw] h-[50vw] bg-green-600/20 blur-[90px] rounded-full" />
      </motion.div>

      <div className="max-w-2xl mx-auto">

        <h1 className="text-2xl md:text-3xl font-extrabold text-green-600 text-center tracking-tight mb-10">
          Személyes felismerés megosztása
        </h1>

        <div className="
          bg-white/90 backdrop-blur-xl
          border border-green-200
          shadow-xl
          rounded-3xl
          p-10
        ">

          <form
            action="https://formsubmit.co/ottoburg17@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="Új Ösztönkód visszajelzés" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            {/* ⚠️ ÉLESBEN ezt cseréld a saját domainre */}
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/feedback-success"
            />

            {/* TERMÉK LISTA */}
            <select
              name="Termék"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Melyik terméket használtad?</option>

              {PRODUCTS.map((product, index) => (
                <option key={index} value={product}>
                  {product}
                </option>
              ))}
            </select>

            {/* FELISMERÉS */}
            <textarea
              name="Felismerés"
              placeholder="Mi volt a legerősebb felismerésed?"
              required
              maxLength={500}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* NÉZŐPONT VÁLTÁS */}
            <textarea
              name="Nézőpont váltás"
              placeholder="Miben változott a nézőpontod?"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* AJÁNLÁS */}
            <textarea
              name="Ajánlás"
              placeholder="Kinek ajánlanád?"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* NÉV + ÉLETKOR */}
            <div className="flex gap-4">
              <input
                type="text"
                name="Keresztnév"
                placeholder="Keresztnév"
                className="w-1/2 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="number"
                name="Életkor"
                placeholder="Életkor"
                className="w-1/2 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* MODERÁLÁSI CHECKBOX */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required />
              Elfogadom, hogy a beküldött szöveg moderálásra kerül.
            </label>

            {/* SUBMIT */}
             
             <div className="pt-4 text-center">
              <button
                type="submit"
                className="
                  inline-block
                  px-8 py-3
                  bg-green-600 text-white
                  rounded-xl font-semibold
                  hover:bg-green-700
                  transition transform hover:scale-[1.03]
                  shadow-md
                "
              >
                Beküldés
              </button>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}