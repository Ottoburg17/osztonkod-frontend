export default function StreakProgress({ streak = 0, max = 30 }) {
  const percent = Math.min((streak / max) * 100, 100);

  const getMessage = () => {
    if (streak === 0) {
      return "Ma kezdődött a megfigyelési folyamat.";
    }
    if (streak === 1) {
      return "1 napja figyeled, mi történik benned.";
    }
    if (streak < 5) {
      return `${streak} napja jelen vagy a megfigyelésben.`;
    }
    if (streak < 14) {
      return "Egyre ismerősebbek lehetnek a belső minták.";
    }
    return "A megfigyelés már természetes része lett a napjaidnak.";
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-4 border border-emerald-200">

      {/* FEJLÉC */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-800">
          🌱 Megfigyelési folyamat
        </h4>

        <span className="text-xs text-gray-500">
          elmúlt {streak} nap
        </span>
      </div>

      {/* PROGRESS BAR – NEM NYOMÁS */}
      <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* EMBERI ÜZENET */}
      <p className="text-sm text-emerald-700">
        {getMessage()}
      </p>

      {/* MEGNYUGTATÁS */}
      <p className="text-xs text-gray-500">
        Ez nem teljesítmény. Ha kimarad egy nap, a folyamat nem szakad meg.
      </p>
    </div>
  );
}