import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ImpactReflection from "../components/ImpactReflection";
import SchemaJournal from "../components/SchemaJournal";
import RegulationModule from "../components/RegulationModule";
import api from "../api/axios";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";



import {
  FiUserX,
  FiInfo,
  FiHeart,
  FiUsers,
  FiShield,
  FiCompass,
  FiAlertTriangle,
  FiLink,
  FiTrendingDown,
  FiStar,
  FiZap,
  FiX,
  FiArrowDownCircle,
  FiEyeOff,
  FiAlertOctagon,
  FiLock,
  FiCheckSquare,
  FiSmartphone,
  FiTrendingUp,
  FiLayers,
  FiMessageCircle,
  FiGlobe,
  FiShuffle,
  FiBatteryCharging,


} from "react-icons/fi";



/* 🔐 TERMÉK SLUG */
const PRODUCT_SLUG = "perception";






const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};






/* ======================================================
   🧠 TAB DEFINÍCIÓ
====================================================== */
const tabs = [
  { key: "description", label: "Jelenlegi" },
  { key: "solution", label: "Javasolt" },
  { key: "impact", label: "Hatás" },
  { key: "practicalTips", label: "Tippek" },
  { key: "journalingPrompts", label: "Naplózás" },
  { key: "affirmations", label: "Megerősítések" }
];

/* ======================================================
   🧠 SCHEMA ADATOK
====================================================== */
const schemas = [
 
 {
    id: 1,
    name: "Belső Hiányérzet Kódja",
    description:
      "Megfigyelhető észlelési minta: Bizonyos helyzetekben apró távolságtartó vagy semleges jelzések – egy később érkező válasz, egy rövidebb reakció, egy elmaradó visszajelzés – aránytalanul erős hiányérzetet válthatnak ki. Ilyenkor könnyen megjelenhet az érzés, hogy valami nincs rendben velem, vagy hogy a másik eltávolodott, még akkor is, ha erre nincs egyértelmű bizonyíték.",
    solution:
      "Alternatív észlelési lehetőség: A másik fél viselkedése sok esetben a saját belső állapotát, terheltségét vagy figyelmi kapacitását tükrözi. Ez nem feltétlenül jelent elutasítást, hanem azt, hogy a hiányérzet nem mindig a kapcsolat tényleges állapotáról ad pontos képet.",
    impact:
      "Ez a minta idővel fokozott érzékenységhez vezethet a kapcsolatokban. Előfordulhat, hogy a bizonytalanság miatt az ember visszahúzódik, vagy épp ellenkezőleg: fokozott megerősítést keres, miközben belül egyre erősebb a félelem attól, hogy nem elég fontos. Ez a belső feszültség gyakran kimondatlan marad.",
    practicalTips: [
      "Figyeld meg, milyen testi érzetek jelennek meg ezekben a helyzetekben.",
      "Vedd észre, milyen gondolatok kapcsolódnak a hiányérzethez.",
      "Adj magadnak időt, mielőtt reagálsz.",
      "Tedd fel magadnak a kérdést: mi az, amire most valójában szükségem lenne?"
    ],
    journalingPrompts: [
      "Milyen helyzetekben jelenik meg legerősebben ez az érzés?",
      "Milyen történetet mesélek magamnak ilyenkor?",
      "Mitől tartok leginkább ezekben a pillanatokban?"

    ],
    affirmations: [
      "Értékes vagyok.",
      "Az érzéseim információt hordoznak, nem ítéletet."
    ],
    icon: <FiUserX size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 2,
  name: "Érzelmi Üresség Kódja",
  description:
    "Megfigyelhető belső élmény: Időnként megjelenhet egy nehezen megfogható ürességérzés, mintha a kapcsolódás, a figyelem vagy az érzelmi visszajelzés hiányos lenne. Ez nem feltétlenül konkrét eseményhez kötődik, inkább egy halk, tartós érzés formájában jelenik meg, amelyben a közelség ellenére is hiányérzet marad.",
  solution:
    "Más észlelési lehetőség: A törődés és a kapcsolódás nem mindig intenzív vagy látványos. Gyakran finom, kevésbé észrevehető formában van jelen, és előfordulhat, hogy a belső állapot befolyásolja, mennyire tudjuk ezt érzékelni.",
  impact:
    "Ez a minta idővel belső fáradtsághoz és fokozott megerősítésigényhez vezethet. Az ember próbálhat egyre több figyelmet keresni, miközben az üresség érzése nem csökken, hanem egyre inkább belsővé válik.",
  practicalTips: [
    "Nevezd meg magadban az üresség érzését anélkül, hogy megítélnéd.",
    "Figyeld meg, mikor erősödik fel ez az élmény, és mikor enyhül.",
    "Keresd azokat az apró pillanatokat, ahol mégis jelen van a kapcsolódás.",
    "Tedd fel magadnak a kérdést: mire lenne most szükségem – figyelemre, pihenésre vagy önkapcsolódásra?"
  ],
  journalingPrompts: [
    "Mikor érzem leginkább ezt az ürességet?",
    "Mit hiányolok ilyenkor valójában?",
    "Milyen érzés lenne, ha nem próbálnám azonnal betölteni ezt az űrt?"
  ],
  affirmations: [
    "Az érzéseim jogosak, még ha nehéz is őket megfogalmazni.",
    "A kapcsolódás többféle formában létezhet."
  ],
  icon: <FiInfo size={24} className="text-emerald-500 flex-shrink-0" />
  },
  {
  id: 3,
  name: "Önértékelési Hiány Kódja",
  description:
    "Megfigyelhető belső élmény: Összehasonlítás során könnyen megjelenhet az érzés, hogy mások értékesebbek, sikeresebbek vagy jobban teljesítenek. Ez gyakran nem konkrét tényekből, hanem belső mércékből és feltételezésekből táplálkozik, amelyek fokozatosan alááshatják az önbizalmat.",
  solution:
    "Tágabb nézőpont: Az önértékelés nem kizárólag teljesítményből, eredményekből vagy külső visszajelzésekből áll össze. A belső érték nem mindig látható vagy mérhető, és nem veszít az érvényességéből attól, hogy mások sikerei láthatóbbak.",
  impact:
    "Ez a minta fokozott önkritikához és belső nyomáshoz vezethet. Az ember egyre inkább bizonyítani próbál, miközben belül nő az elégtelenség érzése, ami hosszabb távon kimerültséget és örömvesztést okozhat.",
  practicalTips: [
    "Figyeld meg, mikor indul el az összehasonlítás folyamata.",
    "Nevezd meg az önkritikus belső hangot, anélkül hogy igaznak vennéd.",
    "Írd le azokat a területeket, ahol már most kompetensnek érzed magad.",
    "Adj teret annak a gondolatnak, hogy az érték nem mindig látható."
  ],
  journalingPrompts: [
    "Milyen helyzetekben kérdőjelezem meg leginkább a saját értékemet?",
    "Milyen mércét használok ilyenkor?",
    "Kinek a hangja szólal meg bennem?"
  ],
  affirmations: [
    "Az értékem nem kizárólag a teljesítményemen múlik.",
    "Jogom van fejlődni a saját tempómban."
  ],
  icon: <FiHeart size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 4,
  name: "Kirekesztettség Érzésének Kódja",
  description:
    "Megfigyelhető belső élmény: Társas helyzetekben időnként megjelenhet az érzés, hogy kívülálló vagyok, nem tartozom igazán a többiek közé. Ez az élmény akkor is fennállhat, ha az ember fizikailag jelen van, mégis belső távolságot él meg.",
  solution:
    "Megfigyelési irány: A különbözőség nem egyenlő az elutasítottsággal. Előfordulhat, hogy az észlelés belső élményből fakad, nem pedig a környezet tényleges reakcióiból.",
  impact:
    "Ez az észlelési minta magányérzetet és fokozatos visszahúzódást erősíthet. Az ember egyre kevésbé meri megmutatni magát, miközben belül nő a vágy a kapcsolódás iránt.",
  practicalTips: [
    "Figyeld meg, mikor jelenik meg a kívülállóság érzése.",
    "Válaszd szét a tényleges történéseket és a belső következtetéseket.",
    "Nevezd meg magadban, mire lenne szükséged ezekben a helyzetekben.",
    "Engedd meg, hogy a jelenléted önmagában is elég legyen."
  ],
  journalingPrompts: [
    "Milyen helyzetekben érzem magam leginkább kívülállónak?",
    "Mit feltételezek ilyenkor másokról?",
    "Mi történne, ha nem vonnám vissza magam?"
  ],
  affirmations: [
    "A jelenlétem önmagában érték.",
    "Jogom van a kapcsolódásra."
  ],
  icon: <FiUsers size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 5,
  name: "Bizalmi Védekezés Kódja",
  description:
    "Megfigyelhető észlelési minta: A kapcsolódás potenciális veszélyként jelenhet meg, mintha a megnyílás automatikusan sérüléssel járna. Ilyenkor a távolságtartás védelmi eszközzé válik, még akkor is, ha belül erős a vágy a közelségre.",
  solution:
    "Önismereti szempont: A bizalom nem egyszeri döntés, hanem réteges és fokozatos tapasztalat. A védekezés gyakran egy korábbi élmény lenyomata, nem feltétlenül a jelen helyzet pontos visszatükrözése.",
  impact:
    "Ez a minta érzelmi zártsághoz és kapcsolati távolsághoz vezethet. Az ember biztonságban marad, miközben egyre nehezebb valódi közelséget megélni.",
  practicalTips: [
    "Figyeld meg, mikor lép működésbe a védekezés.",
    "Nevezd meg, mitől próbál megvédeni ez a reakció.",
    "Engedd meg a fokozatosságot a kapcsolódásban.",
    "Vedd észre a kis lépéseket, ahol mégis megjelent a bizalom."
  ],
  journalingPrompts: [
    "Milyen helyzetekben nehéz megnyílnom?",
    "Mit kockáztatnék, ha egy kicsit közelebb engednék valakit?",
    "Mire lenne most szükségem a biztonság érzéséhez?"
  ],
  affirmations: [
    "Jogom van a fokozatos kapcsolódáshoz.",
    "A biztonság és a közelség együtt is létezhet."
  ],
  icon: <FiShield size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 6,
  name: "Önállótlanság Kódja",
  description:
    "Megfigyelhető belső tapasztalat: Döntési helyzetekben bizonytalanság jelenhet meg, mintha a saját választás súlya túl nagy lenne. Ilyenkor az ember gyakran külső megerősítést keres, vagy elhalasztja a döntést, hogy elkerülje a felelősség érzését.",
  solution:
    "Megfigyelési irány: Az önállóság nem veleszületett tulajdonság, hanem tanulható és fokozatosan fejlődő folyamat. A bizonytalanság nem alkalmatlanságot, hanem tanulási teret jelez.",
  impact:
    "Ez a minta függőségi dinamikát és döntési halogatást eredményezhet. Hosszabb távon csökkenhet az önbizalom, miközben nő a frusztráció a saját mozgástér beszűkülése miatt.",
  practicalTips: [
    "Figyeld meg, mikor keresel külső megerősítést.",
    "Kezdj kis, alacsony kockázatú döntésekkel.",
    "Ismerd el magadnak a döntési próbálkozásokat, nem csak az eredményt.",
    "Adj időt a bizonytalanságnak anélkül, hogy azonnal megoldanád."
  ],
  journalingPrompts: [
    "Milyen döntéseket halogatok most?",
    "Mitől tartok leginkább a választás során?",
    "Mi történne, ha nem lenne tökéletes döntés?"
  ],
  affirmations: [
    "Képes vagyok lépésről lépésre dönteni.",
    "A bizonytalanság a tanulás része."
  ],
  icon: <FiCompass size={24} className="text-emerald-500 flex-shrink-0" />
  },
  
  {
  id: 7,
  name: "Fenyegetettség Kódja",
  description:
    "Megfigyelhető észlelési minta: A környezet gyakran kiszámíthatatlannak vagy veszélyesnek tűnhet, még akkor is, ha nincs konkrét fenyegetés jelen. Apró jelek, félmondatok vagy bizonytalan helyzetek is fokozott belső riadókészültséget indíthatnak el, mintha folyamatosan résen kellene lenni.",
  solution:
    "Önreflexiós irány: A bizonytalanság érzése nem mindig jelent tényleges veszélyt. Sok esetben egy korábban megtanult védelmi minta aktiválódik, amely a jelen helyzetet is a múlt tapasztalatain keresztül értelmezi.",
  impact:
    "Ez a minta tartós belső feszültséghez és kimerültséghez vezethet. Az állandó éberség miatt nehézzé válik az ellazulás, ami hosszú távon testi és érzelmi szinten is megterhelő lehet.",
  practicalTips: [
    "Figyeld meg, mikor aktiválódik a veszélyérzet.",
    "Válaszd szét a tényleges eseményeket és a belső következtetéseket.",
    "Térj vissza a jelen pillanat testi érzékeléséhez.",
    "Nevezd meg magadban: mi történik most ténylegesen?"
  ],
  journalingPrompts: [
    "Milyen helyzetekben érzem magam leginkább fenyegetve?",
    "Mi az, amitől ilyenkor védeni próbálom magam?",
    "Milyen jelzések utalnak arra, hogy most biztonságban vagyok?"
  ],
  affirmations: [
    "Képes vagyok különbséget tenni a múlt és a jelen között.",
    "A biztonság érzése belső figyelemből is táplálható."
  ],
  icon: <FiAlertTriangle size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 8,
  name: "Énhatárok Feloldódásának Kódja",
  description:
    "Megfigyelhető belső tapasztalat: Közeli kapcsolatokban a saját szükségletek és határok fokozatosan háttérbe szorulhatnak. Az ember könnyen alkalmazkodik, miközben egyre nehezebbé válik felismerni, mit érez vagy mire lenne valójában szüksége.",
  solution:
    "Megfigyelési irány: A kapcsolódás és az önállóság nem zárják ki egymást. A közelség akkor válik fenntarthatóvá, ha a saját határok is teret kapnak a kapcsolatban.",
  impact:
    "Ez a minta belső kimerültséghez és önazonossági bizonytalansághoz vezethet. Az ember sokat ad, miközben egyre kevésbé érzi magát jelen a saját életében.",
  practicalTips: [
    "Figyeld meg, mikor mondasz igent belső bizonytalanság mellett.",
    "Nevezd meg magadban, mire lenne most szükséged.",
    "Adj időt a saját tempódnak.",
    "Engedd meg, hogy a határok ne magyarázatra szoruljanak."
  ],
  journalingPrompts: [
    "Mikor érzem úgy, hogy háttérbe szorulok egy kapcsolatban?",
    "Mitől félek, ha nemet mondanék?",
    "Hogyan tudnék ma egy kicsit jobban magamhoz kapcsolódni?"
  ],
  affirmations: [
    "Jogom van a saját határaimhoz.",
    "A közelség nem igényel önfeladást."
  ],
  icon: <FiLink size={24} className="text-emerald-500 flex-shrink-0" />
  },

   {
  id: 9,
  name: "Sikertelenség Kódja",
  description:
    "Megfigyelhető észlelési minta: A jövő gyakran kudarccal vagy elégtelenséggel társulhat, mintha a hibázás elkerülhetetlen lenne. Ez az élmény sokszor már a cselekvés előtt megjelenik, és visszatart a próbálkozástól.",
  solution:
    "Önreflexiós irány: A fejlődés nem lineáris, és nem kizárólag eredményekben mérhető. A tanulási folyamat része a bizonytalanság és az átmeneti visszaesés is.",
  impact:
    "Ez a minta önbizalom-csökkenéshez és túlzott önkritikához vezethet. Az ember kevesebb lehetőséget enged meg magának, miközben belül erősödik az elégedetlenség.",
  practicalTips: [
    "Figyeld meg, hogyan beszélsz magaddal kihívások idején.",
    "Válaszd szét a tanulást és az értékítéletet.",
    "Nevezd meg a fejlődési lépéseket az eredmények mellett.",
    "Engedd meg a próbálkozást tökéletesség nélkül."
  ],
  journalingPrompts: [
    "Milyen elvárásokat támasztok magammal szemben?",
    "Mit jelent számomra a kudarc?",
    "Mit tanultam korábbi nehéz helyzetekből?"
  ],
  affirmations: [
    "A tapasztalataim értékesek.",
    "A fejlődésem nem egyetlen mércéhez kötött."
  ],
  icon: <FiTrendingDown size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 10,
  name: "Kiváltságosság Kódja",
  description:
    "Megfigyelhető észlelési minta: Az ember saját szerepét különlegesebbnek vagy elkülönültebbnek élheti meg másokhoz képest. Ez járhat felsőbbrendűség érzésével, de ugyanúgy magányossággal és elszigetelődéssel is.",
  solution:
    "Megfigyelési irány: A különbözőség nem jelent elszakadást vagy fölényt. A kapcsolódás akkor válik élővé, ha az egyenrangúság érzése is megjelenhet.",
  impact:
    "Ez a minta kapcsolati félreértéseket és távolságot hozhat létre. Az ember nehezen talál közös hangot másokkal, miközben belül vágyik a valódi kapcsolódásra.",
  practicalTips: [
    "Figyeld meg, mikor érzed magad elkülönülve másoktól.",
    "Vizsgáld meg, milyen szükséglet állhat az érzés mögött.",
    "Engedd meg a közös pontok felismerését.",
    "Adj teret annak, hogy ne kelljen különlegesnek lenned."
  ],
  journalingPrompts: [
    "Miben érzem magam másnak?",
    "Mit ad és mit vesz el tőlem ez az elkülönültség?",
    "Hol tudnék ma egyenrangúan kapcsolódni?"
  ],
  affirmations: [
    "A kapcsolódás egyenrangúságon alapul.",
    "Nem kell elkülönülnöm ahhoz, hogy értékes legyek."
  ],
  icon: <FiStar size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 11,
  name: "Impulzuskontroll Kódja",
  description:
    "Megfigyelhető belső tapasztalat: A késztetések gyorsan és intenzíven jelenhetnek meg, megelőzve a tudatos mérlegelést. Ilyenkor a cselekvés gyakran azonnali megkönnyebbülést hoz, amit később megbánás követhet.",
  solution:
    "Önismereti irány: Az impulzus és a cselekvés között kialakítható egy megfigyelési tér. Ez a rövid szünet lehetőséget ad arra, hogy a reakció ne automatikus legyen.",
  impact:
    "Ez a minta meggondolatlan döntésekhez és önvádláshoz vezethet. Az ember nehezen bízik a saját reakcióiban, ami tovább növeli a belső feszültséget.",
  practicalTips: [
    "Figyeld meg az impulzus testi jelzéseit.",
    "Adj időt a reakció és a cselekvés között.",
    "Nevezd meg magadban, mit szeretnél elérni a cselekvéssel.",
    "Engedd meg a késleltetést választásként."
  ],
  journalingPrompts: [
    "Milyen helyzetekben nehéz megállni egy pillanatra?",
    "Mit próbál megoldani az impulzus?",
    "Mi segítene abban, hogy legyen választási tered?"
  ],
  affirmations: [
    "Van választásom a reakcióimban.",
    "Nem kell azonnal cselekednem."
  ],
  icon: <FiZap size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 12,
  name: "Alávetettség Kódja",
  description:
    "Megfigyelhető észlelési minta: Mások igényei könnyen előtérbe kerülnek, miközben a saját szükségletek háttérbe szorulnak. Az ember alkalmazkodik, elkerüli a konfliktust, miközben belül egyre nő a feszültség.",
  solution:
    "Megfigyelési irány: Az együttműködés nem igényli az önfeladást. A saját igények felismerése nem önzés, hanem az egyensúly alapja.",
  impact:
    "Ez a minta kimondatlan igényekhez és belső elégedetlenséghez vezethet. Az ember sokat ad, miközben egyre kevésbé érzi magát jelen és megbecsültnek.",
  practicalTips: [
    "Figyeld meg, mikor mondasz nemet magadban.",
    "Nevezd meg a saját igényeidet ítélkezés nélkül.",
    "Engedd meg, hogy a konfliktus ne legyen veszély.",
    "Adj teret a saját hangodnak kis lépésekben."
  ],
  journalingPrompts: [
    "Milyen helyzetekben szorítom háttérbe magam?",
    "Mitől félek, ha képviselem a saját igényeimet?",
    "Mi történne, ha ma egy kicsit magam mellé állnék?"
  ],
  affirmations: [
    "A szükségleteim érvényesek.",
    "Jogom van helyet foglalni."
  ],
  icon: <FiArrowDownCircle size={24} className="text-emerald-500 flex-shrink-0" />
  },

  {
  id: 13,
  name: "Túlzott Gondoskodás Kódja",
  description:
    "Megfigyelhető észlelési minta: Mások igényei könnyen előtérbe kerülnek, miközben a saját szükségletek háttérbe szorulnak. A gondoskodás ilyenkor nem választásként, hanem belső késztetésként jelenik meg, gyakran bűntudat, felelősségérzet vagy túlzott empátia kíséretében.",
  solution:
    "Megfigyelési irány: A törődés értékes képesség, de nem feltétele az elfogadásnak. A gondoskodás akkor válik fenntarthatóvá, ha a saját határok és szükségletek is jelen lehetnek.",
  impact:
    "Ez a minta érzelmi kimerültséghez és rejtett nehezteléshez vezethet. Az ember sokat ad, miközben egyre kevésbé érzi, hogy ő maga is kapna.",
  practicalTips: [
    "Figyeld meg, mikor érzed kötelezőnek a segítséget.",
    "Nevezd meg magadban, mire lenne most szükséged.",
    "Engedd meg, hogy a gondoskodás ne automatikus legyen.",
    "Vizsgáld meg, mi történne, ha egy lépéssel hátrébb lépnél."
  ],
  journalingPrompts: [
    "Mikor érzem úgy, hogy többet adok, mint amennyi jól esik?",
    "Mitől félek, ha nem gondoskodom?",
    "Hol szorul háttérbe most a saját szükségletem?"
  ],
  affirmations: [
    "A szükségleteim ugyanolyan fontosak.",
    "A gondoskodás lehet választás, nem kötelesség."
  ],
  icon: <FiHeart size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 14,
  name: "Figyelemigény Kódja",
  description:
    "Megfigyelhető észlelési minta: Erős belső késztetés jelenhet meg arra, hogy mások figyelmét, jóváhagyását vagy elismerését megszerezzük. A visszajelzések hiánya ilyenkor könnyen bizonytalanságot vagy értéktelenségérzést válthat ki.",
  solution:
    "Megfigyelési irány: A figyelem iránti vágy alapvető emberi szükséglet, de nem kizárólag külső forrásból elégíthető ki. A belső önkapcsolat erősítése csökkentheti a külső megerősítés súlyát.",
  impact:
    "Ez a minta önazonossági bizonytalansághoz vezethet. Az ember könnyen eltávolodik attól, amit valójában érez vagy szeretne, miközben folyamatosan alkalmazkodik.",
  practicalTips: [
    "Figyeld meg, mikor várod mások visszajelzését.",
    "Nevezd meg, mit szeretnél valójában hallani.",
    "Adj magadnak elismerést külső megerősítés nélkül.",
    "Vizsgáld meg, mi maradna meg figyelem nélkül is."
  ],
  journalingPrompts: [
    "Mit jelent számomra az elismerés?",
    "Ki lennék, ha nem kellene bizonyítanom?",
    "Mikor érzem magam önazonosnak?"
  ],
  affirmations: [
    "Az értékem nem a figyelemtől függ.",
    "Jelen lehetek anélkül, hogy bizonyítanék."
  ],
  icon: <FiEyeOff size={24} className="text-emerald-500 flex-shrink-0" />

  },

  {
  id: 15,
  name: "Ellenséges Belátás Kódja",
  description:
    "Megfigyelhető észlelési minta: A figyelem gyakran a veszteségre, hibákra vagy fenyegetésekre irányul, még semleges vagy pozitív helyzetekben is. Az élet alapvetően kockázatosnak vagy csalódást keltőnek tűnhet.",
  solution:
    "Megfigyelési irány: A negatív fókusz sok esetben védelmi funkciót tölt be. Nem a valóság teljességét tükrözi, hanem egy szűkített észlelési szűrőt.",
  impact:
    "Ez a minta tartós feszültséget és érzelmi bezáródást eredményezhet. Nehézzé válik az öröm és a bizalom megélése.",
  practicalTips: [
    "Figyeld meg, mire irányul automatikusan a figyelmed.",
    "Nevezd meg, mi az, ami most nem veszélyes.",
    "Adj teret a semleges és pozitív tapasztalatoknak is.",
    "Kérdezd meg magadtól: mi mást is látok még?"
  ],
  journalingPrompts: [
    "Milyen veszélyeket keresek automatikusan?",
    "Mikor tanultam meg így figyelni?",
    "Mi segítene a tágabb nézőpontban?"
  ],
  affirmations: [
    "Nem minden helyzet fenyegető.",
    "Megengedhetem magamnak a nyitottságot."
  ],
  icon: <FiAlertOctagon size={24} className="text-emerald-500 flex-shrink-0" />

 },

 {
  id: 16,
  name: "Belső Önkorlátozás Kódja",
  description:
    "Megfigyelhető belső tapasztalat: Az érzelmek kimutatása vagy megélése visszafogottá válik. Az ember igyekszik kontroll alatt tartani önmagát, elkerülve a szégyent, kritikát vagy a kiszolgáltatottság érzését.",
  solution:
    "Megfigyelési irány: Az érzelmek nem gyengeséget, hanem információt hordoznak. A kontroll nem feltétlenül jelent biztonságot, sokszor csak távolságot önmagunktól.",
  impact:
    "Ez a minta érzelmi elszigetelődéshez és belső feszültséghez vezethet. Az ember nehezen kapcsolódik, még saját magához is.",
  practicalTips: [
    "Figyeld meg, mikor feszíted vissza az érzéseidet.",
    "Nevezd meg magadban, mit érzel ítélkezés nélkül.",
    "Adj kis teret az érzelmeknek biztonságos környezetben.",
    "Engedd meg, hogy ne kelljen mindig kontrollálni."
  ],
  journalingPrompts: [
    "Mely érzelmeket tartom veszélyesnek?",
    "Mitől védene meg a visszafogottság?",
    "Mi történne, ha egy kicsit engednék?"
  ],
  affirmations: [
    "Az érzéseim biztonságosak.",
    "Kapcsolódhatok önmagamhoz."
  ],
  icon: <FiLock size={24} className="text-emerald-500 flex-shrink-0" />

 },

  {
  id: 17,
  name: "Perfekcionizmus Kódja",
  description:
    "Megfigyelhető észlelési minta: A belső mérce rendkívül magas, a hibázás pedig fenyegetőnek tűnik. Az értékesség gyakran a teljesítményhez és a hibátlansághoz kapcsolódik.",
  solution:
    "Megfigyelési irány: A tökéletességre törekvés sokszor védekezés a kritikával és elutasítással szemben. Az érték nem kizárólag az eredményekből fakad.",
  impact:
    "Ez a minta állandó belső nyomást és kimerültséget okozhat. Az öröm és az elégedettség ritkán válik elérhetővé.",
  practicalTips: [
    "Figyeld meg, mikor emelkedik túl magasra a belső mérce.",
    "Engedd meg a „elég jó” állapotot.",
    "Válaszd szét az értéket és a teljesítményt.",
    "Adj teret a hibázás tanulási oldalának."
  ],
  journalingPrompts: [
    "Mitől félek, ha nem vagyok tökéletes?",
    "Kinek a hangja szól bennem ilyenkor?",
    "Mi lenne most elég jó?"
  ],
  affirmations: [
    "Elég vagyok fejlődés közben is.",
    "Nem kell bizonyítanom az értékemet."
  ],
  icon: <FiCheckSquare size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 18,
  name: "Belső Bíró Kódja",
  description:
    "Megfigyelhető észlelési minta: Erős belső ítélkezés jelenik meg önmagunkkal vagy másokkal szemben. A hibák nem egyszerű tapasztalatként, hanem morális kudarcként jelennek meg, mintha büntetést vagy szigorú következményeket vonnának maguk után.",
  solution:
    "Megfigyelési irány: Az ítélkezés sok esetben a rend és biztonság fenntartására tett belső kísérlet. Nem feltétlenül a valós helyzetet tükrözi, hanem egy tanult belső szabályrendszert.",
  impact:
    "Ez a minta tartós bűntudathoz, szégyenhez és kapcsolati feszültségekhez vezethet. Az ember nehezen enged meg magának vagy másoknak hibázást, ami érzelmi távolságot teremt.",
  practicalTips: [
    "Figyeld meg, mikor jelenik meg az ítélkező belső hang.",
    "Nevezd meg, mit próbál megvédeni ez a szigor.",
    "Válaszd szét a viselkedést és az értéket.",
    "Adj teret az együttérzőbb belső hangnak."
  ],
  journalingPrompts: [
    "Milyen hibákat tartok elfogadhatatlannak?",
    "Kinek a szabályai élnek bennem?",
    "Hogyan nézne ki az együttérzés önmagam felé?"
  ],
  affirmations: [
    "A hibák nem határozzák meg az értékemet.",
    "Lehetek együttérző önmagammal."
  ],
  icon: <FiShield size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 19,
  name: "Digitális Elidegenedés Kódja",
  description:
    "Megfigyelhető belső élmény: A digitális térben töltött idő növekedésével párhuzamosan megjelenhet az elszigeteltség érzése. Bár folyamatos az információ- és kapcsolattartás, a valódi jelenlét és kapcsolódás hiányérzete erősödik.",
  solution:
    "Megfigyelési irány: A digitális eszközök nem önmagukban okoznak elidegenedést, hanem akkor, amikor a jelenlétet helyettesítik. A kapcsolódás minősége fontosabb, mint a mennyisége.",
  impact:
    "Ez a minta belső ürességhez, figyelmi szétszórtsághoz és fokozott magányérzethez vezethet, még aktív online jelenlét mellett is.",
  practicalTips: [
    "Figyeld meg, mikor nyúlsz automatikusan az eszközökhöz.",
    "Adj teret a digitális szüneteknek.",
    "Keresd a valódi jelenlét élményét offline helyzetekben.",
    "Nevezd meg, mire vágysz valójában a képernyő mögött."
  ],
  journalingPrompts: [
    "Mit pótol most a digitális jelenlét?",
    "Mikor érzem magam igazán kapcsolódva?",
    "Mi segítene a tudatosabb használatban?"
  ],
  affirmations: [
    "Jogom van a valódi jelenléthez.",
    "Kapcsolódhatok önmagamhoz és másokhoz."
  ],
  icon: <FiSmartphone size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 20,
  name: "Teljesítmény-kényszer Kódja",
  description:
    "Megfigyelhető észlelési minta: Erős belső nyomás jelenik meg arra, hogy folyamatosan teljesíteni kell. A pihenés vagy lassítás bűntudattal társulhat, mintha az értékesség kizárólag az eredményekhez kötődne.",
  solution:
    "Megfigyelési irány: A teljesítményhez kötött értékesség tanult minta, nem objektív igazság. A létezés önmagában nem igényel folyamatos bizonyítást.",
  impact:
    "Ez a minta krónikus stresszhez, kimerültséghez és belső ürességhez vezethet. Az ember nehezen engedi meg magának a pihenést.",
  practicalTips: [
    "Figyeld meg, mikor érzed magad haszontalannak.",
    "Válaszd szét a teljesítést és az értéket.",
    "Adj tudatos teret a pihenésnek.",
    "Engedd meg a nem-produktív időt."
  ],
  journalingPrompts: [
    "Mit jelent számomra a siker?",
    "Mitől félek, ha megállok?",
    "Ki lennék teljesítés nélkül?"
  ],
  affirmations: [
    "Az értékem nem a teljesítményemen múlik.",
    "Jogom van a pihenéshez."
  ],
  icon: <FiTrendingUp size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 21,
  name: "Információs Túlterheltség és Döntésképtelenség Kódja",
  description:
    "Megfigyelhető belső tapasztalat: A túl sok információ hatására nehézzé válik a fókusz és a döntéshozatal. Az ember egyszerre túl sok lehetőséget lát, miközben egyik mellett sem tud elköteleződni.",
  solution:
    "Megfigyelési irány: A döntésképtelenség nem gyengeség, hanem túlterheltségi jelzés. A kevesebb információ gyakran tisztább belső irányt eredményez.",
  impact:
    "Ez a minta halogatáshoz, belső feszültséghez és önbizalom-csökkenéshez vezethet.",
  practicalTips: [
    "Figyeld meg, mikor válik túl sokká az információ.",
    "Szűkítsd tudatosan a lehetőségeket.",
    "Engedd meg a nem tökéletes döntést.",
    "Adj időt a belső érzeteknek."
  ],
  journalingPrompts: [
    "Milyen döntést halogatok most?",
    "Mitől félek a választásban?",
    "Mi lenne az első kis lépés?"
  ],
  affirmations: [
    "Képes vagyok dönteni.",
    "Nem kell mindent tudnom előre."
  ],
  icon: <FiLayers size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 22,
  name: "Külső Validáció-függőség Kódja",
  description:
    "Megfigyelhető észlelési minta: Az önértékelés nagymértékben függ mások visszajelzéseitől, elismerésétől vagy jóváhagyásától. A belső bizonytalanság gyakran csak akkor csillapodik, ha kívülről érkezik megerősítés.",
  solution:
    "Megfigyelési irány: A külső visszajelzés fontos lehet, de nem helyettesíti a belső értékelést. Az önérték nem kizárólag mások reakcióin keresztül válik valóságossá.",
  impact:
    "Ez a minta érzelmi kiszolgáltatottsághoz vezethet. A hangulat és önkép könnyen ingadozik mások viselkedése alapján, ami hosszú távon belső instabilitást okoz.",
  practicalTips: [
    "Figyeld meg, mikor keresel külső megerősítést.",
    "Nevezd meg, mire lenne szükséged belül.",
    "Adj visszajelzést önmagadnak is.",
    "Gyakorold a belső megerősítést."
  ],
  journalingPrompts: [
    "Mikor érzem magam értékesnek?",
    "Kinek a véleménye hat rám legerősebben?",
    "Mit mondanék magamnak elismerésként?"
  ],
  affirmations: [
    "Az értékem belülről is megerősíthető.",
    "Nem vagyok mások visszajelzése."
  ],
  icon: <FiMessageCircle size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 23,
  name: "Klíma- és Jövőfélelem Kódja",
  description:
    "Megfigyelhető belső élmény: A jövővel kapcsolatos bizonytalanság – különösen a környezeti és globális változások miatt – tartós szorongást és tehetetlenségérzést válthat ki.",
  solution:
    "Megfigyelési irány: A jövő nem teljes egészében kontrollálható, de a jelenben hozott tudatos döntések csökkenthetik a belső feszültséget.",
  impact:
    "Ez a minta reménytelenséghez, motivációvesztéshez vagy túlzott aggodalomhoz vezethet, miközben a jelen pillanat megélése háttérbe szorul.",
  practicalTips: [
    "Figyeld meg, mikor csúszol át jövőorientált szorongásba.",
    "Térj vissza a jelen pillanat érzékeléséhez.",
    "Keresd a hatókörödön belüli cselekvéseket.",
    "Engedd el a teljes kontroll illúzióját."
  ],
  journalingPrompts: [
    "Mitől félek leginkább a jövőben?",
    "Mi az, amire most hatással lehetek?",
    "Mit jelent számomra a felelősség és az elfogadás?"
  ],
  affirmations: [
    "A jelen pillanatban biztonságban lehetek.",
    "Képes vagyok együtt élni a bizonytalansággal."
  ],
  icon: <FiGlobe size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 24,
  name: "Önállóság–elszakadottság Paradoxon Kódja",
  description:
    "Megfigyelhető belső konfliktus: Az egyén egyszerre vágyik autonómiára és mély kapcsolódásra. Amikor közel kerül valakihez, megjelenhet a szabadság elvesztésének félelme; amikor távolságot tart, a magány érzése erősödik.",
  solution:
    "Megfigyelési irány: Az önállóság és a kapcsolódás nem egymást kizáró fogalmak. Mindkettő jelen lehet egyszerre, rugalmas egyensúlyban.",
  impact:
    "Ez a minta kapcsolati ambivalenciához és belső bizonytalansághoz vezethet. Az ember nehezen érzi magát igazán otthon sem egyedül, sem kapcsolatban.",
  practicalTips: [
    "Figyeld meg, mikor jelenik meg az elszakadás vágya.",
    "Nevezd meg, mire van szükséged a kapcsolatban.",
    "Engedd meg a változó közelséget.",
    "Kommunikáld a határaidat."
  ],
  journalingPrompts: [
    "Mit jelent számomra a szabadság?",
    "Mitől félek a közelségben?",
    "Hogyan nézne ki az egyensúly?"
  ],
  affirmations: [
    "Lehetek önálló és kapcsolódó egyszerre.",
    "A közelség nem vesz el belőlem."
  ],
  icon: <FiShuffle size={24} className="text-emerald-500 flex-shrink-0" />

},

{
  id: 25,
  name: "Érzelmi Túlterheltség és Kiégés Kódja",
  description:
    "Megfigyelhető belső állapot: Tartós érzelmi és mentális terhelés hatására megjelenhet a kimerültség, érdektelenség és motivációvesztés. Az ember úgy érzi, túl sok mindent visz egyedül.",
  solution:
    "Megfigyelési irány: A kiégés nem gyengeség, hanem jelzés. A rendszer túlterhelődött, és pihenésre, átrendezésre van szüksége.",
  impact:
    "Ez a minta érzelmi elsivárosodáshoz, kapcsolati eltávolodáshoz és testi tünetekhez is vezethet, ha tartósan fennmarad.",
  practicalTips: [
    "Figyeld meg a kimerültség korai jeleit.",
    "Adj engedélyt a lassításra.",
    "Határozd meg újra a prioritásaidat.",
    "Kérj támogatást, amikor szükséges."
  ],
  journalingPrompts: [
    "Mi merít ki leginkább most?",
    "Mit jelent számomra a pihenés?",
    "Mit engedhetnék el?"
  ],
  affirmations: [
    "Jogom van megállni.",
    "Az energiaszintem fontos."
  ],
  icon: <FiBatteryCharging size={24} className="text-emerald-500 flex-shrink-0" />

}

];





// eslint-disable-next-line react-refresh/only-export-components
export {schemas};

/* ======================================================
   🧠 FŐ KOMPONENS
====================================================== */
export default function Perception() {
  const navigate = useNavigate();
  const location = useLocation();
  const { canPreviewAll } = useAuth();

  /* 🔐 ACCESS */
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  /* 🧠 UI */
  const [selectedSchema, setSelectedSchema] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [search, setSearch] = useState("");
 
 

  

  /* ⌨️ ESC */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelectedSchema(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);



   useEffect(() => {
  const params = new URLSearchParams(location.search);
  const schemaId = params.get("schema");

  if (schemaId) {
    const found = schemas.find(
      s => s.id === Number(schemaId)
    );

    if (found) {
      setSelectedSchema(found);
      setActiveTab("description");
    }
  }
}, [location.search]);



  /* 🔐 ACCESS CHECK */
  useEffect(() => {
  // ✅ ADMIN / DEV PREVIEW
  if (canPreviewAll) {
    setHasAccess(true);
    setCheckingAccess(false);
    return;
  }

  // ⛔ normál user
  const check = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCheckingAccess(false);
      return;
    }

    try {
      const res = await api.get(
        `/orders/has-product/${PRODUCT_SLUG}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setHasAccess(res.data.hasAccess);
    } catch {
      setHasAccess(false);
    } finally {
      setCheckingAccess(false);
    }
  };

  check();
}, [canPreviewAll]);




  const filteredSchemas = useMemo(() => {
    return schemas.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

 

  /* ⏳ */
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
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg"
        >
          Vásárlás
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20 md:pt-28">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-8">
      {/* HEADER */}
      <div className="flex flex-col items-center gap-5 mb-4">
        <h1 className="text-3xl font-semibold text-green-600 tracking-tight mx-auto text-center">Ösztönkódok</h1>
        

        <button
          onClick={() => navigate("/my-patterns")}
          className="
            text-sm
            bg-green-600
            text-white
            px-4 py-2
            rounded-xl
            hover:bg-green-700
            transition
          "
        >
          Saját mintázataim
        </button>
      </div>

      <input
        placeholder="Keresés…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-2xl
                  bg-white
                  border border-emerald-200
                  placeholder:text-emerald-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
      />

      {/* LISTA */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredSchemas.map(schema => (
          <div
            key={schema.id}
            onClick={() => {
              setSelectedSchema(schema);
              setActiveTab("description");
            
            }}
            className="bg-white
                        p-6 rounded-2xl
                        shadow-sm
                        border border-emerald-200
                        transition
                        hover:bg-emerald-100
                        hover:shadow-md hover:-translate-y-0.5"
                                >
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              {schema.icon}
              </div>
              <h3 className="font-medium text-gray-800">
                {schema.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

        <AnimatePresence>
        {selectedSchema && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedSchema(null)}
          >
            {/* MODAL KÁRTYA */}
            <motion.div
              className="
               bg-white
                w-[92%]
                sm:w-full
                max-w-2xl
                max-h-[90vh]
                flex flex-col
                p-5 sm:p-6
                rounded-2xl
                shadow-xl
                space-y-6
                relative
                border border-emerald-300
              "
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* FEJLÉC */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Észlelési minta
                  </p>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedSchema.name}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedSchema(null)}
                  className="
                    text-gray-400
                    hover:text-red-500
                    hover:bg-red-50
                    active:scale-95
                    transition-all
                    duration-150
                    p-2
                    rounded-full
                  "
                  aria-label="Bezárás"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* TABOK */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {tabs.map(t => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                      activeTab === t.key
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* TARTALOM */}
           
             <div className="flex-1 overflow-y-auto pr-2 space-y-6">

              {/* TARTALOM */}
              {Array.isArray(selectedSchema[activeTab]) ? (
                <ul className="list-disc list-inside space-y-1">
                  {selectedSchema[activeTab].map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              ) : (
                <p>{selectedSchema[activeTab]}</p>
              )}


            {activeTab === "impact" && (
              <ImpactReflection schema={selectedSchema} />
            )}
                        
             {activeTab === "solution" && (
            <RegulationModule schema={selectedSchema} />
            )}

            {activeTab === "journalingPrompts" && (
              <SchemaJournal schema={selectedSchema} />
            )}
            
            </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
   
    </div>

     <p className="mt-12 pb-24 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
      Az itt megjelenő tartalom önreflexiós és edukációs célú,
      nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
      Az alkalmazás használata nem helyettesíti szakemberrel való konzultációt.
    </p>
   </div> 
  );
}