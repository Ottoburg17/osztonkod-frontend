// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

        {/* SEO */}
        <Helmet>
          <title>Felhasználási feltételek – Ösztönkód</title>
          <meta
            name="description"
            content="Felhasználási feltételek az Ösztönkód weboldal és szolgáltatások igénybevételéhez."
          />

          <link rel="canonical" href="https://osztonkod.hu/terms" />

          <meta property="og:title" content="Felhasználási feltételek – Ösztönkód" />
          <meta property="og:description" content="Felhasználási feltételek az Ösztönkód weboldal használatához." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://osztonkod.hu/terms" />
          <meta property="og:site_name" content="Ösztönkód" />
          <meta property="og:locale" content="hu_HU" />
        </Helmet>

        {/* Háttér glow */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        >
          <div className="absolute top-0 left-[20%] w-[60vw] h-[60vw] bg-emerald-500/20 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] bg-emerald-700/20 blur-[120px] rounded-full" />
        </motion.div>

        {/* Cím */}
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800"
          >
            Felhasználási feltételek
          </motion.h1>
        </header>

        {/* Tartalom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-xl p-10 space-y-10"
        >

          {/* 1 */}
           <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. A szolgáltató adatai
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Szolgáltató neve: Németh Ottó<br />
              Jogállás: adószámos magánszemély<br />
              Székhely: 1141 Budapest, Cinkotai út 91/C<br />
              Kapcsolattartási e-mail: ottoburg17@gmail.com
            </p>
          </section>


          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. A szolgáltatás tárgya
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Az Ösztönkód weboldal önismereti és edukációs célú digitális tartalmakat,
              valamint interaktív funkciókat biztosít a felhasználók számára.
              A szolgáltatás nem minősül egészségügyi, pszichológiai vagy
              mentálhigiénés szolgáltatásnak.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Regisztráció
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A weboldal egyes funkciói regisztrációhoz kötöttek. A felhasználó
              köteles valós adatokat megadni, és gondoskodni a belépési adatai
              biztonságos kezeléséről.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. A felhasználó kötelezettségei
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>a szolgáltatás jogszerű használata</li>
              <li>más felhasználók jogainak tiszteletben tartása</li>
              <li>a rendszer rendeltetésszerű használata</li>
              <li>tilos a tartalmak jogosulatlan másolása vagy terjesztése</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Tiltott magatartások
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tilos a szolgáltatás olyan módon történő használata, amely
              sérti a jogszabályokat, mások jogait, vagy a rendszer biztonságát.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Digitális tartalmak sajátosságai
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A szolgáltatás digitális tartalmakat tartalmaz, amelyek
              azonnal hozzáférhetővé válhatnak. A felhasználó tudomásul veszi,
              hogy a digitális tartalom sajátosságai miatt az elállási jog
              korlátozott lehet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
             6.1 Előfizetés és fizetés
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A szolgáltatás egyes funkciói előfizetéshez kötöttek.
              Az előfizetés havi rendszerességgel, automatikusan kerül terhelésre
              a felhasználó által választott fizetési módszerrel.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Az előfizetés lemondása a felhasználói fiók (Dashboard) felületén
              elérhető „Előfizetés kezelése” menüponton keresztül történik,
              amely a Stripe által biztosított ügyfélportálra irányít.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A lemondás a következő számlázási ciklusra vonatkozik,
              a már kifizetett időszak végéig a szolgáltatás elérhető marad.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              A fizetés a Stripe rendszerén keresztül történik.
              A szolgáltató a fizetési adatokhoz nem fér hozzá,
              azokat kizárólag a Stripe kezeli.
            </p>
          </section>

            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
             6.2 Elállási jog digitális tartalom esetén
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A felhasználó tudomásul veszi, hogy digitális tartalom
              azonnali hozzáférése esetén – amennyiben a teljesítés
              a felhasználó kifejezett hozzájárulásával megkezdődik –
              az elállási jog a vonatkozó jogszabályok alapján megszűnik.
            </p>
          </section>



          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. Felelősségkizárás
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A weboldalon található információk tájékoztató jellegűek.
              A szolgáltató nem vállal felelősséget a tartalmak felhasználásából
              eredő közvetlen vagy közvetett károkért.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. A szerződés megszűnése
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A felhasználó jogosult fiókját bármikor megszüntetni.
              A szolgáltató jogosult a szerződést megszüntetni, amennyiben
              a felhasználó megsérti a jelen feltételeket.
            </p>
          </section>

            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
             8.1 Fiók felfüggesztése
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A szolgáltató jogosult a felhasználói fiókot ideiglenesen
              felfüggeszteni vagy törölni, amennyiben a felhasználó
              megsérti a jelen feltételeket, jogszabályt sért,
              vagy a rendszer biztonságát veszélyezteti.
            </p>
          </section>



          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              9. Panaszkezelés
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A felhasználó panaszát a szolgáltató elérhetőségein
              terjesztheti elő.
            </p>
          </section>



          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              10. Irányadó jog
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Jelen feltételekre a magyar jog az irányadó.
            </p>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Jogvita rendezése
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A felek törekednek a vitás kérdések békés úton történő rendezésére.
              Amennyiben ez nem vezet eredményre, a magyar bíróságok
              rendelkeznek kizárólagos illetékességgel.
            </p>
          </section>


          {/* 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              11. A feltételek hatálya
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Jelen felhasználási feltételek a közzététel napjától hatályosak,
              és visszavonásig érvényesek.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Utolsó frissítés: 2025. január 1.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
