// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { schemaDetails } from "../data/schemaDetails";

export default function SchemaDetail() {
  const { schemaId } = useParams();
  const schema = schemaDetails[schemaId];
  
  if (!schema) {
    return (
      <div className="text-center text-red-600 text-xl mt-20">
        Ez az ösztönkód nem létezik.
      </div>
    );
  }

  const description = schema.description?.slice(0, 155) ?? "";




  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* SEO */}
      <SEO
        title={schema.title}
        description={description}
        canonical={`https://www.osztonkod.hu/schemas/${schemaId}`}
        image="https://www.osztonkod.hu/og-image.jpg"
        type="article"
        article={schema}
      />

        

      {/* ---- TARTALOM ---- */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 drop-shadow-lg text-center mb-12"
        >
          {schema.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl border border-emerald-100 shadow-xl rounded-3xl p-10 leading-relaxed"
        >
          <p className="text-lg text-gray-700 mb-6">
            {schema.description}
          </p>

          {schema.additionalInfo}
        </motion.div>

        {/* ---- KAPCSOLÓDÓ ÖSZTÖNKÓDOK (SEO INTERNAL LINKS) ---- */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-green-700 mb-6 text-center">
            Kapcsolódó ösztönkódok
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {Object.entries(schemaDetails)
              .filter(([id]) => id !== schemaId)
              .slice(0, 4)
              .map(([id, item]) => (

                <Link
                  key={id}
                  to={`/schemas/${id}`}
                  className="
                    p-4
                    border border-emerald-100
                    rounded-xl
                    hover:border-emerald-300
                    hover:bg-emerald-50
                    transition
                  "
                >

                  <div className="font-semibold text-green-700">
                    {item.title}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>

                </Link>

              ))}

          </div>
        </div>

      </div>
    </div>
  );
}