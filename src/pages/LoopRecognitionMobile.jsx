import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

/* =========================
   KÉRDÉSEK – LOOP LOGIKA
========================= */
const QUESTIONS = [
  {
    id: 1,
    title: "Munka / teljesítmény",
    question: "Mi itt az inger?",
    options: [
      "Megfelelési vágy",
      "Plusz feladat felajánlása",
      "Düh",
      "Kényszer"
    ],
    correct: "Plusz feladat felajánlása",
    explanation:
      "Az inger mindig külső esemény. A megfelelési vágy belső hajlam, nem kiváltó ok."
  },
  {
    id: 2,
    title: "Munka / teljesítmény",
    question: "Mi az ismétlődő érzés?",
    options: [
      "Meg kell felelnem",
      "Feszültség / testi szorítás",
      "Düh",
      "Kényszer"
    ],
    correct: "Feszültség / testi szorítás",
    explanation:
      "Az érzés testi–érzelmi állapot. A „meg kell felelnem” gondolat, nem érzés."
  },
  {
    id: 3,
    title: "Kapcsolat / konfliktus",
    question: "A hallgatás megoldás vagy stresszcsökkentés?",
    options: [
      "Megoldás",
      "Stresszcsökkentés",
      "Konfliktuskezelés",
      "Önértékelés javítása"
    ],
    correct: "Stresszcsökkentés",
    explanation:
      "Az idegrendszer az azonnali megkönnyebbülést tanulja, nem a hosszú távú következményeket."
  },
  {
    id: 4,
    title: "Pénz / önérték",
    question: "Mi erősíti fel a loopot?",
    options: [
      "A bűntudat",
      "Az igen mondás",
      "Az azonnali feszültségcsökkenés",
      "Mások elvárása"
    ],
    correct: "Az azonnali feszültségcsökkenés",
    explanation:
      "Nem a viselkedés a jutalom, hanem az állapotváltozás: a feszültség csökkenése."
  }
];

/* =========================
   OPCIÓ RÁCS
========================= */
const OptionGrid = ({ options, onSelect }) => (
  <div className="grid grid-cols-1 gap-3">
    {options.map((opt) => (
      <motion.button
        key={opt}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onSelect(opt)}
        className="
          py-3 px-4 rounded-2xl
          border border-green-100
          bg-white
          hover:bg-green-50
          hover:border-green-300
          text-gray-700
          transition
        "
      >
        {opt}
      </motion.button>
    ))}
  </div>
);

/* =========================
   FŐ KOMPONENS
========================= */
export default function LoopRecognitionMobile() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = QUESTIONS[step];
  const finished = step >= QUESTIONS.length;

  return (
    <div className="w-full min-h-screen bg-white px-4 py-24">

      <div className="max-w-2xl mx-auto">

       <SEO
        title="Loop felismerés – Viselkedési minták felismerése | Érzelmi Ösztönkód"
        description="Interaktív önreflexiós eszköz a viselkedési loopok felismeréséhez. Ismerd fel, hogyan alakul ki a trigger–érzés–viselkedés ciklus."
        canonical="https://www.osztonkod.hu/loop-felismeres"
        image="https://www.osztonkod.hu/og-image.jpg"
      />

        {/* CÍM – KÁRTYÁN KÍVÜL */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Viselkedési Loop felismerés
        </motion.h1>

        <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
          A loop egy ismétlődő belső ciklus: egy helyzet kivált egy érzést,
          az érzés pedig egy megszokott reakcióhoz vezet.
          Ha ez a kör gyakran ismétlődik, a reakció automatikussá válik.
          Ez az eszköz segít felismerni, hogyan működik ez a minta.
        </p>

        {/* FŐ KÁRTYA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white/90 backdrop-blur-xl
            border border-green-200
            shadow-xl
            rounded-3xl
            p-8
            space-y-6
          "
        >

          <p className="text-base md:text-lg text-gray-500 text-center tracking-wide">
            Nem teszt. Csak rálátás.
          </p>

          <AnimatePresence mode="wait">
            {!finished && (
              <motion.section
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <p className="text-xs uppercase tracking-wide text-gray-400 text-center">
                  {current.title}
                </p>

                <p className="text-lg text-center font-medium">
                  {current.question}
                </p>

                <OptionGrid
                  options={current.options}
                  onSelect={(value) => {
                    setAnswers({ ...answers, [current.id]: value });
                    setStep(step + 1);
                  }}
                />
              </motion.section>
            )}
          </AnimatePresence>

          {finished && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 text-sm text-gray-700"
            >
              <h2 className="text-xl font-bold text-center">
                Összegzés
              </h2>

              {QUESTIONS.map((q, index) => {
                const user = answers[q.id];
                const ok = user === q.correct;

                return (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-4 rounded-2xl border ${
                      ok
                        ? "border-green-400 bg-green-50"
                        : "border-blue-300 bg-blue-50"
                    }`}
                  >
                    <p className="font-medium">{q.question}</p>
                    <p><strong>Válaszod:</strong> {user}</p>
                    <p><strong>Loop szempontból:</strong> {q.correct}</p>
                    <p className="italic text-xs mt-2">
                      {q.explanation}
                    </p>
                  </motion.div>
                );
              })}
            </motion.section>
          )}

        </motion.div>

        {/* WARNING – KÁRTYÁN KÍVÜL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-12
            bg-yellow-100/90
            border border-yellow-500
            text-yellow-800
            p-6
            rounded-xl
            shadow-sm
            text-sm
          "
        >
          <strong>Jogi nyilatkozat:</strong>
          <p className="mt-2">
            Az oldalon található tartalom edukációs és önreflexiós célt szolgál.
            Nem minősül pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
          </p>
          <p className="mt-2">
            Az eszköz nem nyújt diagnózist, kezelést vagy tanácsadást,
            és nem helyettesíti szakember felkeresését.
          </p>
        </motion.div>

      </div>
    </div>
  );
}