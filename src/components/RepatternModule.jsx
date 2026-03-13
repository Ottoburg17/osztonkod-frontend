
import { useEffect, useState, useRef, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const STORAGE_KEY = "brainmap_repattern_history";

/* ============================= */
/* 🧠 TORZÍTÁS DEFINÍCIÓK */
/* ============================= */

const PATTERNS = {
  catastrophizing: {
    label: "Negatív kimenetelre fókusz",
    description:
      "Az első értelmezések gyakran a negatív kimenetel felé tolódnak.",
    keywords: [
      "katasztrófa",
      "összeomlik",
      "borzalmas",
      "elviselhetetlen",
      "szörnyű",
    ],
  },
  mindReading: {
    label: "Mások szándékának feltételezése",
    description:
      "Feltételezés arról, mit gondol vagy érez a másik.",
    keywords: [
      "biztos azt gondolja",
      "tudom hogy ő",
      "nyilván ő",
      "biztos utál",
    ],
  },
  blackWhite: {
    label: "Szélsőséges értelmezés",
    description:
      "Szélsőséges, minden vagy semmi értelmezés.",
    keywords: ["mindig", "soha", "mindenki", "senki"],
  },
  emotionalReasoning: {
    label: "Érzés-alapú következtetés",
    description:
      "Az érzés tényként való kezelése.",
    keywords: [
      "úgy érzem tehát",
      "érzem hogy ez igaz",
      "mivel félek",
    ],
  },
};

export default function RepatternModule({ region }) {
  const [situation, setSituation] = useState("");
  const [prediction, setPrediction] = useState("");
  const [outcome, setOutcome] = useState("");
  const [differenceReflection, setDifferenceReflection] =
    useState("");
  const [nextAction, setNextAction] = useState("");

  const [predictionStrength, setPredictionStrength] =
    useState(5);
  const [outcomeStrength, setOutcomeStrength] =
    useState(5);

  const [experimentActive, setExperimentActive] =
    useState(false);
  const [countdown, setCountdown] = useState(10);
  const [history, setHistory] = useState([]);

  const intervalRef = useRef(null);

  /* ============================= */
  /* LOAD */
  /* ============================= */

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  /* ============================= */
  /* SAVE */
  /* ============================= */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(history)
    );
  }, [history]);

  /* ============================= */
  /* COUNTDOWN */
  /* ============================= */

  useEffect(() => {
    if (!experimentActive) return;

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setExperimentActive(false);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () =>
      clearInterval(intervalRef.current);
  }, [experimentActive]);

  /* ============================= */
  /* SAVE ENTRY */
  /* ============================= */

  const handleSave = () => {
    if (
      !situation.trim() ||
      !prediction.trim() ||
      !outcome.trim()
    )
      return;

    const entry = {
      id: Date.now(),
      region,
      situation: situation.trim(),
      prediction: prediction.trim(),
      outcome: outcome.trim(),
      differenceReflection:
        differenceReflection.trim(),
      nextAction: nextAction.trim(),
      predictionStrength,
      outcomeStrength,
      timestamp: new Date().toISOString(),
    };

    setHistory((prev) => [entry, ...prev]);

    setSituation("");
    setPrediction("");
    setOutcome("");
    setDifferenceReflection("");
    setNextAction("");
    setPredictionStrength(5);
    setOutcomeStrength(5);
  };

  /* ============================= */
  /* REGION FILTER */
  /* ============================= */

  const regionHistory = useMemo(
    () =>
      history.filter(
        (h) => h.region === region
      ),
    [history, region]
  );

  const total = regionHistory.length;

  const avgMismatch =
    total > 0
      ? Math.round(
          regionHistory.reduce(
            (sum, h) =>
              sum +
              Math.abs(
                h.predictionStrength -
                  h.outcomeStrength
              ),
            0
          ) / total
        )
      : 0;

  /* ============================= */
  /* TREND */
  /* ============================= */

  const trend = useMemo(() => {
    if (regionHistory.length < 5) return null;

    const lastFive =
      regionHistory.slice(0, 5);

    const avg =
      lastFive.reduce(
        (sum, h) =>
          sum +
          Math.abs(
            h.predictionStrength -
              h.outcomeStrength
          ),
        0
      ) / 5;

    if (avg < 2) return "javul";
    if (avg < 4) return "stabil";
    return "erős eltérés";
  }, [regionHistory]);

  /* ============================= */
  /* DOMINÁNS TORZÍTÁS */
  /* ============================= */

  const dominantPattern = useMemo(() => {
    if (regionHistory.length < 3 || avgMismatch <= 2)
      return null;

    const scores = {};

    regionHistory.forEach((entry) => {
      const text =
        entry.prediction.toLowerCase();

      Object.entries(PATTERNS).forEach(
        ([key, pattern]) => {
          pattern.keywords.forEach(
            (word) => {
              if (text.includes(word)) {
                scores[key] =
                  (scores[key] || 0) + 1;
              }
            }
          );

          const mismatch = Math.abs(
            entry.predictionStrength -
              entry.outcomeStrength
          );

          if (mismatch >= 4) {
            scores[key] =
              (scores[key] || 0) + 0.5;
          }
        }
      );
    });

    if (!Object.keys(scores).length)
      return null;

    const dominantKey =
      Object.entries(scores).sort(
        (a, b) => b[1] - a[1]
      )[0][0];

    return PATTERNS[dominantKey];

  }, [regionHistory, avgMismatch]);

  /* ============================= */
  /* CHART DATA */
  /* ============================= */

  const chartData = useMemo(() => {
    return regionHistory
      .slice(0, 10)
      .reverse()
      .map((entry, index) => ({
        attempt: index + 1,
        mismatch: Math.abs(
          entry.predictionStrength -
            entry.outcomeStrength
        ),
      }));
  }, [regionHistory]);

  // eslint-disable-next-line no-unused-vars
  const handleDelete = (id) => {
    setHistory((prev) =>
      prev.filter((h) => h.id !== id)
    );
  };

  /* ============================= */
  /* UI */
  /* ============================= */

  return (
    <div className="mt-8 border-t pt-6">

      <h3 className="text-lg font-semibold mb-4">
        Minta-átíró rendszer
      </h3>

       <label className="text-sm font-medium block mb-1">
        1. Mi történt konkrétan? 
       </label>

       <p className="text-xs text-gray-500 mb-2">
        Csak a külső eseményt írd le, értelmezés és érzés nélkül.
       </p>

      <textarea
        value={situation}
        onChange={(e) =>
          setSituation(e.target.value)
        }
        placeholder="Pl.: 'A főnököm nem válaszolt az e-mailemre 4 órán át.'"
        className="w-full border rounded-lg p-2 mb-4"
      />



      {/* 2. Jóslat */}

      <label className="text-sm font-medium block mb-1">
        2. Mi volt az első gondolatod?
      </label>

      <textarea
        value={prediction}
        onChange={(e) =>
          setPrediction(e.target.value)
        }
        placeholder="Pl.: 'Biztos haragszik rám.'"
        className="w-full border rounded-lg p-2 mb-2"
      />

      <label className="text-xs block mb-2">
        Első reakció intenzitása:{" "}
        {predictionStrength}
      </label>

      <input
        type="range"
        min="1"
        max="10"
        value={predictionStrength}
        onChange={(e) =>
          setPredictionStrength(
            Number(e.target.value)
          )
        }
        className="w-full mb-4"
      />

      <div className="mb-6 flex flex-col items-center text-center">

         <p className="text-xs text-gray-500 max-w-md mb-4">
          A 10 másodperces szünet segít megszakítani az automatikus reakciót.
          Nem kell semmit „jól csinálni”.
          Csak figyeld meg a testedben megjelenő feszültséget,
          és engedd, hogy lecsengjen.
        </p>

        <button
          onClick={() => setExperimentActive(true)}
          disabled={experimentActive}
          className="
            bg-emerald-600
            hover:bg-emerald-700
            active:scale-[0.98]
            transition
            text-white
            px-6
            py-4
            rounded-lg
            text-sm
            font-medium
            disabled:opacity-50
          "
        >
          {experimentActive
            ? `Szünet: ${countdown}s`
            : "Kísérlet: 10 mp szünet"}
        </button>
        
        {experimentActive && (
          <p className="text-emerald-700 text-xs mt-3">
            Lélegezz lassan. Nem kell reagálnod.
          </p>
        )}
                
      </div>



      {/* 3. Valóság*/}

      <label className="text-sm font-medium block mb-1">
        3. Mi történt valójában?
      </label>

      <textarea
        value={outcome}
        onChange={(e) =>
          setOutcome(e.target.value)
        }
        placeholder="Pl.: 'Este visszaírt, hogy egész nap meetingelt.'"
        className="w-full border rounded-lg p-2 mb-2"
      />

      <label className="text-xs block mb-2">
        Tényleges helyzet intenzitása:{" "}
        {outcomeStrength}
      </label>


      <input
        type="range"
        min="1"
        max="10"
        value={outcomeStrength}
        onChange={(e) =>
          setOutcomeStrength(
            Number(e.target.value)
          )
        }
        className="w-full mb-4"
      />


      {/* 4. Reflexió*/}

     <label className="text-sm font-medium block mb-1">
      4. Mi volt a legnagyobb különbség? 
     </label>

      <textarea
        value={differenceReflection}
        onChange={(e) =>
          setDifferenceReflection(
            e.target.value
          )
        }
        placeholder="Pl.: Azt hittem, hogy elutasítanak, de csak elfoglalt volt. "
        className="w-full border rounded-lg p-2 mb-3"
      />


      {/*5. Következő lépés */}

      <label className="text-sm font-medium block mb-1">
         5. Mit csinálsz legközelebb másképp?
      </label>

      <textarea
        value={nextAction}
        onChange={(e) =>
          setNextAction(e.target.value)
        }
        placeholder="Pl.: Várok 24 órát mielőtt következtetést vonok le."
        className="w-full border rounded-lg p-2 mb-4"
      />

      <div className="mt-4 flex justify-center">
        <button
          onClick={handleSave}
          className="
            w-full sm:w-auto
            bg-indigo-600
            hover:bg-indigo-700
            active:scale-[0.98]
            transition
            text-white
            px-8
            py-4
            rounded-lg
            text-sm
            font-medium
            shadow-sm
          "
        >
          Mentés
        </button>
      </div>

      {/* ====== VISSZAJELZÉS BLOKK ====== */}

      {total > 0 && total < 3 && (
        <div className="p-4 mt-2 bg-gray-50 rounded-lg border mb-6 text-sm">
          <p><strong>Kísérletek:</strong> {total}</p>
          <p className="text-gray-600 mt-1">
            Még kevés adat van a mintázat felismeréséhez.
            Írj le még néhány helyzetet.
          </p>
        </div>
      )}

      {total >= 3 && (
        <div className="p-4 bg-gray-50 rounded-lg border mb-6 text-sm">
          <p><strong>Kísérletek:</strong> {total}</p>
          <p><strong>Átlagos eltérés:</strong> {avgMismatch}</p>

          <p className="mt-2 text-gray-700">
            {avgMismatch <= 2 && 
              "Az első reakcióid többnyire arányosak a tényleges helyzettel."}

            {avgMismatch > 2 && avgMismatch <= 4 &&
              "Az első reakcióid időnként erősebbek, mint amit a helyzet végül indokolt."}

            {avgMismatch > 4 &&
              "Az első reakcióid gyakran jelentősen erősebbek, mint a tényleges kimenetel." }
          </p>

          {trend && (
            <p className="mt-2">
              <strong>Trend:</strong>{" "}
              {trend === "javul" && "Csökken az eltérés – fejlődés látható."}
              {trend === "stabil" && "Stabil mintázat."}
              {trend === "erős eltérés" && "Az eltérés még jelentős - érdemes tovább figyelni."}
            </p>
          )}
        </div>
      )}


      {total >= 3 && (
        <div className="bg-white p-4 rounded-xl border mb-6">
          <ResponsiveContainer
            width="100%"
            height={250}
          >
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="attempt" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="mismatch"
                stroke="#6366f1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {dominantPattern && avgMismatch > 2 && (
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-6">
          <h4 className="text-sm font-semibold text-amber-800 mb-2">
           Megfigyelt visszatérő minta
          </h4>

          <p className="text-amber-900 font-medium mb-1">
            {dominantPattern.label}
          </p>

          <p className="text-amber-800 text-sm mb-3">
            {dominantPattern.description}
          </p>

          <p className="text-xs text-amber-700">
            Ez nem pszichológiai elemzés.
            Csak az általad rögzített adatok alapján látható ismétlődő irány.
          </p>
        </div>
      )}

    </div>
  );
}

