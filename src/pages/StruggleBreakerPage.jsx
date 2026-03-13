import useStruggleBreaker from "../hooks/useStruggleBreaker";
import EnergyCore3D from "../components/struggleBreaker3D/EnergyCore3D";
import TriggerInputCard from "../components/struggleBreaker/TriggerInputCard";
import BreakActionCard from "../components/struggleBreaker/BreakActionCard";
import DailyReflectionCard from "../components/struggleBreaker/DailyReflectionCard";
import MentalStateCard from "../components/struggleBreaker/MentalStateCard";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function StruggleBreakerPage() {
   
   console.log("STRUGGLE BREAKER PAGE MOUNTED");


  const {
    energy,
    currentSessionId,
    lastTriggerId,
    loading,
    addTrigger,
    addBreak,
    saveReflection,
  } = useStruggleBreaker();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Betöltés...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041a15] via-[#02100d] to-black text-white px-6 pt-32">

      {/* ===== HEADLINE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-300">
          StruggleBreaker
        </h1>
        <p className="text-emerald-200/60 mt-4 max-w-xl mx-auto">
          Automatikus reakciók megszakítása. Tudatos energia-visszanyerés.
        </p>
      </motion.div>

      {/* ===== ENERGY CORE ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-24 max-w-5xl mx-auto h-[320px] md:h-[500px] lg:h-[600px]"
      >
        <EnergyCore3D energy={energy} />
      </motion.div>

      <div className="space-y-20 max-w-3xl mx-auto">

        {/* 🔹 TRIGGER */}
        {currentSessionId && (
          <TriggerInputCard
            onAdd={(data) =>
              addTrigger({
                ...data,
              })
            }
          />
        )}

        {/* 🔹 BREAK */}
        <AnimatePresence>
          {lastTriggerId && (
            <motion.div
              key="break-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BreakActionCard
                triggerId={lastTriggerId}
                onBreak={(data) =>
                  addBreak({
                    triggerId: lastTriggerId,
                    ...data,
                  })
                }
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔹 REFLECTION */}
        {currentSessionId && (
          <DailyReflectionCard
            onSave={(data) =>
              saveReflection({
                dayNumber: 1,
                ...data,
              })
            }
          />
        )}

        {/* 🔹 MENTAL STATE */}
        <MentalStateCard />

      </div>

      <p className="mt-12 pb-24 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
  Az itt megjelenő tartalom önreflexiós és edukációs célú,
  nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
  Az alkalmazás használata nem helyettesíti szakemberrel való konzultációt.
</p>
    </div>
  );
}
