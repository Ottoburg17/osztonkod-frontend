// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import SEO from "../components/SEO";



export default function Disclaimer() {
  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

        {/* SEO */}
        <SEO
          title="Felelősségkizárás – Érzelmi Ösztönkód"
          description="Ismerd meg az Érzelmi Ösztönkód felelősségkizáró nyilatkozatát, a szolgáltatás jellegét, jogi korlátait és a használat feltételeit."
          canonical="https://www.osztonkod.hu/disclaimer"
          image="https://www.osztonkod.hu/og-image.jpg"
        />
                  

        {/* Háttér glow */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
        >
          <div className="absolute top-0 left-[25%] w-[55vw] h-[55vw] bg-green-600/15 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-[15%] w-[40vw] h-[40vw] bg-green-700/15 blur-[120px] rounded-full" />
        </motion.div>

        {/* Cím */}
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800"
          >
            Felelősségkizárás
          </motion.h1>
        </header>

        {/* Tartalom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-3xl shadow-xl p-10 space-y-10"
        >

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. A szolgáltatás jellege
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Az Ösztönkód alkalmazás önismereti és tudatosságot támogató
              digitális eszköz. Az alkalmazásban megjelenő tartalmak,
              kérdések és funkciók kizárólag tájékoztató jellegűek.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Nem minősül egészségügyi szolgáltatásnak
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Az alkalmazás nem nyújt orvosi, pszichológiai,
              pszichiátriai vagy mentálhigiénés szolgáltatást.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>nem alkalmas diagnózis felállítására</li>
              <li>nem helyettesíti az egészségügyi szakemberrel való konzultációt</li>
              <li>nem használható kezelés vagy terápia céljára</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Felhasználói felelősség
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Az alkalmazás használata a felhasználó saját felelősségére történik.
              A felhasználó által rögzített adatok, megfigyelések és megjegyzések
              kizárólag saját önreflexióját szolgálják.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Mentális egészséggel kapcsolatos figyelmeztetés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Amennyiben a felhasználó tartósan fennálló rossz közérzetet,
              szorongást, depressziót, pániktüneteket vagy önkárosító gondolatokat
              tapasztal, javasolt haladéktalanul megfelelő szakemberhez fordulni.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Az alkalmazás nem alkalmas krízishelyzetek kezelésére.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Felelősség kizárása
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Az adatkezelő és az alkalmazás üzemeltetője nem vállal felelősséget
              az alkalmazás használatából eredő közvetlen vagy közvetett károkért,
              döntésekért vagy következményekért.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Hatály
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Jelen felelősségkizárás az alkalmazás használatának teljes időtartama
              alatt érvényes.
            </p>

            <p className="text-gray-500 text-sm mt-4">
              Utolsó frissítés: 2026. január 16.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
