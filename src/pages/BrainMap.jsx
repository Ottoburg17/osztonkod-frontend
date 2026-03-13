import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RepatternModule from "../components/RepatternModule";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAuth } from "../context/useAuth";
import api from "../api/axios";


const PRODUCT_SLUG = "brainmap";


export default function BrainMap() {
  const sceneRef = useRef(null);
  const navigate = useNavigate();
  // eslint-disable-next-line no-undef
  const { canPreviewAll } = useAuth();


  const [checkingAccess, setCheckingAccess] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [loadingModel, setLoadingModel] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState(null);
   
  const [showCycleInfo, setShowCycleInfo] = useState(false);




   const setupCameraForViewport = (camera, controls, width) => {
    if (width < 640) {
      // 📱 MOBIL
      camera.position.set(0, 0, 1.6);
      controls.minDistance = 0.4;
      controls.maxDistance = 3.5;
      controls.zoomSpeed = 1.4;
    } else if (width < 1024) {
      // 📱 TABLET
      camera.position.set(0, 0, 1.8);
      controls.minDistance = 0.5;
      controls.maxDistance = 4.5;
      controls.zoomSpeed = 1.3;
    } else {
      // 🖥️ DESKTOP
      camera.position.set(0, 0, 2.1);
      controls.minDistance = 0.6;
      controls.maxDistance = 5.5;
      controls.zoomSpeed = 1.2;

    }

    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
  };



  // --------------------------------------------------
  // 🔐 HOZZÁFÉRÉS ELLENŐRZÉS
  // --------------------------------------------------
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




  // --------------------------------------------------
  // 🎨 RÉGIÓ ADATOK
  // --------------------------------------------------
  const regionColors = {
    Object_2: 0xffa500,
    Object_3: 0xff7f50,
    Object_4: 0xffc04d,
    Object_5: 0xffff00,
    Object_6: 0x00ff00,
    Object_7: 0x0000ff,
    Object_8: 0x4b0082,
    Object_9: 0xee82ee,
    Object_10: 0x00ffff,
    Object_11: 0x008080,
    Object_12: 0xff1493,
    Object_13: 0xcd5c5c,
    Object_14: 0x808000,
    Object_15: 0x00fa9a,
    Object_16: 0x4682b4,
    Object_17: 0x8b4513,
    Object_18: 0xcd5c5c,
    Object_19: 0x708090,

  };

  const emotionalCodes = {
  "Belső Hiányérzet Kódja":
    "Az az érzés, hogy a közeli kapcsolatok instabilak, és nem alakul ki tartós biztonság.",

  "Érzelmi Üresség Kódja":
    "Az a megélés, hogy az érzelmi szükségletek nem teljesülnek mások által.",

  "Önértékelési Hiány Kódja":
    "Az az érzés, hogy belül hibásak vagyunk, vagy nem vagyunk elég értékesek.",

  "Kirekesztettség Érzésének Kódja":
    "Az élmény, hogy az ember más, nem illik be, és nem tartozik sehová.",

  "Bizalmi Védekezés Kódja":
    "Az a meggyőződés, hogy mások ártani vagy visszaélni fognak a bizalommal.",

  "Önállótlanság-elszakadottság Paradoxon Kódja":
    "Az a belső konfliktus, hogy egyszerre vágyunk önállóságra és közelségre, de ezek ellentmondanak egymásnak.",

  "Fenyegetettség Kódja":
    "Állandó félelem attól, hogy váratlan veszély vagy katasztrófa történhet.",

  "Énhatárok Feloldódásának Kódja":
    "Túlzott érzelmi összeolvadás, amely megnehezíti az önállóságot.",

  "Sikertelenség Kódja":
    "Az a hit, hogy kudarcra vagyunk ítélve, és nem vagyunk elég jók.",

  "Kiváltságosság Kódja":
    "Az a meggyőződés, hogy különlegesek vagyunk, és más szabályok vonatkoznak ránk.",

  "Impulzuskontroll Kódja":
    "Az önfegyelem és frusztrációtűrés nehézsége.", 

 
  "Alávetettség Kódja":
    "Mások akaratának való túlzott engedelmesség a konfliktus elkerüléséért.",

  "Túlzott Gondoskodás Kódja":
    "Mások szükségleteinek előtérbe helyezése a saját igények rovására.",

  "Figyelemigény Kódja":
    "A jóváhagyás és elismerés túlzott keresése.",

  "Ellenséges Belátás Kódja":
    "A negatív eseményekre és veszélyekre való tartós fókusz.",

  "Belső Önkorlátozás Kódja":
    "Az érzelmek elfojtása a kontroll vagy elfogadás érdekében.",

  "Perfekcionizmus Kódja":
    "Túlzott elvárások önmagunkkal szemben a kritika elkerülésére.",

  "Belső Bíró Kódja":
    "Kemény belső ítélkezés önmagunkkal vagy másokkal szemben.",

  "Digitális Elidegenedés Kódja":
    "Elszigetelődés és kapcsolathiány a digitális tér túlhasználata miatt.",

  "Teljesítmény-kényszer Kódja":
    "Állandó belső nyomás a megfelelésre és teljesítésre.",

  "Információs Túlterheltség és Döntésképtelenség Kódja":
    "A túl sok információ miatti fókusz- és döntési nehézség.",

  "Külső Validáció-függőség Kódja":
    "Az önérték mások visszajelzéseitől való függése.",

  "Klíma- és Jövőfélelem Kódja":
    "Aggodalom a jövő és környezeti változások miatt.",

  "Önállótlanság Kódja":
    "Az a hiedelem, hogy képtelenek vagyunk önállóan boldogulni, és másoktól függünk a döntéseinkben.",

  "Érzelmi Túlterheltség és Kiégés Kódja":
    "Érzelmi kimerültség és motivációvesztés tartós terhelés hatására."
};


const regionRelatedCodes = {
  Object_2: [ // Cerebellum – automatizmusok
    "Impulzuskontroll Kódja",
    "Belső Önkorlátozás Kódja",
  ],

  Object_3: [ // Frontális lebeny – döntés
    "Teljesítmény-kényszer Kódja",
    "Perfekcionizmus Kódja",
    "Információs Túlterheltség és Döntésképtelenség Kódja",
  ],

  Object_4: [ // Nyakszirti lebeny – vizuális észlelés
    "Ellenséges Belátás Kódja",
    "Fenyegetettség Kódja",
  ],

  Object_5: [ // Halántéklebeny – hang + jelentés
    "Bizalmi Védekezés Kódja",
    "Fenyegetettség Kódja",
    "Kirekesztettség Érzésének Kódja",
  ],

  Object_6: [ // Motoros kéreg – cselekvés
    "Impulzuskontroll Kódja",
    "Teljesítmény-kényszer Kódja",
  ],

  Object_7: [ // Szomatoszenzoros kéreg – testérzet
    "Érzelmi Túlterheltség és Kiégés Kódja",
    "Belső Hiányérzet Kódja",
  ],

  Object_8: [ // Broca – beszéd
    "Belső Önkorlátozás Kódja",
    "Alávetettség Kódja",
    "Figyelemigény Kódja",
  ],

  Object_9: [ // Vizuális kéreg – fókusz
    "Ellenséges Belátás Kódja",
    "Információs Túlterheltség és Döntésképtelenség Kódja",
  ],

  Object_10: [ // Hippokampusz – emlékek
    "Belső Hiányérzet Kódja",
    "Sikertelenség Kódja",
    "Kirekesztettség Érzésének Kódja",
  ],

  Object_11: [ // Asszociációs kéreg – értelmezés
    "Ellenséges Belátás Kódja",
    "Belső Bíró Kódja",
    "Perfekcionizmus Kódja",
  ],

  Object_12: [ // Prefrontális kéreg – mérlegelés
    "Perfekcionizmus Kódja",
    "Teljesítmény-kényszer Kódja",
    "Önállótlanság Kódja",
    "Belső Bíró Kódja",
    "Információs Túlterheltség és Döntésképtelenség Kódja",
  ],

  Object_13: [ // Kisagy laterális – tanult minták
   
    "Belső Önkorlátozás Kódja",
  ],

  Object_14: [ // Wernicke – megértés
    "Bizalmi Védekezés Kódja",
    "Ellenséges Belátás Kódja",
  ],

  Object_15: [ // Alap vizuális ingerek
    "Figyelemigény Kódja",
    "Fenyegetettség Kódja",
  ],

  Object_16: [ // Hang + érzelem
    "Érzelmi Üresség Kódja",
    "Belső Hiányérzet Kódja",
  ],

  Object_17: [ // Tér, perspektíva
    "Kirekesztettség Érzésének Kódja",
    "Önállótlanság-elszakadottság Paradoxon Kódja",
  ],

  Object_18: [ // Insula – belső állapot
    "Érzelmi Üresség Kódja",
    "Belső Hiányérzet Kódja",
    "Érzelmi Túlterheltség és Kiégés Kódja",
  ],

  Object_19: [ // Orbitofrontális – impulzus, jutalom
    "Impulzuskontroll Kódja",
    "Kiváltságosság Kódja",
    "Külső Validáció-függőség Kódja",
  ],
};


const regionInnerExperience = {
  Object_2: // Cerebellum
    "Ebben a működésben gyakran az az élmény jelenik meg, hogy a reakció már megtörténik, mielőtt tudatos döntés születne. A cselekvések ismerősnek, automatikusnak tűnhetnek.",

  Object_3: // Frontális lebeny
    "Itt gyakran jelenik meg a mérlegelés és az irányítás élménye, valamint az a belső feszültség, hogy mikor érdemes lépni, és mikor jobb várni.",

  Object_4: // Nyakszirti lebeny
    "Ebben az állapotban a látott ingerek erősen befolyásolhatják az érzelmi reakciókat, és könnyen megragadhatják a figyelmet, akár észrevétlenül is.",

  Object_5: // Halántéklebeny – hang
    "Itt gyakran tapasztalható, hogy egy hang vagy hangnem gyors érzelmi választ vált ki, még azelőtt, hogy tudatos értelmezés történne.",

  Object_6: // Motoros kéreg
    "Ebben a működésben az a pillanat válik hangsúlyossá, amikor a szándék már majdnem mozdulattá válik, és nehéz megállítani vagy módosítani.",

  Object_7: // Szomatoszenzoros kéreg
    "Itt a testi érzetek kerülnek előtérbe, és gyakran ezek vezetik tovább az érzelmi reakciókat vagy a cselekvési késztetést.",

  Object_8: // Broca-terület
    "Ebben az állapotban gyakran jelenik meg az élmény, hogy egy gondolat vagy mondat már „készen áll”, de még nem biztos, hogy kimondásra kerül.",

  Object_9: // Vizuális kéreg
    "Itt a figyelem könnyen rátapadhat bizonyos részletekre, miközben más információk háttérbe szorulnak vagy észrevétlenek maradnak.",

  Object_10: // Hippokampusz
    "Ebben a működésben gyakran jelennek meg ismerősség-érzések vagy emlékek, amelyek befolyásolják a jelen helyzet megélését, akár tudattalanul is.",

  Object_11: // Asszociációs kéreg
    "Itt az élmények, gondolatok és érzetek gyorsan összekapcsolódnak, és egy helyzet könnyen túl sok jelentéssel telítődhet.",

  Object_12: // Prefrontális kéreg
    "Ebben a működésben gyakran jelenik meg a belső nyomás, a folyamatos mérlegelés és az attól való fáradtság, hogy mindig jól kell dönteni.",

  Object_13: // Kisagy laterális
    "Itt az ismerős, begyakorolt minták kerülnek előtérbe, és a cselekvések gördülékenynek, automatikusnak tűnhetnek.",

  Object_14: // Wernicke-terület
    "Ebben az állapotban a szavak és mondatok jelentése hangsúlyossá válik, és egy félreértés vagy értelmezés gyors érzelmi reakciót indíthat el.",

  Object_15: // Alap vizuális ingerek
    "Itt a vizuális elemek – fény, szín, mozgás – gyorsan megragadják a figyelmet, gyakran a tudatos feldolgozás előtt.",

  Object_16: // Hang + érzelem
    "Ebben a működésben a hangokhoz kapcsolódó érzelmek erőteljesen jelennek meg, és befolyásolhatják a hangulatot vagy a belső állapotot.",

  Object_17: // Parietális lebeny
    "Itt a térhez, közelséghez és távolsághoz kötődő élmények válnak hangsúlyossá, amelyek meghatározhatják, mennyire érezzük magunkat biztonságban.",

  Object_18: // Insula
    "Ebben az állapotban a belső testi érzetek és érzelmek erőteljesen tudatosulnak, és könnyen túlterhelővé válhatnak.",

  Object_19: // Orbitofrontális kéreg
    "Itt gyakran jelenik meg a gyors döntések és az azonnali megkönnyebbülés keresése, még a következmények teljes átgondolása előtt.",
};





  const regionDescriptions = {
    Object_2: "A cerebellum (kisagy) az egyensúlyért és a mozgások automatikus koordinációjáért felel. A cerebellum a test gyors, automatikus válaszait hangolja össze. Amikor egy szándék már kialakult, ez a terület segít abban, hogy a cselekvés zökkenőmentesen és megszokott módon történjen.    ",
    Object_3: "A frontális lebeny a tudatos döntéshozatalért, a viselkedés irányításáért és a cselekvések megtervezéséért felel. Itt alakul át az érzelmi vagy testi késztetés konkrét szándékká, és itt dől el, hogy egy impulzust követünk, késleltetünk vagy elengedünk.",
    Object_4: "A nyakszirti lebeny a vizuális információk feldolgozásáért felel. Itt alakul ki az, amit látásként észlelünk, és itt jönnek létre azok a vizuális minták, amelyek később befolyásolják az érzelmi reakciókat és a szándékok kialakulását.",
    Object_5: "A halántéklebeny a hallási információk feldolgozásáért és értelmezéséért felel. Itt kapcsolódnak a hangokhoz jelentések, emlékek és érzelmi árnyalatok, amelyek gyakran gyors, automatikus reakciókat indítanak el.",
    Object_6: "Az elsődleges motoros kéreg a mozgások tudatos indításáért és végrehajtásáért felel. Itt válik a már kialakult szándék konkrét, irányított cselekvéssé, és innen indul el a test tényleges mozgása.",
    Object_7: "A szomatoszenzoros kéreg a testérzetek feldolgozásáért felel. Itt jelennek meg a fizikai érzetek – nyomás, hő, fájdalom, feszülés –, amelyek gyakran megelőzik az érzelmi reakciókat és a szándék kialakulását.",
    Object_8: "A Broca-terület a beszéd megtervezéséért és kivitelezéséért felel. Itt válik a belső szándék kimondott szavakká, és itt dől el, hogy egy gondolat mikor és milyen formában kerül kifejezésre.",
    Object_9: "A vizuális kéreg a látott információk részletes feldolgozásáért felel. Itt történik a formák, mintázatok és vizuális összefüggések felismerése, amelyek meghatározzák, mire irányul a figyelem és mi válik hangsúlyossá.",
    Object_10: "A hippokampusz a tapasztalatok és emlékek feldolgozásáért felel. Itt kapcsolódnak össze a múlt eseményei a jelen helyzetekkel, gyakran anélkül, hogy tudatosan észlelnénk, hogyan befolyásolják az érzelmeket és a szándékok kialakulását.",
    Object_11: "Az asszociációs kéreg különböző érzékszervi, érzelmi és gondolati információk összekapcsolásáért felel. Itt alakulnak ki azok az értelmezési minták, amelyek egy helyzetet jelentéssel ruháznak fel, és gyakran meghatározzák, hogyan értjük meg és közelítjük meg a problémákat.",
    Object_12: "A prefrontális kéreg a döntések előkészítéséért, a tervezésért és a viselkedés szabályozásáért felel. Itt mérlegeljük a lehetőségeket, előrevetítjük a következményeket, és alakítjuk ki azt a szándékot, amely irányt ad a cselekvésnek.",
    Object_13: "A kisagy laterális részei a tanult mozgásminták és összetettebb cselekvések finomhangolásáért és időzítéséért felelnek. Ezek a területek segítik, hogy a gyakran ismételt válaszok gördülékenyen és automatikusan valósuljanak meg.",
    Object_14: "A Wernicke-terület a hallott és olvasott nyelvi információk megértéséért felel. Itt alakulnak át a szavak jelentéssé, és itt jönnek létre azok az értelmezések, amelyek gyakran meghatározzák az érzelmi reakciókat és a válasz szándékát.",
    Object_15: "Az occipitális lebeny a vizuális ingerek alapvető jellemzőinek – például a színeknek, kontrasztoknak és mozgásoknak – a feldolgozásáért felel. Ezek az elemek gyorsan irányítják a figyelmet, és gyakran már a tudatos értelmezés előtt befolyásolják a reakciók irányát.",
    Object_16: "A halántéklebeny egyes területei a hallási ingerekhez kapcsolódó érzelmi jelentések feldolgozásában vesznek részt. Itt kapcsolódik össze a hang, az emlék és az érzelem, ami gyakran már a tudatos felismerés előtt befolyásolja a hangulati állapotot és a szándék irányát.",
    Object_17: "A parietális lebeny a test és a térbeli környezet feldolgozásáért felel. Itt alakul ki az a belső térkép, amely meghatározza, hol helyezkedünk el a környezethez és másokhoz képest, és amely gyakran befolyásolja, hogy egy helyzetet közeledésként vagy fenyegetésként élünk meg.",
    Object_18: "Az insula a belső testi állapotok és érzetek tudatosulásában játszik központi szerepet. Itt válik érzékelhetővé a feszültség, a kellemetlenség vagy a jóleső állapot, és itt kapcsolódik össze a testérzet az érzelmi élménnyel, amely gyakran a szándék kialakulásának alapja.",
    Object_19: "Az orbitofrontális kéreg a jutalomértékelésben, az impulzusok irányításában és a gyors döntésekben játszik szerepet. Itt kapcsolódik össze az érzelem, a várható megkönnyebbülés és a cselekvési késztetés, ami gyakran azonnali, de nem feltétlenül tudatos reakciókhoz vezet.",
  };

  const regionRecommendations = {
    Object_2: "Olyan egyensúly- és testérzékelési gyakorlatok, amelyek segítenek észrevenni az automatikus mozgásindítást, és lehetőséget adnak a megszokott reakció megszakítására egy rövid szünettel. Figyeld meg, mikor indulna a mozdulat – és tarts egy pillanat szünetet.",
    Object_3: "Olyan kognitív és figyelmi gyakorlatok, amelyek segítenek felismerni a döntés előtti pillanatot, és teret adnak annak mérlegelésére, hogy szükséges-e azonnal cselekedni.",
    Object_4: "Olyan vizuális figyelmi és észlelési gyakorlatok, amelyek segítenek felismerni a látott inger és az arra adott automatikus értelmezés közötti különbséget.",
    Object_5: "Olyan hallási és figyelmi gyakorlatok, amelyek segítenek észrevenni a hang és a hozzá társított értelmezés közötti különbséget, mielőtt automatikus reakció alakulna ki.",
    Object_6: "Olyan tudatos mozgásgyakorlatok, amelyek segítenek észrevenni a mozdulat elindulásának pillanatát, és lehetőséget adnak a cselekvés szándékának felülvizsgálatára.",
    Object_7: "Olyan testérzékelési és figyelmi gyakorlatok, amelyek segítenek megfigyelni az érzeteket anélkül, hogy azonnali reakció vagy cselekvési szándék társulna hozzájuk.",
    Object_8: "Olyan tudatos beszéd- és figyelmi gyakorlatok, amelyek segítenek észrevenni a kimondás előtti pillanatot, és lehetőséget adnak annak eldöntésére, hogy szükséges-e megszólalni.",
    Object_9: "Olyan vizuális figyelmi és elemző gyakorlatok, amelyek segítenek tudatosítani, hogyan alakul ki a fókusz, és miként válik egy látott részlet kiemeltté a teljes képhez képest.",
    Object_10: "Olyan emlékezeti és figyelmi gyakorlatok, amelyek segítenek felismerni, mikor egy jelenlegi helyzetre múltbeli tapasztalatok alapján reagálunk, és teret adnak egy frissebb válasz lehetőségének.",
    Object_11: "Olyan figyelmi és gondolkodási gyakorlatok, amelyek segítenek észrevenni, mikor kapcsolunk össze túl sok információt automatikusan, és teret adnak egy egyszerűbb, kevésbé terhelt értelmezésnek.",
    Object_12: "Olyan figyelmi és döntéstámogató gyakorlatok, amelyek segítenek észrevenni, mikor válik a mérlegelés túlzottá, és teret adnak annak felismerésére, hogy nem minden helyzet igényel azonnali döntést.",
    Object_13: "Olyan koordinációs és figyelmi gyakorlatok, amelyek segítenek felismerni a túlságosan begyakorolt mozgás- vagy reakciómintákat, és lehetőséget adnak azok tudatos lassítására vagy módosítására.",
    Object_14: "Olyan nyelvi és figyelmi gyakorlatok, amelyek segítenek észrevenni a szöveg vagy beszéd megértése során kialakuló automatikus értelmezéseket, és teret adnak azok tudatos felülvizsgálatának.",
    Object_15: "Olyan vizuális figyelmi gyakorlatok, amelyek segítenek észrevenni, mikor ragadja meg automatikusan a figyelmet egy szín vagy mozgás, és teret adnak a figyelem tudatos visszairányításának.",
    Object_16: "Olyan hallási és érzelmi figyelmi gyakorlatok, amelyek segítenek észrevenni, mikor vált ki egy hang vagy hangnem automatikus érzelmi reakciót, és teret adnak annak megfigyelésére anélkül, hogy az azonnali cselekvéshez vezetne.",
    Object_17: "Olyan térbeli és figyelmi gyakorlatok, amelyek segítenek észrevenni, mikor válik egy helyzet túlzottan személyessé vagy beszűkültté, és lehetőséget adnak a tágabb perspektíva visszanyerésére.",
    Object_18: "Olyan figyelmi és jelenlét-alapú gyakorlatok, amelyek segítenek megfigyelni a testi és érzelmi érzeteket anélkül, hogy azokat azonnal értelmezni vagy megváltoztatni szeretnénk.",
    Object_19: "Olyan figyelmi és önmegfigyelési gyakorlatok, amelyek segítenek felismerni az azonnali megkönnyebbülést ígérő impulzusokat, és teret adnak annak megfigyelésére anélkül, hogy azokat azonnal követnénk.",
  };


  const regionQuestions = {
    Object_2: [
    "Milyen helyzetekben indul el nálad egy cselekvés szinte észrevétlenül?",
    "Fel tudsz idézni egy pillanatot, amikor egy mozdulat már majdnem megtörtént?",
    "Mi történik, ha egy ilyen helyzetben egy rövid szünetet tartasz?"
  ],

  Object_3: [
    "Milyen jelekből veszed észre, hogy döntési helyzetben vagy?",
    "Előfordul, hogy egy impulzus nem válik tényleges cselekvéssé?",
    "Mi segít eldönteni, hogy most érdemes-e lépni?"
  ],

  Object_4: [
    "Mit látsz meg először egy új helyzetben?",
    "El tudod különíteni a látott tényt a hozzá kapcsolódó értelmezéstől?",
    "Mi változik, ha máshová irányítod a figyelmed?"
  ],

  Object_5: [
    "Milyen hangok váltanak ki gyors reakciót belőled?",
    "Ugyanaz a hang mindig ugyanazt jelenti számodra?",
    "Mi történik, ha csak a hangot figyeled, értelmezés nélkül?"
  ],

  Object_6: [
    "Mikor érzed azt, hogy „elindulna” egy cselekvés?",
    "Tudsz különbséget tenni a szándék és a tényleges mozdulat között?",
    "Mi segít abban, hogy tudatos maradj a cselekvés elején?"
  ],

  Object_7: [
    "Milyen testi jelzéseket veszel észre leggyakrabban?",
    "Egy érzet mindig cselekvést igényel?",
    "Mi változik, ha csak megfigyeled az érzetet?"
  ],

  Object_8: [
    "Mikor érzed, hogy „ki akar jönni” egy mondat?",
    "Előfordul, hogy nem mondasz ki valamit?",
    "Mi segít eldönteni, hogy megszólalsz-e?"
  ],

  Object_9: [
    "Mi ragadja meg leggyorsabban a figyelmed?",
    "Mit hagysz figyelmen kívül ugyanabban a helyzetben?",
    "Tudsz tudatosan fókuszt váltani?"
  ],

  Object_10: [
    "Mikor ismerős egy helyzet anélkül, hogy tudnád miért?",
    "Hogyan hatnak korábbi tapasztalatok a jelen döntéseidre?",
    "Mi történik, ha friss szemmel nézel egy szituációra?"
  ],

  Object_11: [
    "Milyen gyorsan kapcsolsz össze információkat?",
    "Előfordul, hogy túl sok jelentést tulajdonítasz egy helyzetnek?",
    "Mi segít leegyszerűsíteni az értelmezést?"
  ],

  Object_12: [
    "Mikor érzed, hogy túl sokat gondolkodsz egy döntésen?",
    "Minden helyzet valóban döntést igényel?",
    "Mi segít továbblépni mérlegelés után?"
  ],

  Object_13: [
    "Mely reakcióid működnek „automata üzemmódban”?",
    "Mikor vettél észre egy begyakorolt mintát?",
    "Mit változtat egy tudatos lassítás?"
  ],

  Object_14: [
    "Ugyanazt érted egy mondat alatt, mint mások?",
    "Mikor szoktad ellenőrizni, hogy jól értettél-e valamit?",
    "Mi segít tisztábban értelmezni az információt?"
  ],

  Object_15: [
    "Milyen vizuális elemek vonzzák el gyorsan a figyelmed?",
    "Mikor veszed észre, hogy „elragadott” valami?",
    "Hogyan tudod visszairányítani a fókuszt?"
  ],

  Object_16: [
    "Milyen hangnemek hatnak rád erősebben?",
    "Felismered, mikor egy hang érzelmi reakciót indít?",
    "Mi történik, ha nem reagálsz azonnal?"
  ],

  Object_17: [
    "Mikor érzed magad túl közel egy helyzethez?",
    "Hogyan változik a megélésed távolabbról nézve?",
    "Mi segít visszanyerni a tágabb képet?"
  ],

  Object_18: [
    "Milyen belső érzeteket veszel észre leggyakrabban?",
    "Egy érzet mindig értelmezést igényel?",
    "Mi történik, ha csak jelen vagy vele?"
  ],

  Object_19: [
    "Milyen impulzusok ígérnek gyors megkönnyebbülést?",
    "Mikor érzed, hogy „azonnal” szeretnél reagálni?",
    "Mit ad egy rövid megfigyelési idő?"
  ]


};




  // --------------------------------------------------
  // 🧠 THREE.JS
  // --------------------------------------------------
  useEffect(() => {
    if ((!hasAccess && !canPreviewAll) || !sceneRef.current) return;

    setLoadingModel(true);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101010);

    const camera = new THREE.PerspectiveCamera(
      60,
      sceneRef.current.clientWidth / sceneRef.current.clientHeight,
      0.01,
      1000
    );
    

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      sceneRef.current.clientWidth,
      sceneRef.current.clientHeight
    );
    sceneRef.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);


   const controls = new OrbitControls(camera, renderer.domElement);

    // 👇 EZ A LÉNYEG
    setupCameraForViewport(
      camera,
      controls,
      sceneRef.current.clientWidth
    );




    const loader = new GLTFLoader();
    let brain = null;
    let previousMesh = null;

    loader.load(
      "/brain.glb",
      (gltf) => {
        brain = gltf.scene;
        brain.scale.set(0.4, 0.4, 0.4);
        scene.add(brain);

        brain.traverse((child) => {
          if (child.isMesh) {
            child.material = child.material.clone();
            child.originalColor = child.material.color.getHex();
          }
        });

        setLoadingModel(false);
      },
      undefined,
      (err) => console.error("GLB load error:", err)
    );

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (e) => {
      if (!brain) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObject(brain, true);
      if (!hits.length) return;

      const mesh = hits[0].object;

      if (previousMesh?.originalColor !== undefined) {
        previousMesh.material.color.setHex(previousMesh.originalColor);
      }

      const name = mesh.name || "Unknown";
      mesh.material.color.setHex(regionColors[name] || 0xff0000);
      previousMesh = mesh;

      setSelectedRegion({
        name,
        description: regionDescriptions[name] || "Nincs leírás.",
        recommendation: regionRecommendations[name] || "Nincs ajánlás.",
         questions: regionQuestions[name] || []
      });
    };

    renderer.domElement.addEventListener("click", onClick);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = sceneRef.current.clientWidth;
      const h = sceneRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      setupCameraForViewport(camera, controls, w);
    };
    window.addEventListener("resize", onResize);

    return () => {
      renderer.domElement.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }

      if (brain) scene.remove(brain);
    };
  }, [hasAccess, canPreviewAll]);

  // --------------------------------------------------
  // ⏳ UI
  // --------------------------------------------------
  if (checkingAccess) {
    return <div className="pt-32 text-center">Jogosultság ellenőrzése…</div>;
  }

  if (!hasAccess && !canPreviewAll) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Hozzáférés megtagadva
        </h1>
        <button
          onClick={() => navigate("/plan")}
          className="bg-emerald-600 text-white px-6 py-3 rounded"
        >
          Vásárlás
        </button>
      </div>
    );
  }

 return (
  <div className="pt-24 sm:pt-28 lg:pt-32 min-h-[calc(100vh-80px)] bg-white">
    {/* 🔒 KÖZÉPRE ZÁRT WRAPPER */}
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

       {/* 🧠 OLDAL CÍM */}
    <header className="mb-4 sm:mb-8">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-emerald-600 mb-4">
        BrainMap
      </h1>
      
    </header>

    {/* 🧠 CIKLUS MAGYARÁZÓ BLOKK */}
      <section className="mb-6 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed">
          Bizonyos helyzetek nem véletlenül ismétlődnek.
          Az idegrendszer gyors minták alapján működik,
          és gyakran automatikusan futtatja a korábban bevált reakciókat.
        </p>

        <p className="mt-3 text-sm text-gray-500">
          A BrainMap segít felismerni, hol indul a ciklus —
          és hol tudsz tudatosan belépni.
        </p>

        <button
          onClick={() => setShowCycleInfo(!showCycleInfo)}
          className="mt-4 text-emerald-600 text-sm font-medium hover:underline"
        >
          {showCycleInfo ? "Magyarázat bezárása ▲" : "Hogyan működik a ciklus? ▼"}
        </button>

          <div
              className={`
                mt-6 overflow-hidden transition-all duration-300 ease-in-out
                ${showCycleInfo ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="p-6 bg-white rounded-xl shadow-sm border text-left">
           

            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              A trigger-ciklus folyamata
            </h3>

            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>1. Inger:</strong> Valami történik (hang, mondat, gondolat).</p>
              <p><strong>2. Gyors érzelmi aktiváció:</strong> A rendszer hasonlít egy korábbi élményhez.</p>
              <p><strong>3. Testi jelzés:</strong> Feszültség, szorítás, impulzus jelenik meg.</p>
              <p><strong>4. Cselekvési késztetés:</strong> Indulna a megszokott reakció.</p>
              <p><strong>5. Automatikus válasz:</strong> A minta megerősödik.</p>
            </div>

            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm text-emerald-900">
                <strong>A változás itt kezdődik:</strong><br />
                Az érzelmi aktiváció és a cselekvés között van egy apró tér.
                Ha itt nem reagálsz automatikusan,
                a ciklus nem erősödik tovább.
              </p>
            </div>

            {/* Mini vizuális flow */}
             
           <div className="mt-8 flex justify-center">
            <div className="text-xs sm:text-sm font-mono text-gray-600">

              {/* Felső sor */}
                  <span>Inger</span>
                  <span className="px-1">→</span>

                  <span>Érzelem</span>
                  <span className="px-1">→</span>

                  <span>Test</span>
                  <span className="px-1">→</span>

                  <span className="text-emerald-600 font-semibold">Impulzus</span>
                  <span className="px-1">→</span>

                  <span>Reakció</span>

                  {/* MÁSODIK SOR */}
           

                    <div className="text-xs text-emerald-600 mt-1 whitespace-nowrap">
                      Az impulzusnál még van választási lehetőséged
                    </div>
                 
                <div/>
            </div>
          </div>
       

         </div>
       </div>
      </section>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          


        {/* 🧠 BRAIN / CANVAS */}
        <div
          ref={sceneRef}
          className="
             relative
              col-span-1
              lg:col-span-3
              h-[320px]
              sm:h-[420px]
              lg:h-[600px]
              xl:h-[680px]
              bg-black
              rounded-2xl
              overflow-hidden
              shadow-inner
          "
        >
          {loadingModel && (
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
              Modell betöltése…
            </div>
          )}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
            Forgatható · Kattintható
          </div>
        </div>

        {/* 📄 INFO PANEL */}
        <div
          className="
            col-span-1
            lg:col-span-2
            bg-white
            rounded-2xl
            shadow-md
            p-6
            lg:max-h-[680px]
            lg:overflow-y-auto
          "
        >
          {selectedRegion ? (
            <>
              {/* 🧠 CÍM */}
              <h2 className="text-xl font-bold mb-2">
                {selectedRegion.name}
              </h2>

              {/* 🧠 AGYI MŰKÖDÉS */}
              <section className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Agyi működés
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {selectedRegion.description}
                </p>
              </section>

               
               {/* 3. BELSŐ MEGÉLÉS */}
              {regionInnerExperience[selectedRegion.name] && (
                <section className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <h3 className="text-sm font-semibold text-amber-800 mb-1">
                    Belső megélés
                  </h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    {regionInnerExperience[selectedRegion.name]}
                  </p>
                </section>
              )}

              {regionRelatedCodes[selectedRegion.name] && (
                <section className="mb-4">
                  <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Kapcsolódó érzelmi minták
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {regionRelatedCodes[selectedRegion.name].map((code) => (
                      <span
                        key={code}
                        className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800"
                        title={emotionalCodes[code]}
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </section>
              )}


              <section className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Megfigyelési irány
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedRegion.recommendation}
                </p>
              </section>

              {/* ⏸️ REAKCIÓ ELŐTTI PILLANAT */}
                <section className="mb-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-800 mb-2">
                    Reakció előtti pillanat
                  </h3>

                  <p className="text-sm text-emerald-900 leading-relaxed mb-3">
                    Amikor ez az érzet megjelenik, nem kell megoldani, nem kell megérteni,
                    és nem kell eltüntetni.
                    <br />
                    <strong>Elég, ha nem futtatod végig automatikusan.</strong>
                  </p>

                  <ul className="text-sm text-emerald-900 space-y-1 list-disc list-inside">
                    <li>Állj meg egy pillanatra</li>
                    <li>Nézz körül, és nevezd meg <strong>3 tárgyat</strong></li>
                    <li>Lassan fújd ki a levegőt <strong>6 másodpercig</strong></li>
                  </ul>

                  <p className="mt-3 text-xs text-emerald-700">
                    Ez a rövid megszakítás jelzi az idegrendszernek, hogy most nincs azonnali veszély.
                  </p>
                </section>

                {/* 🔁 UTÓREZGÉS */}
                <section className="mb-4 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-sm text-gray-700 italic">
                    Mi történt benned azóta, hogy csak megfigyelted,
                    és nem reagáltál automatikusan?
                  </p>
                </section>


                 {/*Ajánlás*/}
              {selectedRegion.questions.length > 0 && (
                <div className="mt-6 p-4 rounded-lg bg-indigo-50 border border-indigo-200">
                   
                  <h3 className="text-sm font-semibold text-indigo-700 mb-2">
                    Elgondolkodtató kérdések
                  </h3>


                  <ul className="list-disc list-inside space-y-1 text-sm text-indigo-800">
                    {selectedRegion.questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* ⏳ IDŐBELI KERET – LEZÁRÁS */}
              <section className="mt-6 p-4 rounded-xl bg-neutral-100 border border-neutral-200">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Fontos megjegyzés
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Ez a minta nem ma szűnik meg.
                  <br />
                  A változás ott kezdődik, hogy
                  <strong> nem kell minden alkalommal végigfuttatni.</strong>
                  <br /><br />
                  Már az is számít, ha néha észreveszed,
                  és nem reagálsz azonnal.
                </p>

              </section>

              {selectedRegion && (
                <div
                  key={selectedRegion.name}
                  className="mt-8 animate-fade-in"
                >
                  <RepatternModule region={selectedRegion.name} />
                </div>
              )}

            </>
          ) : (
            <p className="flex items-center justify-center h-full text-center text-sm text-gray-400">
               Kattints az agy egy területére a részletes értelmezéshez.
            </p>
          )}
        </div>

      </div>
    </div>
    <p className="mt-12 mb-24 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
      Az itt megjelenő tartalom önreflexiós és edukációs célú,
      nem minősül orvosi vagy pszichológiai tanácsnak.
      A megjelenő agyi területek vizuális kiemelése illusztratív jellegű,
      nem minden esetben felel meg anatómiailag pontos határoknak.
    </p>

  </div>
 );
}

