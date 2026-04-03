// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { TEST_QUESTIONS } from "../../data/testQuestions";
import { useTestEngine } from "../../hooks/useTestEngine";
import { CATEGORY_INSIGHTS } from "../../data/testResults";

const SCALE = [1, 2, 3, 4, 5];

export default function MentalPatternTest() {
  const engine = useTestEngine(TEST_QUESTIONS);

  // ⌨️ KEYBOARD
  useEffect(() => {
    const handler = (e) => {
      const num = Number(e.key);

      if (SCALE.includes(num)) engine.answer(num);
      if (e.key === "ArrowLeft") engine.goBack();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [engine]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 120) engine.answer(5);
    if (info.offset.x < -120) engine.answer(1);
  };

  // 🏁 RESULT SCREEN (PRO)
  if (engine.isDone) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 
      bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 relative overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-emerald-400 opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-green-300 opacity-20 blur-[120px] rounded-full" />

        <div className="max-w-xl w-full z-10 text-center">

          <h2 className="text-3xl font-bold mb-8 text-green-700">
            Ez határozza meg leginkább a működésed
          </h2>

          {engine.results.map(([category], index) => {
            const insight = CATEGORY_INSIGHTS[category];
            if (!insight) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 p-6 rounded-2xl 
                bg-white/80 backdrop-blur-md 
                border border-white/40 shadow-xl text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {insight.title}
                </h3>

                <p className="text-gray-600 text-sm mb-2">
                  {insight.description}
                </p>

                <p className="text-green-700 text-sm font-medium">
                  {insight.impact}
                </p>
              </motion.div>
            );
          })}

          <button
            onClick={engine.reset}
            className="mt-8 px-8 py-3 rounded-2xl 
            bg-gradient-to-r from-green-500 to-emerald-600 
            text-white font-semibold shadow-lg 
            hover:scale-105 hover:shadow-xl 
            transition-all duration-200"
          >
            Újrakezdés
          </button>
        </div>
      </div>
    );
  }

  // 🧠 QUESTION UI (PRO)
  return (
    <div className="min-h-screen flex items-center justify-center px-4 
    bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 relative overflow-hidden select-none">

      {/* GLOW */}
      <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-emerald-400 opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-green-300 opacity-20 blur-[120px] rounded-full" />

      <div className="max-w-xl w-full z-10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 text-gray-600">
          <button
            onClick={engine.goBack}
            className="text-sm hover:opacity-100 opacity-60"
          >
            ← Vissza
          </button>

          <span className="text-sm">
            {engine.step + 1} / {engine.total}
          </span>
        </div>

        {/* PROGRESS */}
        <div className="w-full bg-white/40 h-2 rounded-full mb-8 overflow-hidden backdrop-blur">
          <motion.div
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2"
            animate={{ width: `${engine.progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* CARD */}
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
            className="p-8 rounded-3xl 
            bg-white/80 backdrop-blur-md 
            border border-white/40 
            shadow-2xl text-center"
          >
            <h2 className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-gray-800">
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
                  className="w-12 h-12 rounded-full 
                  bg-gradient-to-br from-green-500 to-emerald-600 
                  text-white shadow-lg 
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
                  transition-all duration-200"
                >
                  {n}
                </motion.button>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Húzd jobbra = 5, balra = 1
            </p>

            <p className="mt-2 text-xs text-gray-400">
              Nincs jó vagy rossz válasz — csak őszinte
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}