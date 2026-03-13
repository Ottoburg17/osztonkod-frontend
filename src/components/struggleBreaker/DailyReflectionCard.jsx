import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function DailyReflectionCard({ sessionId, onSave }) {
  const [insight, setInsight] = useState("");
  const [pattern, setPattern] = useState("");
  const [tomorrowShift, setTomorrowShift] = useState("");
  const [energyScore, setEnergyScore] = useState(5);
  const [saving, setSaving] = useState(false);

  const submit = async () => {
    if (!insight.trim()) return;

    setSaving(true);

    await onSave({
      sessionId,
      dayNumber: 1,
      reflectionText: insight,
      energyScore,
      patternRecognized: pattern,
      lesson: insight,
      nextCorrection: tomorrowShift
    });

    setTimeout(() => {
      setInsight("");
      setPattern("");
      setTomorrowShift("");
      setEnergyScore(5);
      setSaving(false);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        max-w-2xl mx-auto mt-20
        p-8 rounded-3xl
        bg-gradient-to-br from-emerald-900/40 to-black/40
        backdrop-blur-xl
        border border-emerald-400/20
        shadow-[0_0_80px_rgba(0,255,170,0.08)]
        text-white
      "
    >
      <h3 className="text-2xl font-semibold text-emerald-200 mb-8">
        Napi integráció
      </h3>

      {/* 1. Felismerés */}
      <Section
        label="Mi volt ma a legfontosabb felismerésed?"
        value={insight}
        setValue={setInsight}
        helper="Mi az a gondolat vagy minta, amit ma tisztábban láttál?"
        example="Példa: Rájöttem, hogy túl gyorsan védekezem kritikánál."
      />

      {/* 2. Mintafelismerés */}
      <Section
        label="Milyen ismétlődő mintát vettél észre?"
        value={pattern}
        setValue={setPattern}
        helper="Volt visszatérő gondolat, érzelem vagy reakció?"
        example="Példa: Kritikánál automatikusan bezárkózom."
      />

      {/* 3. Holnapi elmozdulás */}
      <Section
        label="Mit csinálnál legközelebb tudatosabban?"
        value={tomorrowShift}
        setValue={setTomorrowShift}
        helper="Mi lenne egy apró, tudatosabb reakció a jövőben?"
        example="Példa: Először veszek 3 mély levegőt válaszadás előtt."
      />

      {/* Energia */}
      <div className="mt-10">
        <div className="flex justify-between text-sm text-emerald-200 mb-2">
          <span>Mai energiaszint</span>
          <span className="font-semibold">{energyScore}/10</span>
        </div>

        <input
          type="range"
          min="1"
          max="10"
          value={energyScore}
          onChange={(e) => setEnergyScore(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />

        <div className="flex justify-between text-xs text-white/50 mt-2">
          <span>Kimerült</span>
          <span>Kiegyensúlyozott</span>
          <span>Energikus</span>
        </div>
      </div>

      {/* Gomb */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={submit}
        disabled={saving}
        className={`
          w-full mt-12 py-4 rounded-2xl font-semibold transition
          ${
            saving
              ? "bg-emerald-700/60 cursor-not-allowed"
              : "bg-emerald-500 hover:bg-emerald-400 text-emerald-900"
          }
        `}
      >
        {saving ? "Integrálás..." : "Napi lezárás"}
      </motion.button>
    </motion.div>
  );
}

/* =========================
   Reusable Section Component
========================= */

function Section({ label, value, setValue, helper, example }) {
  return (
    <div className="mb-8">
      <label className="text-sm text-emerald-100/70 block mb-2">
        {label}
      </label>

      {helper && (
        <p className="text-sm text-white/60 mb-2">
          {helper}
        </p>
      )}

      {example && !value && (
        <div className="text-xs text-white/50 mb-3">
          {example}
        </div>
      )}

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Írd le röviden..."
        className="
          w-full min-h-[100px] p-4
          rounded-2xl bg-black/30
          border border-white/10
          focus:outline-none focus:ring-2
          focus:ring-emerald-400/40
          resize-none
          text-white placeholder-white/40
        "
      />
    </div>
  );
}
