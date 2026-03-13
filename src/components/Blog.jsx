// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";




const posts = [

  {
    title: "Az ösztönök integrálása: első lépések az önismeretben",
    slug: "osztonok-integralasa-elso-lepesek",
    description:
      "Hogyan kezdj neki az ösztönös működésed feltérképezésének? Tippek, gyakorlatok és szemléletformáló gondolatok.",
    date: "2026-03-12",
  },
  {
  title: "Miért érzem magam egyedül akkor is, ha vannak körülöttem emberek?",
  slug: "miert-erzem-magam-egyedul",
  description:
    "Miért jelenik meg a magány érzése akkor is, amikor emberek vesznek körül? A cikk segít megérteni a belső érzelmi mintákat.",
  date: "2026-03-12",
  },
  {
  title: "7 jel, hogy önértékelési hiány működik benned",
  slug: "onertekelesi-hiany-jelei",
  description:
    "Honnan tudhatod, hogy önértékelési hiány működik benned? 7 jel, amely segíthet felismerni a belső működéseket.",
  date: "2026-03-12",
  },
  {
    title: "Mit jelent valójában önmagadként élni?",
    slug: "onmagadkent-elni-jelentese",
    description:
      "Az önazonosság nem elmélet – hanem tapasztalás. Ebben a cikkben megnézzük, mit jelent ez a hétköznapokban.",
    date: "2026-03-12",
  },
  {
    title: "Az érzelmi állapotok tudományos háttere – hogyan működünk belül?",
    slug: "erzelmi-allapotok-agyban",
    description:
      "Hogyan befolyásolja az agyunk és gondolkodásmódunk az érzelmeinket? Nézzük meg a tudományos alapokat.",
    date: "2026-03-12",
  },
  {
    title: "Gondolkodásmód újrarendezése – hogyan alakíts ki építő belső párbeszédet?",
    slug: "gondolkodasmod-ujrarendezese",
    description:
      "Hogyan ismerd fel és formáld át a negatív belső monológokat? Gyakorlati lépések és agyi működés bemutatása.",
    date: "2026-03-12",
  },
  {
    title: "A Belső Hiányérzet Kódja – hogyan hat a kapcsolataidra és mit tehetsz ellene?",
    slug: "belso-hianyerzet-kodja",
    description:
      "Mi az a belső hiányérzet kódja? Hogyan alakul ki, milyen viselkedési mintákhoz vezet, és hogyan lehet feloldani?",
    date: "2026-03-12",
  },
  {
    title: "Az Én és az Ismétlődő Ciklusok – hogyan működünk valójában?",
    slug: "en-es-ciklusok-mukodese",
    description:
      "Miért érezzük magunkat néha „beragadva”? Hogyan alakítja az agy az énérzetünket, és miért ismétlődnek bizonyos élethelyzetek?",
    date: "2026-03-12",
  },
  {
    title:
      "Függőségek az érzelmek hullámvasútján – Milyen érzelmek zajlanak le, amikor az ember szerhez nyúl?",
    slug: "erzelmek-hullamvasutja-fuggosegben",
    description:
      "Az emberi érzelmek összetett rendszere, különösen a függőség esetén, drámai hullámzásokat mutat.",
    date: "2026-03-12",
  },
  {
    title:
      "Függetlenül az Éntől – Mi történik, amikor az énvédő mechanizmusok bekapcsolódnak?",
    slug: "envedo-mechanizmusok-bekapcsolodasa",
    description:
      "Az énvédő mechanizmusok automatikus pszichés folyamatok. Ebben a cikkben bemutatjuk, hogyan és miért lépnek működésbe.",
    date: "2026-03-12",
  },
  {
    title: "Mikor sérül az Önkép, és hogyan állítható vissza?",
    slug: "onkep-serulese-es-helyreallitasa",
    description:
      "Mikor és hogyan törik meg, és milyen lépésekkel lehet újraépíteni az önképet?",
    date: "2026-03-12",
  },
  {
    title: "Hogyan találjunk értelmet egy sokszor kaotikus világban?",
    slug: "ertelmet-talalni-kaotikusan",
    description:
      "Hogyan építs belső kapaszkodókat egy zavaros világban? Íme a legfontosabb elvek.",
    date: "2026-03-12",
  },
  {
  title: "Traumával születünk? – Sérülékenység, determinizmus és az idegrendszer valódi mozgástere",
  slug: "trauma-szuletes-determinizmus",
  description:
    "Sokan érzik úgy, hogy az életük előre el van döntve. Ebben a cikkben tudományos alapon tisztázzuk: mi az, amivel valóban születünk, mi a trauma, és hol van – ha van – mozgástér.",
  date: "2026-03-12",
 },
 {
  title: "Hogyan ismerd fel a saját idegrendszeri reakciómintádat?",
  slug: "idegrendszeri-reakciomintak-felismerese",
  description:
    "Harcolsz, menekülsz, lefagysz vagy alkalmazkodsz stresszhelyzetben? Ebben a cikkben lépésről lépésre segítek felismerni a saját domináns idegrendszeri reakciómintádat.",
  date: "2026-03-12",
},
{
  title: "Dopamin és Energia – mi hajt minket valójában?",
  slug: "dopamin-es-energia",
  description:
    "Az energia nem ugyanaz, mint a motiváció. Ebben a cikkben tisztázzuk a dopamin és a biológiai energia közti különbséget.",
  date: "2026-03-12",
},





];

export default function Blog() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
        <div className="px-6 pt-24 md:pt-32 pb-20 max-w-6xl mx-auto">


      {/* ----- SEO ------- */}
     <Helmet>
        <title>
        Önismeret, trauma és érzelmi minták – Ösztönkód Blog
        </title>

        <meta
        name="description"
        content="Önismereti és pszichológiai cikkek az idegrendszer működéséről, traumáról, érzelmi mintákról és tudatos működésről."
        />

        <link rel="canonical" href="https://osztonkod.hu/blog" />

        <meta property="og:title" content="Ösztönkód Blog – Önismereti cikkek" />
        <meta property="og:description" content="Cikkek az idegrendszerről, traumáról és érzelmi mintákról." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://osztonkod.hu/blog" />
        <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
        <meta property="og:site_name" content="Érzelmi Ösztönkód" />
        <meta property="og:locale" content="hu_HU" />
    </Helmet>


       <nav className="text-sm text-gray-500 mb-10">
        <Link to="/" className="hover:text-green-700 transition">
          Főoldal
        </Link>

        <span className="mx-2">/</span>

        <span className="text-gray-700 font-medium">Blog</span>
      </nav>





      {/* HEADER */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Ösztönkód Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Gondolatébresztő írások az önazonos élet, ösztönök, működésminták
          és a belső egyensúly témáiban.
        </motion.p>
      </header>

      {/* BLOG GRID */}
      <section className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.07 }}
            className="
              bg-white/90 backdrop-blur-xl border border-green-100
              rounded-2xl p-6 shadow-md 
              hover:shadow-xl hover:border-green-300
              transition-all duration-300 hover:-translate-y-1
            "
          >
            <h2 className="text-2xl font-semibold text-green-600 leading-snug mb-2">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-sm text-gray-500 mb-3">
            {formatDate(post.publishedAt || post.date)}
          </p>

            <p className="text-gray-700 leading-relaxed">
              {post.description}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="
                inline-block mt-4 text-green-600 hover:underline
                font-medium transition
              "
            >
              Olvasd tovább →
            </Link>
          </motion.article>
        ))}

      </section>
    </div>

     <p className="mt-12 mb-24 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Az itt megjelenő tartalom önreflexiós és edukációs célú,
        nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
        Egyéni helyzetben érdemes szakember támogatását igénybe venni.
      </p>
  </div>  
  );
}
