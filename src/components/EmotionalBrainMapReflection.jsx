import React, { useState, useEffect } from "react";
import { OBSERVATION_EXERCISES } from "../data/emotionalbrainmapExercises";

function EmotionalBrainMapReflection({ instinct, fear, avoidance }) {
  const exercise =
    OBSERVATION_EXERCISES[fear] ||
    OBSERVATION_EXERCISES[avoidance];

  const storageKey = `brainmap_reflection_${instinct}`;

  const [answers, setAnswers] = useState([]);
  const [lastSaved, setLastSaved] = useState(null);
  const [flashSaved, setFlashSaved] = useState(false);

  // 🔄 Betöltés
  useEffect(() => {
    if (!exercise) return;

    const stored = JSON.parse(localStorage.getItem(storageKey));

    if (stored?.answers) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnswers(stored.answers);
      setLastSaved(stored);
    } else {
      setAnswers(new Array(exercise.prompts.length).fill(""));
    }
  }, [storageKey, exercise]);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSave = () => {
    const payload = {
      date: new Date().toISOString(),
      answers
    };

    localStorage.setItem(storageKey, JSON.stringify(payload));
    setLastSaved(payload);

    setFlashSaved(true);
    setTimeout(() => setFlashSaved(false), 2000);
  };

  if (!exercise) return null;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm space-y-8">

      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Személyes reflexió
        </p>

        <h4 className="font-semibold text-emerald-700">
          {exercise.title}
        </h4>
      </div>

      {/* PROMPTOK */}
      <div className="space-y-6">
        {exercise.prompts.map((prompt, index) => (
          <div key={index} className="space-y-2">
            <p className="text-sm text-gray-700 font-medium">
              {prompt}
            </p>

            <textarea
              value={answers[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 text-sm
                         focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300
                         outline-none transition"
              rows={3}
            />
          </div>
        ))}
      </div>

      {/* SAVE BUTTON */}
      <div className="flex flex-col items-center space-y-2 pt-2">
        <button
          onClick={handleSave}
          className="bg-emerald-600 hover:bg-emerald-700
                     text-white px-6 py-2 rounded-xl text-sm
                     transition"
        >
          Mentés
        </button>

        {flashSaved && (
          <p className="text-sm text-emerald-600 animate-pulse">
            ✓ Mentve
          </p>
        )}

        {lastSaved && (
          <p className="text-xs text-gray-400">
            Utolsó mentés: {new Date(lastSaved.date).toLocaleString()}
          </p>
        )}
      </div>

      {/* ============================= */}
      {/* 🟢 MENTETT VÁLASZOK BLOKK */}
      {/* ============================= */}
      {lastSaved && (
        <div className="mt-4 bg-emerald-50 border border-emerald-200 p-5 rounded-xl space-y-6">

          <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">
            Mentett válaszaid
          </p>

          {lastSaved.answers.map((answer, index) => (
            <div key={index} className="space-y-2">
              <p className="text-sm font-medium text-gray-600">
                {exercise.prompts[index]}
              </p>

              <div className="bg-white border border-emerald-100 p-3 rounded-lg text-sm text-gray-800 whitespace-pre-line">
                {answer || <span className="text-gray-400 italic">Nincs kitöltve</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmotionalBrainMapReflection;