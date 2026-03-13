export default function WeeklySummaryCard({ summary }) {
  if (!summary?.hasData) return null;

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">

      {/* FEJLÉC */}
      <h4 className="font-semibold text-emerald-700 text-lg">
        🪞 Heti visszatükrözés
      </h4>

      {/* FŐ ÜZENET */}
      <p className="text-sm text-gray-700">
        Az elmúlt napokban ezek a minták jelentek meg a megfigyeléseidben.
        Ez nem elemzés, nem értékelés – csak visszatükrözés abból,
        amit te rögzítettél.
      </p>

      {/* MEGFIGYELÉSEK */}
      <div className="bg-white rounded-xl border border-emerald-200 p-4 space-y-2 text-sm text-gray-700">

        <p>
          📅 <strong>{summary.checkins}</strong> alkalommal figyelted meg magad.
        </p>

        {summary.avgIntensity !== null && (
          <p>
            🌡️ Az átlagos megélt intenzitás{" "}
            <strong>{summary.avgIntensity}/5</strong> volt.
          </p>
        )}

        {summary.mostCommonBody && (
          <p>
            🧍 A legtöbbször itt jelent meg testi jelzés:{" "}
            <strong>{summary.mostCommonBody}</strong>
          </p>
        )}
      </div>

      {/* ÉRTELMEZÉS – EMBERI */}
      <div className="text-sm text-emerald-800 space-y-2">
        <p className="font-medium">
          Mit jelent ez?
        </p>

        <p>
          Ezek a minták nem „jók” vagy „rosszak”.
          Csak azt mutatják, hogy mire reagált a tested és az idegrendszered
          az elmúlt napokban.
        </p>

        <p className="text-xs text-emerald-700">
          Nem kell változtatnod semmin.  
          Már az is számít, hogy észrevetted.
        </p>
      </div>
    </div>
  );
}
