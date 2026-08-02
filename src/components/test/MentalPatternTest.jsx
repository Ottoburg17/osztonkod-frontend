// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import WelcomeScreen from "./WelcomeScreen";


import { TEST_QUESTIONS } from "../../data/testQuestions";
import { useTestEngine } from "../../hooks/useTestEngine";
import { CATEGORY_INSIGHTS } from "../../data/testResults";



const SCALE = [1, 2, 3, 4, 5];

export default function MentalPatternTest() {
  const engine = useTestEngine(TEST_QUESTIONS);
  const [started, setStarted] = useState(false);

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
  
   if (!started) {
  return <WelcomeScreen onStart={() => setStarted(true)} />;
}


   
  // 🏁 RESULT SCREEN (PRO)
  if (engine.isDone) {
    return (
      <div className="min-h-screen
          bg-gradient-to-br
          from-green-50
          via-emerald-100
          to-green-200
          px-4
          pt-28
          pb-10
          relative
          overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-emerald-400 opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-green-300 opacity-20 blur-[120px] rounded-full" />

        <div className="max-w-2xl mx-auto w-full relative z-10">

          <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-6">
            Ez határozza meg leginkább a működésed
          </h2>

          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            Az elemzésed alapján ez a három legerősebb érzelmi minta,
            amely jelenleg a legnagyobb hatással van a döntéseidre és kapcsolataidra.
          </p>

          {engine.results.map(([category], index) => {
            const insight = CATEGORY_INSIGHTS[category];
            if (!insight) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 p-6 rounded-3xl 
                bg-white/90 backdrop-blur-xl 
                border border-green-200 shadow-xl text-left"
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

          <div className="flex justify-center mt-2">
            <button
              onClick={engine.reset}
              className="
                px-8
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                transition-all
                duration-200
              "
            >
              Újrakezdés
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 🧠 QUESTION UI (PRO)
  return (
    <div className="min-h-screen
          bg-gradient-to-br
          from-green-50
          via-emerald-100
          to-green-200
          px-4
          pt-28
          pb-10
          relative
          overflow-hidden
          select-none">

      {/* GLOW */}
      <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-emerald-400 opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-green-300 opacity-20 blur-[120px] rounded-full" />

      <div className="max-w-2xl mx-auto w-full relative z-10">

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
            bg-white/90 backdrop-blur-xl 
            border border-green-200
            shadow-xl text-center"
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

