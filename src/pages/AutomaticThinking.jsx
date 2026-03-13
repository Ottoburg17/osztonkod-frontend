import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import api from "../api/axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PRODUCT_SLUG = "automatic-thinking";

const predefinedThoughts = [
  { label: "Biztos elrontom", key: "biztos elrontom" },
  { label: "Soha nem sikerül semmi", key: "soha nem sikerül" },
  { label: "Minden rossz", key: "minden rossz" },
  { label: "Csak a rosszat látom", key: "csak a rosszat látom" },
  { label: "Mindenki lenéz engem", key: "mindenki lenéz engem" },
  { label: "Hülye vagyok", key: "hülye vagyok" },
  { label: "Nem szabadna ezt éreznem", key: "nem szabadna ezt éreznem" },
  { label: "Miért velem történik?", key: "miért velem történik" },
  { label: "Más hibája", key: "más hibája" },
  { label: "Mindenki jobb nálam", key: "mindenki jobb nálam" },
  { label: "Biztos baj történik", key: "biztos történik valami baj" },
  { label: "Megint ugyanaz történt", key: "megint ugyanaz történt" },
  { label: "Biztos rossz, mert így érzem", key: "biztos rossz, mert rosszul érzem magam" },
  { label: "Az én hibám", key: "az én hibám" },
];

export default function AutomaticThinking() {
  const navigate = useNavigate();
  const { canPreviewAll } = useAuth();

  /* 🔐 HOZZÁFÉRÉS */
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  /* 🧠 APP STATE */
  const [analysis, setAnalysis] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [reframe, setReframe] = useState("");
  const [saved, setSaved] = useState(false);
  const [customThought, setCustomThought] = useState("");

  const [journal, setJournal] = useState(() => {
    try {
      const stored = localStorage.getItem("journalEntries");
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  /* -------------------------------------------------- */
  /* 🔐 JOGOSULTSÁG ELLENŐRZÉS */
  /* -------------------------------------------------- */
  useEffect(() => {
    if (canPreviewAll) {
      setHasAccess(true);
      setCheckingAccess(false);
      return;
    }

    const checkAccess = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setCheckingAccess(false);
        return;
      }

      try {
        const res = await api.get(`/orders/has-product/${PRODUCT_SLUG}`, {
          headers: { Authorization: `Bearer ${token}` },
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

  /* -------------------------------------------------- */
  /* 🧠 ELEMZÉS LOGIKA – (rövidítve, a tied változatlan) */
  /* -------------------------------------------------- */
  const analyzeThought = (input) => {
    input = input.toLowerCase();

  
    if (input.includes("biztos elrontom")) {
  return {
    analysis: `Amikor megjelenik a „biztos elrontom” gondolat, 
    a rendszer automatikusan a lehetséges legrosszabb kimenetre fókuszál.

    Bizonytalanság esetén az agy hajlamos egy negatív forgatókönyvet gyorsan lefuttatni, 
    mintha előre fel akarná mérni és kivédeni a veszélyt.

    A gondolat ilyenkor nem lehetőségként jelenik meg, 
    hanem tényként hat – még mielőtt bármi megtörtént volna.

    Ez növelheti:
    – a belső feszültséget  
    – a teljesítmény körüli nyomást  
    – az elkerülés késztetését  

    Fontos észrevenni: 
    a jövőről szóló gondolat nem jóslat, hanem egy mentális forgatókönyv.

    Az idegrendszer ilyenkor nem a valószínűséget számolja, 
    hanem a veszélyt próbálja minimalizálni.`,
            
        questions: [
          "Mi a legrosszabb, ami reálisan történhet?",
          "Mennyire valószínű ez 0–100% között?",
          "Volt már olyan, hogy hasonló helyzetben mégis sikerült?",
          "Mi az, amit már most is tudsz vagy jól csinálsz?",
          "Ha hibáznék is, valóban arányos lenne a következmény?",
          "Mit mondanék egy barátomnak, ha ő így gondolkodna?"
        ]
      };
    }

    if (input.includes("minden rossz") || input.includes("semmi sem jó")) {
  return {
    analysis: `Amikor megjelenik a „minden rossz” vagy „semmi sem jó” gondolat, 
    a rendszer hajlamos a helyzetet szélsőséges keretben értelmezni.

    Magas érzelmi terhelésnél az agy leegyszerűsíti a valóságot. 
    A fekete-fehér értelmezés gyors és egyértelmű — 
    ezért biztonságosabbnak tűnhet, mint az árnyaltság.

    Ilyenkor egy intenzív érzés felnagyíthatja a teljes képet, 
    és az élmény általános igazságnak hat.

    Fontos észrevenni:
    a valóság ritkán teljesen pozitív vagy teljesen negatív. 
    A legtöbb helyzet kevert.

    Lehet benne csalódás és tanulás.
    Lehet benne hiba és fejlődés.
    Lehet benne veszteség és lehetőség.

    A kérdés nem az, hogy „rossz-e?”, 
    hanem az, hogy „milyen mértékben és milyen területen?”`,

        questions: [
          "Ha 0–100 skálán értékelném, valóban 0 ez a helyzet?",
          "Van legalább egy apró kivétel a 'minden' állításban?",
          "Mi az, ami részben mégis működik?",
          "Volt már olyan, hogy hasonló helyzet árnyaltabb lett idővel?",
          "Lehetséges, hogy most az érzelmi intenzitás felnagyítja az értékelést?",
          "Mi lenne egy pontosabb, kevésbé szélsőséges megfogalmazás?"
        ]
      };
    }

    if (input.includes("csak a rosszat látom") || input.includes("nincs semmi jó ebben")) {
  return {
    analysis: `Amikor megjelenik a „csak a rosszat látom” vagy „nincs semmi jó ebben” gondolat, 
    a figyelem hajlamos a negatív elemekre fókuszálni, 
    miközben más tényezők háttérbe szorulnak.

    Az idegrendszer természetesen érzékenyebb a veszélyre és a hiányra. 
    Ez evolúciós előny volt: a problémák észlelése fontosabb volt a túléléshez, mint az, ami rendben van.

    A működés akkor válik megterhelővé, 
    amikor a figyelem tartósan egy irányba szűkül.

    Ilyenkor a valóság nem feltétlenül hamis —
    inkább beszűkített.

    Előfordulhat, hogy:
    – a kritika erősebben hat, mint az elismerés  
    – a hiba nagyobbnak tűnik, mint az eredmény  
    – a hiány láthatóbb, mint az, ami működik  

    Fontos észrevenni:
    a negatív elem lehet valós.  
    De ritkán ez az egyetlen része a képnek.

    A kérdés nem az, hogy „van-e benne rossz?”,  
    hanem az, hogy „mi minden más van még jelen, amit most nem látok?”`,

        questions: [
          "Mi az a legkisebb pozitív vagy semleges elem ebben a helyzetben?",
          "Ha egy külső megfigyelő nézné ezt, mit venne még észre?",
          "Volt már olyan, amikor nem csak a negatívum dominált?",
          "Lehetséges, hogy most a figyelmem beszűkült?",
          "Mi változna az érzéseimben, ha a teljes képet nézném?",
          "Mi az, amit most természetesnek veszek, pedig érték?"
        ]
      };
    }
      

   if (input.includes("mindenki lenéz engem") || input.includes("biztos utálnak")) {
  return {
    analysis: `Amikor megjelenik a „mindenki lenéz engem” vagy „biztos utálnak” gondolat,
  a rendszer gyors következtetést von le mások belső állapotáról.

  Társas helyzetekben az agy folyamatosan értelmezi a jeleket:
  arcok, hangszín, csend, reakcióidő.
  Amikor bizonytalanság van, az elme hajlamos a hiányzó információt
  egy feltételezéssel kitölteni.

  Ilyenkor az érzés valós lehet —
  a következtetés azonban nem mindig bizonyítékon alapul.

  Előfordulhat, hogy:
  – egy semleges jel negatív jelentést kap  
  – a csend elutasításnak tűnik  
  – a távolság személyes kritikának hat  

  Ez gyakran kapcsolódhat korábbi elutasítás élményhez
  vagy fokozott társas érzékenységhez.

  Fontos különbséget tenni:
  más emberek gondolatai nem közvetlenül hozzáférhetők.
  A legtöbb esetben csak értelmezünk.

  A kérdés nem az, hogy „mit gondolnak rólam?”,
  hanem az, hogy „milyen bizonyítékom van erre a következtetésre?”`,
          
      questions: [
        "Mi az objektív jel, ami ezt a következtetést alátámasztja?",
        "Van más, reális magyarázat erre a viselkedésre?",
        "Lehetséges, hogy most a saját bizonytalanságom erősíti ezt az értelmezést?",
        "Volt már olyan, hogy később kiderült, mást jelentett a helyzet?",
        "Mit változtatna, ha ezt most csak feltételezésként kezelném?",
        "Hogyan reagálnék, ha nem lennék biztos a negatív értelmezésben?"
      ]
    };
  }

    
  

  if (input.includes("hülye vagyok") || input.includes("tehetségtelen vagyok")) {
  return {
    analysis: `Amikor megjelenik a „hülye vagyok” vagy „tehetségtelen vagyok” gondolat,
    a rendszer egy konkrét helyzetből gyorsan identitás-következtetést von le.

    Ilyenkor nem a viselkedés kerül fókuszba,
    hanem a teljes önkép.

    Fontos különbséget tenni:
    „Elrontottam valamit” nem ugyanaz,
    mint „Én elrontott ember vagyok.”

    Magas érzelmi terhelésnél az agy leegyszerűsít.
    Egy eseményből általános érvényű következtetést formál arról, ki vagy.

    A működés gyakran így halad:
    Hiba → Szégyen → Önkép beszűkülése → Önbizalom csökkenése

    A hiba önmagában nem identitás.
    Egy pillanat nem határozza meg a teljes személyiséget.

    A képességek fejlődnek.
    A készségek tanulhatók.
    Az önkép rugalmasabb, mint amilyennek most tűnik.

    A kérdés nem az, hogy „milyen ember vagyok?”,
    hanem az, hogy „mit mond ez a helyzet a fejlődési pontomról?”`,

        questions: [
          "Mi történt konkrétan, tényszerűen?",
          "Ez egy viselkedés volt, vagy az egész személyiségem?",
          "Volt már olyan helyzet, amikor kompetensen működtem?",
          "Milyen készséget kellene inkább fejlesztenem?",
          "Mit mondanék egy barátomnak, ha ő nevezné magát így?",
          "Lehetséges, hogy most a szégyen szűkíti az önképemet?"
        ]
      };
    }


      

  if (
  input.includes("semmit nem érek") ||
  input.includes("értéktelen vagyok") ||
  input.includes("nincs bennem semmi")
) {
  return {
    analysis: `Amikor megjelenik a „semmit nem érek” vagy „értéktelen vagyok” gondolat,
a rendszer egy aktuális élményt az egész önképre vetít ki.

Ilyenkor nem egy helyzet kerül értékelésre,
hanem a saját létezésed válik kérdésessé.

Fontos különbséget tenni:
egy eredmény változhat,
egy állapot múlhat,
egy időszak lehet nehéz —
de ezek nem azonosak azzal, hogy ki vagy.

Magas érzelmi terhelésnél az agy hajlamos összeolvasztani:
„nem sikerült” → „nem vagyok elég”.

Ez gyakran kapcsolódhat:
– korábbi elutasítás élményhez  
– belsővé vált kritikákhoz  
– összehasonlításhoz  
– tartós megfelelési nyomáshoz  

Az önérték nem teljesítmény-mutató.
Nem pillanatnyi visszajelzés.
Nem külső mérőszám.

A kérdés nem az, hogy „eleget érek-e?”,
hanem az, hogy „milyen élmény szűkítette most az önképemet?”`,

    questions: [
      "Milyen konkrét esemény indította el ezt a gondolatot?",
      "Ez egy állapot, vagy az egész személyiségem?",
      "Volt már olyan időszak, amikor máshogy láttam magam?",
      "Milyen tulajdonságom marad akkor is, ha most nehéz időszakban vagyok?",
      "Mit mondanék egy számomra fontos embernek, ha ő érezné ezt?",
      "Lehetséges, hogy most a belső kritikus hang erősebb, mint a teljes kép?"
    ]
  };
}




if (
  input.includes("nem szabadna ezt éreznem") ||
  input.includes("nekem mindig így kellene")
) {
  return {
    analysis: `Amikor megjelenik a „nem szabadna ezt éreznem” vagy „mindig így kellene” gondolat,
a belső szabályrendszer aktiválódik.

Ilyenkor nem az érzés kerül vizsgálatra,
hanem egy belső elvárás méri azt.

Az érzelmek azonban nem parancsra működnek.
Nem azért jelennek meg, mert „helyesek” vagy „helytelenek”,
hanem mert az idegrendszer reagál valamire.

Fontos különbséget tenni:
az érzés és a cselekvés nem ugyanaz.
Lehet benned düh – anélkül, hogy bántóan viselkednél.
Lehet benned szomorúság – anélkül, hogy gyenge lennél.

A merev belső szabályok gyakran:
– bűntudatot keltenek  
– szégyent erősítenek  
– teljesítménykényszert táplálnak  
– csökkentik az önmagaddal való rugalmasságot  

Az emberi működés hullámzó.
A belső elvárások viszont sokszor merevek.

A kérdés nem az, hogy „szabad-e ezt éreznem?”,
hanem az, hogy „mit jelez most ez az érzés?”`,

    questions: [
      "Ez a belső elvárás valóban az én értékrendem része?",
      "Kitől tanulhattam ezt a szabályt?",
      "Mi történne, ha megengedném magamnak ezt az érzést?",
      "Mi a különbség aközött, amit érzek, és amit teszek?",
      "Milyen együttérzőbb mondatot mondhatnék most magamnak?",
      "Milyen rugalmasabb megfogalmazás helyettesíthetné a 'kell' szót?"
    ]
  };
}




    if (
  input.includes("miért velem történik") ||
  input.includes("ez nem fair")
) {
  return {
    analysis: `Amikor megjelenik a „miért velem történik?” vagy „ez nem fair” gondolat,
az igazságérzet aktiválódik benned.

Az igazság iránti igény természetes emberi működés.
Segít eligazodni értékekben, határokban és kapcsolatokban.

Erős érzelmi helyzetekben azonban az elme erkölcsi keretbe helyezi a történteket:
„Ennek nem szabadna így lennie.”
„Ez nem érdemelt következmény.”

Ilyenkor a fájdalom gyakran tehetetlenséggel társul.
A kontroll csökkenésének élménye felerősödik.

Fontos különbséget tenni:
Valami lehet valóban igazságtalan.
De attól még nem biztos, hogy teljesen kontroll nélkül vagy benne.

Amikor a fókusz kizárólag az igazságosságon marad,
könnyen megjelenhet:
– düh  
– keserűség  
– áldozatszerep élménye  
– megrekedtség  

A kérdés nem az, hogy „megérdemeltem-e?”,
hanem az, hogy „milyen mozgásterem maradt ebben a helyzetben?”`,

    questions: [
      "Mi az, ami ténylegesen az irányításomon kívül esik?",
      "Mi az, amire mégis van befolyásom?",
      "Ha elfogadom, hogy ez megtörtént, mi lenne a következő lépés?",
      "Mit erősítene bennem a hosszú távú reagálásom?",
      "Mit tanulhatok ebből – még ha nem is kértem ezt a helyzetet?",
      "Hogyan reagálnék, ha a fókuszom a mozgástérre kerülne?"
    ]
  };
}
      


   if (
  input.includes("más hibája") ||
  input.includes("ő miatta vagyok ilyen")
) {
  return {
    analysis: `Amikor megjelenik a „más hibája” vagy „ő miatta vagyok ilyen” gondolat,
a felelősségi fókusz kifelé kerül.

Ez gyakran természetes védekező reakció.
Ha a kontroll kívül van, kevésbé kell szembenézni
a saját sérülékenységgel, bizonytalansággal vagy fájdalommal.

Fontos különbséget tenni:
Valaki viselkedése valóban hathat rád.
A hatás valós lehet.

Ugyanakkor az, ahogyan értelmezed,
és ahogyan reagálsz rá,
már a saját belső teredben történik.

Amikor minden kontroll kívülre kerül,
könnyen megjelenhet:
– tehetetlenség  
– áldozatszerep élménye  
– tartós düh  

Amikor visszaveszed a saját részedet,
mozgástér jelenik meg.

A kérdés nem az, hogy „ki a hibás?”,
hanem az, hogy „hol kezdődik az én befolyásom ebben a helyzetben?”`,

    questions: [
      "Mi az, ami valóban az ő döntése volt?",
      "Mi az, ami az én reakcióm volt?",
      "Mi az, amit nem tudok irányítani?",
      "Mi az, amit mégis befolyásolni tudok?",
      "Ha nem a hibáztatás lenne a fókusz, mire irányulna a figyelmem?",
      "Mit tanulhatok ebből a helyzetből a saját határaimról?"
    ]
  };
}





    if (
  input.includes("az én hibám") ||
  input.includes("miattam történt")
) {
  return {
    analysis: `Amikor megjelenik az „az én hibám” vagy „miattam történt” gondolat,
a felelősségi fókusz erősen befelé irányul.

Erős érzelmi helyzetekben az elme leegyszerűsíti a képet:
ha valami rossz történt,
akkor kell lennie egy egyértelmű oknak —
és ez gyakran saját magadra esik.

Fontos különbséget tenni:
az, hogy van részed egy helyzetben,
nem jelenti azt, hogy kizárólag te vagy az oka.

A legtöbb esemény több tényező,
több ember,
és külső körülmények együttes hatásából alakul ki.

Amikor minden felelősség magadra kerül,
megjelenhet:
– túlzott bűntudat  
– szégyen  
– önkritika  
– önbizalomcsökkenés  

Az egészséges felelősség tanulást hoz.
A túlzott önvád viszont beszűkíti a képet.

A kérdés nem az, hogy „teljesen én okoztam-e?”,
hanem az, hogy „mi az én valódi részem ebben, és mi nem?”`,

    questions: [
      "Biztos, hogy ez kizárólag rajtam múlt?",
      "Milyen más tényezők játszottak még szerepet?",
      "Ha külső megfigyelő lennék, mit látnék?",
      "Mi volt ténylegesen az én döntésem?",
      "Mi esett a kontrollomon kívül?",
      "Hogyan tanulhatok ebből anélkül, hogy önostorozásba mennék?"
    ]
  };
}



if (
  input.includes("mindig ") ||
  input.includes("soha nem") ||
  input.includes("sosem")
) {
  return {
    analysis: `Amikor megjelennek a „mindig”, „soha”, „sosem” kifejezések,
az elme gyors mintázat-lezárást végez.

Erős érzelmi állapotban az agy egyszerűsít.
Egy vagy néhány tapasztalatból általános következtetést formál,
hogy kiszámíthatóbbnak tűnjön a helyzet.

Az abszolút szavak biztonságérzetet adhatnak,
mert lezárják a bizonytalanságot.
Ugyanakkor beszűkítik a mozgásteret is.

Például:
– „Mindig elrontom.”
– „Soha nem sikerül.”
– „Ez velem mindig megtörténik.”

Ilyenkor nem árnyalatok jelennek meg,
hanem végleges minták.

Fontos különbséget tenni:
egy ismétlődő élmény nem feltétlenül állandó törvényszerűség.
Az agy mintát keres —
de néha túl gyorsan talál egyet.

A kérdés nem az, hogy „mindig így van-e?”,
hanem az, hogy „milyen arányban történt eddig?”`,

    questions: [
      "Valóban minden alkalommal így történt?",
      "Fel tudok idézni akár egy kivételt?",
      "Ha nem 100%, hanem 60–70%, mit változtat ez a képen?",
      "Mi volt más azokban a helyzetekben, amikor nem így alakult?",
      "Most érzelmi túlterheltség alatt vagyok?",
      "Mi történik, ha ezt nem végleges mintának, hanem egy aktuális élménynek tekintem?"
    ]
  };
}



  
      
   if (
  input.includes("megint ugyanaz") ||
  input.includes("ugyanaz történik") ||
  input.includes("mindig ez történik") ||
  input.includes("már megint")
) {
  return {
    analysis: `Amikor megjelenik a „megint ugyanaz történik” élmény,
az agy mintázatot próbál felismerni.

Az ismétlődés felismerése alapvető idegrendszeri működés.
Segít előre jelezni és felkészülni.

Erős érzelmi helyzetben azonban a rendszer
gyorsan összekapcsolhat több eseményt egyetlen történetté:
„Ez mindig így van.”
„Ez már megint ugyanaz.”

Ilyenkor két dolog történhet:

1. Valóban létezik egy visszatérő dinamika.
2. A figyelem elsősorban az egyezéseket emeli ki,
   miközben a különbségek háttérbe szorulnak.

Amikor egy belső narratíva kialakul,
az agy könnyebben észreveszi azokat az eseményeket,
amelyek illeszkednek hozzá.

Ez beszűkítheti a mozgásteret,
és megerősítheti a tehetetlenség élményét.

Fontos különbséget tenni:
egy visszatérő élmény nem végzet.
Ha minta van, az információ.

A kérdés nem az, hogy „miért mindig ez?”,
hanem az, hogy „mi ismétlődik pontosan — és hol tudok belenyúlni?”`,

    questions: [
      "Mi az, ami ténylegesen hasonló ezekben a helyzetekben?",
      "Mi az, ami most mégis más?",
      "Volt már kivétel?",
      "Hol jelenik meg egy döntési pont a folyamatban?",
      "Van-e egy visszatérő reakcióm, ami része a mintának?",
      "Ha ez információ, mire hívja fel a figyelmemet?"
    ]
  };
}


  if (
  input.includes("biztos rossz") ||
  (input.includes("rossz") && input.includes("érzem"))
) {
  return {
    analysis: `Amikor a „rosszul érzem, tehát rossz” logika jelenik meg,
az érzés és a valóság összeolvad.

Ilyenkor a belső élmény automatikusan külső következtetéssé válik:
„Szorongok, tehát veszély van.”
„Bűntudatom van, tehát hibás vagyok.”
„Feszültséget érzek, tehát valami nincs rendben.”

Az érzések fontos jelzések.
Az idegrendszer reagál valamire.

Ugyanakkor az érzelem nem mindig egyenlő objektív ténnyel.

Az érzés származhat:
– fáradtságból  
– múltbeli élmény aktiválódásából  
– bizonytalanságból  
– testi állapotból  
– belső emléknyomokból  

Amikor az érzés bizonyítékká válik,
a mozgástér beszűkül.

Fontos különbséget tenni:
az érzés mindig valós élmény.
De nem mindig pontos térkép.

A kérdés nem az, hogy „valós-e az érzésem?” —
hanem az, hogy „mit jelez — és mit nem bizonyít?”`,

    questions: [
      "Mi az objektív bizonyíték arra, hogy ez valóban így van?",
      "Lehetséges, hogy most az érzelmem erősebb, mint a helyzet?",
      "Volt már, hogy egy érzésem később nem igazolódott be?",
      "Mi más oka lehet ennek az érzésnek?",
      "Ha most nyugodtabb lennék, hogyan látnám ezt?",
      "Mit jelez az érzésem — és mit nem bizonyít?"
    ]
  };
}


    if (
  input.includes("mindenki jobb nálam") ||
  input.includes("bezzeg más")
) {
  return {
    analysis: `Amikor megjelenik a „mindenki jobb nálam” vagy „bezzeg más” gondolat,
az értékelési fókusz kifelé tolódik.

Az összehasonlítás természetes idegrendszeri működés.
Segít eligazodni a közösségben és a teljesítményben.

Erős érzelmi állapotban azonban a rendszer
a saját belső élményedet
mások külső eredményeihez méri.

Ilyenkor gyakran ez történik:
Más eredményét látod.
A saját küzdelmedet érzed.
És ebből értékítélet születik.

Fontos különbséget tenni:
mások eredménye nem teljes történet.
A kirakat látható.
A háttérmunka, bizonytalanság, kudarc ritkán.

Amikor az önértékelés kizárólag külső mércéhez kötődik,
megjelenhet:
– önbizalomcsökkenés  
– elégedetlenség  
– állandó versenyérzet  

A kérdés nem az, hogy „jobb-e nálam?”,
hanem az, hogy „mi az én irányom, és hogyan haladok benne?”`,

    questions: [
      "Valóban a teljes képet látom a másik emberből?",
      "Mi az, amit magamban most figyelmen kívül hagyok?",
      "Ha magamhoz hasonlítanám magam egy évvel ezelőtthez, mit látnék?",
      "Mi az én egyedi erősségem ebben a helyzetben?",
      "Most versenyben érzem magam — vagy inspirációt keresek?",
      "Mi történne, ha a saját mércémhez igazítanám az értékelésemet?"
    ]
  };
}



if (
  input.includes("biztos történik valami baj") ||
  input.includes("veszélyes lesz")
) {
  return {
    analysis: `Amikor megjelenik a „biztos baj történik” vagy „veszélyes lesz” gondolat,
a belső veszély-előrejelző rendszer aktiválódik.

Az idegrendszer bizonytalanság esetén
gyorsan lehetséges fenyegetéseket térképez fel.
Ez egy védelmi mechanizmus.

Erős szorongásnál azonban
a rendszer a legrosszabb forgatókönyvet emeli ki,
és azt kezeli elsődleges lehetőségként.

Fontos különbséget tenni:
az, hogy valami elképzelhető,
nem jelenti azt, hogy valószínű.

A bizonytalanság gyakran:
– felerősíti a veszélyérzetet  
– csökkenti a biztonságérzetet  
– elhomályosítja a megküzdési képességek emlékét  

A rendszer célja a védelem.
Nem a pánik.

A kérdés nem az, hogy „történhet-e baj?” —
hanem az, hogy „milyen eséllyel, és mennyi mozgásterem lenne benne?”`,

    questions: [
      "Mi az objektív bizonyíték arra, hogy ez valóban bekövetkezik?",
      "Mekkora ennek reális valószínűsége?",
      "Mi a legvalószínűbb – nem a legrosszabb – kimenetel?",
      "Volt már hasonló félelmem, ami nem igazolódott be?",
      "Ha mégis megtörténne, milyen erőforrásaim lennének?",
      "Most a veszélyre fókuszálok – vagy a megküzdésre is?"
    ]
  };
}


if (
  input.includes("úgysem fog sikerülni") ||
  input.includes("ez sem fog sikerülni")
) {
  return {
    analysis: `Amikor megjelenik az „úgysem fog sikerülni” gondolat,
a jövő-forgatókönyv lezárul.

Az elme bizonytalanság esetén előre próbálja
csökkenteni a csalódás esélyét.
Ez egy védelmi működés.

Gyakran ez a belső folyamat:
Korábbi tapasztalat → Óvatosság → „Inkább ne is reméljek.”

Rövid távon ez csökkentheti a kockázat érzését.
Hosszú távon azonban lezárja a lehetőségeket,
mielőtt a helyzet kibontakozhatna.

Fontos különbséget tenni:
a félelem nem bizonyíték.
A múlt tapasztalat,
de nem végleges jövő.

A kérdés nem az, hogy „biztos sikerül-e?”,
hanem az, hogy „mi történik, ha a lehetőséget nyitva hagyom?”`,

    questions: [
      "Mi az objektív bizonyíték arra, hogy ez biztosan nem sikerül?",
      "Volt már olyan, hogy a vártnál jobban alakult?",
      "Mi a legvalószínűbb – nem a legrosszabb – kimenetel?",
      "Mi változna, ha csak 10% esélyt hagynék a sikernek?",
      "Mit tanulnék akkor is, ha nem tökéletesen sikerülne?",
      "Mi az első, legkisebb lépés, amit most megtehetek?"
    ]
  };
}


  

    return {
  analysis: `Ez a gondolat nem illeszkedik egyértelműen a jelenlegi minták egyikéhez.  
  Érdemes megállni, és tudatosan megvizsgálni, mi zajlik benned.`,
  questions: [
    "Milyen érzés kapcsolódik ehhez a gondolathoz?",
    "Mi történt közvetlenül előtte?",
    "Segít vagy hátráltat ez a gondolat most?"
  ]
  };
}




  const handleThoughtClick = (key) => {
    const result = analyzeThought(key);
    setAnalysis(result.analysis);
    setQuestions(result.questions);
    setAnswers({});
    setReframe("");
  };

  const handleAnalyzeCustomThought = () => {
    if (!customThought.trim()) return;
    const result = analyzeThought(customThought.trim());
    setAnalysis(result.analysis);
    setQuestions(result.questions);
    setAnswers({});
    setReframe("");
   
  };

  const handleSave = () => {
    const entry = {
      timestamp: new Date().toLocaleString(),
      analysis,
      questions,
      answers,
      reframe,
     
    };

    const updated = [...journal, entry];
    setJournal(updated);
    localStorage.setItem("journalEntries", JSON.stringify(updated));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const deleteEntry = (index) => {
    const updated = journal.filter((_, i) => i !== index);
    setJournal(updated);
    localStorage.setItem("journalEntries", JSON.stringify(updated));
  };

  /* -------------------------------------------------- */
  /* ⏳ HOZZÁFÉRÉS UI */
  /* -------------------------------------------------- */
  if (checkingAccess) {
    return <div className="pt-32 text-center text-gray-500">Jogosultság ellenőrzése…</div>;
  }

  if (!hasAccess) {
    return (
      <div className="pt-32 text-center space-y-6">
        <h1 className="text-2xl font-bold text-red-500">
          Ehhez az eszközhöz nincs hozzáférésed
        </h1>
        <button
          onClick={() => navigate("/plan")}
          className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Előfizetés megtekintése
        </button>
      </div>
    );
  }

  /* -------------------------------------------------- */
  /* 🎨 FŐ UI */
  /* -------------------------------------------------- */
  return (
    <div className="min-h-screen bg-white py-20 pb-40 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl flex-grow bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 space-y-10 border border-emerald-200"
      >
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-green-600">
            Automatikus gondolatok elemzése
          </h1>
          <p className="text-sm text-gray-500">
            Vedd észre • Vizsgáld meg • Fogalmazd át
          </p>
        </header>

        <textarea
          className="w-full rounded-xl border border-emerald-200 p-4"
          rows={3}
          placeholder="Írd le a gondolatot…"
          value={customThought}
          onChange={(e) => setCustomThought(e.target.value)}
        />

        <div className="text-center">
          <button
            onClick={handleAnalyzeCustomThought}
            className="px-6 py-2 rounded-full bg-emerald-600 text-white"
          >
            Elemzés
          </button>
        </div>



        <div className="grid gap-3 mb-6">
          {predefinedThoughts.map((item, idx) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={idx}
              onClick={() => handleThoughtClick(item.key)}
              className="w-full bg-green-100 text-green-700 border border-green-300 hover:bg-green-200 py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {analysis && (
          <>
            <div className="bg-emerald-100 border border-green-200 rounded-xl p-6">
              <p className="whitespace-pre-line text-gray-700">{analysis}</p>
            </div>

            <div className="bg-gray-50 border border-green-200 rounded-xl p-6 space-y-4">
              {questions.map((q, i) => (
                <textarea
                  key={i}
                  className="w-full rounded-lg border border-green-100 p-2"
                  placeholder={q}
                  value={answers[i] || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, [i]: e.target.value })
                  }
                />
              ))}
            </div>

            <textarea
              className="w-full rounded-xl border border-emerald-200 p-4"
              rows={3}
              placeholder="Pozitív átfogalmazás"
              value={reframe}
              onChange={(e) => setReframe(e.target.value)}
            />

            <button
              onClick={handleSave}
              className="mx-auto block px-6 py-2 rounded-full bg-emerald-600 text-white"
            >
              Mentés
            </button>

            {saved && (
              <p className="text-center text-sm text-emerald-700">
                ✔️ Elmentve
              </p>
            )}
          </>
        )}

        {journal.length > 0 && (
            <div className="space-y-4">
                <h2 className="font-semibold text-gray-700">
                Korábbi bejegyzések
                </h2>

                {journal.map((entry, i) => (
                <div
                    key={i}
                    className="rounded-xl border bg-gray-50 p-4 space-y-2 text-sm"
                >
                    <div className="flex justify-between text-xs text-gray-500">
                    <span>{entry.timestamp}</span>
                    <button
                        onClick={() => deleteEntry(i)}
                        className="text-red-500 hover:underline"
                    >
                        törlés
                    </button>
                    </div>

                    <p className="whitespace-pre-line">{entry.analysis}</p>

                    {entry.reframe && (
                    <div className="bg-emerald-100 p-3 rounded italic">
                        {entry.reframe}
                    </div>
                    )}
                </div>
                ))}
            </div>
        )}


        <Carousel
          showArrows
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          autoPlay
          interval={8000}
        >
          {[
            "Nem minden gondolat igaz.",
            "A tudatosság szabadságot ad.",
            "Nem kell azonnal reagálnod.",
            "Az érzés nem bizonyíték.",
            "Egy gondolat nem egyenlő a valósággal.",
            "Attól, hogy így érzed, még lehet másképp is.",
            "A gondolataid csak mentális események.",
            "A bizonytalanság nem veszély.",
            "Nem kell tökéletesnek lenned ahhoz, hogy értékes legyél.",
            "A figyelmed irányítja a belső világodat.",
            "Megállhatsz. Lélegezhetsz. Újra választhatsz.",
            "A reakció helyett választhatsz tudatos választ.",

          ].map((q, i) => (
            <div key={i} className="bg-green-100 p-12 italic text-center">
              {q}
            </div>
          ))}
        </Carousel>
      </motion.div>

      <p className="mt-12 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Az itt megjelenő tartalom önreflexiós és edukációs célú,
        nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
        Az alkalmazás használata nem helyettesíti szakemberrel való konzultációt.
      </p>
    </div>
  );
}