import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { INTEGRATION_PROTOCOLS } from "../data/integrationProtocols";
import DeepConfrontation from "../components/DeepConfrontation";
import EmotionalBrainMapReflection from "../components/EmotionalBrainMapReflection";
import DecisionPoint from "../components/DecisionPoint";

import GrowthModule from "../components/GrowthModule";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";



/* 🔐 BACKEND TERMÉK SLUG */
const PRODUCT_SLUG = "emotional-brainmap";





const AVOIDANCE_MESSAGES = {
  "Visszahúzódás": {
    text: `Ilyenkor a rendszer a távolságtartással próbálja csökkenteni a belső terhelést.
A kapcsolódás ideiglenes megszakítása biztonságérzetet adhat, még ha közben elszigeteltség is megjelenik.`
  },

  "Túlgondolás": {
    text: `A figyelem ilyenkor folyamatosan a lehetséges kimeneteleken mozog.
Ez a működés gyakran a kontroll és felkészültség érzetét szolgálja, miközben növelheti a belső feszültséget.`
  },

  "Halogatás": {
    text: `A cselekvés elodázása átmenetileg csökkentheti a kellemetlen érzeteket.
Ez nem lustaság, hanem egy belső védekező mechanizmus, amely a túlterhelést próbálja mérsékelni.`
  },

  "Túlalkalmazkodás": {
    text: `Ilyenkor a rendszer a kapcsolatok stabilitását helyezi előtérbe a saját igényekkel szemben.
Ez rövid távon biztonságot adhat, miközben hosszabb távon belső feszültséghez vezethet.`
  },

  "Indulat elfojtása": {
    text: `Az érzelmek visszatartása gyakran a konfliktus elkerülését szolgálja.
A belső feszültség ilyenkor nem tűnik el, hanem más formában marad jelen.`
  }
};






const REFLECTIVE_MESSAGES = {
  "Elutasítástól való félelem": {
    text: `Sok embernél megjelenik, hogy a kapcsolódás során fokozott figyelem irányul a másik reakcióira. 
Ilyenkor az észlelés érzékenyebbé válhat az apró visszajelzésekre is, amelyek belső bizonytalanságként vagy feszültségként jelenhetnek meg.

Előfordulhat, hogy a rendszer a kapcsolódás biztonságát próbálja fenntartani azzal, hogy óvatosabbá, visszafogottabbá válik. 
Ez a működés nem tudatos döntés, hanem egy gyakran megjelenő belső alkalmazkodási mód.`
  },

  "Kudarctól való félelem": {
    text: `Bizonyos helyzetekben sokaknál a figyelem a lehetséges hibákra és következményekre irányul. 
Ez a belső működés gyakran együtt jár fokozott mérlegeléssel, halogatással vagy visszatartással.

Ilyenkor nem feltétlen a képességek hiánya kerül előtérbe, hanem a kimenetel bizonytalansága. 
A rendszer igyekszik elkerülni a negatív tapasztalatot azáltal, hogy lelassítja vagy késlelteti a cselekvést.`
  },

  "Kontroll elvesztése": {
    text: `Egyes helyzetekben megjelenhet az igény arra, hogy a körülmények kiszámíthatóbbá váljanak. 
A figyelem ilyenkor a részletekre, döntésekre és lehetséges forgatókönyvekre összpontosulhat.

Ez a működés gyakran a biztonságérzet fenntartását szolgálja, különösen akkor, amikor a helyzet bizonytalannak érződik. 
Nem a kontrollvágy a lényeg, hanem az, hogy a rendszer csökkenteni próbálja a belső feszültséget.`
  },

  "Intimitástól való félelem": {
    text: `A közelség és az érzelmi nyitottság sokaknál egyszerre hordozhat vonzást és óvatosságot. 
Előfordulhat, hogy a rendszer fokozottan figyel a határokra, miközben belül megjelenik a kapcsolódás igénye is.

Ilyenkor a visszahúzódás nem feltétlen elutasítás, hanem egy belső egyensúlykeresés része. 
A működés célja gyakran az érzelmi biztonság megőrzése.`
  },

  "Konfliktus kerülése": {
    text: `Sok embernél a feszültség elkerülése kiemelt szerepet kap az interakciók során. 
A figyelem ilyenkor a harmónia fenntartására és a kellemetlen helyzetek megelőzésére irányul.

Ez a működés átmenetileg csökkentheti a belső nyomást, miközben más igények háttérbe szorulhatnak. 
A rendszer ilyenkor a stabilitást választja a nyílt konfrontáció helyett.`
  },

  "Gyerekkori tapasztalat": {
    text: `A korai élmények sok embernél hozzájárulhatnak ahhoz, hogy bizonyos helyzetek ismerős érzetet keltsenek a jelenben. 
Ilyenkor a reakció nem feltétlen a mostani szituáció intenzitására adott válasz, hanem egy régebbi tapasztalat lenyomata is lehet.

Ez nem jelenti azt, hogy a múlt „irányítja” a jelent, csupán azt, hogy egyes érzetek könnyebben aktiválódhatnak hasonló helyzetekben. 
A felismerés segíthet észrevenni, mikor történik ez meg.`
  },

  "Családi minta": {
    text: `A családi környezetben megélt kapcsolódási módok sokaknál észrevétlenül beépülnek a belső működésbe. 
Bizonyos reakciók, érzelmi válaszok vagy elvárások később is megjelenhetnek, különösen hasonló dinamikákban.

Ez nem tudatos utánzás, hanem egy megszokott működési keret, amely hosszú ideig biztonságot adhatott. 
A jelenben ezek a minták újra aktiválódhatnak, akár automatikusan is.`
  },

  "Iskolai élmény": {
    text: `Iskolai helyzetekben megélt visszajelzések, elvárások vagy kudarcélmények sokaknál nyomot hagyhatnak az önészlelésben. 
Ezek a tapasztalatok később is befolyásolhatják azt, hogyan viszonyulunk teljesítményhez, hibázáshoz vagy megítéléshez.

Ilyenkor a jelen helyzet könnyen összekapcsolódhat egy korábbi élménnyel, még akkor is, ha a körülmények már mások. 
A működés ilyenkor gyorsabban lép működésbe, mint a tudatos mérlegelés.`
  },

  "Korábbi kapcsolat": {
    text: `Korábbi kapcsolatokban átélt érzelmi tapasztalatok sokaknál hosszabb távon is hatással lehetnek az észlelésre. 
Bizonyos helyzetek, viselkedések vagy érzetek emlékeztethetnek egy régebbi dinamikára.

Ilyenkor nem feltétlen a jelen kapcsolat sajátosságai váltják ki a reakciót, hanem egy korábbi élmény lenyomata aktiválódik. 
Ez a működés gyakran a védelem és az önmegóvás irányába mozdul el.`
  },

  "Munkahelyi élmény": {
    text: `Munkahelyi környezetben megélt nyomás, elvárások vagy konfliktusok sokaknál tartós hatással lehetnek a belső működésre. 
Bizonyos helyzetek újra előhívhatják ezeket az érzeteket, még akkor is, ha a jelen környezet eltér a korábbitól.

Ilyenkor a rendszer gyorsan reagálhat a megszokott minták szerint, a biztonság és kiszámíthatóság fenntartása érdekében. 
A reakció gyakran automatikus, nem tudatos döntés eredménye.`
  }
};







/* ======================================================
   🧠 ÖSZTÖN ADATOK – TELJES LISTA
====================================================== */
const _instinctBrainMap = {
  // MENTÁLIS
  "Fájdalomkerülés ösztöne": {
    area: "Limbikus rendszer",
    role: "Védelem a veszélytől és a negatív élményektől.",
    trigger: "Fájdalom, stressz, fenyegetés.",
    behavior: "Elkerülés, visszahúzódás."
  },
  "Kontroll-kereső ösztön": {
    area: "Prefrontális kéreg",
    role: "Bizonytalanság csökkentése.",
    trigger: "Kiszámíthatatlanság.",
    behavior: "Túltervezés, kontroll."
  },
  "Tervezés ösztöne": {
    area: "Prefrontális kéreg",
    role: "Jövő előrejelzése.",
    trigger: "Célok, kihívások.",
    behavior: "Stratégiaalkotás."
  },
  "Halogatás ösztöne": {
    area: "Limbikus rendszer",
    role: "Azonnali kellemetlenség csökkentése.",
    trigger: "Nehéz feladat.",
    behavior: "Elodázás."
  },

  // ÉRZELMI
  "Örömkereső ösztön": {
    area: "Dopamin rendszer",
    role: "Pozitív élmények keresése.",
    trigger: "Jutalom lehetősége.",
    behavior: "Motiváció."
  },
  "Jutalomkereső ösztön": {
    area: "Nucleus Accumbens",
    role: "Teljesítmény hajtása.",
    trigger: "Elismerés.",
    behavior: "Célorientáltság."
  },
  "Büntetéskerülő ösztön": {
    area: "Amygdala",
    role: "Negatív következmények elkerülése.",
    trigger: "Kritika, hibázás.",
    behavior: "Megfelelés."
  },
  "Aggodalom ösztön": {
    area: "Amygdala",
    role: "Veszélyek előrejelzése.",
    trigger: "Bizonytalanság.",
    behavior: "Túlgondolás."
  },
  "Intimitás ösztön": {
    area: "Oxytocin rendszer",
    role: "Kötődés kialakítása.",
    trigger: "Biztonság.",
    behavior: "Megnyílás."
  },
  "Dühreakció ösztön": {
    area: "Amygdala + Hypothalamus",
    role: "Határvédelem.",
    trigger: "Igazságtalanság.",
    behavior: "Indulat."
  },

  // SZEXUÁLIS
  "Szexuális vágy ösztön": {
    area: "Hypothalamus",
    role: "Fajfenntartás.",
    trigger: "Erotikus inger.",
    behavior: "Közeledés."
  },
  "Párválasztási ösztön": {
    area: "Limbikus rendszer",
    role: "Partner kiválasztása.",
    trigger: "Vonzalom.",
    behavior: "Udvarlás."
  },
  "Utódgondozási ösztön": {
    area: "Oxytocin rendszer",
    role: "Gondoskodás.",
    trigger: "Gyermek jelenléte.",
    behavior: "Védelem."
  },
  "Féltékenységi ösztön": {
    area: "Amygdala",
    role: "Kapcsolat védelme.",
    trigger: "Rivális.",
    behavior: "Ellenőrzés."
  },
  "Versengési ösztön": {
    area: "Striatum",
    role: "Státusz megszerzése.",
    trigger: "Összehasonlítás.",
    behavior: "Bizonyítás."
  },

  // KÖRNYEZETI
  "Biztonságkereső ösztön": {
    area: "Amygdala",
    role: "Fizikai védelem.",
    trigger: "Ismeretlen helyzet.",
    behavior: "Óvatosság."
  },
  "Területvédő ösztön": {
    area: "Hypothalamus",
    role: "Saját tér védelme.",
    trigger: "Határátlépés.",
    behavior: "Védekezés."
  }
};



const BRAIN_EXPLANATIONS = {

  "Aggodalom ösztön": {
    intro: `Az amygdala az érzelmi jelentőség gyors felismerésében játszik kulcsszerepet. 
Ez az agyi terület azonnal reagál minden bizonytalanságra vagy lehetséges veszélyre, még mielőtt tudatosan végiggondolnád a helyzetet.`,

    mechanism: `Amikor a rendszer bizonytalanságot érzékel, az amygdala aktiválódik és fokozott éberségi állapotot hoz létre. 
A figyelem ilyenkor a lehetséges negatív kimenetekre irányul, mintha az agy előre próbálná kiszámítani és kivédeni a jövőbeli kockázatokat.`,

    experience: `Ez gyakran túlgondolásban, forgatókönyvek ismételt elemzésében vagy a "mi lesz, ha..." gondolatok sorozatában jelenik meg. 
Megjelenhet egy belső késztetés is arra, hogy mindent kontroll alatt tarts, hogy csökkentsd a bizonytalanság érzését.`,

    body: `Testi szinten enyhe mellkasi szorítás, belső feszültség, gyorsabb gondolatmenet vagy állandó készenléti érzet tapasztalható.`,

    meaning: `Ez a működés nem gyengeség. A rendszer a biztonságot próbálja fenntartani, még akkor is, ha közben kimerítővé válik.`
  },

  "Kontroll-kereső ösztön": {
    intro: `A prefrontális kéreg a tudatos tervezés, elemzés és döntéshozatal központja. 
Ez az a terület, amely rendszert próbál vinni a bizonytalanságba.`,

    mechanism: `Amikor a helyzet kiszámíthatatlannak tűnik, a rendszer fokozott elemzésbe kezd. 
Tervez, mérlegel, újraszámol – mintha gondolkodással próbálná visszaállítani a stabilitást.`,

    experience: `Ez túltervezésben, részletekbe menő kontrollban, vagy abban jelenhet meg, hogy nehezen engeded ki a kezedből a dolgokat. 
A bizonytalanság ilyenkor belső nyomást hoz létre.`,

    body: `Testi szinten koncentrált figyelem, homlokfeszülés, mentális túlpörgés vagy nehezebb elengedés jelenhet meg.`,

    meaning: `A cél nem a kontroll gyakorlása mások felett, hanem a belső biztonság visszaszerzése.`
  },

  "Intimitás ösztön": {
    intro: `Az oxitocin rendszer a kötődés és bizalmi kapcsolódás biológiai alapja. 
  Ez az a mély idegrendszeri mechanizmus, amely lehetővé teszi, hogy valakihez közel engedd magad – érzelmileg, mentálisan, akár fizikailag is.`,

    mechanism: `Amikor közelség alakul ki, a rendszer egyszerre aktiválja a kapcsolódás iránti vágyat és a sérülékenység jelzését. 
  A megnyílás idegrendszeri szinten mindig kockázatot is jelent: ha közel engedsz valakit, az hatással lehet rád.`,

    experience: `Ezért jelenhet meg a belső kettősség: vágysz a mély kapcsolódásra, mégis megjelenik az óvatosság, a távolságtartás vagy a kontroll igénye. 
  Előfordulhat, hogy egyszerre érzed a vonzást és a visszahúzódást, mintha a rendszer folyamatosan mérlegelné, mennyire biztonságos a helyzet.`,

    body: `Testi szinten ez finom melegségérzetként, mellkasi nyitottságként, de akár enyhe gyomorfeszülésként is megjelenhet. 
  A test ilyenkor érzékenyebbé válik a másik jelenlétére és reakcióira.`,

    meaning: `Ez a működés nem gyengeség, hanem az érzelmi biztonság intelligens szabályozása. 
  A rendszer folyamatosan egyensúlyt keres a kapcsolódás és az önvédelem között.`
  },

  "Büntetéskerülő ösztön": {
    intro: `Az amygdala nemcsak fizikai veszélyt, hanem társas következményeket is érzékel. 
  A kritika, elutasítás vagy konfliktus idegrendszeri szinten fenyegetésként jelenhet meg.`,

    mechanism: `Negatív visszajelzés vagy konfrontáció esetén a rendszer azonnal védekező módba kapcsol. 
  Célja a kellemetlen érzelmi élmény minimalizálása és a kapcsolat stabilitásának megőrzése.`,

    experience: `Megjelenhet a megfelelési késztetés, a konfliktus kerülése, a saját vélemény visszatartása vagy a túlzott alkalmazkodás. 
  Ilyenkor a belső mérlegelés gyakran gyorsabb, mint a tudatos döntés.`,

    body: `Gyomorfeszülés, enyhe összehúzódás, visszatartott légzés vagy vállfeszülés jelezheti a rendszer aktiválódását.`,

    meaning: `Ez a működés a kapcsolati biztonság fenntartását szolgálja. 
  A rendszer ilyenkor a stabilitást választja a konfrontáció helyett.`
  },

  "Halogatás ösztöne": {
    intro: `A limbikus rendszer az érzelmi terhelés csökkentésére törekszik, különösen akkor, ha egy feladat fenyegetőnek vagy túl nagynak tűnik.`,

    mechanism: `Amikor egy helyzet szorongást, bizonytalanságot vagy kudarc lehetőségét hordozza, a rendszer elodázással próbálja csökkenteni az azonnali feszültséget.`,

    experience: `Ez figyelemelterelésben, indoklásban vagy „majd később” gondolatban jelenhet meg. 
  Kívülről halogatásnak tűnik, belül viszont az érzelmi túlterhelés elkerülése zajlik.`,

    body: `Nehéz indulás, tompa ellenállás, fáradtságérzet vagy belső visszahúzódás jelenhet meg.`,

    meaning: `Ez nem lustaság, hanem az idegrendszer rövid távú önvédelme. 
  A rendszer az azonnali kellemetlenséget próbálja csökkenteni.`
  },

  "Dühreakció ösztön": {
    intro: `A düh az egyik leggyorsabb és legerőteljesebb érzelmi válasz, amely a határok védelmét szolgálja.`,

    mechanism: `Igazságtalanság, határátlépés vagy kontrollvesztés esetén a rendszer azonnali energiát mobilizál. 
  Ez segít megvédeni a személyes integritást.`,

    experience: `Erős indulat, sürgető reagálási késztetés vagy „nem igazságos” belső élmény jelenhet meg. 
  A reakció gyakran gyorsabb, mint a tudatos mérlegelés.`,

    body: `Emelkedő pulzus, melegségérzet, izomfeszülés, az állkapocs vagy váll területének megfeszülése.`,

    meaning: `Ez a működés a határaid és értékeid védelmét szolgálja. 
  A düh gyakran azt jelzi, hogy valami számodra fontos sérült.`
  },

  "Biztonságkereső ösztön": {
    intro: `A biztonságérzet az idegrendszer egyik alapvető szükséglete. 
  Enélkül a rendszer folyamatos készenléti állapotban marad.`,

    mechanism: `Ismeretlen vagy bizonytalan helyzetben a rendszer fokozottan figyel a környezet jelzéseire, és stabil pontot keres.`,

    experience: `Megjelenhet a kontroll iránti igény, az óvatosság, vagy az, hogy lassabban engedsz be új helyzeteket és embereket.`,

    body: `Finom megfeszülés, fokozott figyelem, a test „készenléti” állapota.`,

    meaning: `A rendszer ilyenkor a túlélést és kiszámíthatóságot helyezi előtérbe. 
  Ez az alap, amelyre minden más működés ráépül.`
  },

  "Jutalomkereső ösztön": {
    intro: `A dopamin rendszer a motiváció és célorientáltság idegrendszeri alapja. 
  Ez az a mechanizmus, amely előre mozdít és teljesítményre ösztönöz.`,

    mechanism: `Elismerés, siker vagy fejlődés lehetősége esetén a rendszer energiát mobilizál és fókuszt teremt.`,

    experience: `Megjelenhet erős belső hajtóerő, teljesítménykényszer vagy az érzés, hogy mindig lehetne még jobban csinálni.`,

    body: `Fokozott energiaszint, belső nyomás, nehezebb lelassulás vagy pihenés.`,

    meaning: `Ez a működés a fejlődést és előrelépést szolgálja, ugyanakkor egyensúly nélkül kimerültséghez vezethet.`
  }

};





const EXPERIENCE_MAP = {
  "Folyamatos aggódás a következményektől": "Aggodalom ösztön",
  "Bizonytalanság miatti kontrolligény": "Kontroll-kereső ösztön",
  "Elutasítástól való félelem": "Intimitás ösztön",
  "Konfliktus kerülése a békéért": "Büntetéskerülő ösztön",
  "Halogatás nehéz feladat előtt": "Halogatás ösztöne",
  "Erős érzelmi reakció igazságtalanságra": "Dühreakció ösztön",
  "Fokozott biztonságigény": "Biztonságkereső ösztön",
  "Teljesítmény miatti belső nyomás": "Jutalomkereső ösztön"
};

/* ======================================================
   🧩 MINTAFELISMERÉS OPCIÓK
====================================================== */
const fearOptions = [
  "Elutasítástól való félelem",
  "Kudarctól való félelem",
  "Kontroll elvesztése",
  "Intimitástól való félelem",
  "Konfliktus kerülése"
];

const originOptions = [
  "Gyerekkori tapasztalat",
  "Családi minta",
  "Iskolai élmény",
  "Korábbi kapcsolat",
  "Munkahelyi élmény"
];

const avoidanceOptions = [
  "Visszahúzódás",
  "Túlgondolás",
  "Halogatás",
  "Túlalkalmazkodás",
  "Indulat elfojtása"
];

/* ======================================================
   🧠 FŐ KOMPONENS
====================================================== */
export default function EmotionalBrainMap() {
  const navigate = useNavigate();
  const { canPreviewAll } = useAuth();

  /* 🔐 HOZZÁFÉRÉS */
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  /* 🧠 UI */

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedInstinct, setSelectedInstinct] = useState(null);
  const [fear, setFear] = useState("");
  const [origin, setOrigin] = useState("");
  const [avoidance, setAvoidance] = useState("");
  const [step, setStep] = useState(1);



  useEffect(() => {
  // ✅ ADMIN / DEV PREVIEW → azonnali hozzáférés
  if (canPreviewAll) {
    setHasAccess(true);
    setCheckingAccess(false);
    return;
  }

  // ⛔ normál user eset
  const checkAccess = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCheckingAccess(false);
      return;
    }

    try {
      const res = await api.get(`/orders/has-product/${PRODUCT_SLUG}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHasAccess(res.data.hasAccess);
    } catch {
      setHasAccess(false);
    } finally {
      setCheckingAccess(false);
    }
  };

  checkAccess();
}, [canPreviewAll]);




  if (checkingAccess) {
    return <div className="pt-32 text-center">Jogosultság ellenőrzése…</div>;
  }

  if (!hasAccess && !canPreviewAll) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Hozzáférés megtagadva
        </h1>
        <button
          onClick={() => navigate("/services")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Vásárlás
        </button>
      </div>
    );
  }

  /* ======================================================
     ✅ UI
  ====================================================== */
 return (
  <div
    className="max-w-3xl mx-auto
               pt-24 sm:pt-28 md:pt-32
               px-4 py-6
               sm:px-6 sm:py-8
               md:px-10 md:py-10
               space-y-6 sm:space-y-8"
  >
    {/* ================= EXPERIENCE VÁLASZTÁS ================= */}

    {!selectedExperience && (
      <>
        <div className="text-center mb-16 space-y-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            Emotional BrainMap
          </h1>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>

          <h2 className="text-xl sm:text-2xl font-medium text-gray-600">
            Mi jelenik meg most benned leginkább?
          </h2>
        </div>

        <div className="grid gap-4">
          {Object.keys(EXPERIENCE_MAP).map((exp) => (
            <button
              key={exp}
              onClick={() => {
                setSelectedExperience(exp);
                setSelectedInstinct(EXPERIENCE_MAP[exp]);
              }}
              className="p-4 rounded-xl border bg-white hover:bg-emerald-100 text-left font-medium"
            >
              {exp}
            </button>
          ))}
        </div>
      </>
    )}

    {/* ================= INSTINCT FLOW ================= */}

    {selectedInstinct && (
      <>
        {/* Vissza */}
        <button
          onClick={() => {
            setSelectedExperience(null);
            setSelectedInstinct(null);
            setFear("");
            setOrigin("");
            setAvoidance("");
            setStep(1);
          }}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition"
        >
          ← Vissza
        </button>

        
         {/* ================= STEP 1 ================= */}
          {step === 1 && (
            <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 p-8 rounded-2xl shadow-sm space-y-8">

              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  🧠 Agyi működés
                </h3>
                <p className="text-sm text-emerald-600 font-medium mt-1">
                  {selectedInstinct}
                </p>
              </div>

              {/* Terület */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                  Agyi terület
                </p>
                <p className="text-sm font-medium text-gray-800">
                  {_instinctBrainMap[selectedInstinct]?.area}
                </p>
              </div>

              {/* Mechanizmus */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                  Mi történik ilyenkor?
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {BRAIN_EXPLANATIONS[selectedInstinct]?.mechanism}
                </p>
              </div>

              {/* Hogyan jelenik meg */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                  Hogyan jelenhet meg nálad?
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {BRAIN_EXPLANATIONS[selectedInstinct]?.experience}
                </p>
              </div>

              {/* Testi szint */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                  Testi szint
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {BRAIN_EXPLANATIONS[selectedInstinct]?.body}
                </p>
              </div>

              {/* Reframing blokk */}
              <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-xl">
                <p className="text-sm italic text-emerald-900 leading-relaxed">
                  {BRAIN_EXPLANATIONS[selectedInstinct]?.meaning}
                </p>
              </div>


              <p className="text-xs text-gray-500">
                A következő lépésben megnézzük, milyen tudati minta kapcsolódhat ehhez.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl text-sm font-medium transition"
                >
                  Tovább →
                </button>
              </div>

            </div>
          )}


        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-bold text-xl">
              Tudati mintafelismerés
            </h3>

            <p className="text-sm text-gray-500">
              Válaszd ki azt, amelyik most leginkább jellemző rád.
            </p>

            {fearOptions.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFear(f);
                  setStep(3);
                }}
                className="w-full h-12 rounded-xl border border-gray-300 bg-white
                  hover:border-emerald-500
                  hover:bg-emerald-50
                  hover:shadow-md
                  transition-all duration-200
                  font-medium"
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {step >= 3 && REFLECTIVE_MESSAGES[fear] && (
          <div className="w-full max-w-2xl mx-auto bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-sm space-y-3 shadow-sm">
            
             <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">
              Észlelhető működés
            </p>

            <p className="whitespace-pre-line text-gray-800">      
            {REFLECTIVE_MESSAGES[fear].text}
            </p>    

          </div>
        )}


        

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-6">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Nézzük meg, honnan eredhet ez a működés.
          </p>
              
            <h3 className="font-bold text-xl">
              Lehetséges eredet
            </h3>

            {originOptions.map((o) => (
              <button
                key={o}
                onClick={() => {
                  setOrigin(o);
                  setStep(4);
                }}
                className="w-full h-12 rounded-xl border border-gray-300 bg-white
                hover:border-emerald-500
                hover:bg-emerald-50
                hover:shadow-md
                transition-all duration-200
                font-medium"
              >
                {o}
              </button>
            ))}
          </div>
        )}

        {step >= 4 && REFLECTIVE_MESSAGES[origin] && (
          <div className="w-full max-w-2xl mx-auto bg-emerald-50 border border-emerald-100 p-5 rounded-2xl text-sm">
            {REFLECTIVE_MESSAGES[origin].text}
          </div>
        )}

        {/* ================= STEP 4 ================= */}
        {step === 4 && (
          <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-bold text-xl">
              Jellemző reakció
            </h3>

            {avoidanceOptions.map((a) => (
              <button
                key={a}
                onClick={() => {
                  setAvoidance(a);
                  setStep(5);
                }}
                className="w-full h-12 rounded-xl border bg-white hover:bg-emerald-100"
              >
                {a}
              </button>
            ))}
          </div>
        )}

       {/* ================= STEP 5 ================= */}
       {step === 5 && (
        <>
          {AVOIDANCE_MESSAGES[avoidance] && (
            <div className="w-full max-w-2xl mx-auto bg-emerald-50 border border-emerald-100 p-5 rounded-2xl text-sm">
              {AVOIDANCE_MESSAGES[avoidance].text}
            </div>
          )}

          <PersonalSummary
            instinct={selectedInstinct}
            fear={fear}
            origin={origin}
            avoidance={avoidance}
          />

          
          
          
          <EmotionalBrainMapReflection
            instinct={selectedInstinct}
            fear={fear}
            avoidance={avoidance}
          />
                  

          {/* INTEGRÁCIÓ ugyanazon a szinten */}
          {INTEGRATION_PROTOCOLS[selectedInstinct] && (
            <div className="w-full max-w-2xl mx-auto bg-indigo-50 border border-indigo-200 p-6 rounded-2xl shadow-sm space-y-4">

              <p className="text-xs uppercase tracking-wide text-indigo-700 font-semibold">
                Integrációs protokoll
              </p>

              <h4 className="font-semibold text-indigo-900">
                {INTEGRATION_PROTOCOLS[selectedInstinct].title}
              </h4>

              <p className="text-sm text-gray-600 italic">
                {INTEGRATION_PROTOCOLS[selectedInstinct].when}
              </p>

              <ul className="space-y-2 text-sm text-gray-800">
                {INTEGRATION_PROTOCOLS[selectedInstinct].steps.map((stepItem, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-500">•</span>
                    <span>{stepItem}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white border border-indigo-200 p-4 rounded-xl text-sm text-indigo-900">
                {INTEGRATION_PROTOCOLS[selectedInstinct].reframe}
              </div>

            </div>
          )}
          <GrowthModule instinct={selectedInstinct} />


          <DeepConfrontation fear={fear} avoidance={avoidance} />
        
          <DecisionPoint fear={fear} avoidance={avoidance} />
        </>
      )}
     </>
    )
  }

  
  

    {/* ================= FOOTER ================= */}

    <p className="mt-12 mb-24 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
      Az itt megjelenő tartalom önreflexiós és edukációs célú,
      nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
    </p>
  </div>
  );

}




function PersonalSummary({ instinct, fear, origin, avoidance }) {
  const instinctArea = _instinctBrainMap[instinct]?.area || "";

  const areaColor =
    instinctArea.includes("Limbikus") || instinctArea.includes("Amygdala")
      ? "bg-rose-100 border-rose-300"
      : "bg-indigo-100 border-indigo-300";

  return (
    <div className="mt-10 space-y-8">

      {/* SZEMÉLYES MINTA BLOKK */}
      <div className={`p-6 rounded-2xl border ${areaColor}`}>
        <h3 className="text-xl font-bold mb-4">
          A jelenlegi mintázatod
        </h3>

        <p className="text-gray-800 leading-relaxed">
          Inger → <b>{fear}</b> aktiválódik → 
          <b> {origin}</b> mint háttérélmény megjelenik → 
          <b> {avoidance}</b> mint védelem.
        </p>

        <p className="mt-4 text-sm text-gray-600 italic">
          Ez egy {instinctArea} dominanciájú működés.
        </p>
      </div>

      <FlowDiagram fear={fear} origin={origin} avoidance={avoidance} />
      <InstinctCircle instinct={instinct} />

    </div>
  );
}


function FlowDiagram({ fear, origin, avoidance }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
      <h4 className="font-semibold mb-6 text-center">
        Működési folyamat
      </h4>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
        <Step label="Inger" />
        <Arrow />
        <Step label={fear} />
        <Arrow />
        <Step label={origin} />
        <Arrow />
        <Step label={avoidance} />
      </div>
    </div>
  );
}




function Step({ label }) {
  return (
    <div className="px-4 py-3 bg-green-100 rounded-xl min-w-[100px]">
      {label}
    </div>
  );
}

function Arrow() {
  return <div className="text-gray-400 text-xl">→</div>;
}


function InstinctCircle({ instinct }) {
  const area = _instinctBrainMap[instinct]?.area || "";

  const isLimbic =
    area.includes("Limbikus") || area.includes("Amygdala");

  const limbicPercent = isLimbic ? 75 : 35;
  const prefrontalPercent = 100 - limbicPercent;

  const circumference = 2 * Math.PI * 60;
  const limbicOffset =
    circumference - (limbicPercent / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center space-y-4 border border-gray-200">
      <h4 className="font-semibold">
        Idegrendszeri dominancia
      </h4>

      <div className="flex justify-center">
        <svg width="160" height="160">
          <circle
            cx="80"
            cy="80"
            r="60"
            stroke="#e5e7eb"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="60"
            stroke="#10b981"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={limbicOffset}
            strokeLinecap="round"
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>

      <div className="text-sm text-gray-600">
        Limbikus rendszer: {limbicPercent}% <br />
        Prefrontális szabályozás: {prefrontalPercent}%
      </div>
    </div>
  );
}

