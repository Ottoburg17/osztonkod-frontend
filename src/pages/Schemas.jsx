import { Link } from "react-router-dom";
import { schemaDetails } from "../data/schemaDetails";
import { Helmet } from "react-helmet";




export default function Schemas() {
  return (
    <div className="max-w-3xl mx-auto mt-20 px-6">

       <Helmet>
        <title>Ösztönkódok – érzelmi sémák és viselkedési minták | Ösztönkód</title>

        <meta
          name="description"
          content="Az érzelmi ösztönkódok és viselkedési sémák áttekintése. Ismerd meg azokat a belső mintákat, amelyek befolyásolják a reakcióidat és kapcsolataidat."
        />

        <link rel="canonical" href="https://www.osztonkod.hu/schemas" />

        <meta property="og:title" content="Ösztönkódok – érzelmi sémák és viselkedési minták" />
        <meta property="og:description" content="Ismerd meg az érzelmi sémákat és viselkedési mintákat, amelyek az ösztönkód működését formálják." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osztonkod.hu/schemas" />
        <meta property="og:image" content="https://www.osztonkod.hu/og-image.jpg" />
        <meta property="og:site_name" content="Ösztönkód" />
        <meta property="og:locale" content="hu_HU" />
      </Helmet>


      <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-10 mt-24">
        Ösztönkódok
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(schemaDetails).map(([id, schema]) => (
          <Link
            key={id}
            to={`/schemas/${id}`}
            className="block p-6 border border-green-200 rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {schema.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {schema.description.substring(0, 120)}...
            </p>
          </Link>
        ))}
      </div>
       <p className="mt-12 mb-24 text-center text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Az itt megjelenő tartalom önreflexiós és edukációs célú,
        nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
        Egyéni helyzetben érdemes szakember támogatását igénybe venni.
      </p>
    </div>
  );
}
