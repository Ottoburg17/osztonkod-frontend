import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { schemas } from "../pages/Perception"; // exportáld onnan

export default function MyPatterns() {
  const navigate = useNavigate();

  const patternData = useMemo(() => {
    const results = [];

    schemas.forEach(schema => {
      const regulation = JSON.parse(
        localStorage.getItem(`schema_log_${schema.id}`) || "[]"
      );

      const journal = JSON.parse(
        localStorage.getItem(`schema_journal_${schema.id}`) || "null"
      );

      const impact = JSON.parse(
        localStorage.getItem(`impact_reflection_${schema.id}`) || "null"
      );

      if (regulation.length || journal || impact) {
        const avg =
          regulation.length
            ? (
                regulation.reduce((acc, curr) => acc + curr.intensity, 0) /
                regulation.length
              ).toFixed(1)
            : null;

        results.push({
          ...schema,
          entries: regulation.length,
          avgIntensity: avg,
          lastDate:
            regulation[regulation.length - 1]?.date ||
            journal?.date ||
            impact?.date
        });
      }
    });

    return results.sort((a, b) =>
      new Date(b.lastDate) - new Date(a.lastDate)
    );
  }, []);

  const totalEntries = patternData.reduce(
    (acc, p) => acc + p.entries,
    0
  );

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">

        <h1 className="text-3xl font-semibold text-emerald-600">
          Saját mintázataim
        </h1>

        {/* 🧠 ÖSSZEGZÉS BLOKK */}
        {patternData.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
              <p className="text-sm text-gray-500">Aktív minták</p>
              <p className="text-2xl font-semibold text-emerald-700">
                {patternData.length}
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
              <p className="text-sm text-gray-500">Összes bejegyzés</p>
              <p className="text-2xl font-semibold text-emerald-700">
                {totalEntries}
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
              <p className="text-sm text-gray-500">Legutóbbi aktivitás</p>
              <p className="text-sm text-gray-700">
                {new Date(patternData[0].lastDate).toLocaleString()}
              </p>
            </div>
          </div>
        )}

        {/* 📦 KÁRTYÁK */}
        {patternData.length === 0 && (
          <p className="text-gray-500">
            Még nincs mentett munkád.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {patternData.map(pattern => (
            <div
              key={pattern.id}
              className="p-6 rounded-2xl border border-emerald-200 bg-white shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  {pattern.icon}
                </div>
                <h3 className="font-medium text-gray-800">
                  {pattern.name}
                </h3>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p>Aktiváció bejegyzések: {pattern.entries}</p>

                {pattern.avgIntensity && (
                  <>
                    <p>Átlagos intenzitás: {pattern.avgIntensity}/10</p>

                    <div className="w-full bg-emerald-100 h-2 rounded-full">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{
                          width: `${pattern.avgIntensity * 10}%`
                        }}
                      />
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={() =>
                  navigate(`/perception?schema=${pattern.id}`)
                }
                className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition text-sm"
              >
                Megnyitás
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}