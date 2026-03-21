import Section from "../components/Section";

export const schemaDetails = {

    'belso-hianyerzet': {
      title: 'A Belső Hiányérzet Kódja',
      description:
        'A Belső Hiányérzet Kódja egy olyan belső tapasztalás, amely abból az érzésből ered, hogy az érzelmi kötődések törékenyek, kiszámíthatatlanok, és hogy nem lehetséges igazán biztonságos, szeretetteljes kapcsolatok kialakítása. Azok, akik ezt a kódot hordozzák, gyakran úgy érzik, hogy el fognak hagyni őket, vagy hogy kapcsolataik instabilak és végül összeomlanak.',
      additionalInfo: (
        <div className="space-y-6 mt-6">

          <p className="text-sm text-gray-500 italic">
            Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
          </p>
           <Section title="Pszichológiai párhuzam" items={[
            'Ez a minta hasonlít a következő pszichológiai jelenségekhez:',
            '• Kötődési sérülések (attachment insecurity)',
            '• Elhagyatottság séma (schema therapy)',
            '• Érzelmi depriváció (emotional deprivation)',
            '• Szorongó kötődési stílus (anxious attachment)'
          ]} />
          <Section title="Jellemzők" items={[
            'Az érzelmi biztonság és a szeretet megélésének nehézségei jellemzik...',
            'Gyakori az egyedüllét érzése és a meg-nem-értettség.',
            'Szorongás, kontroll vagy elkerülés az intimitásban.',
            'Gyermekkori érzelmi elhanyagolásból fakadhat.'
          ]} />
          <Section title="A kód kialakulása" items={[
            'Érzelmi szükségletek kielégítetlensége gyermekkorban.',
            'Válás, haláleset vagy más trauma nyomán.',
            'Szülői érzelmi elérhetetlenség.'
          ]} />
          <Section title="Jellemző viselkedési minták" items={[
            'Túlságosan függő kapcsolatok kialakítása.',
            'Folyamatos megerősítés-keresés.',
            'Elkerülő viselkedés: érzelmi bezárkózás.'
          ]} strong />
          <Section title="A kód hatása a kapcsolatokra" items={[
            'Kapcsolati nehézségek, túlzott érzelmi kötődés.',
            'Szakítástól való félelem gátolja az intimitást.',
            'Érzelmi megnyílás nehézsége még közeli kapcsolatokban is.'
          ]} />
          <Section title="A kód feldolgozása" items={[
            'Érzelemfeldolgozás a múlt megértésére.',
            'Új viselkedési minták tanulása.',
            'Megküzdési stratégiák fejlesztése a félelem csökkentésére.'
          ]} />

         
          <p className="text-gray-700 text-base leading-relaxed">
            A Belső Hiányérzet Kódja egy mély, érzelmi alapú tapasztalás, amely a biztonság és érzelmi támogatás hiányáról szól. Gyakran a gyermekkorban kezdődik, és ha nem dolgozzák fel, életünk során visszatérhet. A cél a kód feloldása és új, egészségesebb viselkedési minták kialakítása.
             Az érintettek gyakran érzik úgy, hogy nem méltók a szeretetre, vagy hogy a közelség idővel mindig elveszik. Ez a belső bizonytalanság tartós szorongást, kapcsolati instabilitást és önértékelési problémákat okozhat.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            A gyógyulás egyik kulcsa az érzelmi biztonság újratanulása – olyan kapcsolatok megélése, ahol a stabilitás, elfogadás és empátia megtapasztalható. A bizalom fokozatos kiépítése, az önszeretet fejlesztése, valamint a régi kötődési minták felismerése és átdolgozása hosszú távon felszabadító lehet.
          </p>
          <div className="text-green-700 text-base leading">
            <strong>Kapcsolódó ösztön:</strong> <em>Kötődési ösztön</em> (attachment instinct) – az egyik legalapvetőbb emberi késztetés, melynek célja, hogy biztonságos, stabil érzelmi kapcsolatokban éljünk. 
            Ennek az ösztönnek a sérülése esetén alakulhat ki a Belső Hiányérzet Kódja.
          </div>
        </div>
      )
    },
     
    'belso-erzelmi-uresseg': {
      title: 'Érzelmi Üresség Kódja',
      description:
        'Az érzelmi üresség kódja akkor alakul ki, amikor valaki úgy érzi, hogy nem kapja meg azokat az alapvető érzelmi támogatásokat...',
      additionalInfo: (
        <div className="space-y-6 mt-6">
          <p className="text-sm text-gray-500 italic">
           'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:'
         </p>
          <Section title="Pszichológiai párhuzam" items={[
            'Ez a minta hasonlít a következő pszichológiai jelenségekhez:',
            '• Érzelmi elhanyagolás (emotional neglect)',
            '• Depresszív tünetekhez kapcsolódó ürességérzés',
            '• Disszociatív élmények enyhébb formái',
            '• Alacsony érzelmi tudatosság (alexithymia)'
          ]} />

          <Section title="Jellemzők" items={[
            'Érzelmi szükségletek kielégítetlensége.',
            'Hit abban, hogy nem érdemel szeretetet.',
            'Meggyőződés, hogy senki nem tud igazán kapcsolódni hozzá.'
          ]} />

          <Section title="A kód kialakulása" items={[
            'Gyermekkori érzelmi figyelem hiánya.',
            'Szülői érzelmi elérhetetlenség.',
            'Hideg vagy távolságtartó szülők.',
            'Érzelmi elhanyagolás vagy bántalmazás.',
            'Elveszített, nem állandó kapcsolatok.'
          ]} />

          <Section title="Jellemző viselkedési tendenciák" items={[
            'Elzárkózás, önállóság keresése.',
            'Érzelmi bezárkózás.',
            'Kétség önmaga értékességével kapcsolatban.'
          ]} strong />

          <Section title="A kód hatása a kapcsolatokra" items={[
            'Kapcsolatkeresés, de félelem a megnyílástól.',
            'Érzelmi elfojtás, segítségkérés hiánya.',
            'Érzelmi egyensúly hiánya.',
            'Érzelmileg távolságtartó partnerek választása.'
          ]} />

          <Section title="A kód kezelése" items={[
            'Új érzelmi tapasztalatok gyűjtése.',
            'Negatív hiedelmek átírása.',
            'Kapcsolati készségek fejlesztése.',
            'Önelfogadás támogatása.'
          ]} />

          <p className="text-gray-700 text-base leading-relaxed">
            Az Érzelmi Üresség Kódja mély érzelmi mintákat érint, melyek oldhatók támogatással és új élményekkel.
          </p>
          <div className="text-green-700 text-base leading">
            <strong>Kapcsolódó ösztön:</strong> <em>Kapcsolódási ösztön</em> – az emberi alapösztön, amely az érzelmi jelenlétre, meghittségre és a másokkal való valódi kapcsolódásra irányul.  
            Ha ez az ösztön hosszú távon kielégítetlen marad, az érzelmi üresség élménye rögzülhet.
          </div>
        </div>
      )
    },
    'onertekelesi-hiany': {
      title: 'Önértékelési Hiány Kódja',
      description:
        'Az önértékelési hiány kódja akkor alakul ki, amikor egy személy úgy érzi, hogy nem érdemes szeretetre, tiszteletre, vagy hogy másokhoz képest alacsonyabb értékkel bír, ami miatt folyamatosan kétségbe vonja saját értékét és helyét a világban.',
      additionalInfo: (
        <div className="space-y-6 mt-6">
          <p className="text-sm text-gray-500 italic">
            Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
          </p>
          <Section title="Pszichológiai párhuzam" items={[
            'Ez a minta hasonlít a következő pszichológiai jelenségekhez:',
            '• Alacsony önértékelés (low self-esteem)',
            '• Negatív alaphiedelmek (CBT)',
            '• Szégyen alapú identitás',
            '• Imposter szindróma'
          ]} />

          <Section title="Jellemzők" items={[
            'Alacsony önbecsülés: az érzés, hogy nem elég jó, és nem képes megfelelni sem a saját, sem mások elvárásainak.',
            'Folyamatos önkritika: úgy érzi, hogy bármit is tesz, az nem elegendő, és mindig a legjobbnak kell lennie az elfogadáshoz.',
            'Szégyen és bűntudat érzése: az érzés, hogy nem lehet szeretni őt, mert nem elég jó.',
            'Teljesítménykényszer: folyamatos igyekezet, hogy bebizonyítsa értékét mások előtt.',
            'Félelem a kritikától és elutasítástól: attól tart, hogy mások leleplezik értéktelenségét.'
          ]} />

          <Section title="A kód kialakulása" items={[
            'Gyermekkorban kapott negatív visszajelzések, például hogy nem elég jó vagy nem képes megfelelni elvárásoknak.',
            'Másokkal való folyamatos összehasonlítás, ami az önbizalom csökkenéséhez vezet.',
            'Érzelmi elhanyagolás: a szeretet, figyelem, tisztelet hiánya.',
            'Bántalmazás vagy családi trauma: testi, érzelmi vagy szexuális visszaélés hatásai.'
          ]} />

          <Section title="Jellemző viselkedési minták" items={[
            'Szociális visszahúzódás, mert úgy érzi, hogy nem érdemel kapcsolatokat.',
            'Perfekcionizmus és önkritika, soha nem érzi elég jónak magát.',
            'Kapcsolati nehézségek, bizalmatlanság a másik iránt.',
            'Függőség mások véleményétől és a külső megerősítés keresése.'
          ]} strong />

          <Section title="A kód hatása a kapcsolatokra" items={[
            'Félelem az intimitástól és a mélyebb kötődéstől.',
            'Kompenzációs viselkedések: túlzott kedvesség, hogy elnyerje mások elfogadását.',
            'Túlzott megfelelési kényszer, ami önfeladásba és boldogtalanságba torkollhat.'
          ]} />

          <Section title="A kód kezelése" items={[
            'Önértékelés fejlesztése: saját erősségek és értékek tudatosítása.',
            'Negatív hiedelmek átírása: a szerethetőség és értékesség újraértelmezése.',
            'Kapcsolati készségek fejlesztése: nyitottság és bizalom gyakorlása.',
            'Kompenzációs minták felismerése és egészségesebb viselkedési alternatívák kialakítása.'
          ]} />

          <p className="text-gray-700 text-base leading-relaxed">
            Az önértékelési hiány gyakran gyermekkori élményekből ered, és ha nem kap figyelmet, felnőttkorban is meghatározhatja az ember önképét és kapcsolatait. A cél a belső értékesség felismerése és megerősítése – külső visszajelzések helyett önazonosságon alapulva.
          </p>

          <div className="text-green-700 text-base leading">
            <strong>Kapcsolódó ösztön:</strong> <em>Társas értékesség ösztöne</em> – az emberi vágy arra, hogy értékesnek, elfogadottnak és megbecsültnek érezze magát mások körében.  
            Ha ez az ösztön tartósan sérül – például gyermekkorban hiányzik a megerősítés, tisztelet vagy szeretet –, kialakulhat az a mély belső hiedelem, hogy az ember nem elég jó, nem méltó a figyelemre, tiszteletre vagy szeretetre.
          </div>
        </div>
      )
  },
  'kirekesztettseg': {
  title: 'Kirekesztettség Érzésének Kódja',
  description:
    'A Kirekesztettség Érzésének Kódja egy olyan érzelmi minta, amely abból az érzésből fakad, hogy az ember kívülálló, nem illeszkedik be, és nem tartozik sehova. Jellemző rá a közösségi kapcsolatok hiánya, az elszigetelődés és az érzelmi távolságtartás.',
  additionalInfo: (
    <div className="space-y-6 mt-6">
    <p className="text-sm text-gray-500 italic">
       Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
    </p>

      <Section title="Pszichológiai párhuzam" items={[
          'Ez a minta hasonlít a következő pszichológiai jelenségekhez:',
          '• Társas szorongás (social anxiety)',
          '• Elutasítástól való félelem',
          '• Alacsony társas önértékelés',
          '• Magány és izoláció pszichológiája'
        ]} />


      <Section title="Jellemzők" items={[
        'Tartós magányérzet, még emberek között is.',
        'Kívülállóság érzése: „nem vagyok olyan, mint mások”.',
        'Szorongás társas helyzetekben, félelem az elutasítástól.',
        'Tudatos visszahúzódás és elkerülés.',
        'Önkéntes izoláció, még akkor is, ha lenne lehetőség kapcsolódásra.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkori elhanyagolás, szeretethiány.',
        'Iskolai bántalmazás, kiközösítés.',
        'Szülői érzelmi elérhetetlenség.',
        'Hiányzó vagy bizonytalan társas kötődések.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Kerüli a társas interakciókat, különösen új helyzetekben.',
        'Magányos tevékenységeket részesít előnyben.',
        'Érzelmileg zárkózott, nehezen nyílik meg.',
        'Félelem a kapcsolódástól, intimitástól.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Nehézségek a baráti és párkapcsolatok kialakításában.',
        'Tartós elszigeteltség és érzelmi távolságtartás.',
        'Kapcsolatok hiánya vagy felszínessége.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Szociális készségek tudatos fejlesztése.',
        'Terápiás munka a kapcsolati minták újraírására.',
        'Önértékelés és önbizalom erősítése.',
        'Nyitottság és bizalom fokozatos kiépítése.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Kirekesztettség Érzésének Kódja mélyen gyökerező hiedelmekhez és fájdalmas tapasztalatokhoz kapcsolódik. A feloldása lehetséges tudatos kapcsolódással, bizalmi építkezéssel és érzelmi önfeltárással. A cél, hogy újra képesek legyünk közösséghez tartozni, elfogadva önmagunkat és másokat is.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Összetartozás ösztöne</em> – az emberi alapvető késztetése arra, hogy közösséghez tartozzon, kapcsolódjunk másokhoz és elfogadottnak érezze magát.  
        Ha ez az ösztön sérül – például gyermekkori elhanyagolás, kiközösítés vagy érzelmi elérhetetlenség miatt –, kialakulhat a kirekesztettség érzése, a tartós magány és a kívülállóság belső hiedelme.
      </div>
    </div>
  )
 },
 'bizalmi-vedekezes': {
  title: 'Bizalmi Védekezés Kódja',
  description:
    'A Bizalmi Védekezés Kódja egy olyan érzelmi minta, amely abból a meggyőződésből fakad, hogy mások kihasználják, manipulálják vagy ártani akarnak. Ennek hatására az egyén nehezen enged közel bárkit, gyanakvó, és gyakran védekező, kontrolláló viselkedést tanúsít.',
  additionalInfo: (
    <div className="space-y-6 mt-6">
       
       <p className="text-sm text-gray-500 italic">
      Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>
      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Bizalmatlanság / abúzus séma (schema therapy)',
        '• Hipervigilancia (fokozott éberség)',
        '• Traumára adott védekező reakciók',
        '• Paranoid gondolkodási minták enyhébb formái'
      ]} />

      <Section title="Jellemzők" items={[
        'Állandó gyanakvás mások szándékaival kapcsolatban.',
        'Félelem attól, hogy mások kihasználják, elárulják vagy becsapják.',
        'Nehezen alakul ki bizalom, még közeli kapcsolatokban is.',
        'Védekező, távolságtartó viselkedés.',
        'Gyakori a kontrollálás és a mások feletti uralom igénye.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkori érzelmi vagy fizikai bántalmazás.',
        'Elárulás vagy megalázás közeli kapcsolatokban.',
        'Szülők, akik kiszámíthatatlanok, büntetőek vagy manipulálóak voltak.',
        'Ismételt negatív tapasztalatok az emberekkel szemben.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Kapcsolatokban erős kontrolligény, félelemből fakadó uralkodás.',
        'Elővigyázatos, visszafogott bizalomépítés.',
        'Gyakori visszahúzódás vagy konfliktuskerülés.',
        'Túlzott önállóság, segítségkérés elutasítása.',
        'Érzelmek visszatartása, sebezhetőség kerülése.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Nehezen alakul ki mély érzelmi közelség.',
        'Párkapcsolati bizalmatlanság és féltékenység.',
        'Ismétlődő konfliktusok a bizalom hiánya miatt.',
        'Érzelmi távolságtartás, magányosságérzet.'
      ]} />

      <Section title="A kód kezelése" items={[
        'A múltbeli sérülések tudatos feldolgozása.',
        'Bizalomépítő kapcsolatok keresése és megtartása.',
        'Kommunikációs és önismereti készségek fejlesztése.',
        'Terápiás támogatás az önvédelem oldásához.',
        'Az érzelmi sebezhetőség elfogadása és gyakorlása.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Bizalmi Védekezés Kódja gyakran hosszú távon befolyásolja az ember közeli kapcsolatait, elszigeteltséghez és fájdalomhoz vezethet. A kód oldása során kulcsfontosságú a múlt újraértelmezése, a bizalom fokozatos kiépítése és az érzelmi nyitottság megtanulása.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önfenntartási ösztön</em> – az ember alapvető túlélési mechanizmusa, amely a veszély elkerülésére és a biztonság megőrzésére irányul.  
        Ha ez az ösztön túlzottan aktiválódik – például gyermekkori bántalmazás vagy bizalmatlanság miatt –, kialakulhat a gyanakvás, védekező magatartás és bizalomhiány, amelyek megnehezítik a mély, érzelmi kapcsolatok kialakítását.
      </div>
    </div>
  ) 
 }, 
 'onallotlansag': {
  title: 'Önállótlanság Kódja',
  description:
    'Az Önállótlanság Kódja egy olyan érzelmi séma, amely azt az érzést és meggyőződést hordozza, hogy az ember képtelen egyedül megbirkózni a mindennapi élet kihívásaival, és másokra kell támaszkodnia. A személy alulértékeli saját kompetenciáját, és állandó segítségre, irányításra vagy megerősítésre van szüksége.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
         Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Alacsony önhatékonyság (low self-efficacy)',
        '• Tanult tehetetlenség (learned helplessness)',
        '• Függő viselkedési minták (dependent tendencies)',
        '• Autonómia sérülése (autonomy impairment)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Gyenge önbizalom a döntéshozatalban.',
        'Félelem attól, hogy hibázik, ha egyedül cselekszik.',
        'Gyakori tanácskérés és külső megerősítés keresése.',
        'Kerüli a felelősségteljes helyzeteket.',
        'Úgy érzi, nem képes megállni a helyét egyedül.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Túlzottan irányító vagy túlvédő szülők.',
        'Gyermekkori kritika és alulértékelés a kompetenciákat illetően.',
        'Nem volt lehetőség önálló döntéseket hozni.',
        'Elkerülő vagy függő kapcsolati minták a családban.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Állandó segítségkérés a legegyszerűbb feladatokban is.',
        'Döntések elodázása vagy átruházása másokra.',
        'Kerüli az önállóságot igénylő élethelyzeteket.',
        'Függőségi kapcsolatok fenntartása.',
        'Elbizonytalanodás és szorongás, ha egyedül kell megoldani valamit.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Függő szerepek párkapcsolatban vagy barátságokban.',
        'Mások túlzott terhelése a felelősségvállalással.',
        'Alárendelődés és önérvényesítés hiánya.',
        'Egyensúlytalanság a kölcsönös támogatásban.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Önbizalom és döntési kompetencia fejlesztése.',
        'Kisebb önálló lépések gyakorlása és sikerélmények gyűjtése.',
        'A túlzott függőség felismerése és csökkentése.',
        'Terápiás támogatás az önállóság felépítéséhez.',
        'A felelősségvállalás újraértelmezése biztonságos kereteken belül.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Önállótlanság Kódja gyakran visszavezethető a túlzott védelemre és a gyermekkorban elszenvedett alábecsülésre. A kód oldása segít az egyénnek megtanulni bízni önmagában, önálló döntéseket hozni, és fokozatosan visszaszerezni az irányítást az élete felett.
      </p>
      <div className="text-green-700 text-base leading">
         <strong>Kapcsolódó ösztön:</strong> <em>Autonómia és kompetencia ösztöne</em> – az ember alapvető késztetése arra, hogy képesnek érezze magát a világban való eligazodásra, önálló döntéseket hozzon, és hatékonyan kezelje a kihívásokat.  
          Ha ez az ösztön sérül – például túlzott kontroll, kritika vagy az önállóság hiánya miatt –, kialakulhat az a belső meggyőződés, hogy az ember nem képes egyedül boldogulni, és másokra kell támaszkodnia.
      </div>
    </div>
  )
 },

 'fenyegetettseg': {
  title: 'Fenyegetettség Kódja',
  description:
    'A Fenyegetettség Kódja egy mélyen gyökerező érzelmi minta, amelyet állandó, irracionális félelem jellemez attól, hogy valamilyen váratlan katasztrófa, veszély vagy tragédia fog bekövetkezni. Az érintett személy gyakran túlbecsüli a veszélyeket, és nehezen éli meg a biztonság érzését.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
      Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a minta hasonlít a következő pszichológiai jelenségekhez:',
        '• Krónikus szorongás (generalized anxiety)',
        '• Amygdala túlaktiváció (veszélyészlelés)',
        '• Katasztrofizáló gondolkodás (CBT)',
        '• Hipervigilancia'
      ]} />

      <Section title="Jellemzők" items={[
        'Folyamatos szorongás, még akkor is, ha nincsenek valós fenyegetések.',
        'Rettegés természeti katasztrófáktól, betegségektől, balesetektől vagy társadalmi összeomlástól.',
        'Túlzott éberség és biztonságkereső viselkedés.',
        'Rendszeres katasztrófaforgatókönyvek elképzelése.',
        'Nehezen tud ellazulni vagy bízni a jelen pillanatban.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Bizonytalan vagy kiszámíthatatlan gyermekkori környezet.',
        'Súlyos trauma, baleset vagy veszteség gyermekkorban.',
        'Túlzottan aggódó, félelemközpontú szülői nevelés.',
        'Médián keresztül érkező, gyakori negatív hatások (hírek, történetek).'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Kerüli a számára kockázatosnak tűnő helyzeteket (utazás, új helyek, orvosi vizsgálatok).',
        'Folyamatos információgyűjtés a veszélyekről.',
        'Rendszeres testellenőrzés, egészséggel kapcsolatos fókusz (hipochondria).',
        'Nehezen engedi el a kontrollt – gyakori kontrollkésztetés saját maga és mások felett.',
        'Túlzott óvatosság a mindennapi döntésekben is.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Túlzott aggodalom a szerettei biztonsága miatt.',
        'Visszahúzódás a külvilágtól – másokat is korlátozhat.',
        'Párkapcsolatokban feszültséget okozhat a folyamatos aggodalom.',
        'Nehézséget okozhat a spontán élményekben és a közös kikapcsolódásban.'
      ]} />

      <Section title="A kód kezelése" items={[
        'A veszélyérzékelés valósághoz igazítása – racionális gondolkodás fejlesztése.',
        'Relaxációs és szorongáscsökkentő technikák alkalmazása.',
        'A biztonságérzet belső forrásainak megerősítése.',
        'Fokozatos expozíció a szorongást kiváltó helyzetekkel szemben.',
        'Terápiás munka a gyermekkori élmények feldolgozására.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Fenyegetettség Kódja gyakran egy belső bizonytalanságból fakad, amelyet múltbeli események vagy állandó külső hatások alakítottak ki. A kód feloldásához szükséges új, biztonságot adó tapasztalatok szerzése, valamint annak megtanulása, hogy a világ nem minden pillanatban veszélyes hely. Ezáltal visszanyerhető a nyugalom és az önbizalom.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önfenntartási ösztön</em> – az ember alapvető késztetése arra, hogy észlelje a veszélyt, megvédje magát, és biztonságban maradjon.  
        Ha ez az ösztön túlzottan aktiválódik – például bizonytalan környezet, trauma vagy folyamatos negatív hatások miatt –, az egyén a valósnál nagyobb veszélyt érzékelhet, és állandó készenléti állapotba kerülhet, ami tartós szorongáshoz vezet.
      </div>
    </div>
  )
},
'enhatarok-feloldodasa': {
  title: 'Énhatárok Feloldódásának Kódja',
  description:
    'Az Énhatárok Feloldódása Kódja egy olyan érzelmi és kapcsolati minta, amelyben az egyén túlzottan érzelmileg összefonódik másokkal – gyakran szülőkkel vagy közeli hozzátartozókkal –, így nehezen tudja meghatározni saját identitását, vágyait és szükségleteit. A személyes határok elmosódnak, és gyakran mások érzéseit, elvárásait sajátjaként éli meg.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Összefonódás (enmeshment)',
        '• Gyenge énhatárok (poor boundaries)',
        '• Kodependens minták (codependency)',
        '• Identitás diffúzió (identity diffusion)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />
      <Section title="Jellemzők" items={[
        'Túlzott érzelmi függés másoktól.',
        'Nehézségek a saját vélemény, akarat vagy érzések megfogalmazásában.',
        'Mások szükségleteinek, érzéseinek átvétele és sajátként való megélése.',
        'Félelem az elválástól vagy az önállóságtól.',
        'Saját identitásérzés hiánya vagy bizonytalansága.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Szülőkkel való túlkötődés, amikor a gyermek érzelmileg a szülő szükségleteinek kielégítőjévé válik.',
        'Érzelmileg beolvasztó családi dinamika – a gyermek nem kap teret az önállóságra.',
        'A szülő a saját identitását a gyermekén keresztül éli meg.',
        'Szorongó vagy túlzottan kontrolláló szülői háttér.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Nehezen tud meghozni önálló döntéseket.',
        'Mások érzéseinek túlzott figyelembevétele saját szükségletei rovására.',
        'Folyamatos kapcsolati közelségre való igény – félelem az egyedülléttől.',
        'Önálló idő vagy tér igénylése bűntudatot válthat ki.',
        'Nehezen húz egészséges határokat kapcsolatokban.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Túlzott összefonódás és kontroll a közeli kapcsolatokban.',
        'Feszültségek abból fakadóan, hogy nem világos, hol ér véget „én” és hol kezdődik „a másik”.',
        'Gyenge határhúzás: az egyén könnyen kihasználhatóvá válhat.',
        'Párkapcsolatban gyakori a túlkötődés vagy birtoklási vágy.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Az énhatárok tudatos felismerése és kijelölése.',
        'Terápiás munka a saját identitás megerősítésére.',
        'Az önállóság és különállóság biztonságos megélésének gyakorlása.',
        'Egészséges határhúzási technikák elsajátítása.',
        'Kapcsolatok újradefiniálása – a közelség és szabadság egyensúlyának megtalálása.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Énhatárok Feloldódása Kódja gyakran rejtett formában jelenik meg, mégis mély hatással van az egyén autonómiájára és kapcsolataira. A gyógyulás kulcsa az, hogy az egyén megtanulja felismerni saját érzéseit, igényeit, és biztonsággal képviselje önmagát másokkal szemben – anélkül, hogy elveszítené a kapcsolódás lehetőségét.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Kötődés és autonómia egyensúlyának ösztöne</em> – az ember alapvető késztetése arra, hogy egyszerre tudjon kapcsolódni másokhoz, miközben megőrzi saját identitását, határait és önállóságát.  
         Ha ez az egyensúly sérül – például túlzott érzelmi összefonódás vagy kontrolláló kapcsolatok miatt –, az egyén elveszítheti saját határait, és nehezen tudja elkülöníteni saját érzéseit és szükségleteit másokétól.
      </div>
    </div>
  )
},
'kudarctol-valo-felelem': {
  title: 'Sikertelenség Kódja',
  description:
    'A Sikertelenség Kódja egy mélyen rögzült hiedelemrendszer, amely azzal az érzéssel jár, hogy az egyén képtelen megfelelni az elvárásoknak, és előbb-utóbb kudarcot fog vallani. Az érintett személy gyakran alábecsüli képességeit, és elkerüli azokat a helyzeteket, ahol megmérettetésre kerülne sor – attól való félelmében, hogy hibázik vagy szégyent vall.',

  additionalInfo: (
    <div className="space-y-6 mt-6">
       
      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
          'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
          '• Kudarckerülés (failure avoidance)',
          '• Alacsony önhatékonyság (low self-efficacy)',
          '• Tanult tehetetlenség (learned helplessness)',
          '• Impostor-szindróma elemei',
          '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Folyamatos kételkedés a saját képességekben és teljesítményben.',
        'Bénító szorongás a megmérettetéstől, vizsgáktól, felelősségteljes feladatoktól.',
        'Az önkép alacsony – „én erre nem vagyok képes”, „más biztos jobb nálam”.',
        'Önkorlátozó viselkedés: el sem kezdi a feladatot, nehogy kudarcot valljon.',
        'Túlzott önkritika, ha nem sikerül valami tökéletesen.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkori tapasztalatok, ahol túlzott elvárásoknak kellett megfelelni.',
        'Szégyenérzés, ha hibázott vagy nem volt elég jó.',
        'Gyakori összehasonlítás más gyerekekkel, testvérekkel.',
        'Negatív visszajelzések: „te erre nem vagy képes”, „úgysem sikerül”.',
        'A sikertelenséghez kötődő megaláztatások, megszégyenítések.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Halogatás, hogy elkerülje a kudarc lehetőségét.',
        'Biztonsági játék: csak azt csinálja meg, amit biztosan tud.',
        'Munkakerülés vagy túlzott perfekcionizmus.',
        'Saját sikerek lekicsinylése, sikertelenség felnagyítása.',
        'Mások sikereit fenyegetésként éli meg.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Alá-fölérendeltségi dinamika: gyakori az önalávetés.',
        'Nehezen kér visszajelzést vagy segítséget, mert fél az ítélkezéstől.',
        'Párkapcsolatban háttérbe húzódik, nem éli meg kompetens felnőttként magát.',
        'Másokhoz való túlzott igazodás, hogy „jó legyen”.'
      ]} />

      <Section title="A kód kezelése" items={[
        'A sikertelenség újraértelmezése – nem vereség, hanem tanulási lehetőség.',
        'Az önbizalom és az önhatékonyság tudatos építése.',
        'Kisebb sikerek megélése és megerősítése.',
        'Belső elvárások csökkentése, reális célkitűzések gyakorlása.',
        'Terápiás munka a gyermekkori kudarcélmények feldolgozására.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Sikertelenség Kódja gyakran láthatatlan falat húz az ember és a lehetőségei közé. A kód feloldása azt jelenti, hogy az egyén felismeri: a hibázás nem a gyengeség jele, hanem az élet része. Ha képes tanulni belőle, megerősödve és bátrabban léphet tovább a saját útján.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Kompetencia és önértékelés ösztöne</em> – az ember alapvető késztetése arra, hogy képesnek, hatékonynak és értékesnek érezze magát a világban.  
        Ha ez az ösztön sérül – például túlzott kritika, megszégyenítés vagy irreális elvárások miatt –, kialakulhat az a belső meggyőződés, hogy az egyén nem elég jó vagy nem képes megfelelni, ami elkerüléshez, szorongáshoz és önkorlátozáshoz vezet.
      </div>
    </div>
  )
},
'kivaltsagossag': {
  title: 'Kiváltságosság Kódja',
  description:
    'A Kiváltságosság Kódja olyan érzelmi és gondolkodási minta, amelyben az egyén úgy érzi, hogy különleges bánásmódra, kiváltságokra vagy szabályok alóli mentességre jogosult. Ez gyakran a mások szükségleteinek figyelmen kívül hagyásával, önközpontúsággal és türelmetlenséggel jár.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Feljogosítottság / grandiozitás (entitlement)',
        '• Nárcisztikus jegyek enyhébb formái',
        '• Alacsony frusztrációtűrés',
        '• Impulzuskontroll nehézségek',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Az az érzés, hogy rá nem vonatkoznak a szabályok.',
        'Mások igényeinek és határainak figyelmen kívül hagyása.',
        'Különleges bánásmód vagy kiváltság elvárása.',
        'Nehezen viseli a korlátozásokat, frusztrációkat.',
        'Azonnali kielégülés keresése – „most kell, amit akarok”.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Túlzott engedékenység gyermekkorban, határok hiánya.',
        'A gyermek igényei mindig prioritást élveztek, mások rovására is.',
        'Ideálisnak vagy „különlegesnek” címkézett nevelés.',
        'Szükségletek feltétel nélküli és túlzott kielégítése.',
        'Érzelmi kontroll hiánya a családi rendszerben.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Saját szükségletek követése mások rovására.',
        'Türelmetlenség, ha nem kapja meg azonnal, amit akar.',
        'Feszültség vagy dühkitörés, ha korlátozzák.',
        'Kritika elutasítása vagy lekicsinylése.',
        'Mások manipulálása a saját céljai érdekében.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Egyoldalú kapcsolatok – csak az ő igényei érvényesülnek.',
        'Konfliktusok és feszültség a határok átlépése miatt.',
        'Empátiahiány, nehézség az együttérzés kimutatásában.',
        'Másokat gyakran kihasználhat vagy elhanyagolhat.',
        'Párkapcsolatokban az egyensúlyhiány gyakori probléma.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Mások szükségleteinek tudatosabb figyelembevétele.',
        'A kölcsönösség, határok és együttműködés gyakorlása.',
        'Türelem és frusztrációtűrés fejlesztése.',
        'Empátia gyakorlása – belehelyezkedés mások nézőpontjába.',
        'Terápiás munka az önközpontúság gyökereinek feltárására.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Kiváltságosság Kódja mögött gyakran mélyebb érzelmi hiányok húzódnak meg, amelyeket a kiváltságokkal próbál az egyén kompenzálni. A kód oldásával lehetőség nyílik az empatikus, kiegyensúlyozott kapcsolatok kialakítására, ahol a kölcsönösség és tisztelet válik alapértékké.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Szükségletérvényesítés és határkezelés ösztöne</em> – az ember alapvető késztetése arra, hogy saját szükségleteit érvényesítse, miközben figyelembe veszi mások határait és igényeit is.  
          Ha ez az ösztön torzul – például határok hiánya vagy túlzott engedékenység miatt –, az egyén túlhangsúlyozhatja saját igényeit, és nehézséget okozhat számára a kölcsönös, egyensúlyon alapuló kapcsolatok kialakítása.
      </div>
    </div>
  )
},
'impulzuskontroll': {
  title: 'Impulzuskontroll Kódja',
  description:
    'Az Impulzuskontroll Kódja olyan érzelmi és viselkedési minta, amelyben az egyén nehezen vagy egyáltalán nem képes szabályozni impulzusait, vágyait és érzelmeit. Gyakori az azonnali kielégülés keresése, a halogatás, valamint a frusztráció és kényelmetlenség elviselésének alacsony szintje.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Impulzuskontroll zavarok',
        '• Gyenge érzelemszabályozás (emotion regulation difficulty)',
        '• Alacsony frusztrációtűrés',
        '• Késleltetett jutalmazás nehézsége (delay of gratification)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Impulzív viselkedés: gyakran cselekszik hirtelen, átgondolatlanul.',
        'Az azonnali kielégülés keresése hosszú távú célok rovására.',
        'Alacsony frusztrációtűrés – nehezen viseli a késlekedést, kényelmetlenséget.',
        'Nehezen tart be szabályokat, struktúrákat.',
        'Hangulatingadozás, érzelmi túlreakciók.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Korlátok és következetesség hiánya a gyermekkori nevelésben.',
        'Túlengedékeny környezet – kevés következménnyel járó viselkedések.',
        'Szülők impulzív vagy érzelemvezérelt mintái.',
        'Negatív élmények szabályozási próbálkozások során – megszégyenítés, kudarcélmények.',
        'Krónikus stressz vagy érzelmi túlterhelés már gyermekkortól kezdve.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Halogatás, felelősségek elkerülése.',
        'Túlköltés, túlevés, túlzásba vitt szórakozások.',
        'Képtelenség a hosszú távú célok érdekében áldozatot hozni.',
        'Dühkitörések, érzelmi labilitás.',
        'Képtelenség a viselkedés következményeinek előrelátására.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Megbízhatatlanság, következetlenség a kapcsolatokban.',
        'Mások frusztráltnak érezhetik magukat a viselkedése miatt.',
        'Konfliktusok a felelősségvállalás elkerülése miatt.',
        'Érzelmi hullámzás nehezíti az intimitást.',
        'Párkapcsolatokban gyakori a kontroll vagy korlátozás elleni lázadás.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Impulzuskontroll gyakorlása fokozatosan, kis lépésekben.',
        'Érzelemszabályozási technikák elsajátítása (pl. légzés, mindfulness).',
        'Reális célok kitűzése és következetes munkavégzés.',
        'Pozitív megerősítés és önjutalmazás a fejlődés során.',
        'Terápiás munka a kontrollal és önfegyelemmel kapcsolatos hiedelmek átformálására.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Impulzuskontroll Kódja mögött gyakran mélyebb érzelmi hiányosságok, rendezetlen szabályozási minták vagy gyermekkori következetlenségek húzódnak meg. A változás kulcsa a tudatos gyakorlásban, önfegyelem fejlesztésében és az érzelmekhez való viszony újraírásában rejlik – így válhatunk képessé arra, hogy hosszú távon is kiegyensúlyozott, értékvezérelt életet éljünk.
      </p>
    </div>
  )
},
'alavetettseg': {
  title: 'Alávetettség Kódja',
  description:
    'Az Alávetettség Kódja egy olyan érzelmi minta, amelyben az egyén rendszeresen alárendeli saját szükségleteit, érzéseit és véleményét másoknak, hogy elkerülje az elutasítást, konfliktust vagy bűntudatot. Ez a minta gyakran vezet önfeladásba és hosszú távon belső frusztrációhoz.',

  additionalInfo: (
    <div className="space-y-6 mt-6">
      <Section title="Jellemzők" items={[
        'Gyakori "igenmondás" mások kedvéért, saját határok figyelmen kívül hagyása.',
        'Saját vélemény, vágyak elnyomása a béke fenntartása érdekében.',
        'Félelem attól, hogy másokat megbánt vagy cserbenhagy.',
        'Bűntudat, ha önérvényesítést próbál megvalósítani.',
        'Mások igényeinek túlzott előtérbe helyezése.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkori környezet, ahol a szülők kontrollálóak vagy büntetőek voltak.',
        'Szeretet feltételessége: csak akkor kap figyelmet, ha "jó gyerek".',
        'Erős szülői elvárások, megfelelési kényszer.',
        'Kritikus környezet, ahol az önkifejezést negatív visszajelzések érték.',
        'Korai tapasztalatok a konfliktus kerülésének "jutalmazásáról".'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Kerüli a konfrontációt, akkor is, ha ezzel önmagát háttérbe szorítja.',
        'Mások döntéseit követi, akkor is, ha nem ért egyet.',
        'Nehézséget okoz nemet mondani vagy határokat húzni.',
        'Később passzív-agresszív viselkedéssel vagy belső haraggal reagál.',
        'Önbizalomhiány és túlzott másokhoz való igazodás.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Folyamatos önfeladás a kapcsolatokban.',
        'Frusztráció és harag gyűlik fel az elnyomott érzések miatt.',
        'Egyenlőtlen kapcsolati dinamika: a másik domináns szerepet tölt be.',
        'Nehezen alakul ki valódi intimitás, mert az egyén nem mutatja meg magát.',
        'Függőség alakulhat ki mások megerősítése iránt.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Asszertív kommunikáció gyakorlása: „mit érzek, mit szeretnék, mire van szükségem”.',
        'Bűntudat kezelése önérvényesítés esetén.',
        'Határhúzási készségek fejlesztése.',
        'Saját igények és érzések azonosítása és kimondása.',
        'Terápiás munka az önértékelés és önazonosság megerősítésére.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Alávetettség Kódja gyakran mély gyermekkori tapasztalatokon alapul, amelyek során az egyén azt tanulta meg, hogy csak akkor elfogadható, ha alárendeli magát másoknak. A változás lehetősége abban rejlik, hogy fokozatosan újra kapcsolódunk saját belső szükségleteinkhez, megtanuljuk kifejezni önmagunkat, és kiállni azért, akik vagyunk – szerethető és értékes emberként.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önszabályozás és késleltetés ösztöne</em> – az ember alapvető késztetése arra, hogy képes legyen irányítani impulzusait, érzelmeit és viselkedését, valamint rövid távú késztetéseit hosszabb távú célok érdekében szabályozni.  
        Ha ez az ösztön sérül – például következetlen nevelés, túlzott engedékenység vagy érzelmi túlterhelés miatt –, az egyén nehezen viseli a késleltetést és a frusztrációt, és hajlamos lehet impulzív, azonnali kielégülést kereső viselkedésre.
      </div>
    </div>
  )
},
'tulzott-gondoskodas': {
  title: 'Túlzott Gondoskodás Kódja',
  description:
    'A Túlzott Gondoskodás Kódja egy olyan érzelmi minta, amelyben az egyén folyamatosan mások szükségleteit és jólétét helyezi előtérbe a sajátjaival szemben. Ez gyakran belső kényszeren alapul, és hosszú távon kimerültséghez, érzelmi kiüresedéshez és önmagunk elvesztéséhez vezethet.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>


      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Kodependencia (codependency)',
        '• Önfeláldozás séma (self-sacrifice schema)',
        '• People-pleasing viselkedés',
        '• Gyenge határhúzás (poor boundaries)',
        '• Parentifikáció (korai gondoskodó szerep)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Saját szükségletek és vágyak háttérbe szorítása mások érdekében.',
        'Folyamatos segítségnyújtás, még saját kárunkra is.',
        'Bűntudat vagy szorongás, ha önmagunkkal törődünk.',
        'Erős felelősségérzet mások jólétéért.',
        'Elismerés vagy szeretet keresése az önfeláldozás által.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Olyan családi környezet, ahol a gyermek érzelmi támogatói szerepet vállalt.',
        'Érzelmileg vagy fizikailag rászoruló szülők.',
        'A szeretet feltétele az önzetlenség és az alkalmazkodás volt.',
        'Korán megtanult gondoskodó szerep, felnőttként viselkedő gyermek.',
        'Dicséret vagy elismerés csak akkor járt, ha másoknak segített.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Mások problémáit sajátjának érzi, túlzott felelősségvállalás.',
        'Elhanyagolja saját testi-lelki szükségleteit.',
        'Nehézséget okoz kérni vagy elfogadni segítséget.',
        'Gyakran túlterhelt, de nem panaszkodik.',
        'Később frusztrált vagy kiégett állapot alakulhat ki.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Egyoldalú kapcsolatok: adni tud, de kapni nem.',
        'Mások hozzászoknak a folyamatos segítséghez, kihasználhatják.',
        'Nehezen kér figyelmet vagy támogatást a saját részéről.',
        'Látszólag erős, de belül magányos és kimerült lehet.',
        'A kapcsolatokat alárendeltség és önfeladás jellemezheti.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Önmagunk szükségleteinek tudatosítása és tiszteletben tartása.',
        'Az egyensúly megtalálása az adás és a kapás között.',
        'Egészséges határok kialakítása és fenntartása.',
        'Önértékelés és önszeretet erősítése nem az áldozatvállalás által.',
        'Terápiás munka a gondoskodó szerep újradefiniálására.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Túlzott Gondoskodás Kódja mögött gyakran az a mély meggyőződés húzódik meg, hogy csak akkor vagyunk szerethetők, ha másokért élünk. A kód feloldása nem önzőséget jelent, hanem az egészséges önszeretet és kapcsolati egyensúly megteremtését – ahol az önmagunkkal való törődés is helyet kap a mindennapokban.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Kapcsolódás és önérték egyensúlyának ösztöne</em> – az ember alapvető késztetése arra, hogy kapcsolódjon másokhoz, miközben saját szükségleteit, határait és értékességét is megőrzi.  
        Ha ez az egyensúly sérül – például feltételes szeretet vagy túlzott gondoskodó szerep miatt –, az egyén mások igényeit helyezheti saját maga elé, és önfeladás árán próbálhat kapcsolódni, ami hosszú távon kimerüléshez és belső hiányhoz vezet.
      </div>
    </div>
  )
},
'figyelemigeny': {
  title: 'A Figyelemigény Kódja',
  description:
    'A Figyelemigény Kódja egy olyan érzelmi séma, amelyben az egyén önértékelése nagymértékben mások visszajelzéseire és elismerésére épül. Az érintett személy úgy érzi, csak akkor értékes vagy szerethető, ha folyamatosan teljesít, megfelel, vagy kivívja mások jóváhagyását.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
       Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
          'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
          '• Külső validáció-függőség (external validation dependence)',
          '• Feltételes önértékelés (contingent self-worth)',
          '• People-pleasing viselkedés',
          '• Impostor-szindróma elemei',
          '• Közösségi média okozta önértékelési torzulások',
          '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
        ]} />
      <Section title="Jellemzők" items={[
        'Erős belső késztetés arra, hogy mások pozitív véleményét elnyerje.',
        'Önértékelés a külső elismerésektől függ.',
        'Folyamatos teljesítményorientáltság és maximalizmus.',
        'Félelem a kritikától vagy az elutasítástól.',
        'Nehezen pihen vagy engedi el a megfelelési kényszert.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkorban kizárólag teljesítményért kapott figyelem vagy szeretet.',
        'Szülői elvárások vagy állandó összehasonlítás testvérekkel/társakkal.',
        'Dicséretfüggőség kialakulása a szeretet pótlásaként.',
        'Elégtelen belső önértékelés megerősítése kívülről.',
        'Saját érzések és igények háttérbe szorítása a megfelelés érdekében.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Folyamatosan dolgozik, túlórázik, bizonyítani akar.',
        'Gyakori visszacsatolást keres a külvilágtól (pl. dicséret, lájkok).',
        'Kerüli a hibázást, mert azt önértékelési válságként éli meg.',
        'Mások elvárásait előbbre helyezi a saját vágyainál.',
        'Nehézsége van a „csak önmagáért” való létezéssel.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'A kapcsolatok teljesítmény- vagy szerepfüggők lehetnek.',
        'Nehezen mutatja meg valódi érzéseit vagy gyengeségeit.',
        'Szeretteitől is állandó megerősítést várhat el.',
        'Fáradtsághoz, kiégéshez vagy elidegenedéshez vezethet.',
        'Elégedetlenség, ha nem kapja meg a várt elismerést.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Belső önértékelés építése külső visszajelzések nélkül is.',
        'A teljesítmény és az emberi érték szétválasztása.',
        'Önelfogás gyakorlása a hibák és gyengeségek ellenére is.',
        'Tudatos lelassulás és a „lenni, nem tenni” megtapasztalása.',
        'Terápia az önazonosság és önszeretet megerősítéséhez.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Figyelemigény Kódja mögött gyakran az a félelem áll, hogy önmagunkban nem vagyunk elégségesek. A kód feloldása során megtanulhatjuk belső forrásból táplálni önértékelésünket, és ráébredni, hogy a valódi szeretet nem teljesítményhez kötött, hanem az önazonosságban gyökerezik.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önértékelés és társas visszajelzés ösztöne</em> – az ember alapvető késztetése arra, hogy értékesnek és elfogadottnak érezze magát mások szemében, és visszajelzést kapjon a környezetétől.  
        Ha ez az ösztön túlzottan a külső megerősítésekhez kötődik – például feltételes szeretet vagy teljesítményhez kötött elismerés miatt –, az egyén önértékelése instabillá válhat, és folyamatos visszacsatolásra szorulhat másoktól.
      </div>
    </div>
  )
},
'ellenseges': {
  title: 'Ellenséges Belátás Kódja',
  description:
    'Az Ellenséges Belátás Kódja egy olyan érzelmi séma, amelyben az egyén folyamatosan az élet negatív aspektusaira fókuszál, mint például a veszteség, fájdalom, csalódás vagy konfliktus. Ez a kód tartós pesszimizmushoz és reménytelenséghez vezethet.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
          'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
          '• Negativitási torzítás (negativity bias)',
          '• Depresszív gondolkodási minták (cognitive distortions)',
          '• Tanult tehetetlenség (learned helplessness)',
          '• Krónikus pesszimizmus',
          '• Katasztrofizáló gondolkodás',
          '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Állandó aggódás és pesszimizmus a jövővel kapcsolatban.',
        'Fókusz a problémákon és veszteségeken, a pozitívumok elhanyagolása.',
        'Gyakori negatív belső párbeszéd („Miért történik velem mindig ez?”).',
        'Reménytelenség érzése a változás lehetőségeivel kapcsolatban.',
        'Érzelmi fáradtság és kimerültség érzése.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkori negatív élmények, trauma vagy elutasítás.',
        'Folyamatos kritika vagy érzelmi elérhetetlenség a családban.',
        'Negatív minták, melyeket a környezetből, médiából vett át.',
        'Önmagával szembeni túlzott elvárások és önkritika.',
        'Súlyos stresszhelyzetek vagy veszteségek az életben.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Elkerüli az új kihívásokat, mert azokban csak negatívumokat vár.',
        'Nehezen talál örömet a mindennapokban.',
        'Könnyen befolyásolja a hangulatát a negatív események.',
        'Pesszimista hozzáállás a problémák megoldásához.',
        'Visszahúzódás és elszigetelődés másoktól.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Kapcsolatokban gyakran a negatív eseményekre koncentrál.',
        'Nehéz pozitív, támogató légkört teremteni körülötte.',
        'Másokat is lehúzhat a pesszimizmusával.',
        'Feszültség vagy konfliktusok gyakoriak lehetnek.',
        'Korlátozott társas kapcsolatok a pesszimizmus miatt.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Tudatos figyelem irányítása a pozitív eseményekre és sikerekre.',
        'Relaxációs és stresszkezelő technikák elsajátítása.',
        'Pozitív gondolkodásmód és megküzdési stratégiák fejlesztése.',
        'Terápiás munka a múltbeli traumák feldolgozására.',
        'Támogató közösségekhez való csatlakozás és nyitottság.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Ellenséges Belátás Kódja mélyen befolyásolja a mindennapi életminőséget és a kapcsolatok minőségét. A kód felismerése és kezelése révén újra felfedezhető a remény és a pozitív életszemlélet, amely javítja az érzelmi jóllétet és a társas kapcsolatok minőségét.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Biztonságérzékelés és jelentésalkotás ösztöne</em> – az ember alapvető késztetése arra, hogy értelmezze a világot, felismerje a veszélyeket, és jelentést adjon a tapasztalatainak.  
        Ha ez az ösztön torzul – például ismétlődő negatív élmények vagy tanult minták hatására –, az egyén hajlamos lehet a világot veszélyesnek, reménytelennek vagy ellenségesnek látni, ami tartós pesszimizmushoz és érzelmi kimerültséghez vezethet.
      </div>
    </div>
  )
},
'belso-onkorlatozas': {
  title: 'Belső Önkorlátozás Kódja',
  description:
    'A Belső Önkorlátozás Kódja egy olyan belső mintázat, amelyben az egyén túlzottan korlátozza saját érzelmeinek, impulzusainak és kommunikációjának kifejezését, hogy elkerülje a mások rosszallását, szégyenérzetet vagy kontrollvesztést.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Érzelmi gátoltság (emotional inhibition)',
        '• Érzelemelkerülés (emotional avoidance)',
        '• Szégyenalapú működés (shame-based patterns)',
        '• Alexithymia (érzelmek felismerésének nehézsége)',
        '• Túlzott önkontroll (overcontrol)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Érzelmek elfojtása vagy tagadása, még akkor is, ha intenzívek.',
        'Nehezére esik megnyílni mások előtt, különösen negatív érzések esetén.',
        'Kerüli az impulzív vagy spontán viselkedést.',
        'Félelem a szégyen vagy elutasítás érzésétől.',
        'Gyakran túlzottan kontrollálja magát a társas helyzetekben.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkori érzelmi elnyomás vagy szigorú nevelés.',
        'Kritikus vagy elutasító családi környezet.',
        'Szégyenérzet és félelem a negatív visszajelzésektől.',
        'Tanult viselkedés az érzelmek kontrollálására a konfliktusok elkerülése érdekében.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Kerüli a konfliktusokat és az érzelmi kitöréseket.',
        'Nehezen mutatja ki valódi érzéseit még közeli kapcsolatban is.',
        'Túlzottan alkalmazkodó vagy visszahúzódó viselkedés.',
        'Nehézségek az intimitás kialakításában.',
        'Gyakran érzi magát érzelmileg elszigeteltnek.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Érzelmi távolság a párkapcsolatokban és baráti kapcsolatokban.',
        'Kommunikációs nehézségek, félreértések.',
        'Csökkent intimitás és kötődés.',
        'A másik fél frusztrációját és elutasítását válthatja ki.',
        'Kapcsolatok felszínessé válása.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Érzelmi önismeret és kifejezés fejlesztése.',
        'Biztonságos környezetben történő nyitottság gyakorlása.',
        'Terápiás munka a szégyen és félelem leküzdésére.',
        'Kommunikációs készségek fejlesztése, érzelmi intelligencia erősítése.',
        'Fokozatos érzelmi megnyílás és bizalomépítés.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Belső Önkorlátozás Kódja mély belső korlátokat hoz létre az érzelmi önkifejezésben és kapcsolódásban. Ennek tudatosítása és kezelése lehetővé teszi az érzelmi szabadságot és az egészségesebb, mélyebb emberi kapcsolatokat.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önkifejezés és érzelmi biztonság ösztöne</em> – az ember alapvető késztetése arra, hogy érzéseit, gondolatait és belső élményeit szabadon és biztonságosan kifejezze.  
        Ha ez az ösztön sérül – például kritikus vagy elutasító környezet hatására –, az egyén megtanulhatja elfojtani vagy kontrollálni saját érzelmeit, hogy elkerülje a szégyent vagy az elutasítást, ami hosszú távon érzelmi távolsághoz és belső feszültséghez vezethet.
      </div>
    </div>
  )
},
'perfekcionizmus-kodja': {
  title: 'Perfekcionizmus Kódja',
  description:
    'A Perfekcionizmus Kódja egy belső kényszer, amely arra készteti az egyént, hogy rendkívül szigorú, magas elvárásokat támasztson saját magával és másokkal szemben, hogy elkerülje a kritikát vagy megfeleljen egy idealizált standardnak.',

  additionalInfo: (
    <div className="space-y-6 mt-6">
      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Perfekcionizmus (maladaptive perfectionism)',
        '• Könyörtelen mércék / túlzott elvárások séma (unrelenting standards – schema therapy)',
        '• Belső kritikus (inner critic)',
        '• Szégyenalapú önértékelés (shame-based self-worth)',
        '• Kényszeres kontrolligény (overcontrol)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />
      <Section title="Jellemzők" items={[
        'Állandó belső kritikus hang, amely sosem elégedett.',
        'Túlzott perfekcionizmus minden élethelyzetben.',
        'Rugalmatlan szabályok és mércék önmaga és mások számára.',
        'Félelem a hibázástól és a kritikától.',
        'Általában önmaga és mások túlzott megítélése.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Szigorú, kritikus vagy elvárásokkal teli szülői nevelés.',
        'Környezet, ahol csak a teljesítmény számított.',
        'Gyermekkori bűntudat vagy szégyen a hibák miatt.',
        'Tanult viselkedés az önmagunk és mások folyamatos kontrolljára.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Állandó elégedetlenség önmagával és másokkal.',
        'Kritikus hozzáállás mások hibái iránt.',
        'Félelem az elutasítástól vagy kritikától.',
        'Túlzottan szigorú önfegyelem és kontroll.',
        'Nehezen engedi meg magának a hibákat vagy a lazítást.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Feszültség és konfliktusok a kapcsolatokban a magas elvárások miatt.',
        'Mások elutasítása vagy kritizálása.',
        'Nehézség az önelfogadásban és mások elfogadásában.',
        'Elidegenedés és magányosság érzése.',
        'Túlzott megfelelési kényszer a társas kapcsolatokban.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Önelfogadás és önszeretet gyakorlása.',
        'Rugalmasság és realizmus fejlesztése az elvárásokban.',
        'Tudatos önkritika helyett támogató belső párbeszéd kialakítása.',
        'Terápiás munka a perfekcionizmus és önbüntetés oldására.',
        'Gyakorlati relaxációs és stresszkezelő technikák alkalmazása.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Perfekcionizmus Kódja gyakran megnehezíti az egyén számára, hogy elfogadja saját hibáit és emberi korlátait. Ennek tudatosítása és feldolgozása segíthet abban, hogy egy egészségesebb, elfogadóbb és szeretetteljesebb belső hangot alakítsunk ki.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önértékelés és kompetencia ösztöne</em> – az ember alapvető késztetése arra, hogy értékesnek, kompetensnek és elfogadhatónak érezze magát.  
        Ha ez az ösztön sérül – például túlzott elvárások, kritika vagy feltételes elfogadás hatására –, az egyénben kialakulhat a folyamatos megfelelési kényszer és a perfekcionizmus, amely a hibák elkerülésére és az önérték folyamatos bizonyítására irányul.
      </div>
    </div>
  )
},
'belso-biro': {
  title: 'Belső Bíró Kódja',
  description:
    'A Belső Bíró Kódja az a meggyőződés, amely szerint az embereket szigorúan meg kell büntetni, ha hibát követnek el, ezzel fenntartva a rendet vagy igazságosságot. Ez a kód gyakran az ön- és másokkal szembeni túlzott kritikus attitűdből fakad.',

  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Büntető szülő mód (punitive parent mode – schema therapy)',
        '• Belső kritikus (inner critic)',
        '• Magas lelkiismeretesség torzult formája (overactive superego)',
        '• Fekete-fehér gondolkodás (moral rigidity)',
        '• Szégyen- és bűntudat alapú önszabályozás',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Erős ítélkezés és kritika mások hibái felett.',
        'Túlzott büntető reakciók kisebb vétségekre is.',
        'Nehezen gyakorol megbocsátást, mind magával, mind másokkal szemben.',
        'Mélyen gyökerező igazságérzet vagy felelősségtudat.',
        'Félelem a következmények nélküli viselkedéstől.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Szigorú, büntető nevelési környezet gyermekkorban.',
        'Túlzott fegyelmezés vagy kritika a családban.',
        'Átélt igazságtalanság vagy erős szabályozás a múltban.',
        'Tanult viselkedés, amely a hibák szigorú büntetésén alapul.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Gyors és kemény ítéletalkotás hibák esetén.',
        'Korlátozó és merev szabályok betartatása másokkal.',
        'Túlzott önbüntetés vagy bűntudat érzése hibák miatt.',
        'Konfliktuskereső vagy domináns magatartás a hibák kezelésekor.',
        'Nehezen engedi meg magának és másoknak a hibázást.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Feszültség és konfliktusok a kapcsolatokban a szigorú büntetés miatt.',
        'Elidegenedés és bizalmatlanság mások irányában.',
        'Nehezebb megbocsátás és elfogadás a kapcsolatokban.',
        'Mások félelme vagy ellenállása a kritikával szemben.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Empátia és megértés fejlesztése önmagunk és mások iránt.',
        'Megbocsátás gyakorlása és a hibák elfogadása.',
        'Terápiás munka a belső büntető hang csillapítására.',
        'Rugalmasabb szabályok és elvárások kialakítása.',
        'Stresszkezelő és relaxációs technikák alkalmazása.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Belső Bíró Kódja gyakran a belső szigorúság és ítélkezés eredménye, amely megnehezíti a kapcsolatokban a megbocsátást és elfogadást. Ennek tudatosítása és kezelése segíthet az egészségesebb és elfogadóbb viselkedés kialakításában.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Rend és igazságosság ösztöne</em> – az ember belső késztetése arra, hogy a világ kiszámítható, szabályozott és igazságos legyen.  
          Ha ez az ösztön túlzottan vagy torzultan működik – például szigorú, büntető nevelés hatására –, az egyén hajlamossá válhat a hibák túlzott büntetésére, merev ítélkezésre és a megbocsátás hiányára, ami önmagával és másokkal szemben is kemény, kritikus hozzáállást eredményez.
      </div>
    </div>
  )
},

'digitalis-elidegenedes': {
  title: 'Digitális Elidegenedés Kódja',
  description:
    'A Digitális Elidegenedés Kódja abból a hiedelemből fakad, hogy a technológia és a digitális kapcsolatok miatt az emberi kapcsolatok felszínessé, hiteltelenné és érzelmileg kielégítetlenné váltak. Az érintett személy gyakran érzi magát magányosnak és üresnek, különösen az online térben, ahol folyamatosan attól tart, hogy nem elég jó vagy elfogadott.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>
       
       <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több modern pszichológiai jelenséggel is párhuzamba állítható:',
        '• Társas összehasonlítás elmélete (social comparison theory)',
        '• Közösségi média okozta önértékelési zavarok',
        '• Magány és társas izoláció modern formái (perceived loneliness)',
        '• FOMO – kimaradástól való félelem (fear of missing out)',
        '• Digitális túlterheltség és dopaminfüggő viselkedési minták',
        '• Ezek nem azonosak ezzel a modellel, de segítenek megérteni a működését'
      ]} />

      <Section title="Jellemzők" items={[
        'Magány és érzelmi üresség az online kapcsolatok mögött.',
        'Szorongás és önértékelési problémák a közösségi média használata során.',
        'Túlzott online jelenlét, ugyanakkor mély emberi kapcsolatok hiánya.',
        'Felszínes interakciók és az igazi kapcsolódás hiánya.',
        'Állandó „elég jó vagyok-e” érzés a digitális térben.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Az online tér térnyerése és a személyes kapcsolatok háttérbe szorulása.',
        'Társadalmi elvárások a digitális jelenlét és lájkok számának növelésére.',
        'Valódi emberi kapcsolatok csökkenése a digitális világban.',
        'Folyamatos összehasonlítás mások idealizált online képeivel.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Állandó online jelenlét és hozzáférés a közösségi médiához.',
        'Felszínes vagy látszólagos kapcsolatok fenntartása.',
        'Magányos érzések ellenére nehézségek valódi kapcsolatok kialakításában.',
        'Szorongás és stressz a digitális térben történő megjelenés miatt.',
        'Gyakori összehasonlítás és önértékelési ingadozások.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Elidegenedés a valódi közeli kapcsolatokról.',
        'Kapcsolati felszínesség és érzelmi kielégítetlenség.',
        'Nehézségek a mélyebb emberi kapcsolatok kialakításában és fenntartásában.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Digitális detox és tudatos online jelenlét kialakítása.',
        'Valódi, mély emberi kapcsolatok ápolása.',
        'Önértékelés fejlesztése a digitális visszajelzésektől függetlenül.',
        'Támogató közösségek keresése offline térben.',
        'Szakmai segítség igénybevétele, ha az online elidegenedés súlyos.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Digitális Elidegenedés Kódja a modern technológiai környezet kihívásaira adott érzelmi válasz, amely megnehezíti az autentikus emberi kapcsolódást. Tudatos jelenléttel és emberi kapcsolatok ápolásával enyhíthető a kód okozta érzelmi hiány.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Kapcsolódás és elismerés ösztöne</em> – az ember alapvető szükséglete arra, hogy valódi, mély kapcsolatokban éljen, és elfogadottnak, értékesnek érezze magát mások szemében.  
        A digitális tér torz visszajelzései és felszínes interakciói ezt az ösztönt félrevezethetik, ami érzelmi ürességhez, összehasonlításhoz és a valódi kapcsolódás hiányának élményéhez vezethet.
      </div>
    </div>
  )
},

'teljesitmeny-kenyszer': {
  title: 'Teljesítmény-kényszer Kódja',
  description:
    'A Teljesítmény-kényszer Kódja abból a meggyőződésből ered, hogy folyamatosan maximalizálni kell a produktivitást és alkalmazkodni kell a gyorsan változó munka- és életkörnyezethez, különben lemaradok vagy nem vagyok elég jó. Ez a kód gyakran vezet kiégéshez és identitásválsághoz.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Teljesítményalapú önértékelés (performance-based self-worth)',
        '• Kiégés szindróma (burnout)',
        '• Hustle culture / túlhajszoltság pszichológiája',
        '• Belső hajtóerő túlaktiválása (overachievement drive)',
        '• Krónikus stressz és túlterhelés',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Állandó nyomás a maximális teljesítmény elérésére.',
        'Folyamatos stressz és fáradtság érzése.',
        'Bizonytalanság és önértékelési problémák.',
        'Az önelfogadás hiánya a teljesítmény függvényében.',
        'Félelem a lemaradástól vagy a kudarcoktól.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyorsan változó, versenyközpontú társadalmi és munkahelyi környezet.',
        'Túlzott elvárások a környezet vagy önmagunk részéről.',
        'Sikerekhez és eredményekhez kötött önértékelés.',
        'Gyermekkorban tanult teljesítményorientált értékek.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Túlórázás és folyamatos elfoglaltság.',
        'Nehezen elfogadja a pihenést vagy a hibázást.',
        'Állandó megfelelési kényszer.',
        'Identitás és önérték a teljesítményhez kötve.',
        'Fokozott szorongás és kiégés veszélye.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Kapcsolati feszültségek a túlzott munkamánia miatt.',
        'Elhanyagolt baráti és családi kapcsolatok.',
        'Feszültség a teljesítmény miatti önmagunkkal szemben támasztott elvárásokból.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Reális célok kitűzése és hatékony időgazdálkodás.',
        'Önelfogadás fejlesztése teljesítménytől függetlenül.',
        'Stresszkezelő technikák elsajátítása.',
        'Pihenés és feltöltődés rendszeres beiktatása.',
        'Terápiás munka a belső nyomás enyhítésére.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Teljesítmény-kényszer Kódja a modern kor elvárásainak és a személyes belső nyomásnak az összjátéka, amely megnehezíti a kiegyensúlyozott életet és az egészséges önelfogadást. Tudatos szemlélettel és önmagunk támogatásával kezelhető.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Érvényesülés és kompetencia ösztöne</em> – az ember belső késztetése arra, hogy fejlődjön, teljesítsen és értékesnek érezze magát a világban.  
        Ha ez az ösztön túlzott nyomás alá kerül – például külső elvárások vagy belső bizonyítási kényszer hatására –, az egyén folyamatos teljesítménykényszerben élhet, amely kimerültséghez, kiégéshez és az önérték teljesítményhez kötéséhez vezet.
      </div>
    </div>
  )
},

'informacios-tulterheltseg': {
  title: 'Információs Túlterheltség Kódja',
  description:
    'Az Információs Túlterheltség Kódja azon a meggyőződésen alapul, hogy túl sok információ és választási lehetőség áll rendelkezésre, ezért képtelen vagyok dönteni vagy cselekedni. Ez gyakran szorongáshoz és halogatáshoz vezet.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
         Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Döntési paralízis (analysis paralysis)',
        '• Döntési túlterheltség (decision fatigue)',
        '• Választási paradoxon (paradox of choice – Barry Schwartz)',
        '• Kognitív túlterheltség (cognitive overload)',
        '• Perfekcionista döntéshozatal',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Állandó bizonytalanság és szorongás a döntéshozatalban.',
        'Halogatás és tétovaság a cselekvésben.',
        'Árnyalt információk és túl sok opció között való elveszés.',
        'Félelem a rossz döntés következményeitől.',
        'Mentális kimerültség és stressz érzése.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Információs társadalom és a folyamatos online elérhetőség.',
        'Túl sok választási lehetőség a mindennapi életben.',
        'Elvárás a tökéletes döntés meghozatalára.',
        'Korábbi negatív tapasztalatok a rossz döntésekkel kapcsolatban.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Információgyűjtés túlzott mértékben.',
        'Döntésképtelenség, ami akadályozza a haladást.',
        'Elhalasztja a fontos döntések meghozatalát.',
        'Stresszes állapotban lévő figyelem és fókuszvesztés.',
        'Visszatérő bizonytalanság érzés.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Nehézségek a közös döntésekben párkapcsolatban vagy munkahelyen.',
        'Frusztráció és konfliktusok másokkal a döntésképtelenség miatt.',
        'Csökkent önbizalom és önértékelés.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Döntéshozatali készségek fejlesztése.',
        'Prioritások és célok tisztázása.',
        'Relaxációs technikák a stressz csökkentésére.',
        'Kis lépésekben történő döntéshozatal gyakorlása.',
        'Terápiás támogatás, ha szükséges.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Információs Túlterheltség Kódja a modern világ információs áradatának és a tökéletességre való törekvésnek a következménye, amely gátolja a hatékony döntéshozatalt és a cselekvést. Tudatos gyakorlással és támogatással kezelhető.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Kontroll és biztonság ösztöne</em> – az ember belső késztetése arra, hogy átlássa a helyzeteket, jó döntéseket hozzon és biztonságban érezze magát a választásai következményeivel kapcsolatban.  
        Ha ez az ösztön túlterhelődik – például túl sok információ és lehetőség hatására –, az egyén elveszítheti a kontrollérzetét, ami döntési bénultsághoz, szorongáshoz és halogatáshoz vezethet.
      </div>
    </div>
  )
},

'kulso-validacio-fuggoseg': {
  title: 'Külső Validáció-függőség Kódja',
  description:
    'A Külső Validáció-függőség Kódja az a hiedelem, hogy az önértékelésem kizárólag mások visszajelzésein és lájkjain múlik, ami állandó megfelelési kényszert eredményez. Ez az állapot szorongást, önbizalomhiányt és állandó összehasonlítást okoz.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Külső megerősítés-függőség (external validation dependence)',
        '• Feltételes önértékelés (contingent self-worth)',
        '• Társas összehasonlítás (social comparison theory)',
        '• Önértékelési instabilitás (unstable self-esteem)',
        '• Közösségi média által erősített identitásfüggés',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Állandó bizonytalanság önmagammal kapcsolatban mások visszajelzései nélkül.',
        'Megfelelési kényszer és túlzott figyelem mások véleményére.',
        'Önértékelési hullámzások a külső visszajelzések függvényében.',
        'Szorongás és stressz a közösségi média használatában.',
        'Állandó összehasonlítás másokkal.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkorban kialakult túlzott megfelelési elvárások.',
        'Közösségi média hatására erősödő külső visszajelzési igény.',
        'Alacsony önbizalom és önelfogadás.',
        'Környezeti nyomás és elvárások.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Folyamatos önellenőrzés és önkritika.',
        'Lájkok és visszajelzések keresése a közösségi médiában.',
        'Az önértékelés ingadozása külső megerősítések hatására.',
        'Nehezen tudja önmagát elfogadni külső visszajelzés nélkül.',
        'Állandó összehasonlítás mások teljesítményével vagy megjelenésével.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Felszínes kapcsolatok a megfelelési kényszer miatt.',
        'Szorongás és konfliktusok a társas környezetben.',
        'Önmagával és másokkal szembeni túlzott kritika.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Önértékelés belső forrásból való megerősítése.',
        'Tudatosság és elfogadás fejlesztése.',
        'Digitális minimalizmus és közösségi média használat csökkentése.',
        'Mentális egészség támogatása, szükség esetén szakmai segítség.',
        'Önmagunk pozitív megerősítése és önelfogadás gyakorlása.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Külső Validáció-függőség Kódja a külső visszajelzések iránti túlzott igény következménye, amely megnehezíti az egészséges önértékelés kialakítását. Tudatos gyakorlással és támogatással oldható.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önértékelés és elfogadás ösztöne</em> – az ember alapvető szükséglete arra, hogy értékesnek és elfogadhatónak érezze magát.  
        Ha ez az ösztön külső forrásokra épül – például mások visszajelzéseire vagy elismerésére –, az önértékelés instabillá válhat, és az egyén folyamatos megerősítésre szorulhat ahhoz, hogy jól érezze magát önmagával.
      </div>
    </div>
  )
},

'klima-jovofelelem': {
  title: 'Klíma és Jövőfélelem Kódja',
  description:
    'A Klíma- és Jövőfélelem Kódja azon a meggyőződésen alapul, hogy a világ és a jövő fenyegetett, és én tehetetlen vagyok a változásokkal szemben. Ez az érzés szorongást, kilátástalanságot és apátiát eredményezhet.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több modern pszichológiai jelenséggel is párhuzamba állítható:',
        '• Klímaszorongás (eco-anxiety)',
        '• Tanult tehetetlenség (learned helplessness)',
        '• Egzisztenciális szorongás (existential anxiety)',
        '• Krónikus jövőorientált szorongás',
        '• Média által erősített fenyegetésérzet',
        '• Ezek nem azonosak ezzel a modellel, de segítenek mélyebben megérteni a működést'
      ]} />

      <Section title="Jellemzők" items={[
        'Folyamatos félelem és szorongás a környezeti és társadalmi változások miatt.',
        'Kilátástalanság és tehetetlenség érzése.',
        'Apátia vagy döntésképtelenség a jövővel kapcsolatban.',
        'Negatív gondolkodásmód és pesszimizmus.',
        'Csökkenő motiváció és reménytelenség.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Globális klímaválság és társadalmi bizonytalanságok hatása.',
        'Személyes tehetetlenség érzése a nagy problémák mellett.',
        'Negatív hírek és információk folyamatos áramlása.',
        'Korábbi traumatikus élmények a jövővel kapcsolatban.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Kerülő magatartás a jövővel kapcsolatos döntésekben.',
        'Állandó aggódás és félelem.',
        'Passzivitás vagy apátia a változásokkal szemben.',
        'Csökkent aktivitás és elköteleződés a környezetvédelemben.',
        'Társas elszigetelődés a negatív jövőképek miatt.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Nehézségek a jövővel kapcsolatos tervezésben és közös döntésekben.',
        'Elidegenedés és pesszimizmus a társas környezetben.',
        'Csökkent motiváció és aktivitás a közösségi életben.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Pozitív, cselekvő szemlélet és remény kialakítása.',
        'Környezettudatosság és aktív részvétel a változásokban.',
        'Mentális egészség támogatása és stresszkezelés.',
        'Közösségi támogatás és összefogás keresése.',
        'Szakmai segítség igénybevétele, ha szükséges.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        A Klíma- és Jövőfélelem Kódja a globális problémákra adott érzelmi reakció, amely megnehezíti a remény és cselekvés megtartását. Tudatossággal és közösségi támogatással enyhíthető.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Biztonság és túlélés ösztöne</em> – az ember alapvető késztetése arra, hogy biztonságban érezze magát és képes legyen hatni a jövőjére.  
        Ha ez az ösztön globális fenyegetések – például klímaváltozás vagy társadalmi bizonytalanság – hatására aktiválódik, de az egyén tehetetlennek érzi magát, kialakulhat a szorongás, kilátástalanság és passzivitás élménye.
      </div>
    </div>
  )
},

'onallosag-elszakadottsag': {
  title: 'Önállóság-Elszakadottság Paradoxon Kódja',
  description:
    'Az Önállóság-Elszakadottság Paradoxon Kódja abból a hiedelemből fakad, hogy bár önállónak kell lennem, valójában egyedül vagyok és nem számíthatok másokra. Ez az ellentmondás izolációhoz, magányhoz és nehézségekhez vezet a segítségkérésben.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
       Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Elkerülő kötődési stílus (avoidant attachment)',
        '• Kapcsolati depriváció és izoláció',
        '• Tanult függetlenség (defenzív önállóság)',
        '• Bizalmi sérülések (relational trauma)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek megérteni a működését'
      ]} />

      <Section title="Jellemzők" items={[
        'Erős önállóság igénye, ugyanakkor magányosság érzése.',
        'Nehezen kér segítséget vagy támogatást másoktól.',
        'Izoláció és elszigeteltség érzése.',
        'Belső ellentmondás az önállóság és kapcsolódás között.',
        'Félelem a kiszolgáltatottságtól vagy csalódástól.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Gyermekkorban tanult önállóság és függetlenség elvárások.',
        'Korábbi csalódások vagy elutasítások a segítségkérés során.',
        'Kulturális vagy társadalmi normák az önállóság hangsúlyozására.',
        'Személyes tapasztalatok az egyedüllétről és elszakadottságról.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Kerüli a segítségkérést, még ha szükséges is lenne.',
        'Túlzottan önálló, nem engedi meg mások bevonását.',
        'Magányos, izolált viselkedés.',
        'Belső feszültség az ellentmondás miatt.',
        'Nehezen épít ki mély kapcsolatokat.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Elidegenedés a környezetétől.',
        'Nehezített támogatás vagy közös problémamegoldás.',
        'Feszültség az intimitás és önállóság között.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Kapcsolódási készségek fejlesztése és bizalomépítés.',
        'Segítségkérés gyakorlása és önelfogadás növelése.',
        'Terápiás munka a belső ellentmondások feloldására.',
        'Közösségi támogatás és társas aktivitás ösztönzése.',
        'Önállóság és kapcsolódás egészséges egyensúlyának megtalálása.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Önállóság-Elszakadottság Paradoxon Kódja belső feszültséget okoz az önállóság és a kapcsolódás igénye között. Tudatos önismerettel és támogatással oldható ez a paradoxon.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Kötődés és autonómia egyensúlyának ösztöne</em> – az ember alapvető szükséglete arra, hogy egyszerre legyen képes kapcsolódni másokhoz és önálló, autonóm egyénként működni.  
        Ha ez az egyensúly sérül – például csalódások vagy elutasítás miatt –, az egyén túlzott önállóságba menekülhet, miközben belül megmarad a kapcsolódás iránti vágy, ami belső feszültséget és elszigeteltséget eredményez.
      </div>
    </div>
  )
},

'erzelmi-tulterheltseg-kieges': {
  title: 'Érzelmi Túlterheltség és Kiégés Kódja',
  description:
    'Az Érzelmi Túlterheltség és Kiégés Kódja abból a hiedelemből ered, hogy folyamatosan erősnek kell lennem, nem mutathatok gyengeséget, különben nem vagyok értékes vagy elismerhető. Ez belső feszültséghez, kimerültséghez és elfojtott érzelmekhez vezet.',
  additionalInfo: (
    <div className="space-y-6 mt-6">

      <p className="text-sm text-gray-500 italic">
        Ez a kód nem klinikai diagnózis, de több ismert pszichológiai jelenséggel mutat párhuzamot.
      </p>

      <Section title="Pszichológiai párhuzam" items={[
        'Ez a kód több ismert pszichológiai jelenséggel is párhuzamba állítható:',
        '• Érzelmi elfojtás (emotional suppression)',
        '• Kiégés szindróma (burnout)',
        '• Túlkompenzáló megküzdés (overcompensation coping)',
        '• Szégyenalapú önértékelés (shame-based identity)',
        '• Ezek nem azonosak ezzel a modellel, de segítenek megérteni a működését'
      ]} />

      <Section title="Jellemzők" items={[
        'Folyamatos belső nyomás az erősség és kontroll fenntartására.',
        'Nem engedi meg magának a gyengeség vagy sebezhetőség kifejezését.',
        'Belső feszültség és kimerültség érzése.',
        'Érzelmek elfojtása és nem feldolgozása.',
        'Félelem az értéktelenségtől gyengeség esetén.'
      ]} />

      <Section title="A kód kialakulása" items={[
        'Kulturális vagy családi elvárások az erősségre.',
        'Gyermekkorban tanult érzelmi elfojtás vagy megfelelés.',
        'Személyes tapasztalatok az elutasításról gyengeség esetén.',
        'Teljesítmény- és elismeréskényszer hatásai.'
      ]} />

      <Section title="Jellemző viselkedési tendenciák" items={[
        'Érzelmi zárkózottság és nehézség az érzelmek megosztásában.',
        'Folyamatos stressz és belső feszültség.',
        'Kiégés tünetei: fáradtság, motivációhiány.',
        'Önmagával szembeni túlzott elvárások.',
        'Kerüli a segítségkérést gyengeség miatt.'
      ]} strong />

      <Section title="A kód hatása a kapcsolatokra" items={[
        'Érzelmi távolságtartás és elszigeteltség.',
        'Nehezebb kapcsolódás és intimitás.',
        'Feszültség és félreértések a környezetben.'
      ]} />

      <Section title="A kód kezelése" items={[
        'Érzelmi önismeret fejlesztése és érzelmek feldolgozása.',
        'Támogató kapcsolatok és bizalom kialakítása.',
        'Szakmai segítség igénybevétele, ha szükséges.',
        'Önelfogadás és gyengeség elfogadása.',
        'Stresszkezelési technikák elsajátítása.'
      ]} />

      <p className="text-gray-700 text-base leading-relaxed">
        Az Érzelmi Túlterheltség és Kiégés Kódja megnehezíti az érzelmi kifejezést és a belső egyensúlyt. Tudatossággal és támogatással enyhíthető a belső feszültség.
      </p>
      <div className="text-green-700 text-base leading">
        <strong>Kapcsolódó ösztön:</strong> <em>Önérték és érzelmi biztonság ösztöne</em> – az ember alapvető szükséglete arra, hogy értékesnek érezze magát, és biztonságban megélhesse saját érzelmeit.  
        Ha ez az ösztön sérül – például amikor a gyengeséget elutasítás vagy szégyen követi –, az egyén megtanulhatja elfojtani érzéseit, és folyamatos erősséget mutatni. Ez hosszú távon érzelmi túlterheltséghez, kimerültséghez és kiégéshez vezethet.
      </div>
    </div>
  )
}
};
