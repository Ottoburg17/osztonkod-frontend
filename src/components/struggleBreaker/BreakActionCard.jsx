import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  "strategy",
  "awareness",
  "energyBefore",
  "energyAfter"
];

export default function BreakActionCard({ triggerId, onBreak }) {

  const [stepIndex, setStepIndex] = useState(0);

  const [strategy, setStrategy] = useState("");
  const [awareness, setAwareness] = useState(5);
  const [energyBefore, setEnergyBefore] = useState(50);
  const [energyAfter, setEnergyAfter] = useState(60);

  const next = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const back = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const submit = async () => {

    const energyDelta = energyAfter - energyBefore;

    await onBreak({
      triggerId,
      wasSuccessful: energyDelta > 0,
      energyDelta,
      strategy,
      awarenessLevel: awareness,
      energyBefore,
      energyAfter
    });

    // reset
    setStrategy("");
    setAwareness(5);
    setEnergyBefore(50);
    setEnergyAfter(60);
    setStepIndex(0);
  };

  const currentStep = steps[stepIndex];
  const energyDelta = energyAfter - energyBefore;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        max-w-2xl
        mx-auto
        mt-16
        p-8
        rounded-3xl
        bg-gradient-to-br from-emerald-900/40 to-emerald-800/30
        backdrop-blur-xl
        border border-emerald-400/20
        text-white
      "
    >
      <h3 className="text-2xl font-semibold mb-2 text-emerald-200">
        Ciklus megszakítása
      </h3>

      <p className="text-sm text-white/60 mb-8">
        Most nézzük meg, hogyan sikerült megszakítanod az automatikus reakciót.
      </p>

      <AnimatePresence mode="wait">

        {/* 1️⃣ STRATEGY */}
        {currentStep === "strategy" && (
          <Step key="strategy" title="Milyen stratégiát használtál?">

            <p className="text-sm text-white/60 mb-4">
              Mit tettél konkrétan, hogy ne automatikusan reagálj?
            </p>

            <textarea
              value={strategy}
              onChange={(e) => setStrategy(e.target.value)}
              placeholder="Pl. vettem 3 mély levegőt, kiléptem a helyzetből, tudatosan lassítottam..."
              className="w-full min-h-[110px] p-4 rounded-2xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 resize-none text-white placeholder-white/40"
            />

            <NavButtons back={back} next={next} disabled={!strategy.trim()} />
          </Step>
        )}

        {/* 2️⃣ AWARENESS */}
        {currentStep === "awareness" && (
          <Step key="awareness" title={`Mennyire voltál tudatos? (${awareness}/10)`}>

            <p className="text-sm text-white/60 mb-4">
              1 = teljesen automatikus reakció  
              10 = teljesen tudatos döntés
            </p>

            <input
              type="range"
              min="1"
              max="10"
              value={awareness}
              onChange={(e) => setAwareness(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />

            <NavButtons back={back} next={next} />
          </Step>
        )}

        {/* 3️⃣ ENERGY BEFORE */}
        {currentStep === "energyBefore" && (
          <Step key="before" title={`Energia előtte (${energyBefore}%)`}>

            <p className="text-sm text-white/60 mb-4">
              Mennyire voltál energetikailag feltöltött vagy kimerült a helyzet előtt?
            </p>

            <input
              type="range"
              min="0"
              max="100"
              value={energyBefore}
              onChange={(e) => setEnergyBefore(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />

            <NavButtons back={back} next={next} />
          </Step>
        )}

        {/* 4️⃣ ENERGY AFTER */}
        {currentStep === "energyAfter" && (
          <Step key="after" title={`Energia utána (${energyAfter}%)`}>

            <p className="text-sm text-white/60 mb-4">
              A megszakítás után változott az energiaszinted?
            </p>

            <input
              type="range"
              min="0"
              max="100"
              value={energyAfter}
              onChange={(e) => setEnergyAfter(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />

            {/* 🔥 FEEDBACK */}
            <div className="mt-4 text-sm">
              {energyDelta > 0 && (
                <span className="text-emerald-400">
                  Pozitív energia elmozdulás (+{energyDelta})
                </span>
              )}
              {energyDelta === 0 && (
                <span className="text-yellow-400">
                  Nem történt energia változás
                </span>
              )}
              {energyDelta < 0 && (
                <span className="text-red-400">
                  Energia csökkenés ({energyDelta})
                </span>
              )}
            </div>

            <NavButtons back={back} next={submit} final />
          </Step>
        )}

      </AnimatePresence>
    </motion.div>
  );
}

function Step({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-xl text-emerald-300 mb-6">{title}</h4>
      {children}
    </motion.div>
  );
}

function NavButtons({ back, next, disabled, final }) {
  return (
    <div className="flex gap-4 mt-6">
      {back && (
        <button
          onClick={back}
          className="flex-1 py-3 rounded-2xl bg-black/40 text-white"
        >
          ← Vissza
        </button>
      )}

      <button
        onClick={next}
        disabled={disabled}
        className="flex-1 py-3 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        {final ? "Rögzítés" : "Tovább →"}
      </button>
    </div>
  );
}
