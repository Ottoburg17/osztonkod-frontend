export default function MonthlyMirrorCard({
  summary,
  pattern,
  onContinue,
}) {
  return (
    <div className="bg-white border border-emerald-300 rounded-2xl p-8 space-y-6 shadow">

      {/* FEJLÉC */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-emerald-700">
          🪞 Havi visszatükrözés
        </h2>

        <p className="text-sm text-gray-500">
          30 nap megfigyelés után
        </p>
      </div>

      {/* FŐ TÜKÖR */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-gray-700 italic text-center">
        {summary}
      </div>

      {/* MINTÁZAT */}
      {pattern && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-800">
            🔁 Leggyakrabban visszatérő minta
          </h4>

          <p className="text-gray-700 text-sm">
            <strong>{pattern}</strong>
          </p>

          <p className="text-xs text-gray-500">
            Ez nem hiba, nem probléma – hanem működés.
          </p>
        </div>
      )}

      {/* TANULÁS */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-800">
          🧭 Amit most már tudsz magadról
        </h4>

        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>A reakcióid nem véletlenszerűek</li>
          <li>A tested hamarabb jelez, mint a gondolataid</li>
          <li>A megfigyelés önmagában csökkenti az intenzitást</li>
        </ul>
      </div>

      {/* LEZÁRÁS */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600 text-center">
        Ez a ciklus nem lezárult.  
        Mostantól tudod, mit érdemes észrevenni.
      </div>

      {/* FOLYTATÁS */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onContinue}
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition"
        >
          Folytatom a megfigyelést →
        </button>
      </div>

      {/* FOOTNOTE */}
      <p className="text-xs text-gray-400 text-center pt-2">
        Ez nem elemzés és nem tanács.  
        Csak visszatükrözés abból, amit te rögzítettél.
      </p>
    </div>
  );
}
