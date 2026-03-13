// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";



export default function About() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

        {/* ----- SEO ----- */}
        <Helmet>
          <title>Németh Ottó – Az Érzelmi Ösztönkód önismereti rendszer megalkotója</title>
          <meta
            name="description"
            content="Ismerd meg az Érzelmi Ösztönkód történetét és Németh Ottó gondolkodását az ismétlődő érzelmi mintákról, önreflexióról és tudatos működésről."
          />

          <link rel="canonical" href="https://osztonkod.hu/about" />

          <meta property="og:title" content="Németh Ottó – Az Érzelmi Ösztönkód megalkotója" />
          <meta property="og:description" content="Ismerd meg az Érzelmi Ösztönkód történetét és a mögötte álló gondolkodást." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://osztonkod.hu/about" />
          <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
          <meta property="og:site_name" content="Érzelmi Ösztönkód" />
          <meta property="og:locale" content="hu_HU" />

        </Helmet>

        {/* ----- HÁTTÉR GLOW ----- */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        >
          <div className="absolute top-0 left-[20%] w-[60vw] h-[60vw] bg-green-600/20 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] bg-green-700/20 blur-[120px] rounded-full" />
        </motion.div>

        {/* ----- FEJLÉC ----- */}
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-green-600 mb-12"
          >
            Németh Ottó & Az Érzelmi Ösztönkód
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
           Az Érzelmi Ösztönkód egy rendszerszintű önreflexiós keret az ismétlődő érzelmi működések felismerésére és tudatos megszakítására.
          </motion.p>
        </header>

        {/* ----- MANIFESTO BLOKK ----- */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, }}
          className="mb-28 text-center px-6 py-16 bg-green-100/50 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">
            Nem a körülmények ismétlődnek az életedben. <br /> A mintáid.
          </h2>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>Ugyanaz a vita. Ugyanaz a döntési bénultság. Ugyanaz a visszalépés, amikor végre haladnál.</p>

            <p>Nem azért, mert gyenge vagy. Nem azért, mert elrontottad.</p>

            <p>Hanem mert egy automatizmus vezérel.</p>

            <p>
              Az Ösztönkód azért létezik, hogy ezt felismerd.  
              Hogy lásd, mi fut benned újra és újra.  
              Hogy megszakítsd.
            </p>

            <p>
              Nem külső megmentővel. Nem motivációval. Nem erőltetéssel.  
              Hanem a saját erődből.
            </p>

            <p className="font-semibold text-green-600">
              Amikor felismered a mintát, visszaveszed az irányítást.  
              És amikor visszaveszed az irányítást, nem csak reagálsz többé.  
              Hanem élsz.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Az Ösztönkód egy rendszerszintű megközelítés az ismétlődő érzelmi működések felismerésére és tudatos megszakítására.
            </p>

          </div>
        </motion.section>


        {/* ----- FŐ TARTALOM ----- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/90 backdrop-blur-xl border border-green-200
            rounded-3xl shadow-xl p-10 space-y-12
          "
        >
          {/* LÉNYEG */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
              Az Érzelmi Ösztönkód lényege
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Az Érzelmi Ösztönkód olyan ismétlődő érzelmi reakciómintákra utal,
              amelyek különböző helyzetekben automatikusan megjelenhetnek,
              és befolyásolhatják a viselkedést, a kapcsolódást és a döntési folyamatokat.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Ezek a minták nem tudatos elemzés eredményei,
              hanem megszokott működések,
              amelyek idővel rögzülnek és újra megjelennek.
            </p>
          </section>

          {/* KIALAKULÁS */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
              Hogyan jönnek létre ezek a működések?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Az érzelmi reakciók és viselkedési minták az élet során formálódnak,
              korábbi tapasztalatok, környezeti hatások és egyéni adottságok mentén.
              Ezek nem diagnózisok és nem értelmezések,
              hanem megfigyelhető, visszatérő működések.
            </p>
          </section>

          {/* CÉL */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
              Az Ösztönkód célja
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Az Ösztönkód célja nem a megváltoztatás vagy javítás,
              hanem egy olyan gondolkodási és megfigyelési keret biztosítása,
              amely teret ad annak észrevételéhez,
              hogy egy adott helyzetben mi történik belül.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              A rendszer nem minősít, nem ad tanácsot,
              és nem kínál kész megoldásokat.
              A hangsúly a tudatosabb rálátáson van.
            </p>
          </section>

          {/* ALKOTÓ */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
              Az Ösztönkód megalkotása
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Az Ösztönkód egy strukturált önreflexiós rendszer,
              amely különböző gondolkodási és megfigyelési szempontokat integrál
              egy közérthető, gyakorlati keretbe.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              A rendszer célja nem szakmai értelmezés,
              hanem a saját működésre való rálátás támogatása.
            </p>
          </section>
        </motion.div>

        {/* SZEMÉLYES RÉSZ */}
       <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-20 px-8 py-14 bg-green-100/50 rounded-3xl"
        >
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-green-600 mb-6"
          >
            Miért hoztam létre az Ösztönkódot?
          </motion.h3>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-700 leading-relaxed mb-4"
          >
            Az Ösztönkód nem elméletből született.
            Saját felismerésekből.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-700 leading-relaxed mb-4"
          >
            Újra és újra azt tapasztaltam,
            hogy bizonyos helyzetekben ugyanaz a reakció jelenik meg.
            Ugyanaz a belső feszültség.
            Ugyanaz a döntési bizonytalanság.
            Ugyanaz a visszalépés akkor, amikor előre kellett volna menni.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-700 leading-relaxed mb-4"
          >
            Sokáig azt hittem, a körülmények ismétlődnek.
            Később értettem meg,
            hogy a működésem ismétli önmagát.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-700 leading-relaxed mb-4"
          >
            A fordulópont nem egy megoldás volt.
            Hanem egy felismerés.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-700 leading-relaxed mb-4"
          >
            Amikor nem megváltoztatni akartam magam,
            hanem elkezdtem megfigyelni a mintát,
            minden átrendeződött.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-700 leading-relaxed font-medium"
          >
            Az Ösztönkód ebből a felismerésből született:
            ha látod a működést, megszakíthatod.
            És ha megszakítod, visszaveszed az irányítást.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center text-xl md:text-2xl font-semibold text-green-700 mt-16"
          >
            Az Ösztönkód nem megoldásokat ad.
            Hanem rálátást.
          </motion.p>
        </motion.section>



      <section className="mt-24 text-center bg-white/90 backdrop-blur-xl border border-green-200  rounded-3xl shadow-xl p-10 space-y-12">
        <h3 className="text-2xl font-bold text-green-600 mb-6">
          Mit képviselek?
        </h3>
        <p className="space-y-3 text-gray-700 max-w-2xl mx-auto leading-relaxed">
        <span className="block">A tudatos működést az automatizmus helyett.</span>
        <span className="block">A belső felelősséget a külső hibáztatás helyett.</span>
        <span className="block">A megfigyelést az önjavítás kényszere helyett.</span>

        <span className="block mt-4">A rálátást az önkritika helyett.</span>
        <span className="block">A jelenlétet a reflexszerű reakciók helyett.</span>
        <span className="block">A minták felismerését a tünetek ismétlése helyett.</span>

        <span className="block mt-4 font-medium text-green-700">
          A döntést a sodródás helyett.
        </span>
      </p>

      </section>

      <div className="text-center mt-20">
        <p className="text-gray-600 mb-6">
          Ha szeretnéd saját működésedben is felismerni a mintát:
        </p>

        <Link 
        to="/products/struggle-breaker"
        className="px-10 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl">
          Fedezd fel az Ösztönkód rendszert
        </Link>

      </div>


        {/* ----- JOGI NYILATKOZAT ----- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            mt-16 bg-yellow-100/90 border-yellow-500
            text-yellow-800 p-6 rounded-xl shadow-lg leading-relaxed
          "
        >
          <strong>Jogi nyilatkozat:</strong>
          <p className="mt-2">
            A weboldalon található tartalom edukációs és önreflexiós célt szolgál.
            Nem minősül pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
          </p>

          <p className="mt-3">
            Az Ösztönkód nem nyújt diagnózist, kezelést vagy tanácsadást,
            és nem helyettesíti szakember felkeresését.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
