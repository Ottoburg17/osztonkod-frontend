import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { REACTION_BREAK_PROGRAM } from "../data/reactionProgram";



const BODY_FEEDBACK = {

  Fej: {
  description:
    "A fejben jelentkező feszültség gyakran túlzott gondolkodással vagy belső nyomással jár együtt.",
  advice:
    "Engedd, hogy a figyelmed pár pillanatra a környezeted hangjaira irányuljon."
  },
   Állkapocs: {
    description:
      "Az állkapocs megfeszülése sok embernél automatikus testi válasz stresszhelyzetekben.",
    advice:
      "Engedd le az állkapcsod, mintha ásítanál, anélkül hogy erőltetnéd."
  },
  Torok: {
    description:
      "A torokban megjelenő feszültség gyakran kapcsolódhat visszatartott kimondatlan reakciókhoz.",
    advice:
      "Finoman nyelj egyet, lazítsd el az állkapcsod, és figyeld meg, változik-e az érzet."
  },
 
  Nyak: {
  description:
    "A nyak és váll területe sok embernél terheltséget vagy tartott felelősséget jelezhet.",
  advice:
    "Finoman mozgasd meg a vállad, és figyeld meg, mi történik a testedben."
  },

  Mellkas: {
    description:
      "A mellkasban megjelenő érzetek sok embernél feszültséggel vagy visszatartott reakcióval járhatnak együtt.",
    advice:
      "Tedd a kezed a mellkasodra, és figyeld meg 5 lassú légzésen át, hogyan mozog a tested."
  },
  Gyomor: {
    description:
      "A gyomor területén jelentkező érzetek gyakran akkor jelennek meg, amikor bizonytalanság vagy előrevetített gondolatok vannak jelen.",
    advice:
      "Helyezd a tenyered finoman a hasadra, és csak figyeld a légzésed természetes ritmusát."
  },
  
  Has: {
    description:
      "A has területén érzett feszültség gyakran a kontroll vagy védekezés testi jele lehet.",
    advice:
      "Érezd a talpad a talajon, és figyeld meg a tested súlyát a széken."
  },
  Láb: {
  description:
    "A lábakban érzett feszültség gyakran akkor jelenik meg, amikor nehéz megállni vagy továbblépni.",
  advice:
    "Érezd a talpad érintkezését a talajjal néhány légzésen keresztül."
}

};

const DEFENSE_FEEDBACK = {
  "Támadás": {
    description:
      "A támadó reakció gyakran akkor jelenik meg, amikor a belső feszültség gyorsan kifelé irányul.",
    advice:
      "Figyeld meg egy pillanatra, mi történik benned közvetlenül az impulzus előtt, anélkül hogy reagálnál."
  },
  "Megfelelés": {
    description:
      "A megfelelés sokszor automatikus válasz lehet a konfliktus elkerülésére.",
    advice:
      "Vedd észre, mire mondanál most igent, és csak nevezd meg magadban – nem kell változtatnod rajta."
  },
  "Elkerülés": {
    description:
      "Az elkerülés gyakran a túlterheltség vagy a belső bizonytalanság testi-lelki jele.",
    advice:
      "Figyeld meg, mi az első gondolatod, amikor távolodni kezdesz, anélkül hogy követnéd."
  },
  "Kontroll": {
    description:
      "A kontroll iránti késztetés sok embernél a biztonság visszaszerzésének egyik módja.",
    advice:
      "Engedd meg magadnak, hogy most ne oldj meg semmit – csak jegyezd meg, mire irányulna a kontroll."
  }
};

const POSITION_FEEDBACK = {
  "Távolabbról figyelem": {
    description:
      "A távolabbról figyelő pozíció gyakran akkor jelenik meg, amikor már van egy kis tér a helyzet és közted.",
    advice:
      "Ha szeretnéd, figyeld meg, milyen érzés ebből a távolságból jelen lenni, anélkül hogy bármit változtatnál."
  },
  "Kíváncsian": {
    description:
      "A kíváncsiság megjelenése arra utalhat, hogy a reakció már nem teljesen automatikus.",
    advice:
      "Észreveheted, milyen kérdés jelenne meg benned, ha nem kellene azonnal válaszolnod."
  },
  "Kevésbé személyesen": {
    description:
      "A kevésbé személyes pozíció sokszor együtt jár a belső feszültség enyhülésével.",
    advice:
      "Figyeld meg, mi változik a testedben vagy a figyelmedben, amikor nem magadra vonatkoztatod a helyzetet."
  },
  "Még mindig feszült": {
    description:
      "Az, hogy a feszültség még jelen van, önmagában is fontos megfigyelés.",
    advice:
      "Megfigyelheted, hol érzed most a feszültséget, anélkül hogy el akarnád tüntetni."
  }
};




export default function ReactionProgram() {
  const [dayIndex, setDayIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const day = REACTION_BREAK_PROGRAM[dayIndex];

  const nextDay = () => {
    setSelectedOption(null); // új nap → reset
    setDayIndex((prev) =>
      Math.min(prev + 1, REACTION_BREAK_PROGRAM.length - 1)
    );
  };

  return (
    <div className="w-full text-center px-4 pt-24 md:pt-16 pb-8">
      
      <div className="text-center mb-6 md:mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-green-600 mt-14">
          7 napos reakciómegszakító program
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Rövid, vezetett gyakorlatok az automatikus reakciók felismerésére
          és megszakítására – nyomás és teljesítménykényszer nélkül.
        </p>
      </div>


    
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto
                        bg-white/90 backdrop-blur-xl
                        border border-emerald-200/60
                        rounded-3xl
                        shadow-xl
                        p-8
                        space-y-8">

     

        {/* FEJLÉC */}
        <p className="text-xs text-center text-gray-400">
          {day.day}. nap / {REACTION_BREAK_PROGRAM.length}
        </p>

        {/* HALADÁS */}
        <p className="text-xs text-center text-gray-500">
          Feldolgozott napok: {dayIndex + 1} / {REACTION_BREAK_PROGRAM.length}
        </p>

        {/* PROGRESS BAR */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{
              width: `${((dayIndex + 1) / REACTION_BREAK_PROGRAM.length) * 100}%`,
            }}
          />
        </div>

        {/* CÍM */}
        <h1 className="text-2xl font-bold text-green-600 text-center">
          {day.title}
        </h1>

        {/* HELYZET */}
        <p className="text-sm text-center text-gray-500 italic">
          {day.situation}
        </p>

        {/* 🔍 MEGFIGYELÉS */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase text-center">
            Megfigyelés
          </h2>

          <p className="text-gray-700 text-center leading-relaxed">
            {day.observe.prompt}
          </p>

          {day.observe.questions && (
            <div className="space-y-3 text-center">
              {day.observe.questions.map((q) => (
                <p key={q} className="text-sm text-gray-600">
                  • {q}
                </p>
              ))}
            </div>
          )}

          {day.observe.options && (
            <>
             <p className="text-xs text-gray-400 italic text-center">
              Válaszd azt, ami most a leginkább észrevehető.
            </p>
            
            <div className="grid gap-3">
              {day.observe.options.map((opt) => {
                const isSelected = selectedOption === opt;

                return (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={`py-3 px-4 rounded-2xl border transition
                      ${
                        isSelected
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-white border-green-100 hover:bg-green-50"
                      }
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            </>
          )}
        </div>
        
     

        {selectedOption && BODY_FEEDBACK[selectedOption] && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 bg-emerald-50 border border-emerald-100 rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-wide text-emerald-600 text-center">
              Testi visszajelzés
            </p>

            <p className="text-sm font-semibold text-emerald-700">
              Kiválasztott terület: {selectedOption}
            </p>

            <p className="text-sm text-gray-700">
              {BODY_FEEDBACK[selectedOption].description}
            </p>

            <p className="text-sm text-emerald-800 italic">
              Gyengéd javaslat: {BODY_FEEDBACK[selectedOption].advice}
            </p>

            <p className="text-xs text-gray-400 italic text-center">
              Ez egy önmegfigyelési gyakorlat, nem diagnózis.
            </p>
          </motion.div>
        )}


        {selectedOption && DEFENSE_FEEDBACK[selectedOption] && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 bg-emerald-50 border border-emerald-100 rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-wide text-emerald-600 text-center">
              Védelmi minta – visszajelzés
            </p>

            <p className="text-sm font-semibold text-emerald-700 text-center">
              Kiválasztott reakció: {selectedOption}
            </p>

            <p className="text-sm text-gray-700 text-center">
              {DEFENSE_FEEDBACK[selectedOption].description}
            </p>

            <p className="text-sm text-emerald-800 italic text-center">
              Gyengéd megfigyelési javaslat: {DEFENSE_FEEDBACK[selectedOption].advice}
            </p>

            <p className="text-[11px] text-gray-500 italic text-center">
              Ez egy önreflexiós gyakorlat, nem minősítés és nem terápiás tanács.
            </p>
          </motion.div>
        )}

        {selectedOption && POSITION_FEEDBACK[selectedOption] && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 bg-emerald-50 border border-emerald-100 rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-wide text-emerald-600 text-center">
              Belső pozíció – visszajelzés
            </p>

            <p className="text-sm font-semibold text-emerald-700 text-center">
              Kiválasztott pozíció: {selectedOption}
            </p>

            <p className="text-sm text-gray-700 text-center">
              {POSITION_FEEDBACK[selectedOption].description}
            </p>

            <p className="text-sm text-emerald-800 italic text-center">
              Gyengéd megfigyelési javaslat:{" "}
              {POSITION_FEEDBACK[selectedOption].advice}
            </p>

            <p className="text-[11px] text-gray-500 italic text-center">
              Ez egy önreflexiós gyakorlat, nem minősítés és nem terápiás tanács.
            </p>
          </motion.div>
        )}

    
        {/* ✋ MEGSZAKÍTÁS */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 bg-green-50 border border-green-100 rounded-2xl p-6"
        >
          <h2 className="text-sm font-semibold text-green-700 uppercase text-center">
            Megszakítás
          </h2>

          {/* 🛡️ JOGILAG BIZTONSÁGOS VEZETŐ SZÖVEG */}
          <p className="text-sm text-gray-600 text-center italic">
            Ez nem egy feladat, amit jól vagy rosszul lehet csinálni.  
            Ha szeretnéd, kipróbálhatod az alábbi rövid figyelemváltást.
            Nem cél a megváltoztatás, csak a megfigyelés.
          </p>

          <p className="text-green-800 text-center font-semibold text-lg">
            {day.interrupt.prompt}
          </p>

          <div className="text-sm text-green-700 text-center italic leading-relaxed">
            {day.interrupt.action}
          </div>

          <p className="text-sm text-gray-600 text-center">
            {day.interrupt.reflection}
          </p>

          {/* ⚖️ EXTRA JOGI PAJZS (opcionális, de ajánlott) */}
          <p className="text-[11px] text-gray-500 italic text-center">
            Ez egy önmegfigyelési gyakorlat, nem egészségügyi vagy terápiás tanács.
          </p>
        </motion.div>


        {/* 🌟 PRÉMIUM TARTALOM */}
        {day.premium && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 bg-emerald-100/70 border border-emerald-200 rounded-2xl p-6"
          >
            <p className="text-xs uppercase tracking-wide text-emerald-700 text-center">
              Prémium Megfigyelés
            </p>

            <h3 className="text-lg font-semibold text-emerald-800 text-center">
              {day.premium.title}
            </h3>

            <p className="text-sm text-gray-700 text-center italic">
              {day.premium.focus}
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              {day.premium.explanation}
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              {day.premium.practice.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 italic text-center">
              {day.premium.integration}
            </p>
          </motion.div>
        )}


        {/* LEZÁRÁS */}
        <div className="text-xs text-center text-gray-600 italic bg-gray-50 rounded-xl px-4 py-3">
          {day.closing}
        </div>

        {/* TOVÁBB */}
        {dayIndex < REACTION_BREAK_PROGRAM.length - 1 && (
          <button
            onClick={nextDay}
            className="w-full mt-4 px-6 py-3 rounded-2xl
              bg-green-600 text-white font-semibold
              hover:bg-green-700 transition"
          >
            Következő nap →
          </button>
        )}

        {/* UTOLSÓ NAP */}
        {dayIndex === REACTION_BREAK_PROGRAM.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center space-y-3"
          >
            <p className="text-green-700 font-semibold text-lg">
              A reakció megszakítható.
            </p>

            <p className="text-sm text-gray-600">
              Most már nem csak látod, hanem kezelni is tudod.
            </p>

            <p className="text-xs text-gray-500">
              Ez nem lezárás — hanem egy új működés kezdete.
            </p>
          </motion.div>
        )}
      </div>

      <p className="mt-12 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Az itt megjelenő tartalom önreflexiós és edukációs célú,
        nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
        Az alkalmazás használata nem helyettesíti szakemberrel való konzultációt.
      </p>
    </div>
  );
}
