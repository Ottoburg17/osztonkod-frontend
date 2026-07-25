import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";




/* ---- OPCIÓK ---- */
const options = [
  "Stressz a munkahelyen",
  "Konfliktus a családban",
  "Motivációhiány",
  "Időgazdálkodási nehézség",
  "Kommunikációs probléma",
];

/* ---- TIPPEK ---- */
const tips = {
  "Stressz a munkahelyen": [
    "Egyeseknél a rövid szünetek beiktatása összefügghet a terhelés csökkenésével.",
    "A légzés tudatos megfigyelése gyakran megjelenik stresszhelyzetek feldolgozásában.",
    "A munkakörnyezet rendezettsége hatással lehet a közérzetre.",
  ],
  "Konfliktus a családban": [
    "Felmerülhet a nyugodt, tiszteletteljes kommunikáció szerepe.",
    "A másik fél meghallgatása gyakran fontos tényező.",
    "A közös megoldás keresése egy lehetséges irány.",
  ],
  "Motivációhiány": [
    "A rövid távú célok megléte egyeseknél segíti az előrehaladás érzését.",
    "A jutalmazás megjelenhet mint motivációt fenntartó tényező.",
    "A megszokott mintákból való kilépés hatással lehet a lendületre.",
  ],
  "Időgazdálkodási nehézség": [
    "A feladatok írásos áttekintése sokaknál támogatja az átláthatóságot.",
    "A prioritások felismerése befolyásolhatja a terhelés megélését.",
    "Az idő strukturálása különböző módszerekkel történhet.",
  ],
  "Kommunikációs probléma": [
    "Az aktív hallgatás gyakran fontos szerepet kap kapcsolati helyzetekben.",
    "A megfogalmazás tömörsége csökkentheti a félreértések esélyét.",
    "Az érzelmi reakciók tudatosítása hatással lehet a kommunikáció kimenetelére.",
  ],
};

/* ---- FORM ---- */
function PlanForm({ addPlan }) {
  const [selected, setSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) addPlan(selected);
    setSelected("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label className="block mb-2 font-semibold text-green-700">
        Válassz egy problémát:
      </label>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-3 rounded-lg border border-green-200 bg-white shadow-sm"
      >
        <option value="">-- Válassz --</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <div className="flex justify-center mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="px-8 py-3 rounded-2xl text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg transition"
        >
          Hozzáadás
        </motion.button>
      </div>
    </form>
  );
}

/* ---- LISTA ---- */
function PlanList({ plans }) {
  const [visible, setVisible] = useState({});

  if (!plans.length) {
    return (
      <p className="text-center mt-8 text-green-700">
        Nincs kiválasztott probléma.
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-6">
      {plans.map((plan, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 border border-green-200 rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-green-600 tracking-tight mb-10">{plan}</h3>

          <button
            onClick={() =>
              setVisible((v) => ({ ...v, [plan]: !v[plan] }))
            }
            className="bg-green-100 hover:bg-green-200 text-green-900 px-4 py-1 rounded-2xl"
          >
            {visible[plan] ? "Rejtsd el" : "Mutasd"}
          </button>

          {visible[plan] && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4 list-disc list-inside text-gray-700 space-y-1"
            >
              {tips[plan].map((tip, j) => (
                <li key={j}>{tip}</li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ---- FŐ KOMPONENS ---- */
export default function Plan() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  const addPlan = (p) => {
    if (!plans.includes(p)) setPlans([...plans, p]);
  };

  return (
  <div className="w-full min-h-screen bg-white">
   

    <SEO
      title="Viselkedési Navigátor – Ösztönkód önreflexiós eszköz"
      description="Interaktív önreflexiós eszköz a viselkedési minták felismeréséhez. A Viselkedési Navigátor segít megfigyelni stressz-, kommunikációs és motivációs helyzeteket."
      canonical="https://www.osztonkod.hu/viselkedesi-navigator"
      image="https://www.osztonkod.hu/og-image.jpg"
    />



    <div className="px-6 py-24 max-w-4xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-extrabold text-green-600 text-center mb-12"
      >
        Viselkedési Navigátor
      </motion.h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
      A Viselkedési Navigátor egy egyszerű önreflexiós eszköz,
      amely segít megfigyelni a mindennapi helyzetekben megjelenő
      stressz-, kommunikációs és motivációs mintákat.
      </p>

      {/* FEHÉR KÁRTYA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-green-200 shadow-xl rounded-3xl p-10"
      >
        <PlanForm addPlan={addPlan} />
        <PlanList plans={plans} />

        {/* FINOM ÁTIVEZETÉS */}
        <div className="mt-14 border-t pt-8 text-center">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">
            Továbbmélyítés
          </p>

          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Ez az eszköz egy pillanatnyi megállásra segít.
            <br />
            Ha szeretnéd <strong>napi szinten követni</strong>, hogyan alakulnak
            az érzelmi és viselkedési ciklusaid, létezik egy strukturált
            önreflexiós rendszer is.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/products/dopamine-cycle")}
            className="inline-flex items-center px-8 py-4 rounded-2xl
              bg-green-600 text-white font-semibold shadow-lg
              hover:bg-green-700 transition"
          >
            Dopamin-ciklus megismerése →
          </motion.button>

          <p className="text-xs text-gray-400 mt-4">
            Nem kötelező · Nem azonnali döntés · Csak egy lehetőség
          </p>
        </div>
      </motion.div>

      {/* LEGAL NOTICE – MOST MÁR A WRAPPERBEN */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-yellow-100/90 border border-yellow-500 text-yellow-800 p-6 rounded-xl shadow-lg leading-relaxed"
      >
        <strong>Jogi nyilatkozat:</strong>
        <p className="mt-2">
          Az oldalon található tartalom edukációs önreflexiós célt szolgál.
          Nem minősül pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
        </p>
        <p className="mt-3">
          Az eszköz nem nyújt diagnózist, kezelést vagy tanácsadást,
          és nem helyettesíti szakember felkeresését.
        </p>
      </motion.div>

    </div>
  </div>

 
  );
}
