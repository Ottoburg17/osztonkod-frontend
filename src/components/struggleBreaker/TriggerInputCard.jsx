import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";


const steps = [
  "event",
  "thought",
  "emotion",
  "body",
  "intensity",
  "avoidance"
];

export default function TriggerInputCard({ onAdd }) {
  const [stepIndex, setStepIndex] = useState(0);


  const [event, setEvent] = useState("");
  const [thought, setThought] = useState("");
  const [emotion, setEmotion] = useState("");
  const [body, setBody] = useState("");
  const [intensity, setIntensity] = useState(5);
  const [avoidance, setAvoidance] = useState(5);


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
    await onAdd({
  triggerType: event,
  thoughtPattern: thought,
  emotion,
  bodyReaction: body,
  intensity,
  avoidanceLevel: avoidance,
  });


    setEvent("");
    setThought("");
    setEmotion("");
    setBody("");
    setIntensity(5);
    setStepIndex(0);
    setAvoidance(5);
  };

  const currentStep = steps[stepIndex];
  const progress = ((stepIndex + 1) / steps.length) * 100;

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-white/5 backdrop-blur-xl border border-emerald-400/10 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,255,170,0.08)]">

      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-1 w-full bg-black/30 rounded-full">
          <div
            className="h-1 bg-emerald-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">

        {currentStep === "event" && (
          <StepWrapper key="event" title="Mi történt?">
            <textarea
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              placeholder="Pl.: A főnököm értekezleten azt mondta, hogy nem volt elég részletes a riportom."
              className="w-full
                          min-h-[110px]
                          p-4
                          rounded-2xl
                          bg-black/30
                          border border-white/10
                          focus:outline-none
                          focus:ring-2
                          focus:ring-emerald-400/40
                          resize-none
                          text-white
                          placeholder-white/40"
            />
            <NextButton onClick={next} disabled={!event.trim()} />
          </StepWrapper>
        )}

        {currentStep === "thought" && (
          <StepWrapper key="thought" title="Mi volt az első automatikus gondolatod?">
              
              <p className="text-sm text-white/60 mb-4">
                Ez az első, gyors belső mondat, ami automatikusan megjelent. Ne elemezd, csak írd le.
              </p>

            <textarea
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              placeholder="Pl.: 'Nem vagyok elég jó.' vagy 'Biztos direkt csinálta.'"
              className="w-full
                          min-h-[110px]
                          p-4
                          rounded-2xl
                          bg-black/30
                          border border-white/10
                          focus:outline-none
                          focus:ring-2
                          focus:ring-emerald-400/40
                          resize-none
                          text-white
                          placeholder-white/40"
            />
            <NavButtons back={back} next={next} disabled={!thought.trim()} />
          </StepWrapper>
        )}


        {currentStep === "emotion" && (
          <StepWrapper key="emotion" title="Milyen érzelem jelent meg?">
            
            <p className="text-sm text-white/60 mb-4">
              Ne gondolatot írj, hanem konkrét érzelemnevet. 
            </p>

            <div className="text-xs text-white/50 mb-3">
              Példa: düh, csalódottság, szorongás, szégyen
            </div>


            <input
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              placeholder="Pl.: düh, csalódottság, félelem, szégyen, szomorúság"
              className="w-full
                          min-h-[110px]
                          p-4
                          rounded-2xl
                          bg-black/30
                          border border-white/10
                          focus:outline-none
                          focus:ring-2
                          focus:ring-emerald-400/40
                          resize-none
                          text-white
                          placeholder-white/40"
            />
            <NavButtons back={back} next={next} disabled={!emotion.trim()} />
          </StepWrapper>
        )}

        {currentStep === "body" && (
          <StepWrapper key="body" title="Hol érezted a testedben?">

             <p className="text-sm text-white/60 mb-4">
              Írd le a konkrét testi érzetet, nem az érzelmet.
            </p>

            <div className="text-xs text-white/50 mb-3">
              Példa: szorítás, remegés, gyomorgörcs, vállfeszülés
            </div>


            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Pl.: szorítás a mellkasban, gombóc a torokban, feszültség a gyomorban"
              className="w-full
                          min-h-[110px]
                          p-4
                          rounded-2xl
                          bg-black/30
                          border border-white/10
                          focus:outline-none
                          focus:ring-2
                          focus:ring-emerald-400/40
                          resize-none
                          text-white
                          placeholder-white/40"
            />
            <NavButtons back={back} next={next} disabled={!body.trim()} />
          </StepWrapper>
        )}

        {currentStep === "intensity" && (
          <StepWrapper key="intensity" title={`Mennyire volt erős az érzelem? (${intensity}/10)`}>
            
             <p className="text-sm text-white/60 mb-4">
              1 = alig érezhető, 10 = elviselhetetlenül erős
            </p>

            <div className="flex justify-between text-xs text-white/50 mt-2">
              <span>Enyhe</span>
              <span>Közepes</span>
              <span>Erős</span>
           </div>
                      
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />
            <NavButtons back={back} next={next} />
          </StepWrapper>
        )}

        {currentStep === "avoidance" && (
          <StepWrapper key="avoidance" title={`Mennyire volt erős az elkerülési késztetés? (${avoidance}/10)`}>
             
             <p className="text-sm text-white/60 mb-4">
                1 = nem akartál elkerülni, 10 = szinte azonnal menekültél volna vagy reagáltál volna
            </p>

            <div className="text-xs text-white/50 mt-2">
              Példa: témaváltás, elhallgatás, visszatámadás, kivonulás
            </div>

            <input
              type="range"
              min="0"
              max="10"
              value={avoidance}
              onChange={(e) => setAvoidance(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />
            <NavButtons back={back} next={submit} final />
          </StepWrapper>
        )}


      </AnimatePresence>
    </div>
  );
}

/* ---------- UI Helpers ---------- */

function StepWrapper({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl text-emerald-300 mb-6">{title}</h3>
      {children}
    </motion.div>
  );
}

function NextButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="btnPrimary mt-6 w-full"
    >
      Tovább →
    </button>
  );
}

function NavButtons({ back, next, disabled, final }) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={back}
        className="flex-1 py-3 rounded-2xl bg-black/40 text-white"
      >
        ← Vissza
      </button>

      <button
        onClick={next}
        disabled={disabled}
        className="flex-1 py-3 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
      >
        {final ? "Rögzítés" : "Tovább →"}
      </button>
    </div>
  );
}
