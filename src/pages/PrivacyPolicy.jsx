// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

        {/* SEO */}

        <Helmet>
        <title>Adatkezelési tájékoztató – Ösztönkód</title>

        <meta
          name="description"
          content="Adatkezelési tájékoztató Németh Ottó adószámos magánszemély által üzemeltetett weboldalhoz."
        />

        <link rel="canonical" href="https://osztonkod.hu/privacy" />
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
            Adatkezelési tájékoztató
          </motion.h1>
        </header>

        {/* Tartalom kártya */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-xl p-10 space-y-10"
        >

         {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Az adatkezelő adatai
            </h2>

            <p className="text-gray-700 leading-relaxed">
              <strong>Adatkezelő neve:</strong><br />
              Németh Ottó
            </p>

            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Jogállás:</strong><br />
              adószámos magánszemély
            </p>

            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Székhely / lakcím:</strong><br />
              1141 Budapest, Cinkotai út 91/C
            </p>

            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Kapcsolattartási e-mail:</strong><br />
              ottoburg17@gmail.com
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Az adatkezelő adatvédelmi tisztviselőt nem jelölt ki, mivel erre jogszabály alapján nem köteles.
            </p>
          </section>


          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Az adatkezelés célja és jogalapja
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Az adatkezelő a weboldalon / alkalmazásban nyújtott szolgáltatások biztosítása érdekében
              kezeli a felhasználók személyes adatait.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Felhasználói fiók létrehozása – szerződés teljesítése</li>
              <li>Bejelentkezés, azonosítás – szerződés teljesítése</li>
              <li>Profiladatok megjelenítése – szerződés teljesítése</li>
              <li>Jelszó visszaállítása – jogos érdek</li>
              <li>Rendszerbiztonság – jogos érdek</li>
            </ul>

            {/* GDPR-kötelező kiegészítés */}
            <p className="text-gray-700 mt-4">
                A személyes adatok megadása a felhasználói fiók létrehozásához szükséges.
                Az adatok megadása nélkül a szolgáltatás nem vehető igénybe.
            </p>

          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. A kezelt személyes adatok köre
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>név</li>
              <li>e-mail cím</li>
              <li>jelszó (hash-elt formában)</li>
              <li>felhasználói azonosító</li>
              <li>admin jogosultság jelölése</li>
              <li>jelszó-visszaállító token és lejárati ideje</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Az adatkezelő IP-címet és eszközazonosítót nem naplóz.
            </p>
          </section>


          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Technikai adatkezelés
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A rendszer JWT alapú hitelesítést alkalmaz. A token 7 napig érvényes,
              és HTTP kérés fejlécében kerül továbbításra.
            </p>
          </section>




          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Adatfeldolgozók és adattovábbítás
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Az adatkezelő a szolgáltatás működtetése érdekében az alábbi
              adatfeldolgozókat veszi igénybe:
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Tárhelyszolgáltató:</strong><br />
              [NÉV IDE]<br />
              [CÍM / SZÉKHELY]
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>E-mail szolgáltató:</strong><br />
              [NÉV IDE]<br />
              [SZÉKHELY]
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Fizetési szolgáltató:</strong><br />
              Stripe, Inc.<br />
              510 Townsend Street, San Francisco, CA 94103, USA<br />
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 hover:underline"
              >
                https://stripe.com
              </a>
            </p>

            <p className="text-gray-700 leading-relaxed mt-6">
              A Stripe az Európai Unió területén kívüli adatfeldolgozónak minősül.
              Az adattovábbítás az Európai Bizottság által elfogadott megfelelő
              garanciák (pl. Standard Contractual Clauses) alapján történik.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Marketing célú adattovábbítás nem történik.
            </p>
          </section>


          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Jelszó-visszaállítás 
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A jelszó-visszaállításhoz generált token legfeljebb 1 óráig érvényes,
              majd automatikusan törlésre kerül.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Az adatok megőrzési ideje
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Felhasználói fiók: törlésig</li>
              <li>Jelszó-visszaállító token: max. 1 óra</li>
              <li>Admin jogosultság: fiók fennállásáig</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. Adattovábbítás
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Az adatkezelő tárhely- és e-mail szolgáltatót vesz igénybe.
              Marketing célú adattovábbítás nem történik.
            </p>
          </section>

          
          {/* 8 */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                8. Adatbiztonság
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Az adatkezelő megfelelő technikai és szervezési intézkedéseket alkalmaz
                a személyes adatok biztonsága érdekében, különösen a jogosulatlan hozzáférés,
                megváltoztatás, továbbítás vagy törlés megakadályozására.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>jelszavak biztonságos, egyirányú hash-elése (bcrypt)</li>
                <li>JWT token alapú hitelesítés</li>
                <li>jogosultságkezelés és adminisztrátori korlátozások</li>
                <li>adatbázis-hozzáférések védelme</li>
            </ul>
            </section>

            {/* 9 */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                9. Az érintettek jogai
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                Az érintett jogosult arra, hogy az adatkezelőtől tájékoztatást kapjon
                személyes adatai kezeléséről, valamint az alábbi jogokat gyakorolja:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>hozzáférés személyes adataihoz</li>
                <li>adatainak helyesbítése</li>
                <li>adatainak törlése</li>
                <li>adatkezelés korlátozása</li>
                <li>tiltakozás az adatkezelés ellen</li>
                <li>adathordozhatósághoz való jog</li>
            </ul>
            <p className="text-gray-700 mt-4">
                A jogok gyakorlása az adatkezelő elérhetőségein keresztül kezdeményezhető.
            </p>
            </section>

            {/* 10 */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                10. Panasztételi jog
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Amennyiben az érintett megítélése szerint az adatkezelés nem felel meg
                a vonatkozó jogszabályoknak, jogosult panaszt benyújtani a felügyeleti
                hatóságnál:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong><br />
                1055 Budapest, Falk Miksa utca 9–11.<br />
                <a
                href="https://www.naih.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-emerald-700 hover:underline"
                >
                www.naih.hu
                </a>
            </p>
            </section>

            {/* 11 */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                11. Automatizált döntéshozatal, profilalkotás
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Az adatkezelés során automatizált döntéshozatal és profilalkotás
                nem történik.
            </p>
            </section>

            {/* 12 */}
            <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                12. Az adatkezelési tájékoztató hatálya
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Jelen adatkezelési tájékoztató a közzététel napjától hatályos,
                és visszavonásig érvényes. Az adatkezelő fenntartja a jogot
                a tájékoztató egyoldalú módosítására.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Utolsó frissítés: 2025. január 1.
            </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                13. Önismereti bejegyzések és megfigyelések
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Az alkalmazás egyes funkciói lehetőséget biztosítanak a felhasználó számára
                szöveges megjegyzések, érzetek és szubjektív tapasztalatok rögzítésére
                (pl. napi megfigyelések).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ezek az adatok:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>a felhasználó önkéntes megadásán alapulnak</li>
                <li>kizárólag önmegfigyelési és tudatossági célt szolgálnak</li>
                <li>nem minősülnek egészségügyi adatnak</li>
                <li>nem kerülnek diagnosztikai vagy terápiás célú feldolgozásra</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                Az adatkezelő nem végez automatizált értékelést,
                nem hoz döntést a felhasználó mentális állapotáról,
                és nem nyújt egészségügyi szolgáltatást.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                14. Előfizetéssel kapcsolatos adatkezelés
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Az alkalmazás egyes funkciói előfizetéshez kötöttek.
                A fizetések lebonyolítása külső szolgáltató (Stripe) igénybevételével történik.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Az adatkezelő nem fér hozzá a felhasználó bankkártya- vagy fizetési adataihoz.
                A fizetéssel kapcsolatos adatkezelésért a Stripe saját adatkezelési
                feltételei szerint felel.
              </p>

              <p className="text-gray-700 leading-relaxed">
               Az előfizetés bármikor lemondható a felhasználói fiók (Dashboard)
               felületén elérhető „Előfizetés kezelése” menüponton keresztül,
               amely a Stripe által biztosított ügyfélportálra irányít.
              </p>
            </section>

        </motion.div>
      </div>
    </div>
  );
}
