import { useEffect, useState } from "react";
import api from "../api/axios";
import { useDopamineCycle } from "../hooks/useDopamineCycle";

import { CycleStatusCard } from "../components/CycleStatusCard";
import DailyFocusCard from "../components/DailyFocusCard";
import DailyCheckInForm from "../components/DailyCheckInForm";
import StreakProgress from "../components/StreakProgress";
import WeeklySummaryCard from "../components/WeeklySummaryCard";
import SeventhDayReflectionCard from "../components/SeventhDayReflectionCard";
import PatternInsightCard from "../components/PatternInsightCard";
import MonthlyMirrorCard from "../components/MonthlyMirrorCard";

export default function DopamineCyclePage() {
  /* 🎨 OLDALSPECIFIKUS HÁTTÉR */
  useEffect(() => {
    document.body.classList.add("dopamine-cycle-page");
    return () => {
      document.body.classList.remove("dopamine-cycle-page");
    };
  }, []);

  /* 🌀 CIKLUS ÁLLAPOT + FUNKCIÓK */
  const {
    state,
    loading,
    checkIn,
    acknowledge,
    hasCheckedInToday,
    getWeeklyMirror,
  } = useDopamineCycle();

 

  /* 🪞 HETI TÜKÖR */
  const [weeklyMirror, setWeeklyMirror] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadWeeklyMirror() {
      const text = await getWeeklyMirror();
      if (mounted) setWeeklyMirror(text);
    }

    loadWeeklyMirror();
    return () => {
      mounted = false;
    };
  }, [getWeeklyMirror]);

  /* 📊 HETI ÖSSZKÉP */
  const [weeklySummary, setWeeklySummary] = useState(null);

  useEffect(() => {
    api
      .get("/dopamine-cycle/weekly-summary")
      .then((res) => setWeeklySummary(res.data))
      .catch(() => setWeeklySummary(null));
  }, []);

  /* 🧭 NAPI FÓKUSZ */
  const [prompt, setPrompt] = useState(null);
  const [promptLoading, setPromptLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPromptLoading(true);

    api
      .get("/dopamine-cycle/daily-prompt")
      .then((res) => mounted && setPrompt(res.data))
      .catch(() => mounted && setPrompt(null))
      .finally(() => mounted && setPromptLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  /* ⏳ BETÖLTÉS */
  if (loading) {
    return (
      <div className="pt-32 text-center text-gray-500">
        Állapot betöltése…
      </div>
    );
  }

  /* 🧠 SPECIÁLIS NAPOK LOGIKÁJA */
  const isSeventhDay = state?.day === 7;

  const showPatternInsight =
    state?.day >= 10 &&
    state?.day <= 14 &&
    weeklySummary?.hasData;

  const isMonthlyMirrorDay =
    state?.day >= 30 && weeklySummary?.hasData;

     return (
  <div className="min-h-screen bg-emerald-50">

    {/* HERO HEADER */}
    <div className="bg-gradient-to-b from-emerald-100 to-emerald-50 border-b border-emerald-200">
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16 text-center space-y-4">

        <h1 className="text-3xl md:text-4xl font-semibold text-emerald-900 tracking-tight">
          🌀 Dopamin-ciklus
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Megfigyelés. Nem teljesítmény.
          Egy 30 napos jelenlét-gyakorlat, amely segít észrevenni a mintáidat.
        </p>

      </div>
    </div>

    
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10">

        {/* 🔁 CIKLUS ÁLLAPOT */}
        <CycleStatusCard state={state} />

        {/* 🔥 STREAK */}
        <StreakProgress streak={state.streak} />

        {/* 🪞 FINOM HETI TÜKÖR */}
        {weeklyMirror && !isSeventhDay && !isMonthlyMirrorDay && (
          <div className="bg-white border border-emerald-200 rounded-xl p-6 text-center text-gray-700">
            <p className="italic">{weeklyMirror}</p>
            <p className="text-xs text-gray-400 mt-3">
              Ez nem elemzés és nem tanács. Csak visszatükrözés abból, amit te rögzítettél.
            </p>
          </div>
        )}

        {/* 🌱 7. NAP – MEGTARTÓ ÉLMÉNY */}
        {isSeventhDay && (
          <SeventhDayReflectionCard
            onContinue={() => {
              console.log("7. nap lezárva");
            }}
          />
        )}

        {/* 🔁 10–14. NAP – ISMÉTLŐDŐ MINTÁZAT */}
        {!isSeventhDay && !isMonthlyMirrorDay && showPatternInsight && (
          <PatternInsightCard
            pattern={{
              body: weeklySummary.mostCommonBody,
              intensity: weeklySummary.avgIntensity,
              checkins: weeklySummary.checkins,
            }}
          />
        )}

        {/* 🪞 30. NAP – HAVI TÜKÖR */}
        {isMonthlyMirrorDay && (
          <MonthlyMirrorCard
            summary={weeklyMirror}
            pattern={
              weeklySummary?.mostCommonBody
                ? `Leggyakrabban a(z) ${weeklySummary.mostCommonBody.toLowerCase()} területén jelent meg feszültség.`
                : null
            }
            onContinue={() => {
              console.log("Havi tükör lezárva");
            }}
          />
        )}

        {/* 📊 HETI ÖSSZKÉP */}
        {!isSeventhDay && !isMonthlyMirrorDay && (
          <WeeklySummaryCard summary={weeklySummary} />
        )}

        {/* 🧠 NAPI FÓKUSZ */}
        {!isSeventhDay && !isMonthlyMirrorDay && (
          promptLoading ? (
            <div className="text-center text-gray-500">
              Napi fókusz betöltése…
            </div>
          ) : prompt ? (
            <DailyFocusCard
              day={prompt.day}
              title={prompt.title}
              text={prompt.text}
              category={prompt.category}
              disclaimer={prompt.disclaimer}
              acknowledgedToday={state.acknowledgedToday}
              onAcknowledge={acknowledge}
            />
          ) : (
            <div className="bg-white rounded-xl p-6 text-center text-gray-500">
              Ma nincs elérhető fókusz.
            </div>
          )
        )}

        {/* 📝 CHECK-IN */}
        {!isSeventhDay && !isMonthlyMirrorDay && (
          !hasCheckedInToday ? (
            <DailyCheckInForm onSubmit={checkIn} />
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-700 font-medium">
              ✔ A mai check-in már rögzítve van
            </div>
          )
        )}

      </div>
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <p className="text-sm text-gray-500 text-center leading-relaxed">
          Az eszközök önreflexiós és edukációs célúak.
          Nem minősülnek egészségügyi vagy pszichológiai szolgáltatásnak,
          és nem helyettesítik szakemberrel való konzultációt.
        </p>
      </div>

    </div>
  );
}