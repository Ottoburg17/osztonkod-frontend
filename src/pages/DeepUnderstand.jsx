// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


export default function DeepUnderstand() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">

      {/* ----- SEO ----- */}
      <Helmet>
        <title>Mélyebb Megértés – Az érzelmi működés tudományos alapjai | Ösztönkód</title>
        <meta
          name="description"
          content="Az érzelmi minták, ösztönkódok és tudattalan működés tudományos, pszichológiai és idegrendszeri áttekintése."
        />

        <link rel="canonical" href="https://osztonkod.hu/melyebb-megertes" />

        <meta property="og:title" content="Mélyebb Megértés – Az érzelmi működés tudományos alapjai" />
        <meta property="og:description" content="Az érzelmi minták, ösztönkódok és tudattalan működés pszichológiai és idegrendszeri magyarázata." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://osztonkod.hu/melyebb-megertes" />
        <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
        <meta property="og:site_name" content="Ösztönkód" />
        <meta property="og:locale" content="hu_HU" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mélyebb Megértés – Az érzelmi működés tudományos alapjai" />
        <meta name="twitter:description" content="Az érzelmi minták és ösztönkódok pszichológiai és idegrendszeri működése." />
        <meta name="twitter:image" content="https://osztonkod.hu/og-image.jpg" />
      </Helmet>

      {/* ----- OPTIMALIZÁLT PARALLAX GLOW ----- */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      >
        <div className="absolute top-0 left-[20%] w-[50vw] h-[50vw] bg-green-600/25 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-[15%] w-[35vw] h-[35vw] bg-green-700/25 blur-[80px] rounded-full" />
      </motion.div>

      {/* ---- TARTALOM ---- */}
      <div className="px-6 py-24 max-w-4xl mx-auto">

        {/* CÍMSOR */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Mélyebb Megértés – Az érzelmi működés tudományos alapjai
        </motion.h1>

        {/* KÁRTYÁS TARTALOMDOBOZ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            bg-white/90 backdrop-blur-lg border border-green-200
            shadow-xl rounded-3xl p-10 leading-relaxed
          "
        >

          {/* 1. Mi az ösztönkód? */}
          <h2 className="section-title">Mi az ösztönkód?</h2>
          <p className="mb-6">
            Az ösztönkód az agyunkban kialakuló automatikus érzelmi és 
            viselkedési minták összessége. Agyunk célja, hogy gyorsan, 
            energiatakarékosan reagáljon a világra — ezért a korai 
            tapasztalatokból stabil „reakciósablonokat” épít.
          </p>
          <p className="mb-6">
            Ezek a minták a limbikus rendszerben raktározódnak, és gyakran 
            hamarabb aktiválódnak, mint hogy tudatosan átgondolnánk a 
            helyzetet. Ezért érezhetjük úgy, mintha „belénk lenne kódolva” 
            a működésünk.
          </p>

          {/* 2. Miért ismételjük a ciklusokat? */}
          <h2 className="section-title">Miért ismételjük a ciklusokat?</h2>
          <p className="mb-6">
            Az agy a biztonságot a kiszámíthatósággal azonosítja — akkor 
            is, ha a minta valójában káros. A régi viselkedés 
            kiszámíthatóbb, mint az új, ezért az idegrendszer gyakran 
            visszatér a megszokotthoz.
          </p>
          <p className="mb-6">
            Ezt nevezik „ismétlési kényszernek”, amely 
            nem más, mint a múltban megtanult megoldások újrahasznosítása.
          </p>

          {/* 3. Hogyan alakulnak ki az érzelmi sémák? */}
          <h2 className="section-title">Hogyan alakulnak ki a visszatérő érzelmi minták?</h2>
          <p className="mb-6">
            Gyermekkorban az idegrendszer még rendkívül rugalmas. Az agy 
            a visszatérő élményekből mintázatokat hoz létre. Ha például 
            gyakran tapasztaltál kritizálást, kialakulhat egy 
            „nem vagyok elég jó” séma; ha bizonytalan kötődést, akkor egy 
            „nem számíthatok másokra” séma.
          </p>
          <p className="mb-6">
            Ezek a minták később is aktiválódnak, függetlenül attól, hogy 
            a jelenlegi helyzet ugyanaz-e, mint a múltban.
          </p>

          {/* 4. A tudatosítás idegrendszeri háttere */}
          <h2 className="section-title">A tudatosítás idegrendszeri háttere</h2>
          <p className="mb-6">
            A tudatos jelenlét és az önreflexió a prefrontális kérget 
            aktiválja, amely képes „felülírni” a limbikus, érzelmi 
            reakciókat. Ez a folyamat nem spirituális jelenség, hanem 
            neuroplaszticitás: új idegi kapcsolatok jönnek létre.
          </p>
          <p className="mb-6">
            Ha megfigyeled a mintáidat, az idegrendszer szó szerint 
            áthuzalozza önmagát — és egyre könnyebben választasz új 
            reakciót.
          </p>

          {/* 5. A természet modellje */}
          <h2 className="section-title">A természet modellje az emberi viselkedésre</h2>
          <p className="mb-6">
            A természetben minden rendszer mintázatok alapján működik: 
            ciklusok, egyensúlyi állapotok, önszabályozás és alkalmazkodás.
          </p>
          <p className="mb-6">
            Az emberi pszichológia ugyanezt követi: reagál, alkalmazkodik, 
            tanul és új struktúrákat épít. Az „ösztönkód” valójában a 
            természet logikája az idegrendszerben.
          </p>

        </motion.div>

        <p className="text-gray-600 text-center max-w-xl mx-auto mt-10">
          A tudatosítás az első lépés ahhoz, hogy kilépj az ismétlődő érzelmi mintákból.
          Az Ösztönkód eszközei segítenek felismerni ezeket a ciklusokat a saját életedben.
          </p>

        {/* --- CTA: BrainMap elemzés --- */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Hogyan jelenik meg mindez konkrétan benned?
          </h3>

        

          <p className="text-gray-700 max-w-xl mx-auto mb-8">
            A tudományos minták mindenkinél hasonlóak.  
            A te érzelmi térképed viszont egyedi.  
            A BrainMap elemzés ezt teszi láthatóvá.
          </p>

          <Link
            to="/products/brainmap"
            className="inline-block px-6 py-2.5 rounded-xl text-base font-semibold
              bg-green-600 hover:bg-green-700 text-white
              shadow-md transition transform hover:scale-[1.03]"
          >
            Saját BrainMap elemzésem →
          </Link>

          <p className="text-sm text-gray-500 mt-3">
            Részletes, személyes érzelmi mintázatelemzés.
          </p>
        </div>
         <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-yellow-100/90 backdrop-blur-xl border border-yellow-500 text-yellow-800 p-6 rounded-xl shadow-lg leading-relaxed"
      >
        <strong>Jogi nyilatkozat:</strong>
        <p className="mt-2">
          Az oldalon található információk edukációs célt szolgálnak.
          Nem minősülnek pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
        </p>
        <p className="mt-3">
          Az itt leírt tartalom nem helyettesíti szakember felkeresését,
          és nem minősül diagnózisnak vagy terápiának.
        </p>
      </motion.div>
      </div>
    </div>
  );
}
