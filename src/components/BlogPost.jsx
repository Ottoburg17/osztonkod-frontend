import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { formatDate } from "../utils/formatDate";


const posts = {
 
  "osztonok-integralasa-elso-lepesek": {
  title: "Az ösztönök integrálása: első lépések az önismeretben",
  date: "2026-03-12",
  content: `
  Az emberi viselkedés jelentős része nem tudatos döntésekből,
  hanem mélyebb, automatikus működésekből születik. Ezeket a
  működéseket gyakran ösztönös reakcióknak nevezzük.
  Olyan belső minták ezek, amelyek sokszor gyorsabban aktiválódnak,
  mint ahogy tudatosan végiggondolnánk egy helyzetet.

  Amikor egy adott helyzetben hirtelen feszültséget érzünk,
  védekezni kezdünk, visszahúzódunk vagy éppen túlzottan
  alkalmazkodunk másokhoz, gyakran egy ilyen belső minta lép működésbe.
  Ezek a reakciók nem véletlenszerűek. Többnyire korábbi tapasztalatok,
  érzelmi emlékek és tanult működések alakítják ki őket.

  Az ösztönök integrálása azt jelenti, hogy megtanuljuk felismerni
  ezeket a belső reakciókat, és fokozatosan tudatosabb kapcsolatba
  kerülünk velük. Nem az a cél, hogy megszüntessük az ösztöneinket,
  hanem hogy megértsük, hogyan működnek bennünk.

  Amikor nem látjuk ezeket a mintákat, könnyen előfordulhat,
  hogy újra és újra ugyanazokat a helyzeteket éljük át.
  Hasonló konfliktusok jelennek meg a kapcsolatainkban,
  ugyanazok az érzelmi reakciók ismétlődnek,
  és gyakran úgy érezzük, mintha „beragadtunk volna”
  bizonyos élethelyzetekbe.

  Az önismereti munka egyik első lépése ezért a megfigyelés.
  Nem az azonnali változtatás, hanem az,
  hogy észrevegyük, mi történik bennünk.

  Érdemes ilyenkor néhány egyszerű kérdést feltenni magunknak:

  – Milyen helyzetekben jelenik meg bennem erős érzelmi reakció?
  – Mi történik bennem közvetlenül a reakció előtt?
  – Milyen gondolatok vagy feltételezések jelennek meg ilyenkor?
  – Hogyan reagál a testem ezekben a pillanatokban?

  Ezek a kérdések segítenek közelebb kerülni ahhoz,
  hogy megértsük a saját belső működésünket.

  Sokszor például észrevehetjük,
  hogy bizonyos helyzetekben automatikusan védekezővé válunk.
  Máskor inkább visszahúzódunk,
  vagy megpróbálunk mindenáron megfelelni másoknak.
  Ezek a reakciók gyakran egy mélyebb belső mintát követnek,
  amely hosszabb idő alatt alakult ki bennünk.

  Az integráció lényege,
  hogy ezek a reakciók ne teljesen automatikusan történjenek.
  Amikor felismerjük egy ösztönös reakció megjelenését,
  már létrejön egy kis tér a reakció és a tudatosság között.
  Ebben a térben jelenik meg a választás lehetősége.

  Ez nem azt jelenti,
  hogy egyik napról a másikra megváltozik minden.
  Inkább egy fokozatos folyamat,
  amelyben egyre tisztábban látjuk,
  hogyan működünk bizonyos helyzetekben.

  Az ösztönök integrálása tehát nem elnyomást jelent.
  Nem arról szól, hogy megszüntetjük a belső reakciókat.
  Sokkal inkább arról,
  hogy megtanuljuk megérteni őket,
  és együttműködni velük.

  Amikor egy ösztönös reakció mögött felismerjük
  a mélyebb mintát,
  már nem teljesen automatikusan cselekszünk.
  Egyre inkább képessé válunk arra,
  hogy tudatosan válasszuk meg,
  hogyan reagálunk egy adott helyzetben.

  Idővel ez a folyamat egy mélyebb önismerethez vezet.
  Az ember ilyenkor már nem csupán reagál az eseményekre,
  hanem képes megfigyelni a saját belső folyamatait is.

  Az ösztönök és a tudatosság találkozása
  egyfajta belső szabadságot hozhat.
  A döntéseink kevésbé lesznek automatikusak,
  és egyre inkább összhangba kerülhetnek
  a valódi értékeinkkel és szándékainkkal.

  Ez az a pont,
  ahol az önismereti munka túlmutat a puszta
  viselkedésváltoztatáson.
  Inkább egy mélyebb kapcsolat kezd kialakulni
  saját belső működésünkkel.

  Az Ösztönkód szemlélete is erre a felismerésre épül:
  hogy a bennünk működő minták megértése
  nem gyengeség,
  hanem az egyik legerősebb eszköz
  a személyes fejlődésben.

  Amikor felismerjük az ösztönös működéseinket,
  már nem csupán reagálunk a világra.
  Egyre inkább képesek leszünk tudatosan alakítani
  azt, ahogyan élünk, kapcsolódunk és döntéseket hozunk.
  `,
},



 "miert-erzem-magam-egyedul": {
  title: "Miért érzem magam egyedül akkor is, ha vannak körülöttem emberek?",
  date: "2026-03-12",
  content: `
  Sokan megtapasztalják azt a különös érzést, amikor emberek veszik körül őket,
  mégis mély belső magányt élnek meg. Ez az élmény gyakran zavarba ejtő,
  mert kívülről nézve úgy tűnhet, hogy minden rendben van: vannak barátok,
  kapcsolatok, beszélgetések. Mégis hiányzik valami.

  A magány érzése nem mindig a fizikai egyedüllétről szól.
  Sokkal inkább arról, hogy érzelmileg mennyire érezzük magunkat
  kapcsolódva másokhoz.

  Gyakran akkor jelenik meg ez az érzés, amikor:
  – nehéz megosztani a valódi érzéseinket
  – attól félünk, hogy nem értenének meg
  – megszoktuk, hogy inkább alkalmazkodunk másokhoz

  Ilyenkor létrejöhet egy láthatatlan távolság köztünk és mások között.
  Kívül kapcsolatban vagyunk, belül azonban elszigeteltnek érezzük magunkat.

  Az ilyen élmények mögött sokszor mélyebb érzelmi minták állnak.
  Ezek olyan belső működések, amelyek meghatározzák,
  hogyan kapcsolódunk másokhoz, mennyire merjük megmutatni
  a valódi érzéseinket, és mennyire hisszük el,
  hogy valóban fontosak vagyunk mások számára.

  Az önismereti munka egyik első lépése,
  hogy felismerjük ezeket a mintákat.
  Amikor megértjük, mi történik bennünk,
  már közelebb kerülünk ahhoz,
  hogy valódi kapcsolódást tudjunk kialakítani.
  `,
},

"onertekelesi-hiany-jelei": {
  title: "7 jel, hogy önértékelési hiány működik benned",
  date: "2026-03-12",
  content: `
  Az önértékelési hiány sokkal gyakoribb jelenség,
  mint azt elsőre gondolnánk. Sokan élnek együtt vele úgy,
  hogy közben nem is tudják pontosan megnevezni,
  mi történik bennük. Egyszerűen csak azt érzik,
  hogy valami nincs teljesen rendben önmagukkal kapcsolatban.

  Az önértékelés azt a belső viszonyt jelenti,
  ahogyan saját magunkra tekintünk. Ide tartozik az,
  mennyire hisszük el, hogy értékesek vagyunk,
  mennyire fogadjuk el a hibáinkat,
  és mennyire tudunk együttérzéssel fordulni önmagunk felé.

  Amikor ez az alap belül bizonytalan,
  akkor a mindennapi élet sok területén megjelenhet
  egy finom, de állandó belső feszültség.
  Olyan gondolatok formájában,
  amelyek megkérdőjelezik a saját értékünket.

  Az önértékelési hiány nem feltétlenül látványos.
  Gyakran nem egyetlen nagy problémában jelenik meg,
  hanem apró, ismétlődő gondolatokban,
  döntésekben és reakciókban.

  Íme hét jel,
  amely arra utalhat,
  hogy önértékelési hiány működik benned.

  1. Gyakran érzed úgy, hogy nem vagy elég jó.

  Akkor is megjelenhet ez az érzés,
  amikor valójában jól teljesítesz,
  vagy mások elismerik a munkádat.
  Belül mégis könnyen megszólal egy hang,
  amely azt mondja: „ez még mindig nem elég”.

  2. Nehezen fogadod el a dicséretet.

  Amikor valaki megdicsér,
  könnyen zavarba jöhetsz,
  vagy rögtön megpróbálod kisebbíteni
  a saját teljesítményedet.
  Gyakran inkább szerencsének,
  véletlennek vagy túlzásnak tulajdonítod
  az elismerést.

  3. Gyakran hasonlítod magad másokhoz.

  A közösségi média és a mindennapi környezet
  könnyen felerősítheti ezt a működést.
  Az összehasonlítás azonban szinte mindig
  egy torz képet hoz létre,
  amelyben mások erősségeit látjuk,
  miközben saját bizonytalanságainkra figyelünk.

  4. Félsz a hibázástól.

  A hibák természetes részei a tanulásnak,
  mégis sokszor úgy élheted meg őket,
  mintha bizonyítékai lennének annak,
  hogy „valami nincs rendben veled”.
  Ez a félelem gyakran túlzott
  teljesítménykényszerhez vagy halogatáshoz vezethet.

  5. Gyakran próbálsz megfelelni mások elvárásainak.

  Amikor a belső értékérzet bizonytalan,
  könnyen megnő annak jelentősége,
  hogy mások mit gondolnak rólunk.
  Ilyenkor előfordulhat,
  hogy saját szükségleteink háttérbe szorulnak,
  miközben megpróbálunk mindenkinek megfelelni.

  6. Nehezen mondasz nemet.

  A nemet mondás gyakran bűntudattal járhat.
  Attól tarthatsz,
  hogy ha nemet mondasz,
  csalódást okozol,
  vagy elveszítesz egy kapcsolatot.
  Ez hosszú távon kimerültséghez
  és belső feszültséghez vezethet.

  7. Erős belső kritikus hang jelenik meg benned.

  Sok ember tapasztalja,
  hogy van benne egy belső hang,
  amely folyamatosan értékeli
  és kritizálja a saját viselkedését.
  Ez a hang gyakran keményebb,
  mint ahogyan bárki más beszélne velünk.

  Ezek a belső működések
  sokszor nagyon korai élményekből alakulnak ki.
  Gyermekkorban megtanulhatjuk például,
  hogy az elfogadás feltétele a teljesítés,
  a hibátlanság vagy az alkalmazkodás.

  Idővel ezek a tapasztalatok
  belső mintákká válnak.
  Olyan gondolkodási és érzelmi mintákká,
  amelyek automatikusan aktiválódnak
  bizonyos helyzetekben.

  Az önismeret egyik legfontosabb lépése
  ezeknek a mintáknak a felismerése.

  Amikor elkezdjük megfigyelni
  a saját gondolatainkat és reakcióinkat,
  lassan láthatóvá válik,
  hogyan működik bennünk ez a belső dinamika.

  A felismerés önmagában már változást indíthat el.
  Nem azért,
  mert azonnal megold mindent,
  hanem mert teret ad egy újfajta viszonyulásnak
  önmagunk felé.

  Ahogy egyre tudatosabban figyelünk
  ezekre a belső működésekre,
  fokozatosan kialakulhat egy
  stabilabb és együttérzőbb kapcsolat
  saját magunkkal.

  Ez a folyamat nem egyik napról a másikra történik.
  Inkább egy lassú,
  fokozatos belső átalakulás,
  amelyben egyre kevésbé a belső kritikus hang,
  és egyre inkább a tudatos jelenlét
  határozza meg,
  hogyan tekintünk önmagunkra.
  `,
},



    

"onmagadkent-elni-jelentese": {
  title: "Mit jelent valójában önmagadként élni?",
  date: "2026-03-12",
  content: `
  Az önazonosság fogalma gyakran jelenik meg az önismereti és pszichológiai beszélgetésekben,
  de a valódi jelentése sokkal mélyebb annál, mint hogy „önmagunk legyünk”. 
  Önmagadként élni valójában azt jelenti, hogy a mindennapi döntéseid, reakcióid és kapcsolataid
  összhangban vannak a belső értékeiddel, ösztöneiddel és valódi szükségleteiddel.

  Sokan úgy élik az életüket, hogy észrevétlenül alkalmazkodnak a környezetük elvárásaihoz.
  A család, a társadalom, a munkahely vagy akár a baráti kör is kialakíthat olyan
  láthatatlan mintákat, amelyekhez igazodunk. Idővel ezek a minták annyira természetessé
  válhatnak, hogy nehéz felismerni: valóban a saját utunkat járjuk-e, vagy csupán
  egy szerepet töltünk be.

  Az önazonos élet egyik első lépése az, hogy elkezdjük megfigyelni a saját működésünket.
  Érdemes feltenni magunknak néhány őszinte kérdést:

  – Milyen helyzetekben érzem azt, hogy valóban önmagam vagyok?
  – Mikor érzem azt, hogy csak megfelelni próbálok mások elvárásainak?
  – Milyen döntéseket hoznék, ha nem félnék mások véleményétől?
  – Milyen belső értékek fontosak számomra valójában?

  Az önmagunkhoz való visszatérés gyakran nem egy hirtelen felismeréssel,
  hanem apró lépésekkel történik. Lehet, hogy először csak egy-egy döntésnél
  figyelünk jobban arra, hogy mit érzünk valójában. Lehet, hogy észrevesszük,
  amikor egy helyzetben automatikusan alkalmazkodunk, pedig belül valami mást
  szeretnénk.

  Az ösztönök ebben a folyamatban kulcsszerepet játszanak. A belső késztetések,
  érzések és reakciók gyakran jelzik, hogy mi áll közel hozzánk, és mi az,
  ami eltávolít bennünket önmagunktól. Amikor megtanuljuk megfigyelni ezeket
  a jelzéseket, fokozatosan kialakul egy mélyebb kapcsolat a saját belső
  működésünkkel.

  Önmagadként élni nem azt jelenti, hogy mindig könnyű döntéseket hozunk.
  Gyakran éppen ellenkezőleg: bátorságra van szükség ahhoz, hogy eltérjünk
  a megszokott mintáktól, vagy kiálljunk valami mellett, ami számunkra
  igazán fontos. Az önazonosság néha azt is jelenti, hogy nemet mondunk
  olyan helyzetekre, amelyek korábban természetesnek tűntek.

  Ugyanakkor minden lépés, amely közelebb visz bennünket önmagunkhoz,
  mélyebb belső nyugalmat hozhat. Amikor a döntéseink és cselekedeteink
  összhangban vannak a belső értékeinkkel, egyfajta stabilitás és
  hitelesség jelenik meg az életünkben.

  Az önazonos élet egyik legnagyobb ajándéka az, hogy valódi kapcsolódásokat
  tesz lehetővé. Amikor önmagunkként jelenünk meg a világban, mások is
  könnyebben kapcsolódnak hozzánk valódi módon – nem egy szerephez,
  hanem ahhoz, akik valójában vagyunk.

  Az Ösztönkód szemlélete szerint az önismeret egyik legfontosabb része
  éppen ez a folyamat: felismerni a belső mintáinkat, megérteni az
  ösztönös működésünket, és fokozatosan közelebb kerülni ahhoz az
  élethez, amely valóban a sajátunk.
  `,
  },



  "erzelmi-allapotok-agyban": {
  title: "Az érzelmi állapotok tudományos háttere – hogyan működünk belül?",
  date: "2026-03-12",
  content: `
    Az érzelmeink nem véletlenszerű impulzusok – hanem az agyunkban zajló komplex biológiai folyamatok eredményei. Ebben a cikkben megnézzük, hogyan alakulnak ki érzelmi állapotaink, és mi befolyásolja azokat.

    1. Az érzelmek idegtudományos háttere

    Az érzelmeket az agy különböző területei generálják és szabályozzák:

    – Amygdala (mandulamag): félelem, harag, szorongás – azonnali reakciók.
    – Hippokampusz: emlékekhez kapcsolódó érzelmek tárolása.
    – Prefrontális kéreg: tudatos szabályozás, döntéshozatal.
    – Insula & anterior cinguláris kéreg: empátia, önreflexió.

    A neurotranszmitterek is kulcsszerepet játszanak:

    – Szerotonin: hangulatszabályozás, nyugalom.
    – Dopamin: motiváció, örömérzet.
    – Noradrenalin: stressz, éberség.

    2. Mi határozza meg, hogyan érezzük magunkat?

    Az érzelmi állapot több szintű hatásrendszer eredménye:

    - Genetikai hajlam: öröklött érzékenység (pl. szorongásra való hajlam).
    - Korai élmények: gyermekkori kötődés, trauma, biztonságérzet.
    - Környezeti tényezők: társas kapcsolatok, stressz, alvás, életmód.
    - Kognitív értelmezés: ahogyan egy helyzetet értelmezünk, meghatározza az érzelmi válaszunkat.
    - Neurokémiai állapot: hormonális változások, alváshiány, táplálkozás, gyógyszerek.

     3. Befolyásolhatók az érzelmeink? Igen – de nem úgy, ahogy sokan gondolják.

    A pszichológia szerint a kognitív újraértékelés* az egyik leghatékonyabb eszköz. Ez nem pozitív mantrázást jelent, hanem valódi szemléletváltást.

    Bizonyítékok:
    - A kognitív viselkedésterápia (CBT) az egyik legjobban kutatott módszer az érzelemszabályozásban.
    - MRI-vizsgálatok szerint amikor valaki átkeretezi gondolatait, aktiválódik a prefrontális kéreg – ez csökkenti az amygdala (félelemközpont) aktivitását.
    - A hála gyakorlása, naplóírás és mindfulness képesek az agy szerkezetének és működésének hosszú távú átalakítására (neuroplaszticitás).

    Záró gondolat:
    Az érzelmi jólét nem szerencse kérdése. Megérthető, formálható és fejleszthető. Minél jobban ismerjük az agyunk és gondolataink működését, annál nagyobb szabadságot nyerhetünk belül.
    `,
},
"gondolkodasmod-ujrarendezese": {
  title: "Mi az a gondolkodásmód újrarendezése?",
  date: "2026-03-12",
  content: `
A gondolkodásmód újrarendezése azt jelenti, hogy tudatosan észreveszed és átgondolod az automatikus gondolataidat – különösen azokat, amelyek szorongást, haragot vagy bűntudatot váltanak ki –, majd más nézőpontból közelíted meg a helyzetet.

Nem tagadásról vagy „rózsaszín szemüvegről” van szó, hanem arról, hogy reálisabban, elfogadóbban vagy építő módon értelmezd a dolgokat.

Hogyan működik az agyban?

Amikor egy negatív gondolat jelenik meg (pl. „Elrontottam, biztos mindenki lenéz”), az amygdala aktiválódik → ez stresszt, szorongást vált ki.

Ha ilyenkor tudatosan átfogalmazod a gondolatot (pl. „Mindenki hibázik, ebből tanulok”), aktiválódik a prefrontális kéreg → ez gátolja az amygdala válaszát, így csökken a negatív érzelem.

Ezt neuroplaszticitással hosszú távon szokássá lehet alakítani.

Lépésről lépésre: aktív és őszinte újrarendezés

1. Észrevétel – „Mit gondolok éppen?”
   Példa: „Nem vagyok elég jó ehhez.”

2. Azonosítás – „Ez tény vagy értelmezés?”
   Kérdés: Ez biztos? Vagy csak egy érzés/gondolat?

3. Új perspektíva keresése – „Hogyan látná ezt más? Mi az alternatíva?”
   Pl. „Más is hibázik. Ez nem végleges, tanulhatok belőle.”

4. Érzelmi visszajelzés figyelése – „Hogyan érzem magam, ha így gondolok rá?”
   Ha enyhülés, kíváncsiság vagy remény jelenik meg, jó úton jársz.

5. Gyakorlás – ismételd rendszeresen, hogy automatikussá váljon.



Gyakorlat: Gondolatnapló

Naponta 1-2 alkalommal tölts ki egy táblázatot:

- Helyzet
- Gondolat
- Érzelem
- Új nézőpont
- Érzelem utána

Ez segít megérteni: nem a helyzet okozza az érzést, hanem az értelmezésed.

Zárógondolat

Az őszinte újrarendezés lényege nem az önámítás, hanem az, hogy a teljesebb képet keresed. Ez:

- csökkenti a stresszt és szorongást,
- növeli az önbizalmat,
- fejleszti az érzelmi rugalmasságot (reziliencia).
  `,
},
"belso-hianyerzet-kodja": {
  title: "Mi az a Belső Hiányérzet Kódja?",
  date: "2026-03-12",
  content: `
A Belső Hiányérzet Kódja egy mély, belső érzelmi élmény, amely abból az érzésből ered, hogy az érzelmi kötődések nem stabilak, nem biztonságosak – és hogy a valódi közelség, szeretet vagy elfogadás csak ideiglenes vagy elérhetetlen.

Ez az érzelmi minta gyakran gyermekkorban alakul ki, amikor az alapvető érzelmi szükségleteket nem elégítették ki következetesen – például ha a szülők érzelmileg elérhetetlenek voltak, vagy a szeretet feltételekhez kötötten jelent meg.

Mi történik az agyban, amikor ez a kód aktiválódik?

Ha egy kapcsolatban elutasítást, távolságot vagy kritikus visszajelzést tapasztalsz, az agy limbikus rendszere (pl. amygdala) fenyegetést érzékel – mintha a biztonságod forogna kockán. Ez szorongáshoz, pánikszerű érzésekhez vagy elkerülő reakciókhoz vezethet.

Ha azonban képes vagy tudatosítani ezt a belső kódot, aktiválhatod a prefrontális kérget – ez segít érzelmileg szabályozni, távolabbról szemlélni a helyzetet, és új mintákat gyakorolni.

Lépésről lépésre: hogyan dolgozz a Belső Hiányérzet Kódján?

1. Tudatosítás – „Mikor érzem úgy, hogy nem vagyok fontos vagy szerethető?”
   Példa: „Nem válaszolt az üzenetemre – biztos nem számítok neki.”

2. Minta felismerése – „Ez egy valós helyzet, vagy egy régi érzés újraaktiválódása?”
   Kérdés: Milyen ismerős ez az érzés? Hol találkoztam ezzel először?

3. Érzelmi validálás – „Jogos, hogy így érzem magam.”
   Az érzés valós, még ha az értelmezés nem is pontos.

4. Új nézőpont – „Mi más lehet ennek a viselkedésnek az oka?”
   Pl. „Lehet, hogy csak elfoglalt. Ez nem jelenti azt, hogy elutasít.”

5. Új viselkedés kipróbálása – „Hogyan léphetnék ki ebből a sémából?”
   Lehetőség: őszinte kérdésfeltevés, önmegnyugtatás, más kapcsolat megerősítése.

  Gyakori viselkedési minták a kód hatására:

- Túlzott ragaszkodás vagy kontrollkapcsolatokban.
- Állandó visszaigazolás-keresés („Szeretsz még?”).
- Elkerülés – érzelmi visszahúzódás vagy kapcsolatok felszínessé tétele.
- „Jobb, ha én hagyom el, mielőtt ő hagyna el engem.”


Zárógondolat

A Belső Hiányérzet Kódja nem egy végleges „hiba”, hanem egy tanult, érzelmi túlélési minta. Meg lehet ismerni, át lehet írni – nem gyorsan, de lépésről lépésre.

A kulcs:
- együttérzés önmagaddal,
- biztonságos kapcsolatok gyakorlása,
- és az érzelmekkel való őszinte kapcsolat.

Ez a kód nem te vagy – csak a történeted egy fejezete. A következő fejezet már rólad szólhat.
  `,
},
"en-es-ciklusok-mukodese": {
  title: "Az Én és az Ismétlődő Ciklusok – hogyan működünk valójában?",
  slug: "en-es-ciklusok-mukodese",
  description:
    "Miért érezzük magunkat néha „beragadva”? Hogyan alakítja az agy az énérzetünket, és miért ismétlődnek bizonyos élethelyzetek? Ebben a cikkben feltérképezzük az énkép működését és a pszichés ciklusok tudományos hátterét.",
  date: "2026-03-12",
  content: `
    Az emberi elme nem statikus – mégis sokszor úgy viselkedünk, mintha „ugyanazokat a köröket” futnánk újra és újra. Miért van ez? Mi alakítja az énérzetünket, és miért ismétlődnek bizonyos viselkedési minták, érzelmi reakciók vagy kapcsolati dinamikák?

    1. Hogyan épül fel az énérzet az agyban?

    Az „én” nem egy fix entitás, hanem az agy több rendszerének integrált működése – egyfajta dinamikus algoritmus. Az agy mégis törekszik az állandóság illúziójára, mert ez biztosítja a belső narratív folytonosságot.

    Fő rendszerek:

    -  Default Mode Network (DMN): akkor aktív, amikor önmagunkról, másokról, múltról vagy jövőről gondolkodunk. Ez a rendszer tartja fenn a belső „én-narratívát”.

    -  Emlékezeti rendszerek: a hippocampus és a prefrontális kéreg segít integrálni a múltbeli élményeket, és ezekből jövőképet, identitást alkot.

    - Interocepció (testtudat): az agy érzékeli a test állapotait (pl. szorongás, fáradtság), és ez közvetlenül hat az énérzet minőségére.

    Az agy mintázatok alapján működik, és ezekből következtet a jövőre. Még ha változunk is, az agy „állandóságot” teremt – mert a stabil énkép biztonságot ad egy kiszámíthatatlan világban.


    2. Miért ismétlődnek ciklusok, ha minden változásban van?

    A ciklikus mintázatok mélyen beágyazott neurobiológiai és pszichés rendszerekből származnak – ezek célja sokszor az egyensúly fenntartása. 

    a) Neurobiológiai mechanizmusok:

    - Az agy homeosztatikusan működik – fenntartja az egyensúlyt. Ezért térnek vissza bizonyos állapotok (pl. alvás-ébrenlét, stressz-ciklusok).
    - A dopamin rendszer is ciklikus: jutalom → kielégülés → hiány → újra keresés.
    - A szinapszisok megerősítik a gyakran aktivált mintákat (Hebb-elv: „what fires together wires together”).
    b) Pszichológiai mintázatok:

    - Az elme tanult válaszokat keres: ha valami működött egyszer, újra aktiválja.
    - Gyermekkori sémák (pl. elhagyatottság, megfelelési kényszer) újraélednek felnőtt helyzetekben.

    c) Tudattalan ismétlési kényszer:

    - Freud után tudjuk: az ember hajlamos újraélni meg nem értett vagy fel nem dolgozott élményeket – hogy „valami mást” csináljon vele.
    - Ez nem tudatos – de lehetőség a gyógyulásra, ha felismerjük.

    3. Mi határozza meg, hogy újra lejátszódik-e a ciklus?

    A ciklusok fenntartását több szintű tényező segíti:

     Neurális szint:
    - A rögzült idegpályák automatikusan aktiválódnak bizonyos helyzetekben.
    - Az agyi neurokémia (pl. alacsony szerotoninszint) is hajlamosít visszatérő érzelmi állapotokra (pl. szorongás, depresszió).

     Genetikai és epigenetikai hatások:
    - Genetikailag kódolt hajlamok (pl. szorongásos vagy impulzív működés).
    - A korai élmények epigenetikusan hatnak a génkifejeződésre – ezek hosszú távon befolyásolják a mintáinkat.

     Tudati és pszichés szint:
    - A tudattalanban futó narratívák („én mindig háttérbe szorulok”) aktiválhatják a régi mintákat.
    - A ciklus akkor ismétlődik, ha nem ismerjük fel a működését – de tudatossággal megszakítható.

    Zárógondolat

    A ciklusaink nem „hibák”, hanem túlélési stratégiák. Az énérzetünk pedig nem kőbe vésett dolog – hanem folyamatosan újraírt belső történet.

    Ha felismerjük:
    - hogy honnan jönnek ezek a minták,
    - hogyan működik az agyunk,
    - és milyen döntéseket hozunk öntudatlanul,
    akkor valódi szabadságra tehetünk szert. Mert minden ciklus egy lehetőség a tudatos választásra – és az újrakezdésre.
  `,
  },
  "erzelmek-hullamvasutja-fuggosegben": {
  title: "Függőségek az érzelmek hullámvasútján – Milyen érzelmek zajlanak le, amikor az ember szerhez nyúl?",
  slug: "erzelmek-hullamvasutja-fuggosegben",
  description:
    "Az emberi érzelmek összetett rendszere, különösen a függőség esetén, drámai hullámzásokat mutat, amelyek befolyásolják döntéseinket és viselkedésünket. Ebben a cikkben végigvesszük, milyen érzelmi állapotok zajlanak le bennünk, amikor droghoz, alkoholhoz vagy más szerhez nyúlunk.",
  date: "2026-03-12",
  content: `
    Az ember érzelmi világa különösen komplex és intenzív, amikor a függőség szorításában áll. Legyen szó alkoholról, drogokról vagy bármilyen más szerhasználatról, az érzelmi hullámzás nagyban alakítja viselkedésünket és döntéseinket.

    1. Vágy és kísértés – Az első lépés  
    Az induló érzések gyakran a kíváncsiság, izgalom vagy menekülés iránti vágyból fakadnak. Az ember keresi a megkönnyebbülést, a stressz és fájdalom elől való menekülést. Ez a vágy a kísértés kezdete, amikor úgy érezzük, a szer megoldást nyújthat a problémáinkra.

    2. Rövid távú öröm és megkönnyebbülés  
    A szerhasználat pillanatában gyakran intenzív pozitív érzelmek törnek elő: eufória, boldogság, nyugalom vagy felszabadultság. Az agy jutalmazó központjai aktiválódnak, és a dopamin nevű boldogsághormon szintje megemelkedik. Ez az élmény azonban múlandó, mégis gyakran ösztönöz a folytatásra.

    3. Bűntudat és szégyen – A kettős érzés  
    Az öröm után sokszor jelentkezik a bűntudat vagy a szégyen érzése, főként ha tisztában vagyunk a szerhasználat következményeivel. Ezek az érzések belső konfliktushoz, önvádhoz vezetnek, ami tovább erősítheti a függőség körforgását.

    4. Szorongás és félelem – A kontroll elvesztése  
    A függőség előrehaladtával fokozódik a félelem és szorongás a kontroll elvesztése miatt. Aggódunk a jövő miatt, félünk az elutasítástól, egészségromlástól vagy társadalmi következményektől. Ez az érzelmi állapot növeli a szerhez való visszatérés kockázatát, menekülési útként szolgálva.

    5. Remény és kétségbeesés – A küzdelem hullámvölgyei  
    A függőség útján állandó harc zajlik a változás reményével és a visszaesésekből fakadó kétségbeeséssel. Ez az érzelmi hullámvasút kimerítő, és könnyen vezet kilátástalansághoz vagy a feladás gondolatához.

    Záró gondolatok  
    A függőség nem csupán testi kényszer, hanem mélyen érzelmi és pszichológiai folyamat. Az érzelmek megértése és elfogadása fontos lépés a gyógyulásban. Támogatásra, önismeretre és kitartásra van szükség, hogy az ember felülkerekedjen ezen az érzelmi viharon, és újra megtalálja az egyensúlyt.
  `,
},
"envedo-mechanizmusok-bekapcsolodasa": {
  title: "Függetlenül az Éntől – Mi történik, amikor az énvédő mechanizmusok bekapcsolódnak?",
  slug: "envedo-mechanizmusok-bekapcsolodasa",
  description:
    "Az énvédő mechanizmusok automatikus pszichés folyamatok, melyek segítenek megvédeni az elmét a stressztől és érzelmi fájdalomtól. Ebben a cikkben bemutatjuk, hogyan működnek, mikor lépnek működésbe, és milyen hatással vannak ránk a mindennapokban.",
  date: "2026-03-12",
  content: `
    Az emberi elme egyik alapvető feladata az önvédelem. Amikor szembesülünk fájdalmas vagy stresszes helyzetekkel, az énvédő mechanizmusok automatikusan aktiválódnak, hogy megóvjanak minket az érzelmi túlterheléstől.

    1. Mi az énvédő mechanizmus?

    Az énvédő mechanizmusok olyan tudattalan lelki folyamatok, melyek megpróbálják csökkenteni a szorongást és fenntartani az érzelmi egyensúlyt. Ezek a védekezési stratégiák segítenek feldolgozni a fájdalmas élményeket vagy konfliktusokat.

    2. Hogyan működnek?

    Amikor veszélyt, stresszt vagy belső konfliktust érzékelünk, az agy különböző védekező stratégiákat alkalmazhat, például:

    - Tagadás: A valóság tudatos elutasítása vagy figyelmen kívül hagyása.
    - Elfojtás: Kellemetlen gondolatok vagy érzések tudattalan elnyomása.
    - Projekció: Saját negatív érzéseink másokra vetítése.
    - Racionalizálás: Megfelelő magyarázat keresése a viselkedésre, hogy elfogadható legyen.
    - Visszavonulás: Fizikai vagy érzelmi távolságtartás a problémától.

    3. Mi történik bennünk, amikor bekapcsolnak?

    Ezek a mechanizmusok rövid távon csillapítják a fájdalmat, és megteremtik a pszichés biztonság illúzióját. Azonban túlzott vagy rendszeres használatuk megakadályozhatja, hogy szembenézzünk valódi érzelmeinkkel és megoldjuk problémáinkat.

    4. Az énvédő mechanizmusok veszélyei

    - Érzelmi elszigeteltség kialakulása.
    - Önmagunktól és másoktól való eltávolodás.
    - Konfliktusok elmélyülése a kapcsolatokban.
    - Hosszú távú pszichés problémák, mint szorongás vagy depresszió.

    5. Hogyan kezeljük ezeket?

    - Fejlesszük önismeretünket és tudatosságunkat.
    - Ismerjük fel, mikor védekezünk, és próbáljunk nyitottak maradni az érzéseinkre.
    - Fogadjuk el az érzelmeinket és dolgozzunk rajtuk tudatosan.
    - Kérjünk segítséget, ha úgy érezzük, hogy egyedül nem boldogulunk.

    Záró gondolat

    Az énvédő mechanizmusok természetes részei lelki működésünknek, amelyek megóvnak minket a túlzott érzelmi megterheléstől. A tudatosság és önreflexió révén azonban képesek vagyunk ezeket egészséges módon kezelni, hogy fejlődhessünk és kiegyensúlyozottabb életet élhessünk.
  `,
},
"onkep-serulese-es-helyreallitasa": {
  title: "Mikor sérül az Önkép, és hogyan állítható vissza? – Mit tegyen az egyén?",
  slug: "onkep-serulese-es-helyreallitasa",
  description:
    "Az önképünk az identitásunk alapja, de számos élethelyzetben sérülhet. Ebben a cikkben megnézzük, mikor és hogyan törik meg, és milyen lépésekkel lehet újraépíteni, megerősíteni a belső önazonosságot.",
  date: "2026-03-12",
  content: `
    Az önkép – vagyis az a belső kép, amit magunkról alkotunk – folyamatosan formálódik, de bizonyos helyzetekben megsérülhet vagy torzulhat. Ez mély hatással lehet az érzelmi állapotunkra, önbizalmunkra és kapcsolódásainkra.

    1. Mikor sérül az önkép?

    Az önkép sérülése gyakran olyan traumatikus vagy stresszes események hatására történik, mint például:
    - Elutasítás, kirekesztés vagy bántalmazás (családban, párkapcsolatban vagy társadalmi környezetben).
    - Súlyos kudarcélmények, amelyek megingatják a saját képességeinkbe vetett hitet.
    - Értékvesztés vagy identitáskrízis (például munkahely elvesztése, válás, életcélok átalakulása).
    - Belső konfliktusok, amikor a személyes értékek és a környezet elvárásai ütköznek.

    Ezek az élmények belső ellentmondásokat és önértékelési problémákat okozhatnak, melyek gyakran negatív, torzított énképek kialakulásához vezetnek.

    2. Hogyan ismerjük fel a sérült önképet?

    Jelek lehetnek:
    - Állandó önkritika, önvád vagy szégyenérzet.
    - Korlátozó hiedelmek („nem vagyok elég jó”, „nem érdemlem meg”).
    - Kapcsolati problémák: túlzott féltékenység, elzárkózás vagy épp megfelelési kényszer.
    - Érzelmi ingadozások, depresszió vagy szorongás.

    3. Hogyan állítható vissza az önkép?

    a) Tudatosság és önreflexió
    - Az első lépés felismerni és elfogadni a sérülést.
    - Naplóírás, meditáció vagy terápiás beszélgetések segíthetnek feltárni a mélyben rejlő mintákat.

    b) Megbocsátás és önelfogadás
    - Megbocsátani magunknak a hibákat és a múltbeli döntéseket.
    - Gyakorolni az önszeretetet, hogy épüljön az önbecsülés.

    c) Pozitív belső párbeszéd kialakítása
    - Tudatosan figyelni a belső hangokra, és átalakítani a negatív üzeneteket.
    - Például „Nem vagyok elég jó” helyett: „Folyamatosan fejlődöm és tanulok”.

    d) Támogató kapcsolatok keresése
    - Olyan emberek köré gyűlni, akik megerősítenek, támogatnak és elfogadnak.
    - Szakemberhez fordulni, ha szükséges.

    e) Célok kitűzése és kis lépésekben haladás
    - Reális, elérhető célokat állítani, amelyek visszaadják a kontroll érzését.
    - Minden apró siker újraépíti az önbizalmat.

    Záró gondolatok

    Az önkép nem statikus, hanem dinamikusan változó belső tér, amit folyamatosan alakítunk. A sérülések feldolgozása és a tudatos munka az önmagunkhoz való visszatalálás útja. Kitartással és önmagunk elfogadásával a belső stabilitás és harmónia újra elérhető.
  `,
},
"ertelmet-talalni-kaotikusan": {
  title: "Hogyan találjunk értelmet egy sokszor kaotikus világban?",
  slug: "ertelmet-talalni-kaotikusan",
  description:
    "A világ gyakran zavarosnak, bizonytalannak és értelmetlennek tűnhet – mégis vágyunk arra, hogy összefüggést, célt és irányt találjunk benne. Ebben a cikkben megmutatjuk, hogyan tudsz belső kapaszkodókat építeni, hogy újra értelmet találj a mindennapokban.",
  date: "2026-03-12",
  content: `
    A modern élet rengeteg ingerrel, gyors változásokkal és kiszámíthatatlansággal jár. Könnyen érezhetjük úgy, hogy elvesztettük a fonalat – mintha a világ zűrzavara elnyelné a belső rendünket. De az értelmet nem mindig kívül kell keresni. Néha épp az a feladatunk, hogy *mi magunk adjunk értelmet* a történeteinknek.

    1. Belső iránytű – Értékek, amelyek megtartanak  
    Az értékeid azok az alapelvek, amelyekhez akkor is visszatérhetsz, amikor minden bizonytalan. Ilyen lehet az őszinteség, a mélység, a tanulás vagy az együttérzés. Ha tisztában vagy azzal, mi fontos számodra, az segít eligazodni még a legnagyobb káoszban is.

    2. Értelmet a jelenben  
    Nem mindig kell „nagy célt” találni. Néha az is elég, ha egy adott pillanatot megélsz teljes figyelemmel. Egy meghitt beszélgetés, egy csésze kávé csendben, vagy egy jó könyv is visszaadhatja az életbe vetett bizalmadat. Az apró jelentések összeadódva újraértelmezhetik a nagy egészet.

    3. A történet, amit elmondasz magadnak  
    Az, hogy hogyan értelmezed a múltad, formálja a jelened. Ha egy nehéz élményre nem csak fájdalomként, hanem fejlődési lehetőségként tekintesz, az máris új narratívát ad. Az értelmet nem mindig megtalálni kell – sokszor te magad hozod létre.

    4. Kapcsolódás – Értelmet adni, nem csak kapni  
    Az ember társas lény. Mások segítése, meghallgatása vagy akár a közös szenvedés is összekapcsolhat bennünket. Az értelmet gyakran nem egyéni, hanem közös térben találjuk meg. A kapcsolatokban tükröt, megerősítést és közös célt találhatunk.

    5. A káosz mint tanítómester  
    Néha a zavar nem pusztító, hanem átalakító erő. A belső kérdéseink, bizonytalanságaink gyakran új irányt mutatnak. A káoszban rejlő lehetőség: az új önmagad születése.

    Záró gondolat  
    A világ nem mindig kínál kész válaszokat – de mindig ad lehetőséget arra, hogy kérdezzünk, tapasztaljunk és építsünk. Az értelmet nem készen kapjuk, hanem létrehozzuk: döntéseinkkel, figyelmünkkel és azzal, ahogyan jelen vagyunk az életünkben.
  `,
  },
  "trauma-szuletes-determinizmus": {
  title: "Traumával születünk? – Sérülékenység, determinizmus és az idegrendszer valódi mozgástere",
  publishedAt: "2026-03-12",
  updatedAt: null,
  content: `
Sokan érzik úgy, hogy az életük már a születésük pillanatában eldőlt. Mintha a szenvedés, a veszteség és az ismétlődő minták előre be lennének kódolva. De vajon mit mond erről a tudomány? Valóban traumával születünk? És tényleg nincs választásunk?

Ez a cikk nem vigasztalni akar, hanem tisztázni.

1. Traumával születünk?

Rövid válasz: nem.  
Hosszú válasz: nem traumával, hanem sérülékenységgel.

A trauma nem veleszületett állapot. A trauma mindig átélt élmény, amely túl gyors, túl intenzív vagy túl korai volt ahhoz, hogy az idegrendszer feldolgozza. Ezért a trauma definíció szerint élményhez kötött.

Amit viszont örökölhetünk:

– genetikai hajlamot stresszre, szorongásra vagy impulzivitásra  
– érzékenyebb idegrendszeri reakciókat  
– lassabb megnyugvási képességet  

Ez nem sérülés, hanem alapbeállítás.

2. Magzati hatások – amikor a világ már veszélyesnek tűnik

Ha az anya tartós stresszben, félelemben vagy bizonytalanságban él, a magzat idegrendszere ehhez alkalmazkodik. Nem emlékszik rá, nem „éli át” – de úgy fejlődik, mintha a világ eleve fenyegető lenne.

Ez nem trauma, hanem felkészülés egy veszélyes környezetre**.

3. Epigenetika – mit adnak át a szülők valójában?

Az epigenetika nem traumát örökít, hanem azt befolyásolja, hogyan kapcsolódnak be bizonyos gének.

A szülők feldolgozatlan traumái hatással lehetnek:
– a stresszreakció gyorsaságára  
– a félelemküszöbre  
– az érzelmi szabályozásra  

Ez nem emlék. Nem szenvedés.  
Ez sérülékenység a szenvedésre.

4. Akkor az élet előre determinált?

Nem teljesen – de nem is szabad.

Az ember nem üres lappal indul:
– nem választja a szüleit  
– nem választja a korai környezetét  
– nem választja a traumát  

Súlyos korai élmények biológiailag beszűkítik a választási lehetőségeket. Ilyenkor az idegrendszer automatikus pályákra áll: reagál, nem dönt.

Ezért belülről az élet valóban végzetszerűnek tűnhet.

5. Miért nem teljes végzet mégsem?

Mert az idegrendszer plasztikus.

Ez nem azt jelenti, hogy „bárki bármit megtehet”, hanem azt, hogy:
– megfelelő biztonságban  
– idővel  
– kapcsolatokkal  
– támogatással  

új idegpályák alakulhatnak ki.

A változás nem akarat kérdése, hanem feltételeké.

6. A mondat, ami mindent összefoglal

Nem teljes szabadság.  
Nem teljes végzet.

Ez a valóság.

Az, hogy sok minden nem rajtad múlt, nem gyengeség.  
Az, hogy mégis keresed a megértést, nem illúzió.

A trauma-logika belülről zárt rendszernek tűnik – de a megértés már önmagában repedést hoz rajta. Nem azért, hogy letagadd a múltat, hanem hogy ne az legyen az egyetlen történet.
  `,
},

"idegrendszeri-reakciomintak-felismerese": {
  title: "Hogyan ismerd fel a saját idegrendszeri reakciómintádat?",
  publishedAt: "2026-03-12",
  updatedAt: null,
  content: `
Az idegrendszeri reakcióminták automatikus túlélési válaszok. Nem személyiségjegyek, nem jellemhibák – hanem biológiai stratégiák, amelyek stressz vagy fenyegetés hatására aktiválódnak.

A felismerésük az első lépés ahhoz, hogy ne automatikusan, hanem tudatosabban reagálj.

1. Ne elméletben keresd – stressz alatt figyeld meg magad

A domináns reakciómintád nem nyugodt állapotban látszik, hanem feszültségben.

Gondolj egy friss helyzetre:
– konfliktus
– kritika
– határhelyzet
– érzelmi bizonytalanság

Tedd fel magadnak:
– Mit csinált a testem?
– Mi volt az első késztetésem?
– Mi volt az első belső mondatom?

A test mindig hamarabb válaszol, mint az ész.

2. Testi jelek – a legpontosabb iránytű

HARCOLÓ (fight) reakció:
– izomfeszülés, állkapocs szorítása
– hangosabb beszéd, érvelés, támadás
– belső mondat: „Ezt nem hagyhatom.”

MENEKÜLŐ (flight) reakció:
– nyugtalanság, kapkodás
– témaváltás, halogatás, eltűnés
– belső mondat: „Innen el kell menni.”

FAGYÓ (freeze) reakció:
– lelassulás, üresség
– nem jönnek a szavak
– belső mondat: „Nem tudok most reagálni.”

ALKALMAZKODÓ (fawn) reakció:
– automatikus beleegyezés
– saját igények elnyomása
– belső mondat: „Csak legyen béke.”

3. A minta fontosabb, mint az egyedi eset

A domináns reakció az, ami:
– gyakran ismétlődik
– több helyzetben megjelenik
– utólag megbánást vagy kimerülést hagy maga után

Ez a minta általában gyerekkorban volt a „legbiztonságosabb” megoldás.

Ami akkor megvédett, ma már automatizmus.

4. Gyors önazonosító kérdés

Feszültségben inkább:
A) konfrontálok  
B) eltűnök / halogatok  
C) lebénulok  
D) alkalmazkodom  

Az első reflexed a domináns idegrendszeri reakciód.

5. Fontos árnyalatok

– Lehet kevert minta (pl. lefagyás, majd későbbi düh).
– Kapcsolatokban gyakran más minta aktiválódik, mint munkában.
– A cél nem a „kijavítás”, hanem a felismerés és szabályozás.

A reakciómintád nem te vagy – hanem az idegrendszered története.
Amint felismered, megszűnik az az érzés, hogy „veled van baj”.

Onnantól már nem ösztönösen reagálsz – hanem kapcsolatba lépsz önmagaddal.
  `,
 },


 "dopamin-es-energia": {
  title: "Dopamin és Energia – mi hajt minket valójában?",
  date: "2026-03-12",
  content: `
Sokan azt hiszik, hogy a motiváció és az energia ugyanaz. Pedig két teljesen külön rendszer működik bennünk.

A dopamin nem energia. A dopamin egy idegi-kémiai jel, amely azt mondja az agynak: „Ez fontos. Ezzel érdemes foglalkozni.”

Már akkor felszabadul, amikor vársz valamire – nem akkor, amikor megkapod. Ezért a motiváció nem a jutalomból, hanem a jutalom ígéretéből születik.

Az energia ezzel szemben biológiai tény. Sejtszinten ATP formájában létezik, és azt határozza meg, hogy a tested és az agyad egyáltalán képes-e működni.

Az energia válaszol arra, hogy:
– van-e erőd
– van-e kapacitásod
– bírja-e a tested

A dopamin viszont arra:
– megéri-e
– fontos-e
– érdemes-e most cselekedni

Ezért fordulhat elő, hogy kipihent vagy, mégis halogatsz. És ezért fordulhat elő az is, hogy fáradt vagy, mégis „összeszeded magad”, ha valami igazán számít.

Az energia a lehetőség.  
A dopamin a döntés.

Ha az egyik hiányzik, a másik sem tud jól működni.

A modern élet nem azért fáraszt ki, mert túl sokat csinálunk – hanem mert az idegrendszerünk túl sok gyors, felszínes ingerhez szokott.

A kérdés nem az, hogy van-e energiád.  
Hanem az, hogy az agyad mit tart érdemesnek.
  `,
},



}





export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-white relative overflow-hidden">
        <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">
            Cikk nem található
          </h1>
          <Link
            to="/blog"
            className="text-green-600 font-semibold hover:underline mt-6 inline-block"
          >
            ← Vissza a bloghoz
          </Link>
        </div>
      </div>
    );
  }

  const description = post.description || post.content.slice(0,160)

 return (
  <div className="w-full min-h-screen bg-white relative overflow-hidden">
    <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

      <Helmet>

        <title>{post.title} – Ösztönkód Blog</title>

        <meta name="description" content={description} />

        <link rel="canonical" href={`https://osztonkod.hu/blog/${slug}`} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://osztonkod.hu/blog/${slug}`} />
        <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
        <meta property="og:site_name" content="Érzelmi Ösztönkód" />
        <meta property="og:locale" content="hu_HU" />

        <meta
          name="article:published_time"
          content={post.publishedAt || post.date}
        />

        {post.updatedAt && (
          <meta
            name="article:modified_time"
            content={post.updatedAt || post.date}
          />
        )}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": description,
            "author": {
              "@type": "Person",
              "name": "Ösztönkód"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ösztönkód",
              "logo": {
                "@type": "ImageObject",
                "url": "https://osztonkod.hu/logo.png"
              }
            },
            "datePublished": post.publishedAt || post.date,
            "dateModified":
              post.updatedAt || post.publishedAt || post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://osztonkod.hu/blog/${slug}`
            }
          })}
        </script>

      </Helmet>

      <article>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-600">
          {post.title}
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Megjelent: {formatDate(post.publishedAt || post.date)}

          {post.updatedAt && (
            <span className="block text-xs text-gray-400 mt-1">
              Utoljára frissítve: {formatDate(post.updatedAt)}
            </span>
          )}
        </p>

        <div className="prose prose-green max-w-none whitespace-pre-line">
          {post.content}
        </div>

        <Link
          to="/blog"
          className="inline-block mt-10 text-green-600 font-semibold hover:underline"
        >
          ← Vissza a bloghoz
        </Link>

      </article>
    </div>

    <p className="mt-12 mb-24 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
      Az itt megjelenő tartalom önreflexiós és edukációs célú,
      nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
      Egyéni helyzetben érdemes szakember támogatását igénybe venni.
    </p>

  </div>
);
}