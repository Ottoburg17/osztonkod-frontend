// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";

export default function CookiePolicy() {
  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

        {/* SEO */}
        <Helmet>
          <title>Cookie tájékoztató – Ösztönkód</title>

          <meta
            name="description"
            content="Cookie tájékoztató az Ösztönkód weboldalon alkalmazott sütikről, helyi adattárolásról és Google Analytics használatáról."
          />

          <link
            rel="canonical"
            href="https://osztonkod.hu/cookie-tajekoztato"
          />

          <meta
            property="og:title"
            content="Cookie tájékoztató – Ösztönkód"
          />

          <meta
            property="og:description"
            content="Tájékoztató az Ösztönkód weboldalon alkalmazott sütikről és helyi adattárolásról."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://osztonkod.hu/cookie-tajekoztato"
          />

          <meta property="og:site_name" content="Ösztönkód" />
          <meta property="og:locale" content="hu_HU" />
        </Helmet>

        {/* Háttér glow */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "easeInOut",
          }}
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
            Cookie tájékoztató
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
              1. A tájékoztató célja
            </h2>

            <p className="text-gray-700 leading-relaxed">
                Jelen Cookie tájékoztató közzétételekor az Ösztönkód weboldal nem alkalmaz
                aktív marketing célú sütiket vagy marketingkövető technológiákat
                (például Meta Pixel, Google Ads Remarketing vagy hasonló szolgáltatásokat).
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
                Amennyiben a jövőben ilyen technológiák kerülnek bevezetésre, a Cookie
                tájékoztató ennek megfelelően frissítésre kerül, és a marketing célú
                sütik kizárólag a felhasználó előzetes hozzájárulását követően kerülnek
                alkalmazásra.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Az Ösztönkód célja, hogy a személyes adatok és a felhasználók
              magánszférájának védelmét a vonatkozó magyar és európai uniós
              jogszabályoknak megfelelően biztosítsa, valamint kizárólag olyan
              technológiákat alkalmazzon, amelyek a weboldal megfelelő
              működéséhez vagy a felhasználó által elfogadott célokhoz
              szükségesek.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Mik azok a sütik?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A sütik (cookie-k) kis méretű adatfájlok, amelyeket a weboldal a
              felhasználó böngészőjében helyez el annak érdekében, hogy
              megjegyezze bizonyos beállításokat, javítsa a felhasználói élményt,
              valamint statisztikai információkat gyűjtsön a weboldal
              használatáról.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Az Ösztönkód a hagyományos sütik mellett a böngésző helyi
              adattárolását (Local Storage) is használja bizonyos beállítások
              megőrzésére. Ez lehetővé teszi például a felhasználó
              cookie-beállításainak megjegyzését anélkül, hogy minden látogatás
              során ismételten döntést kellene hoznia.
            </p>
          </section>

                  {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Az Ösztönkód által alkalmazott technológiák
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Az Ösztönkód weboldal a megfelelő működés biztosítása érdekében
              kizárólag olyan sütiket és helyi adattárolási technológiákat
              alkalmaz, amelyek a szolgáltatás működéséhez vagy a felhasználó
              hozzájárulásával történő statisztikai elemzéshez szükségesek.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Szükséges technikai adattárolás
            </h3>

            <p className="text-gray-700 leading-relaxed">
              A weboldal a böngésző Local Storage funkcióját használja annak
              érdekében, hogy megőrizze a felhasználó cookie-beállításait.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              Ez lehetővé teszi, hogy a rendszer megjegyezze, a felhasználó
              milyen hozzájárulást adott a sütik használatához, így a Cookie
              Banner nem jelenik meg minden oldalbetöltéskor újra.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-5">
              <li>a cookie-beállítások megőrzése;</li>
              <li>a felhasználó hozzájárulásának tárolása;</li>
              <li>a weboldal megfelelő működésének biztosítása.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-5">
              Ez a helyi adattárolás nem szolgál marketing- vagy profilalkotási
              célokat, kizárólag a felhasználó választásának megőrzésére
              szolgál.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Analitikai sütik (Google Analytics)
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Az Ösztönkód a Google Analytics szolgáltatást használhatja a
              weboldal látogatottságának és használatának statisztikai
              elemzésére.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              A Google Analytics kizárólag akkor aktiválódik, ha a felhasználó
              ehhez előzetesen hozzájárul. Amennyiben a felhasználó nem fogadja
              el az analitikai sütiket, a Google Analytics nem töltődik be,
              és statisztikai adatgyűjtés nem történik.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Az analitikai adatok felhasználásának célja különösen:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>a weboldal használatának elemzése;</li>
              <li>a felhasználói élmény fejlesztése;</li>
              <li>a weboldal teljesítményének javítása;</li>
              <li>hibák és technikai problémák felismerése;</li>
              <li>összesített látogatottsági statisztikák készítése.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-5">
              Az Ösztönkód a Google Analytics használata során IP-cím
              anonimizálást alkalmaz, amely csökkenti a felhasználók
              azonosíthatóságát.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              A Google Analytics kizárólag a felhasználó hozzájárulását követően
              töltődik be és kezd adatokat gyűjteni.
            </p>
          </section>

                    {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Marketing sütik
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Az Ösztönkód rendszere technikailag felkészült marketing célú
              hozzájárulások kezelésére, azonban jelen Cookie tájékoztató
              közzétételekor a weboldal nem alkalmaz aktív marketingkövető
              szolgáltatásokat (például Meta Pixel, Google Ads Remarketing vagy
              hasonló technológiákat).
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Amennyiben a jövőben marketing célú sütik vagy követési
              technológiák kerülnek bevezetésre, a Cookie tájékoztató ennek
              megfelelően frissítésre kerül.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. A hozzájárulás kezelése
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A felhasználó első látogatásakor Cookie Banner jelenik meg,
              amelyben lehetősége van kizárólag a szükséges technikai
              adattárolás elfogadására, vagy valamennyi választható kategória
              elfogadására.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              A hozzájárulás bármikor módosítható vagy visszavonható a weboldalon
              elérhető <strong>Cookie beállítások</strong> menüpont
              segítségével.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              A hozzájárulás visszavonását követően a rendszer törli a korábban
              tárolt cookie-beállításokat, így a Cookie Banner ismét
              megjelenik, és a felhasználó új döntést hozhat.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. A sütik kezelése a böngészőben
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A legtöbb internetes böngésző lehetőséget biztosít a sütik
              megtekintésére, törlésére vagy letiltására.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Felhívjuk a figyelmet arra, hogy bizonyos sütik vagy helyi
              adattárolási technológiák letiltása esetén előfordulhat, hogy a
              weboldal egyes funkciói nem működnek megfelelően.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. Kapcsolat
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Szolgáltató neve: Németh Ottó
              <br />
              Jogállás: adószámos magánszemély
              <br />
              Székhely: 1141 Budapest, Cinkotai út 91/C
              <br />
              Kapcsolattartási e-mail: ottoburg17@gmail.com
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              9. A Cookie tájékoztató módosítása
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A szolgáltató jogosult jelen Cookie tájékoztatót módosítani,
              amennyiben ezt jogszabályváltozás, a weboldalon alkalmazott
              technológiák változása vagy egyéb működési ok indokolja.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              A mindenkor hatályos Cookie tájékoztató a weboldalon kerül
              közzétételre.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              10. Hatálybalépés
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Jelen Cookie tájékoztató a közzététel napjától hatályos és
              visszavonásig érvényes.
            </p>

            <p className="text-gray-500 text-sm mt-4">
              Utolsó frissítés: 2026. július 17.
            </p>
          </section>

          </motion.div>
      </div>
    </div>
  );
}

