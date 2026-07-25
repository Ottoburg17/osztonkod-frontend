/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";



const THOUGHTS = [
  { label: "Biztos elrontom", key: "biztos elrontom" },
  { label: "Megint ugyanaz történik", key: "megint ugyanaz történt" },
  { label: "Mindenki jobb nálam", key: "mindenki jobb nálam" },
  { label: "Nem szabadna így éreznem", key: "nem szabadna ezt éreznem" },
  { label: "Más hibája", key: "más hibája" },
  { label: "Nem érzem jól magam", key: "úgy érzem" }
];

export default function InstinctAware({
  analyzeThought = () => ({
    analysis: "Ez egy gyakran visszatérő gondolati minta.",
    questions: [
      "Volt már, hogy ez nem így lett?",
      "Mit mondanék egy barátomnak ebben a helyzetben?",
      "Mi lenne egy kicsit reálisabb gondolat?"
    ]
  }),
  isPro = false
}) {
  const [step, setStep] = useState(1);
  const [analysis, setAnalysis] = useState(null);
  const [question, setQuestion] = useState(null);
  const [closed, setClosed] = useState(false);

  const selectThought = (t) => {
    const result = analyzeThought(t.key);
    setAnalysis(result);
    setStep(2);
  };

  const selectQuestion = (q) => {
    setQuestion(q);
    setClosed(true);
  };

  return (
    <div className="w-full min-h-screen bg-white">

      <SEO
        title="Gondolati minta felismerés – Érzelmi Ösztönkód"
        description="Interaktív önreflexiós eszköz a visszatérő gondolati minták felismeréséhez. Segít tudatosítani az automatikus reakciókat és új nézőpontokat találni."
        canonical="https://www.osztonkod.hu/gondolati-minta-felismeres"
        image="https://www.osztonkod.hu/og-image.jpg"
      />


      {/* MAX WIDTH WRAPPER */}
      <div className="px-6 py-24 max-w-xl mx-auto">

        {/* PAGE TITLE – NEM A KÁRTYÁBAN */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Gondolati minta felismerés – önreflexiós eszköz
        </motion.h1>

        <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
          Ez az eszköz segít felismerni a gyakran visszatérő gondolati mintákat,
          és új nézőpontokat találni az automatikus reakciók mögött.
          </p>

        {/* TOOL CARD */}
        <div className="w-full bg-white/90 backdrop-blur-xl border border-green-200 shadow-xl rounded-3xl p-10 space-y-6">

          {/* STEP 1 */}
          {step === 1 && (
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-green-600 text-center">
                Melyik gondolat ismerős most?
              </h2>

              <p className="text-sm text-center text-gray-500">
                Nem kell elmagyaráznod. Elég, ha felismered.
              </p>

              <div className="grid gap-3">
                {THOUGHTS.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => selectThought(t)}
                    className="py-3 px-4 rounded-2xl border border-green-100 bg-white hover:bg-green-100 hover:border-green-300 hover:shadow-sm text-gray-700 transition"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.section
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {analysis.analysis}
              </p>

              <div className="space-y-2">
                {analysis.questions.map((q) => (
                  <button
                    key={q}
                    onClick={() => selectQuestion(q)}
                    disabled={closed}
                    className={`
                      w-full text-left py-3 px-4 rounded-xl border
                      ${question === q
                        ? "bg-green-50 border-green-300"
                        : "bg-white border-green-100 hover:bg-green-50"}
                      text-gray-700 transition
                    `}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {closed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-4 text-center space-y-2"
                >
                  <p className="text-sm text-green-600">
                    Rendben. Ennyi most elég.
                  </p>
                  <p className="text-xs text-gray-500">
                    Ha szeretnéd, később visszatérhetsz hozzá.
                  </p>
                </motion.div>
              )}

              {!isPro && closed && (
                <p className="text-xs text-center text-gray-500 pt-2">
                  Gondolatok mentése és visszanézése a teljes verzióban érhető el
                </p>
              )}
            </motion.section>
          )}

          {/* CTA BLOKK */}
          {closed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 pt-4 border-t border-green-200 text-center space-y-3"
            >
              <p className="text-sm text-gray-600 italic">
                Az ilyen felismerések segítenek megérteni,
                hogy az automatikus reakcióknak belső logikájuk van.
              </p>

              <p className="text-sm text-gray-500 italic">
                Ha szeretnéd feltérképezni, mi történik benned ezekben a helyzetekben,
                létezik egy strukturált, 7 napos önreflexiós út ehhez.
              </p>

              <div className="pt-4">
                <Link
                  to="/products/reaction-program"
                  className="inline-block px-6 py-2.5 rounded-xl text-base font-semibold
                  bg-green-600 hover:bg-green-700 text-white
                  shadow-md transition transform hover:scale-[1.03]"
                >
                  Tovább a 7 napos elemzéshez →
                </Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* LEGAL NOTICE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-yellow-100/90 backdrop-blur-xl border border-yellow-500 text-yellow-800 p-6 rounded-xl shadow-lg leading-relaxed"
        >
          <strong>Jogi nyilatkozat:</strong>
          <p className="mt-2">
            Ez az eszköz önreflexióra szolgál.
            Nem minősül pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
          </p>
          <p className="mt-3">
            Nem helyettesíti szakember felkeresését.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
