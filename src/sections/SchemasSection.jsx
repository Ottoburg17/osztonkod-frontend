// sections/SchemasSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const schemas = [
  {
    id: 'belso-hianyerzet',
    title: 'Belső Hiányérzet Kódja',
    description: 'Az a meggyőződés vagy érzés, hogy a közeli kapcsolatok instabilak, hamar véget érnek, és nem lehet igazán biztonságos kötődést kialakítani.'
  },
  {
    id: 'belso-erzelmi-uresseg',
    title: 'Érzelmi Üresség Kódja',
    description: 'Az a meggyőződés, hogy az érzelmi szükségleteim nem teljesülnek mások által.'
  },
  {
    id: 'onertekelesi-hiany',
    title: 'Önértékelési Hiány Kódja',
    description: 'Az az érzés, hogy belül hibásak vagyunk, értéktelenek vagyunk, vagy valami nincs rendben velünk.'
  },
  {
    id: 'kirekesztettseg',
    title: 'Kirekesztettség Érzésének Kódja',
    description: 'Az az érzés, hogy az ember más, nem illik be, és nem tartozik sehová.'
  },
  {
    id: 'bizalmi-vedekezes',
    title: 'Bizalmi Védekezés Kódja',
    description: 'Az a meggyőződés, hogy mások ártani fognak, kihasználnak, vagy visszaélnek a bizalmunkkal, ezért nehéz számunkra nyitni és megbízni másokban.'
  },
  {
    id: 'onallotlansag',
    title: 'Önállótlanság Kódja',
    description: 'Az a hiedelem, hogy képtelenek vagyunk önállóan boldogulni vagy felelősséget vállalni, és másoktól függünk a döntéseinkben és a mindennapi életben.'
  },
  {
    id: 'fenyegetettseg',
    title: 'Fenyegetettség Kódja',
    description: 'Állandó, túlzott félelem attól, hogy bármikor váratlan katasztrófa történhet – legyen az betegség, baleset, támadás vagy más súlyos veszély.'
  },
  {
    id: 'enhatarok-feloldodasa',
    title: 'Énhatárok Feloldódásának Kódja',
    description: 'Túlzott érzelmi összeolvadás egy közeli személlyel – gyakran szülővel –, amely megnehezíti az önállóságot és az egyéni identitás kialakítását.'
  },
  {
    id: 'kudarctol-valo-felelem',
    title: 'Sikertelenség Kódja',
    description: 'Az a hiedelem, hogy kudarcra vagyunk ítélve, nem vagyunk elég jók, és másokhoz képest alacsonyabb képességekkel rendelkezünk.'
  },
  {
    id: 'kivaltsagossag',
    title: 'Kiváltságosság Kódja',
    description: 'Az a meggyőződés, hogy különlegesek vagyunk, mások fölött állunk, és külön szabályok vonatkoznak ránk.'
  },
  {
    id: 'impulzuskontroll',
    title: 'Impulzuskontroll Kódja',
    description: 'A személyes célok eléréséhez szükséges önfegyelem, türelem vagy frusztrációtűrés hiánya.'
  },
  {
    id: 'alavetettseg',
    title: 'Alávetettség Kódja',
    description: 'Mások akaratának való túlzott engedelmesség, saját szükségleteink elnyomása, hogy elkerüljük az elutasítást vagy konfliktust.'
  },
  {
    id: 'tulzott-gondoskodas',
    title: 'Túlzott Gondoskodás Kódja',
    description: 'Mások igényeinek előtérbe helyezése a saját igényeink rovására, gyakran bűntudatból vagy túlzott empátiából.'
  },
  {
    id: 'figyelemigeny',
    title: 'Figyelemigény Kódja',
    description: 'Túlzott törekvés arra, hogy mások jóváhagyását, figyelmét vagy elismerését elnyerjük, még önazonosságunk kárára is.'
  },
  {
    id: 'ellenseges',
    title: 'Ellenséges Belátás Kódja',
    description: 'Folyamatos fókusz az élet negatív aspektusaira, mint például veszteség, csalódás vagy veszély, még pozitív helyzetekben is.'
  },
  {
    id: 'belso-onkorlatozas',
    title: 'Belső Önkorlátozás Kódja',
    description: 'Az érzelmek kimutatásának és megélésének elnyomása, gyakran azért, hogy elkerüljük a szégyent, kritikát vagy a kontroll elvesztését.'
  },
  {
    id: 'perfekcionizmus-kodja',
    title: 'Perfekcionizmus Kódja',
    description: 'A túlzottan magas elvárások és belső nyomás, melyek célja a kritika elkerülése vagy saját értékünk bizonyítása.'
  },
  {
    id: 'belso-biro',
    title: 'Belső Biró Kódja',
    description: 'Az a meggyőződés, hogy az embereket keményen meg kell büntetni, ha hibáznak – akár másokat, akár önmagunkat.'
  },
   {
    id: 'digitalis-elidegenedes',
    title: 'Digitális Elidegenedés Kódja',
    description: 'Az elidegenedés érzése a digitális világ túlzott használata miatt, ami elszigeteltséghez és valódi kapcsolatok hiányához vezet.'
  },
  {
    id: 'teljesitmeny-kenyszer',
    title: 'Teljesítmény-kényszer Kódja',
    description: 'Az a belső nyomás és félelem, hogy mindig tökéletesnek kell lennünk és teljesítenünk kell mások elvárásai szerint.'
  },
  {
    id: 'informacios-tulterheltseg',
    title: 'Információs Túlterheltség és Döntésképtelenség Kódja',
    description: 'Az a helyzet, amikor túl sok információ ér minket, és emiatt nehéz dönteni vagy fókuszálni.'
  },
  {
    id: 'kulso-validacio-fuggoseg',
    title: 'Külső Validáció-függőség Kódja',
    description: 'Az a meggyőződés, hogy csak mások elismerése, jóváhagyása által vagyunk értékesek.'
  },
  {
    id: 'klima-jovofelelem',
    title: 'Klíma- és Jövőfélelem Kódja',
    description: 'Az aggodalom a környezeti változások és a bizonytalan jövő miatt, amely szorongást és tehetetlenséget eredményez.'
  },
  {
    id: 'onallosag-elszakadottsag',
    title: 'Önállóság-elszakadottság Paradoxon Kódja',
    description: 'Az a belső konfliktus, hogy egyszerre vágyunk önállóságra és közelségre, de ezek ellentmondanak egymásnak.'
  },
  {
    id: 'erzelmi-tulterheltseg-kieges',
    title: 'Érzelmi Túlterheltség és Kiégés Kódja',
    description: 'Az érzelmi kimerültség állapota, amikor a stressz és a terhelés miatt elveszítjük az energiaszintünket és motivációnkat.'
  }

 
 
];

export default function SchemasSection() {
   const [hovered, setHovered] = useState(false);


  return (
    <section className="py-24 px-6 md:px-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12">
        Alapvető Érzelmi Ösztönkódok
      </h2>

      {/* GRID – INSTINCTARTICLE DESIGN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {schemas.map((schema) => (
          <Link
            key={schema.id}
            to={`/schemas/${schema.id}`}
            className="
              group relative overflow-hidden
              bg-white/90 backdrop-blur-xl 
              border border-green-100
              rounded-3xl p-8 shadow-lg
              transition-all duration-500
              hover:shadow-2xl hover:scale-[1.03] hover:border-green-300
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-20
                bg-gradient-to-br from-green-200 to-green-400
                blur-2xl transition-opacity duration-500
              "
            />

            <h3 className="relative z-10 text-2xl font-bold text-green-700 mb-4">
              {schema.title}
            </h3>
            <p className="relative z-10 text-gray-600 group-hover:text-gray-700">
              {schema.description}
            </p>
          </Link>
        ))}
      </div>

     <div className="mt-12 text-center space-y-2">
      <Link
        to="/instinctaware"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          inline-block
          text-green-700
          font-semibold
          text-lg
          underline
          transition
        "
      >
        {hovered
          ? "Ránézek most →"
          : "Ránézek, mi ismerős →"}
      </Link>

      <p className="text-xs text-gray-400">
        Nincs regisztráció. Nem kell írnod.
      </p>
    </div>

    </section>
  );
}


