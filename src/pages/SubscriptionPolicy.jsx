// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import SEO from "../components/SEO";


export default function SubscriptionPolicy() {
  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">

        {/* SEO */}
        <SEO
        title="Előfizetés és lemondás"
        description="Az Ösztönkód alkalmazás előfizetési és lemondási feltételei. Információk a havi előfizetésről, a számlázásról és a Stripe fizetési rendszer működéséről."
        canonical="https://www.osztonkod.hu/jogi/elofizetes"
        image="https://www.osztonkod.hu/og-image.jpg"
      />


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
            Előfizetés és lemondás
          </motion.h1>
        </header>

        {/* Tartalom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl border border-emerald-200 rounded-3xl shadow-xl p-10 space-y-6"
        >

          <p className="text-gray-700 leading-relaxed">
            Az Ösztönkód alkalmazás egyes funkciói havi előfizetéshez kötöttek.
            Az előfizetés havi rendszerességgel kerül terhelésre a felhasználó által
            megadott fizetési módon keresztül.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Az előfizetés megkötését követően a felhasználó számára megjelenik az
            <strong> előfizetés kezelése</strong> menüpont a felhasználói fiók
            (Dashboard) felületén.
          </p>

          <p className="text-gray-700 leading-relaxed font-semibold">
            Az előfizetés lemondásának menete:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>a felhasználó bejelentkezik a saját fiókjába,</li>
            <li>a Dashboard oldalon megnyitja az „Előfizetés kezelése” menüpontot,</li>
            <li>innen egy külső, biztonságos felületen (Stripe ügyfélportál) kezdeményezheti az előfizetés lemondását.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Az előfizetés bármikor lemondható, külön indoklás nélkül.
            A lemondás a következő számlázási ciklusra vonatkozóan lép életbe.
          </p>

          <p className="text-gray-700 leading-relaxed font-semibold">
            Lemondás esetén:
          </p>

          <p className="text-gray-700 leading-relaxed">
            A lemondás nem szünteti meg azonnal a hozzáférést,
            a szolgáltatás a már kifizetett időszak végéig változatlanul elérhető marad.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>az előfizetés a már kifizetett időszak végéig aktív marad,</li>
            <li>a következő számlázási ciklusban további terhelés nem történik,</li>
            <li>a megkezdett számlázási időszakra visszatérítés nem jár.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            A felhasználó tudomásul veszi, hogy digitális tartalomról lévén szó,
            az előfizetés aktiválásával és a szolgáltatás azonnali igénybevételével
            az elállási jog a vonatkozó jogszabályok alapján megszűnik.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            A fizetések lebonyolítása külső szolgáltató (Stripe) igénybevételével történik.
            Az Ösztönkód üzemeltetője nem fér hozzá a felhasználó bankkártya-
            vagy fizetési adataihoz, azokat kizárólag a Stripe kezeli
            saját adatkezelési feltételei szerint.
          </p>

        </motion.div>
      </div>
    </div>
  );
}
