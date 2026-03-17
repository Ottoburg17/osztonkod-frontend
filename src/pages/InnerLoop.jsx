import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function InnerLoop() {

  const cycle = [
    {
      title: "1. Kiváltó inger (trigger)",
      content:
        "Valami, ami korábban már „jutalomhoz” kapcsolódott.\n\nPéldául: egy hirdetés, egy értesítő hang, unalom, stressz, magány.",
    },
    {
      title: "2. Viselkedés (action)",
      content:
        "Az inger hatására végrehajtott cselekvés.\n\nPélda: megnyitod a TikTokot, cigire gyújtasz, iszol egy pohár bort.",
    },
    {
      title: "3. Dopamin-löket (reward)",
      content:
        "Az agy dopamint szabadít fel, és „megjutalmaz”.\n\nA dopamin a viselkedés ismételhetőségét értékeli, nem annak hasznosságát.",
    },
    {
      title: "4. Rögzülés (reinforcement)",
      content:
        "Minél több dopamin szabadul fel, annál inkább megtanulja az agy, hogy ezt érdemes újra csinálni.\n\nA viselkedés egyre automatikusabb lesz → szokás → rögzülés → kényszer → függőség.",
    },
  ];

  const modernExamples = [
    {
      behavior: "Közösségi média scroll",
      reward: "Érdekesség, like-ok, újdonság",
      risk: "Fókuszvesztés, alvászavar, dopamin-kimerülés",
    },
    {
      behavior: "Szerencsejáték",
      reward: "Véletlenszerű nyerés",
      risk: "Magas függőségi kockázat",
    },
    {
      behavior: "Pornófogyasztás",
      reward: "Erős dopaminlöket vizuális ingerre",
      risk: "Intimitási zavarok, elvárások torzulása",
    },
    {
      behavior: "YouTube 'next video'",
      reward: "Új tartalom",
      risk: "Órák elvesztése, halogatás",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">

       <Helmet>
  <title>Dopamin ciklus – Hogyan alakul ki a jutalmazási kör | Ösztönkód</title>

      <meta
        name="description"
        content="Ismerd meg a dopamin-alapú jutalmazási ciklus működését: trigger, viselkedés, jutalom és rögzülés. Miért válnak bizonyos szokások automatikussá?"
      />

      <link rel="canonical" href="https://www.osztonkod.hu/dopamin-ciklus" />

      <meta property="og:title" content="Dopamin ciklus – Hogyan működik a jutalmazási kör" />
      <meta property="og:description" content="A dopamin-alapú jutalmazási ciklus működése és hatása a szokások kialakulására." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.osztonkod.hu/dopamin-ciklus" />
      <meta property="og:image" content="https://www.osztonkod.hu/og-image.jpg" />
      <meta property="og:site_name" content="Ösztönkód" />
      <meta property="og:locale" content="hu_HU" />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Dopamin ciklus – Hogyan működik a jutalmazási kör",
          "description": "A dopamin-alapú jutalmazási ciklus működése és hatása a szokások kialakulására.",
          "author": {
            "@type": "Organization",
            "name": "Ösztönkód"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ösztönkód"
          },
          "mainEntityOfPage": "https://osztonkod.hu/dopamin-ciklus"
        }
        `}
      </script>
    </Helmet>

      <div className="px-6 py-24 md:pt-32 pb-20 max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Hogyan működik a dopamin-alapú jutalmazási ciklus?
        </motion.h1>

        {/* MAIN CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl border border-green-200 shadow-xl rounded-3xl p-10 space-y-10 leading-relaxed"
        >

          {/* CYCLE */}
          <div className="grid gap-8 md:grid-cols-2">
            {cycle.map((step, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-xl p-6 border border-green-100"
              >
                <h2 className="text-xl font-semibold text-green-700 mb-3">
                  {step.title}
                </h2>
                <p className="whitespace-pre-line text-gray-700">
                  {step.content}
                </p>
              </div>
            ))}
          </div>

          {/* IDŐBELI VÁLTOZÁS */}
          <div className="bg-white p-6 rounded-xl shadow border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              📉 Mi történik idővel?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Deszenzitizáció:</strong> ugyanaz a viselkedés egyre kevesebb dopamint vált ki.</li>
              <li><strong>Anticipáció:</strong> az agy már a várakozás során dopamint termel.</li>
              <li><strong>Kontrollvesztés:</strong> a viselkedés reflexszerűvé válik.</li>
              <li><strong>Negatív spirál:</strong> unalom → TikTok → fáradtság → még több unalom.</li>
            </ul>
          </div>

          {/* MODERN PÉLDÁK */}
          <div className="bg-white p-6 rounded-xl shadow border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              📱 Modern példák
            </h2>

            <div className="overflow-x-auto -mx-6 px-6">
              <table className="min-w-[700px] w-full border-collapse">
                <thead className="bg-green-100 text-green-700">
                  <tr>
                    <th className="p-3 border-b border-green-200">Viselkedés</th>
                    <th className="p-3 border-b border-green-200">Jutalom</th>
                    <th className="p-3 border-b border-green-200">Veszély</th>
                  </tr>
                </thead>
                <tbody>
                  {modernExamples.map((ex, i) => (
                    <tr key={i} className="odd:bg-white even:bg-green-50 text-gray-800">
                      <td className="p-3 border-b border-gray-200">{ex.behavior}</td>
                      <td className="p-3 border-b border-gray-200">{ex.reward}</td>
                      <td className="p-3 border-b border-gray-200">{ex.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* KIÚT */}
          <div className="bg-white p-6 rounded-xl shadow border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🔓 Megszakítás, kiút
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Dopamin-visszafogás:</strong> nem teljes megvonásról van szó.</li>
              <li><strong>Lassabb élvezetek:</strong> olvasás, zene, séta.</li>
              <li><strong>Új szokás kialakítása:</strong> stresszre séta + légzés.</li>
              <li><strong>Késleltetett jutalom:</strong> feladat után jutalom.</li>
              <li><strong>Terápiás megközelítések:</strong> viselkedésterápia mint keret.</li>
            </ul>
          </div>

        </motion.div>

        {/* LEGAL NOTICE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-yellow-100/90 border border-yellow-500 text-yellow-800 p-6 rounded-xl shadow-lg leading-relaxed"
        >
          <strong>Jogi nyilatkozat:</strong>
          <p className="mt-2">
            Az oldalon található tartalom edukációs önreflexiós célt szolgál.
            Nem minősül pszichológiai, mentálhigiénés vagy egészségügyi szolgáltatásnak.
          </p>
          <p className="mt-3">
           Az eszköz nem nyújt diagnózist, kezelést vagy tanácsadást,
          és nem helyettesíti szakember felkeresését.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
