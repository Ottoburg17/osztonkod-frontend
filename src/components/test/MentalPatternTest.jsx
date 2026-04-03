// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence} from "framer-motion";
import { useEffect } from "react";
import { TEST_QUESTIONS, CATEGORY_LABELS } from "../../data/testQuestions";
import { useTestEngine } from "../../hooks/useTestEngine";

const SCALE = [1, 2, 3, 4, 5];

export default function MentalPatternTest() {
  const engine = useTestEngine(TEST_QUESTIONS);

  // ⌨️ KEYBOARD SUPPORT
  useEffect(() => {
    const handler = (e) => {
      const num = Number(e.key);

      if (SCALE.includes(num)) {
        engine.answer(num);
      }

      if (e.key === "ArrowLeft") {
        engine.goBack();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [engine]);

  // 👉 SWIPE
  const handleDragEnd = (_, info) => {
    if (info.offset.x > 120) engine.answer(5);
    if (info.offset.x < -120) engine.answer(1);
  };

  // 🏁 RESULT SCREEN
  if (engine.isDone) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Eredményed</h2>

        {engine.results.map(([category, score]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 rounded-2xl shadow"
          >
            <h3 className="text-lg font-semibold">
              {CATEGORY_LABELS[category]}
            </h3>

            <p className="text-sm text-gray-500">
              Pontszám: {score}
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Ez a mintázat erősen jelen van az életedben.
            </p>
          </motion.div>
        ))}

        <button
          onClick={engine.reset}
          className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:opacity-90"
        >
          Újrakezdés
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 select-none">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={engine.goBack}
          className="text-sm opacity-60 hover:opacity-100"
        >
          ← Vissza
        </button>

        <span className="text-sm opacity-60">
          {engine.step + 1} / {engine.total}
        </span>
      </div>

      {/* PROGRESS */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="bg-black h-2"
          animate={{ width: `${engine.progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* QUESTION CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={engine.step}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -30 }}
          transition={{ duration: 0.25 }}
          className="p-8 rounded-3xl shadow-xl text-center bg-white"
        >
          <h2 className="text-xl mb-8 leading-relaxed">
            {engine.current?.text}
          </h2>

          {/* SCALE */}
          <div className="flex justify-between">
            {SCALE.map((n) => (
              <motion.button
                key={n}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => engine.answer(n)}
                className="w-12 h-12 rounded-full bg-black text-white"
              >
                {n}
              </motion.button>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Húzd jobbra = 5, balra = 1
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}