import React, { useEffect, useState } from "react";

export default function SchemaJournal({ schema }) {
  const storageKey = `schema_journal_${schema.id}`;

  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEntry(parsed.text || "");
      setLastSaved(parsed);
    }
  }, [storageKey]);

  const handleSave = () => {
    if (!entry.trim()) return;

    const payload = {
      text: entry,
      date: new Date().toISOString()
    };

    localStorage.setItem(storageKey, JSON.stringify(payload));
    setLastSaved(payload);

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="mt-6 p-6 rounded-2xl border border-emerald-200 bg-emerald-50 space-y-4">

      <h3 className="text-md font-semibold text-green-700">
        Szabad naplózás
      </h3>

      {/* INSPIRÁCIÓS KÉRDÉSEK */}
      {schema.journalingPrompts && (
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          {schema.journalingPrompts.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      )}

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Írd le a gondolataidat..."
        rows={6}
        className="
          w-full
          p-4
          rounded-xl
          border border-emerald-200
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-400/40
        "
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
        <p className="text-sm text-green-600">
          Bejegyzés mentve ✔
        </p>
      )}

      {/* UTOLSÓ MENTÉS */}
      {lastSaved && (
        <div className="bg-white p-4 rounded-xl border border-emerald-200 text-sm space-y-2">
          <p className="font-medium text-gray-700">
            Utolsó mentés
          </p>

          <p className="whitespace-pre-wrap">
            {lastSaved.text}
          </p>

          <p className="text-xs text-gray-400 pt-2">
            Mentve: {new Date(lastSaved.date).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}