// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function ResultsPreview() {
  const cards = [
    {
      icon: <Brain size={30} />,
      title: "Mélyebb önismeret",
      text: "Felismerheted azokat a viselkedési mintákat, amelyek újra és újra ugyanazokhoz a helyzetekhez vezetnek.",
    },
    {
      icon: <MessageCircle size={30} />,
      title: "Tudatosabb reakciók",
      text: "Megértheted, miért reagálsz bizonyos helyzetekben automatikusan, és hogyan alakíthatsz ki új válaszokat.",
    },
    {
      icon: <Sparkles size={30} />,
      title: "Valódi változás",
      text: "A felismerésből fokozatosan új szokások és egészségesebb működési minták épülhetnek fel.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden

        pt-28
        pb-32
        px-6
        md:px-16

        bg-gradient-to-b
        from-gray-50
        via-emerald-50/40
        to-white
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          rounded-full
          bg-emerald-300/10
          blur-[180px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            tracking-tight
            text-slate-900
            text-center
          "
        >
          Mit nyerhetsz{" "}
          <span className="text-emerald-600">
            az Ösztönkód segítségével?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .15, duration: .8 }}
          className="
            mt-6
            max-w-3xl
            mx-auto

            text-lg
            leading-8

            text-slate-600
            text-center
          "
        >
          A cél nem pusztán az, hogy több információt szerezz magadról,
          hanem hogy jobban megértsd saját működésedet, és tudatosabban
          alakítsd a mindennapi döntéseidet.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * .1,
                duration: .6,
              }}
              className="
                rounded-3xl

                border
                border-emerald-100

                bg-white/80
                backdrop-blur-xl

                p-8

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  bg-gradient-to-br
                  from-emerald-50
                  to-emerald-100

                  text-emerald-700

                  mb-6

                  border
                  border-emerald-100
                "
              >
                {card.icon}
              </div>

              <h3
                className="
                  text-xl
                  font-bold

                  text-slate-900

                  mb-4
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  leading-7
                  text-gray-600
                "
              >
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3, duration: .7 }}
          className="mt-20 text-center"
        >
          <p
            className="
              text-slate-600
              max-w-2xl
              mx-auto
              leading-8
              mb-8
            "
          >
            Minden változás az első felismeréssel kezdődik. Ha megérted,
            hogyan működnek a saját mintáid, nagyobb eséllyel tudsz
            tudatosabb döntéseket hozni a jövőben.
          </p>

          <Link
            to="/products/emotional-brainmap"
            className="
              group
              inline-flex
              items-center
              gap-3

              rounded-2xl

              border border-emerald-200

              bg-white

              px-8
              py-4

              font-semibold

              text-emerald-700

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-emerald-300
              hover:shadow-lg
              hover:text-emerald-800
            "
          >
            Ismerd meg a saját mintáidat
          
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
                  
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

