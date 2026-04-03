import { useEffect, useState } from "react";

const STORAGE_KEY = "mental-pattern-test";

export function useTestEngine(questions) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const total = questions.length;
  const current = questions[step];

  // 🔁 LOAD
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStep(parsed.step || 0);
        setAnswers(parsed.answers || {});
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // 💾 SAVE
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ step, answers })
    );
  }, [step, answers]);

  // ✅ ANSWER
  const answer = (value) => {
    if (!current) return;

    setAnswers(prev => ({
      ...prev,
      [current.category]: (prev[current.category] || 0) + value
    }));

    setStep(prev => prev + 1);
  };

  // 🔙 BACK
  const goBack = () => {
    if (step === 0) return;

    const prevQuestion = questions[step - 1];

    setAnswers(prev => {
      const updated = { ...prev };

      if (prevQuestion) {
        updated[prevQuestion.category] =
          (updated[prevQuestion.category] || 0) - 1;
      }

      return updated;
    });

    setStep(prev => prev - 1);
  };

  // 🔄 RESET
  const reset = () => {
    setStep(0);
    setAnswers({});
    localStorage.removeItem(STORAGE_KEY);
  };

  // 🏆 RESULTS
  const results = Object.entries(answers)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return {
    step,
    total,
    current,
    progress: (step / total) * 100,
    answer,
    goBack,
    reset,
    isDone: step >= total,
    results
  };
}