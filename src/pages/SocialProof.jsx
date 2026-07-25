// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GlowOrb from "../components/GlowOrb";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function SocialProof() {
  const testimonies = [
    {
      name: "Anna, 29",
      text: "„Megértettem, hogy a gyermekkori élményeim hogyan formálták a kötődéseimet.”"
    },
    {
      name: "Péter, 41",
      text: "„Évek óta először érzem, hogy tényleg tudom irányítani az életemet.”"
    },
    {
      name: "Dóra, 33",
      text: "„Az ösztönkód felismerése megváltoztatta a kapcsolataimat.”"
    },
    {
      name: "Gábor, 34",
      text: "„Már nem félek a saját reakcióimtól. Értem őket.”"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      
      
      <SEO
      title="Felhasználói visszajelzések"
      description="Olvasd el mások személyes felismeréseit és megéléseit az Érzelmi Ösztönkód rendszerrel kapcsolatban. Valós tapasztalatok és visszajelzések."
      canonical="https://www.osztonkod.hu/feedback"
      image="https://www.osztonkod.hu/og-image.jpg"
    />
              
          
      {/* Glow háttér */}
      <GlowOrb
        id="socialFull1"
        rotate={360}
        originX="50%"
        originY="50%"
        className="absolute top-[-10%] left-[10%] w-[50vw] opacity-30 -z-10"
      />
      <GlowOrb
        id="socialFull2"
        rotate={-360}
        originX="50%"
        originY="60%"
        className="absolute bottom-[-20%] right-[5%] w-[45vw] opacity-20 -z-10"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Felhasználói visszajelzések és személyes felismerések
        </motion.h1>

        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Ezek azok a pillanatok, amikor megszületik a felismerés: a működési minták 
          megérthetők, és új nézőpontból láthatók.
        </p>

        {/* nagy kártyák */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {testimonies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="
                bg-white/90 backdrop-blur-xl border border-green-200 
                rounded-3xl p-8 shadow-xl text-gray-700
              "
            >
              <p className="italic text-lg mb-4">"{item.text}"</p>
              <p className="font-semibold text-green-700">{item.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link 
            to="/feedback"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Szeretnéd megosztani a saját felismerésed?
          </Link>

        </div>


         {/* jogi / hitelességi megjegyzés */}
        <p className="text-sm text-gray-500 text-center mt-16 max-w-xl mx-auto">
          A megosztott idézetek személyes megéléseket tükröznek, 
          Nem garantálnak eredményt, és nem minősülnek pszichológiai vagy egészségügyi szolgáltatásnak.
        </p>
      </div>

   
    </div>
  );
}


