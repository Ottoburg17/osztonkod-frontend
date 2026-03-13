import { useState } from "react";
import { CHANGE_PROTOCOLS } from "../data/changeProtocol";

export default function GrowthModule({ instinct }) {
  const protocol = CHANGE_PROTOCOLS[instinct];

  const [phase, setPhase] = useState(1);
  const [intensity, setIntensity] = useState(5);
  const [selectedShift, setSelectedShift] = useState(null);
  const [selectedSentence, setSelectedSentence] = useState(null);

  if (!protocol) return null;

  const getIntensityText = () => {
    if (intensity <= 3) return protocol.intensityGuide.low;
    if (intensity <= 7) return protocol.intensityGuide.medium;
    return protocol.intensityGuide.high;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 p-10 rounded-3xl shadow-lg space-y-10">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wide text-gray-400">
          Önregulációs modul
        </p>
        <h3 className="text-2xl font-semibold">
          {protocol.title}
        </h3>
      </div>

      {/* PROGRESS INDICATOR */}
      <div className="flex justify-between text-xs font-medium">
        {["Aktiváció", "Eltérés", "Kommunikáció", "Integráció"].map((label, i) => (
          <div
            key={i}
            className={`px-3 py-1 rounded-full ${
              phase === i + 1
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* ================= PHASE 1 ================= */}
      {phase === 1 && (
        <div className="space-y-8">

          <div className="space-y-3">
            <h4 className="font-semibold">
              {protocol.activation.title}
            </h4>

            <ul className="space-y-2 text-sm text-gray-700">
              {protocol.activation.prompts.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm">
              Mennyire erős most az aktiváció? (1–10)
            </p>

            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full"
            />

            <div className="text-center text-lg font-semibold">
              {intensity}/10
            </div>

            <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700">
              {getIntensityText()}
            </div>
          </div>

          <button
            onClick={() => setPhase(2)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl transition"
          >
            Tovább →
          </button>
        </div>
      )}

      {/* ================= PHASE 2 ================= */}
      {phase === 2 && (
        <div className="space-y-8">

          <div className="space-y-2">
            <h4 className="font-semibold">
              {protocol.microShift.title}
            </h4>

            <p className="text-sm text-gray-700">
              {protocol.microShift.description}
            </p>
          </div>

          <div className="space-y-3">
            {protocol.microShift.options.map((o, i) => (
              <button
                key={i}
                onClick={() => setSelectedShift(o)}
                className={`w-full p-4 rounded-xl border transition ${
                  selectedShift === o
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-300 hover:border-emerald-400"
                }`}
              >
                {o}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setPhase(1)}
              className="text-gray-500"
            >
              ← Vissza
            </button>

            <button
              onClick={() => setPhase(3)}
              disabled={!selectedShift}
              className="bg-emerald-600 text-white px-6 py-2 rounded-xl disabled:opacity-40"
            >
              Tovább →
            </button>
          </div>
        </div>
      )}

      {/* ================= PHASE 3 ================= */}
      {phase === 3 && (
        <div className="space-y-8">

          <h4 className="font-semibold">
            {protocol.communication.title}
          </h4>

          <div className="space-y-3">
            {protocol.communication.examples.map((e, i) => (
              <button
                key={i}
                onClick={() => setSelectedSentence(e)}
                className={`w-full p-4 rounded-xl border italic transition ${
                  selectedSentence === e
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-300 hover:border-emerald-400"
                }`}
              >
                {e}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setPhase(2)}
              className="text-gray-500"
            >
              ← Vissza
            </button>

            <button
              onClick={() => setPhase(4)}
              disabled={!selectedSentence}
              className="bg-emerald-600 text-white px-6 py-2 rounded-xl disabled:opacity-40"
            >
              Integráció →
            </button>
          </div>
        </div>
      )}

      {/* ================= PHASE 4 ================= */}
      {phase === 4 && (
        <div className="space-y-8">

          <h4 className="font-semibold">
            Személyes működési irány
          </h4>

          <div className="bg-emerald-50 p-6 rounded-2xl space-y-3 text-sm">
            <p>
              Aktiváció erőssége: <b>{intensity}/10</b>
            </p>

            <p>
              Választott eltérés: <b>{selectedShift}</b>
            </p>

            <p>
              Kipróbálandó mondat: <b>{selectedSentence}</b>
            </p>
          </div>

          {/* REFRAME */}
          <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
            <p className="text-sm font-medium">
              {protocol.reframe.statement}
            </p>
            <p className="text-sm text-gray-600 italic">
              {protocol.reframe.direction}
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Ez a modul önreflexiós és viselkedési kísérlet jellegű.
            Nem helyettesít pszichológiai vagy mentálhigiénés ellátást.
          </p>

        </div>
      )}

    </div>
  );
}