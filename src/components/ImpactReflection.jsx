import React, { useEffect, useState } from "react";

export default function ImpactReflection({ schema }) {
  const storageKey = `impact_reflection_${schema.id}`;

  const [areas, setAreas] = useState("");
  const [loss, setLoss] = useState("");
  const [protection, setProtection] = useState("");
  const [origin, setOrigin] = useState("");
  const [need, setNeed] = useState("");
  const [alternative, setAlternative] = useState("");

  const [saved, setSaved] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const parsed = JSON.parse(stored);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAreas(parsed.areas || "");
      setLoss(parsed.loss || "");
      setProtection(parsed.protection || "");
      setOrigin(parsed.origin || "");
      setNeed(parsed.need || "");
      setAlternative(parsed.alternative || "");
      setLastSaved(parsed);
    }
  }, [storageKey]);

  const handleSave = () => {
    const payload = {
      areas,
      loss,
      protection,
      origin,
      need,
      alternative,
      date: new Date().toISOString()
    };

    localStorage.setItem(storageKey, JSON.stringify(payload));
    setLastSaved(payload);

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="mt-6 p-6 rounded-2xl border border-emerald-200 bg-emerald-50 space-y-5">

      <h3 className="text-md font-semibold text-green-700">
        Hatás tudatosítása
      </h3>

      <Textarea
        label="Hol jelenik meg ez a mintád az életedben?"
        value={areas}
        onChange={setAreas}
      />

      <Textarea
        label="Mit veszítesz ezzel a működéssel?"
        value={loss}
        onChange={setLoss}
      />

      <Textarea
        label="Mit próbál megvédeni benned ez a minta?"
        value={protection}
        onChange={setProtection}
      />

      <Textarea
        label="Mikor tanultad meg ezt a működést?"
        value={origin}
        onChange={setOrigin}
      />

      <Textarea
        label="Milyen szükségleted nem teljesül ilyenkor?"
        value={need}
        onChange={setNeed}
      />

      <Textarea
        label="Mi lehetne egy apróbb, egészségesebb válaszreakció?"
        value={alternative}
        onChange={setAlternative}
      />

      <div className="flex justify-center">
      <button
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
      >
        Mentés
      </button>
      </div>

      {saved && (
        <p className="text-sm text-emerald-600">
          Reflexió mentve ✔
        </p>
      )}

      {lastSaved && (
        <div className="bg-white p-4 rounded-xl border border-emerald-200 text-sm space-y-2">
          <p className="font-medium text-gray-700">Utolsó mentés</p>

          <p><strong>Életterület:</strong> {lastSaved.areas}</p>
          <p><strong>Veszteség:</strong> {lastSaved.loss}</p>
          <p><strong>Védelem:</strong> {lastSaved.protection}</p>
          <p><strong>Eredet:</strong> {lastSaved.origin}</p>
          <p><strong>Szükséglet:</strong> {lastSaved.need}</p>
          <p><strong>Alternatíva:</strong> {lastSaved.alternative}</p>

          <p className="text-xs text-gray-400 pt-2">
            Mentve: {new Date(lastSaved.date).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

/* 🔹 Kis újrahasznosítható textarea komponens */
function Textarea({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 p-3 rounded-xl border border-emerald-200"
        rows={3}
      />
    </div>
  );
}