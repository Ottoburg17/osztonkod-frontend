import React, { useState, useEffect } from "react";

export default function RegulationModule({ schema }) {
  const [intensity, setIntensity] = useState(5);
  const [trigger, setTrigger] = useState("");
  const [thought, setThought] = useState("");
  const [emotion, setEmotion] = useState("");
  const [body, setBody] = useState("");
  const [reframe, setReframe] = useState("");
  const [action, setAction] = useState("");

  const [saved, setSaved] = useState(false);
  const [lastEntry, setLastEntry] = useState(null);

  const storageKey = `schema_log_${schema.id}`;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (data.length) {
      const last = data[data.length - 1];
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLastEntry(last);
      setIntensity(last.intensity || 5);
      setTrigger(last.trigger || "");
      setThought(last.thought || "");
      setEmotion(last.emotion || "");
      setBody(last.body || "");
      setReframe(last.reframe || "");
      setAction(last.action || "");
    }
  }, [schema.id]);

  const saveEntry = () => {
    const previous = JSON.parse(localStorage.getItem(storageKey) || "[]");

    const entry = {
      date: new Date().toISOString(),
      intensity,
      trigger,
      thought,
      emotion,
      body,
      reframe,
      action
    };

    localStorage.setItem(storageKey, JSON.stringify([...previous, entry]));

    setLastEntry(entry);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-6">

      <h3 className="font-semibold text-green-700">
        Aktiváció felismerése és szabályozása
      </h3>

      <Slider intensity={intensity} setIntensity={setIntensity} />

      <Textarea label="Mi váltotta ki?" value={trigger} setValue={setTrigger} />
      <Textarea label="Mi volt az első automatikus gondolat?" value={thought} setValue={setThought} />
      <Textarea label="Milyen érzelem volt jelen?" value={emotion} setValue={setEmotion} />
      <Textarea label="Mit éreztél a testedben?" value={body} setValue={setBody} />
      <Textarea label="Mi lehetne egy kiegyensúlyozottabb gondolat?" value={reframe} setValue={setReframe} />
      <Textarea label="Mit tehetsz most, ami segít?" value={action} setValue={setAction} />

      <div className="flex justify-center">
      <button
        onClick={saveEntry}
        className="bg-green-600 text-white px-6 py-2 rounded-xl"
      >
        Mentés
      </button>
    </div>

      {saved && (
        <p className="text-sm text-emerald-700">
          Bejegyzés mentve ✔
        </p>
      )}

      {lastEntry && (
        <div className="bg-white p-4 rounded-xl border border-emerald-200 text-sm space-y-2">
          <p className="font-medium">Utolsó mentés</p>
          <p><strong>Trigger:</strong> {lastEntry.trigger}</p>
          <p><strong>Érzelem:</strong> {lastEntry.emotion}</p>
          <p><strong>Test:</strong> {lastEntry.body}</p>
          <p><strong>Gondolat:</strong> {lastEntry.thought}</p>
          <p><strong>Átkeretezés:</strong> {lastEntry.reframe}</p>
          <p><strong>Akció:</strong> {lastEntry.action}</p>
          <p><strong>Intenzitás:</strong> {lastEntry.intensity}/10</p>
        </div>
      )}
    </div>
  );
}

function Textarea({ label, value, setValue }) {
  return (
    <div>
      <p className="text-sm mb-2">{label}</p>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 rounded-xl border border-emerald-200 text-sm"
        rows={2}
      />
    </div>
  );
}

function Slider({ intensity, setIntensity }) {
  return (
    <div>
      <p className="text-sm mb-2">Mennyire erős most ez a minta? (1–10)</p>
      <input
        type="range"
        min="1"
        max="10"
        value={intensity}
        onChange={(e) => setIntensity(Number(e.target.value))}
        className="w-full"
      />
      <div className="text-center font-medium mt-1">
        {intensity}/10
      </div>
    </div>
  );
}