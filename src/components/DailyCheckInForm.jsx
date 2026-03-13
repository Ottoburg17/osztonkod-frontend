import { useState } from "react";

const BODY_OPTIONS = [
  "Fej",
  "Mellkas",
  "Gyomor",
  "Kéz / láb",
  "Teljes test",
];

export default function DailyCheckInForm({ onSubmit, disabled }) {
  const [trigger, setTrigger] = useState("");
  const [beforeAction, setBeforeAction] = useState("");
  const [notes, setNotes] = useState("");
  const [afterEffect, setAfterEffect] = useState("");
  const [nowNotice, setNowNotice] = useState("");

  const [intensity, setIntensity] = useState(3);
  const [bodySignals, setBodySignals] = useState([]);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(null);

  const toggleBody = (part) => {
    setBodySignals((prev) =>
      prev.includes(part)
        ? prev.filter((p) => p !== part)
        : [...prev, part]
    );
  };

  const handleSubmit = async () => {
    if (saving || disabled) return;

    setSaving(true);
    setError(null);

    const success = await onSubmit({
      trigger: trigger || null,
      notes: {
        observation: notes || null,
        beforeAction: beforeAction || null,
        afterEffect: afterEffect || null,
        nowNotice: nowNotice || null,
      },
      bodySignals,
      intensity,
    });

    if (success) {
      setSaved(true);
    } else {
      setError("Hiba történt a mentés során. Próbáld újra.");
      setSaving(false);
    }
  };

  /* ===============================
     ✅ SIKERES MENTÉS UTÁN
     =============================== */
  if (saved) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-700 font-medium space-y-2">
        <div>✔ A mai megfigyelés rögzítve</div>
        <div className="text-xs text-emerald-700">
          Ez csak rólad szól. Nincs jó vagy rossz válasz.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-7 border border-emerald-200">
      <h3 className="text-lg font-semibold text-gray-800">
        Mai megfigyelés
      </h3>

      {/* 🔹 1. MI TÖRTÉNT */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Mi váltotta ki?
        </p>
        <input
          type="text"
          className="w-full border rounded-lg p-3 text-sm border-emerald-300"
          placeholder="Egy helyzet, gondolat vagy esemény (opcionális)"
          value={trigger}
          onChange={(e) => setTrigger(e.target.value)}
          disabled={disabled || saving}
        />
        <p className="text-xs text-gray-500">
          Akkor is rendben van, ha nem tudod pontosan megfogalmazni.
        </p>
      </div>

      {/* 🔹 2. ELŐTTE MIT CSINÁLTÁL */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Mit csináltál közvetlenül előtte?
        </p>
        <input
          type="text"
          className="w-full border rounded-lg p-3 text-sm border-emerald-300"
          placeholder="pl. görgetés, beszélgetés, munka, várakozás… (opcionális)"
          value={beforeAction}
          onChange={(e) => setBeforeAction(e.target.value)}
          disabled={disabled || saving}
        />
      </div>

      {/* 🔹 3. MEGFIGYELÉS */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Mit vettél észre magadon?
        </p>
        <textarea
          className="w-full border rounded-lg p-3 text-sm border-emerald-300"
          rows={3}
          placeholder="Érzetek, gondolatok, belső reakciók…"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          disabled={disabled || saving}
        />
      </div>

      {/* 🔹 4. TESTI JELZÉSEK */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Hol érezted a legerősebben?
        </p>
        <div className="flex flex-wrap gap-2">
          {BODY_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => toggleBody(opt)}
              disabled={disabled || saving}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                bodySignals.includes(opt)
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-gray-700"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 5. INTENZITÁS */}
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-700">
          Mennyire volt erős? <strong>{intensity}</strong>
        </p>
        <input
          type="range"
          min={1}
          max={5}
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          disabled={disabled || saving}
          className="w-full"
        />
      </div>

      {/* 🔹 6. LECSENGÉS */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Mi változott benned pár perccel később?
        </p>
        <textarea
          className="w-full border rounded-lg p-3 text-sm border-emerald-300"
          rows={2}
          placeholder="Ugyanaz maradt, csökkent, átalakult… (opcionális)"
          value={afterEffect}
          onChange={(e) => setAfterEffect(e.target.value)}
          disabled={disabled || saving}
        />
      </div>

      {/* 🔹 7. MOST */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Ha most megállsz egy pillanatra, mit veszel észre?
        </p>
        <textarea
          className="w-full border rounded-lg p-3 text-sm border-emerald-300"
          rows={2}
          placeholder="Akár csak egy szó is elég…"
          value={nowNotice}
          onChange={(e) => setNowNotice(e.target.value)}
          disabled={disabled || saving}
        />
      </div>

      {/* ⚖️ MICROCOPY */}
      <p className="text-xs text-gray-500">
        Nincs elvárás. Ez nem elemzés és nem teljesítmény – csak megfigyelés.
      </p>

      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* ✅ CTA */}
      <div className="flex justify-center pt-2">
        <button
          onClick={handleSubmit}
          disabled={disabled || saving}
          className="px-8 py-2.5 text-base bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white rounded-xl font-medium transition"
        >
          {saving ? "Rögzítés..." : "Kész"}
        </button>
      </div>
    </div>
  );
}
