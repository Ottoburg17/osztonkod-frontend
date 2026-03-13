import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


/* =========================
   PROMPTOK
========================= */
const PROMPTS = [
  "Mi történik bennem ebben a pillanatban?",
  "Melyik gondolat ragadta most el a figyelmem?",
  "Mit próbálok most elkerülni?",
  "Hol feszülök most?",
  "Mi az, amit most nehéz elkezdeni?",
  "Mi az, amit halogatok ebben a pillanatban?",
  "Mi elől veszem el most a figyelmem?",
  "Mi az, ami most valóban fontos?",
  "Mi az, ami most háttérbe szorul?",
  "Mit engedhetek el most egy kicsit?"
];

/* =========================
   OPCIÓK
========================= */
const OPTIONS = {
  presence: [
    "Nyugtalan vagyok",
    "Szétszórt vagyok",
    "Feszült vagyok",
    "Üresnek érzem magam",
    "Nyugodt vagyok"
  ],
  resistance: [
    "Halogatok",
    "Kifogást keresek",
    "Másra terelem a figyelmem",
    "Várok egy jelre",
    "Nem akarok szembenézni vele"
  ],
  recognition: [
    "Félek a következménytől",
    "Félek, hogy nem csinálom jól",
    "Kényelmetlen lenne lépni",
    "Nem akarok felelősséget",
    "Csak megszokásból állok ellen"
  ],
  action: [
  "Megjelenik bennem egy lehetséges irány",
  "Érzékelem a feszültséget",
  "Tudatosítom az ellenállást",
  "Most nem mozdulok, de észlelem",
  "Megnevezem, és tovább figyelek"
  ]
};

/* =========================
   SEGÉDKOMPONENS
========================= */
const OptionGrid = ({ options, onSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className="
             py-3 px-4 rounded-2xl
              border border-green-100
              bg-white
              hover:bg-green-50
              hover:border-green-300
              hover:shadow-sm
              text-gray-700
              transition
          "
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

/* =========================
   FŐ KOMPONENS
========================= */
export default function InnerBarrier() {
  const [prompt] = useState(
    () => PROMPTS[Math.floor(Math.random() * PROMPTS.length)]
  );

  const [presence, setPresence] = useState("");
  const [resistance, setResistance] = useState("");
  const [recognition, setRecognition] = useState("");
  const [action, setAction] = useState("");
  const [phase, setPhase] = useState(1);
  const [silence, setSilence] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const startSilence = () => {
    setSilence(true);
    setTimeout(() => {
      setSilence(false);
      setPhase(6);
    }, 1000);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center px-6 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-20">

        <Helmet>

        <title>Belső gát – önreflexiós eszköz | Ösztönkód</title>

        <meta
          name="description"
          content="Interaktív önreflexiós eszköz az ellenállás és a belső gát felismeréséhez. Segít tudatosítani, mi akadályozza a cselekvést egy adott pillanatban."
        />

        <link rel="canonical" href="https://osztonkod.hu/belso-gat" />

        <meta property="og:title" content="Belső gát – önreflexiós eszköz" />
        <meta property="og:description" content="Interaktív eszköz a belső ellenállás felismeréséhez és tudatosításához." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://osztonkod.hu/belso-gat" />
        <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
        <meta property="og:site_name" content="Ösztönkód" />
        <meta property="og:locale" content="hu_HU" />

        </Helmet>


         {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10">
            Belső gát
          </h1>

          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            Ez az eszköz segít felismerni, hogyan jelenik meg a belső ellenállás
            egy adott pillanatban, és hogyan lehet tudatosítani azt.
          </p>

           <div className="flex items-center justify-center gap-2 text-gray-500 mt-3">
            <p>Nem megoldod. Felismered.</p>

            <button
              onClick={() => setShowInfo(true)}
              className="text-green-600 hover:text-green-700 text-lg font-semibold"
            >
              ⓘ
            </button>
          </div>
                  
        </motion.div>
          
          
       
       <div className="w-full max-w-xl bg-white/90 backdrop-blur-xl border border-green-200 shadow-xl rounded-3xl p-10 space-y-6">  


        {/* 1 – JELENLÉT */}
        {phase === 1 && (
          <section className="space-y-6">
            <p className="text-xl text-center">{prompt}</p>
            <OptionGrid
              options={OPTIONS.presence}
              onSelect={(v) => {
                setPresence(v);
                setPhase(2);
              }}
            />
          </section>
        )}

        {/* 2 – ELLENÁLLÁS */}
        {phase === 2 && (
          <section className="space-y-6">
            <p className="text-lg text-center">
              Hogyan jelenik meg most az ellenállás?
            </p>
            <OptionGrid
              options={OPTIONS.resistance}
              onSelect={(v) => {
                setResistance(v);
                setPhase(3);
              }}
            />
          </section>
        )}

        {/* 3 – FELISMERÉS */}
        {phase === 3 && (
          <section className="space-y-6">
            <p className="text-lg text-center">
              Mi állhat mögötte?
            </p>
            <OptionGrid
              options={OPTIONS.recognition}
              onSelect={(v) => {
                setRecognition(v);
                setPhase(4);
              }}
            />
          </section>
        )}

        {/* 4 – TETT */}
        {phase === 4 && (
          <section className="space-y-6">
            <p className="text-lg text-center">
                Hogyan viszonyulsz ehhez ebben a pillanatban?
            </p>
            <OptionGrid
              options={OPTIONS.action}
              onSelect={(v) => {
                setAction(v);
                setPhase(5);
                startSilence();
              }}
            />
          </section>
        )}

        {/* 5 – CSEND */}
        {phase === 5 && silence && (
          <section className="text-center space-y-4">
            <p className="text-lg">Most a csend van jelen.</p>
            <p className="text-sm text-gray-500">
              Nem kell semmit csinálnod.
            </p>
          </section>
        )}

        {/* 6 – ÖSSZEGZÉS */}
        {phase === 6 && (
          <section className="space-y-3 text-sm text-gray-600 border-t pt-6">
            <p><strong>Állapot:</strong> {presence}</p>
            <p><strong>Ellenállás:</strong> {resistance}</p>
            <p><strong>Felismerés:</strong> {recognition}</p>
            <p><strong>Viszonyulás:</strong> {action}</p>
          
          </section>
        )}

      </div>
         {/* ----- JOGI NYILATKOZAT ----- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            w-full max-w-xl mt-16
            bg-yellow-100/90
            border border-yellow-500
            text-yellow-800
            p-6
            rounded-xl
            shadow-lg
            leading-relaxed
          "
        >
          <strong>Jogi nyilatkozat:</strong>

          <p className="mt-2">
            Az oldalon található tartalom edukációs és önreflexiós célt szolgál.
            Nem minősül pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
          </p>

          <p className="mt-3">
            Az eszköz nem nyújt diagnózist, kezelést vagy tanácsadást,
            és nem helyettesíti szakember felkeresését.
          </p>
        </motion.div>

        {showInfo && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6">
            
            <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 space-y-4">

              <h3 className="text-xl font-bold text-green-600">
                Miért a felismerés az első lépés?
              </h3>

              <p className="text-gray-700">
                Ez nem azt jelenti, hogy soha nem kell megoldani,
                hanem azt, hogy a legtöbb belső folyamatnál a megoldás nem az első lépés.
              </p>

              <p className="text-gray-700">
                Amikor valami történik bennünk (stressz, ellenállás, halogatás),
                gyakran azonnal meg akarjuk oldani vagy kontrollálni.
              </p>

              <p className="text-gray-700 font-medium">
                A folyamat inkább így néz ki:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Észlelés – „Valami történik bennem.”</li>
                <li>Felismerés – „Ez ellenállás / félelem / feszültség.”</li>
                <li>Megértés – „Miért jelenik meg?”</li>
                <li>Változtatás vagy elengedés</li>
              </ul>

              <p className="text-gray-700">
                Ha rögtön a megoldásra ugrunk, gyakran a mélyebb okok rejtve maradnak.
              </p>

              <div className="text-right pt-4">
                <button
                  onClick={() => setShowInfo(false)}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Értem
                </button>
              </div>

            </div>
          </div>
        )}

    </div>
     
  );
}
