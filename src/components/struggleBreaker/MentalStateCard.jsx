import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import api from "../../api/axios";

export default function MentalStateCard() {
  const [data, setData] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    api.get("/struggle-breaker/mental-state")
      .then(res => setData(res.data))
      .catch(() => {});
  }, []);

  if (!data) return null;

  const colorMap = {
    reactive: "text-red-400",
    avoidant: "text-yellow-400",
    overdriven: "text-orange-400",
    balanced: "text-emerald-400",
    recovering: "text-blue-400",
  };

  const stateDescriptions = {
    reactive: "Erős érzelmi aktiváció és magas elkerülési minta jellemzi ezt az időszakot.",
    avoidant: "Az elkerülési reakciók dominánsabbak lehetnek ezen a héten.",
    overdriven: "Magas intenzitás, alacsony megszakítási siker – túlpörgött működés.",
    balanced: "Stabil, kiegyensúlyozott érzelmi működés jellemző.",
    recovering: "Jó megszakítási arány és pozitív energiamérleg – erősödő kontroll."
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        max-w-2xl mx-auto mt-20
        p-8 rounded-3xl
        bg-black/40
        border border-white/10
        backdrop-blur-xl
        text-white
      "
    >
      <h3 className="text-xl font-semibold mb-4">
        Aktuális Mentális Mód
      </h3>

      {/* Állapot */}
      <div className={`text-2xl font-bold ${colorMap[data.state]}`}>
        {data.state.toUpperCase()}
      </div>

      {/* Állapot magyarázat */}
      <p className="mt-3 text-sm text-white/70">
        {stateDescriptions[data.state]}
      </p>

      {/* Statisztika */}
      <div className="mt-6 text-sm text-white/70 space-y-2">
        <div>Átlag érzelmi intenzitás: {data.avgIntensity}/10</div>
        <div>Átlag elkerülési szint: {data.avgAvoidance}/10</div>
        <div>Megszakítási sikerarány: {data.successRate}%</div>
        <div>Energia egyenleg: {data.energyBalance}</div>
      </div>

      {/* Javaslat */}
      <div className="mt-6 p-4 bg-white/5 rounded-xl text-sm">
        <strong>Javaslat:</strong> {data.suggestion}
      </div>

      {/* Információ toggle */}
      <div className="mt-6">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="text-xs text-white hover:text-white transition"
        >
          {showInfo ? "− Kevesebb információ" : "+ Hogyan számoljuk ezt?"}
        </button>

        {showInfo && (
          <div className="mt-3 text-xs text-white leading-relaxed">
            Ez az állapot az aktuális hét adatai alapján számolódik:
            <br />• érzelmi intenzitás
            <br />• elkerülési minta
            <br />• megszakítási sikerarány
            <br />• energia változás
            <br /><br />
            Ez nem diagnózis vagy címke, hanem egy pillanatnyi működési mintázat.
          </div>
        )}
      </div>
    </motion.div>
  );
}
