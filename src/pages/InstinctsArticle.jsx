// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";



export default function InstinctsArticle() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">

      {/* ----- SEO ----- */}
      <Helmet>
        <title>Ösztönök – Pszichológiai és Biológiai Áttekintés | Ösztönkód</title>
        <meta
          name="description"
          content="Az ösztönök típusainak, működési elveinek és fejlődéstani szerepének komplex áttekintése. Biológiai, pszichológiai és evolúciós megközelítésben."
        />

        <link rel="canonical" href="https://osztonkod.hu/osztonok" />

        <meta property="og:title" content="Ösztönök – Pszichológiai és Biológiai Áttekintés" />
        <meta property="og:description" content="Az ösztönök típusainak, működési elveinek és fejlődéstani szerepének komplex áttekintése." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://osztonkod.hu/osztonok" />
        <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
        <meta property="og:site_name" content="Ösztönkód" />
        <meta property="og:locale" content="hu_HU" />

        <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ösztönök – Pszichológiai és Biológiai Áttekintés",
          "description": "Az ösztönök biológiai, pszichológiai és evolúciós szerepének komplex áttekintése.",
          "author": {
            "@type": "Organization",
            "name": "Ösztönkód"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ösztönkód"
          },
          "mainEntityOfPage": "https://osztonkod.hu/osztonok"
          }
          `}
          </script>

      </Helmet>

      {/* ----- PARALLAX SMARAGD GLOW ----- */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      >
        <div className="absolute top-0 left-[20%] w-[60vw] h-[60vw] bg-emerald-500/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] bg-emerald-700/20 blur-[120px] rounded-full" />
      </motion.div>

      {/* ---- TARTALOM ---- */}
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

        {/* CÍMSOR */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Ösztönök – Pszichológiai és Biológiai Áttekintés
        </motion.h1>

        {/* KÁRTYÁS TARTALOMDOBOZ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/90 backdrop-blur-xl border border-emerald-200 
            shadow-xl rounded-3xl p-10 leading-relaxed 
          "
        >

          <p className="mb-6 text-gray-700">
            Az ösztönök velünk született, automatikusan működő viselkedésminták,
            amelyek az egyén túlélését, valamint a faj fennmaradását biztosítják.
            Bár nincs mindenki által elfogadott végleges felosztásuk, több jól ismert
            csoportjuk létezik.
          </p>

          <hr className="my-8 border-emerald-100" />


          {/* 1. Biológiai ösztönök */}
          <h2 className="section-title font-bold">1. Alapvető biológiai ösztönök</h2>
          <p className="mb-5 text-gray-700">Ezek közvetlenül az élet fenntartásához szükségesek:</p>
          <ul className="oszton-list space-y-2 mt-4">
            <li>Éhség</li>
            <li>Szomjúság</li>
            <li>Légzés</li>
            <li>Alvás</li>
            <li>Fájdalomkerülés</li>
            <li>Menekülés a veszélytől</li>
          </ul>

          {/* 2. Fajfenntartó */}
          <h2 className="section-title font-bold mt-12 mb-4">2. Fajfenntartó ösztönök</h2>
          <p className="mb-5 text-gray-700">A faj túlélését szolgálják:</p>
          <ul className="oszton-list space-y-2 mt-4">
            <li>Szexuális ösztön</li>
            <li>Utódgondozás</li>
            <li>Területvédelem, dominancia</li>
          </ul>

          {/* 3. Társas */}
          <h2 className="section-title font-bold mt-12 mb-4">3. Társas ösztönök</h2>
          <p className="mb-5 text-gray-700">Az emberek társas lények, ezért ezek különösen hangsúlyosak:</p>
          <ul className="oszton-list space-y-2 mt-4">
            <li>Kötődés, kapcsolatkeresés</li>
            <li>Csoporthoz tartozás igénye</li>
            <li>Hierarchia felismerése</li>
            <li>Empátia biológiai alapjai</li>
          </ul>

          {/* 4. Tanult ösztönszerű viselkedés */}
          <h2 className="section-title font-bold mt-12 mb-4">4. Komplex, tanult ösztönszerű viselkedések</h2>
          <p className="mb-6">
            Olyan viselkedések, amelyek tanulással alakulnak ki, de később reflexszerűvé
            válnak: nevetés, sírás, empátia, bűntudat, erkölcsi felháborodás.
          </p>

          <p className="mb-6">
            Ezek hátterében a limbikus rendszer, az amygdala, a hippocampus és a
            prefrontális kéreg összehangolt működése áll. A dopamin- és oxitocinrendszer
            jutalmazással és kötődéssel erősíti meg a társas viselkedéseket.
          </p>

          <p className="mb-6">
            Ezek kulturálisan is eltérhetnek — ami az egyik társadalomban ösztönszerű,
            máshol tanult viselkedés.
          </p>

          {/* Fejlődéstani */}
          <h2 className="section-title font-bold mt-16">Fejlődéstani szempont</h2>
          <p className="mb-6">
            Sok ösztön már újszülötteknél megjelenik (pl. szopóreflex), mások későbbi
            fejlődési szakaszokhoz kötődnek.
          </p>

          {/* Etológiai */}
          <h2 className="section-title font-bold">Etológiai összehasonlítás</h2>
          <p className="mb-6">
            Az állatvilágban is találhatók emberi ösztönökhöz hasonló minták: területvédelem,
            agresszió, kötődés.
          </p>

          {/* Evolúciós */}
          <h2 className="section-title font-bold">Filogenetikai aspektus</h2>
          <p className="mb-6">
            Az ösztönök az evolúció során maradtak fenn, mert adaptív előnyt biztosítottak.
          </p>

          {/* Pszichopatológia */}
          <h2 className="section-title font-bold">Pszichopatológiai vonatkozások</h2>
          <p className="mb-6">
            Az ösztönrendszer zavara pszichés problémákhoz vezethet: evészavarok,
            impulzivitás, agresszió, addikciók.
          </p>

          {/* Kritika */}
          <h2 className="section-title font-bold">Kritikai nézőpont</h2>
          <p className="mb-6">
            Freud, a behavioristák és a modern evolúciós pszichológia eltérően
            magyarázzák az ösztönök eredetét és működését.
          </p>

          {/* Ciklikus működés */}
          <h2 className="section-title mt-12 font-bold">Ciklikusan működő ösztönök</h2>
          <ul className="oszton-list space-y-2 mt-4">
            <li>Éhség és szomjúság</li>
            <li>Alvás – cirkadián ritmus</li>
            <li>Szexuális vágy</li>
            <li>Anyai ösztön</li>
          </ul>

          {/* Összegzés */}
          <h2 className="section-title mt-12 font-bold">Végső összegzés</h2>
          <p className="mb-6">
            Az ösztönök jelentik az emberi viselkedés alapját, amelyre épül a tanulás,
            az érzelmi feldolgozás és a tudatos döntéshozás. Megértésük segít tisztábban
            látni saját működésünket és belső logikánkat.
          </p>

          {/* --- ÁTVEZETŐ CTA --- */}
          <div className="mt-20 text-center border-t border-emerald-100 pt-16">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Hogyan működik mindez benned?
            </h3>

            <p className="text-gray-700 max-w-xl mx-auto mb-8">
              Az ösztönök általánosak.
              Az érzelmi sémák viszont személyesek.
              Itt kezdődik az a rész, ahol mindez rád vonatkozik.
            </p>


            <div className="mt-10 flex justify-center">
            <Link
              to="/products/emotional-brainmap"
              className="px-6 py-2.5 rounded-xl text-base font-semibold 
               bg-green-600 hover:bg-green-700 text-white 
               shadow-md transition transform hover:scale-[1.03]"
            >
              Tovább a személyes elemzéshez →
            </Link>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              A következő lépés mélyebb, részletesebb feldolgozást tartalmaz.
            </p>
          </div>

        </motion.div>

        

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-amber-50 border border-amber-300 text-amber-900 p-6 rounded-xl shadow-sm leading-relaxed"
        >
          <strong>Jogi nyilatkozat:</strong>
          <p className="mt-2">
            Az oldalon található információk edukációs célt szolgálnak.
            Nem minősülnek pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
          </p>
          <p className="mt-3">
            A leírt tartalom nem helyettesíti szakember felkeresését,
            és nem minősül diagnózisnak vagy terápiának.
          </p>
        </motion.div>

      </div>

    </div>
  );
}


