export default function PatternInsightCard({ pattern }) {
  if (!pattern) return null;

  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 space-y-4">
      
      <h3 className="text-lg font-semibold text-indigo-700">
        🔁 Ismétlődő mintázat
      </h3>

      <p className="text-sm text-indigo-700">
        Az elmúlt napok megfigyelései alapján
        bizonyos helyzetek többször hasonló módon jelentek meg.
      </p>

      <div className="bg-white rounded-xl border p-4 space-y-2 text-sm text-gray-700">
        {pattern.trigger && (
          <p>
            🧠 Gyakori helyzet:{" "}
            <strong>{pattern.trigger}</strong>
          </p>
        )}

        {pattern.body && (
          <p>
            🧍 Testi jelzés:{" "}
            <strong>{pattern.body}</strong>
          </p>
        )}

        {pattern.intensity && (
          <p>
            🌡️ Jellemző intenzitás:{" "}
            <strong>{pattern.intensity}/5</strong>
          </p>
        )}
      </div>

      <p className="text-xs text-indigo-600 italic">
        Ez nem elemzés és nem tanács.
        Csak annak a visszatükrözése, amit te rögzítettél.
      </p>

      <p className="text-sm text-indigo-700 font-medium">
        Nem kell változtatnod rajta.
        Elég, ha észreveszed.
      </p>
    </div>
  );
}