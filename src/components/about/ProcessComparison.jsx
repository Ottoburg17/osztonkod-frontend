/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  BrainCircuit,
  RotateCcw,
  Eye,
  Sparkles,
  GitBranchPlus,
} from "lucide-react";

const oldFlow = [
  {
    icon: Target,
    title: "Trigger",
  },
  {
    icon: Zap,
    title: "Automatikus reakció",
  },
  {
    icon: BrainCircuit,
    title: "Régi idegi kapcsolat",
  },
  {
    icon: RotateCcw,
    title: "Ismétlődő minta",
  },
];

const newFlow = [
  {
    icon: Target,
    title: "Trigger",
  },
  {
    icon: Eye,
    title: "Tudatos felismerés",
  },
  {
    icon: Sparkles,
    title: "Új reakció",
  },
  {
    icon: GitBranchPlus,
    title: "Új idegi kapcsolat",
  },
];

function FlowColumn({
  title,
  color,
  bg,
  border,
  items,
}) {
  return (
    <div
      className={`rounded-3xl border ${border} ${bg} p-6 sm:p-8`}
    >
      <h3
        className={`mb-6 text-center text-xl font-bold ${color}`}
      >
        {title}
      </h3>

      <div className="flex w-full flex-col items-center">

        {items.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex w-full flex-col items-center"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="
                flex
                w-[220px]
                items-center
                gap-4

                rounded-2xl

                border

                bg-white

                p-3

                shadow-sm
                "
              >
                <div
                  className={`rounded-xl p-2 ${bg}`}
                >
                  <Icon
                    className={color}
                    size={20}
                  />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  {item.title}
                </span>
              </motion.div>

               {index < items.length - 1 && (
                <div className="relative my-3 h-8 w-px bg-gray-300 overflow-hidden">

                  <motion.div
                    className={`
                      absolute
                      left-1/2
                      -translate-x-1/2
                      w-1
                      h-5
                      rounded-full
                      ${
                        color.includes("emerald")
                          ? "bg-emerald-400"
                          : "bg-rose-400"
                      }
                    `}
                    animate={{
                      y: [-20, 32],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.25,
                    }}
                  />

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProcessComparison() {
  return (
    <section className="mt-24">

      <div className="mb-14 text-center">

        <h2 className="text-3xl font-bold text-slate-500">
          Hogyan alakulnak ki a minták?
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          A különbség nem a triggerben van,
          hanem abban,
          hogyan reagálsz rá.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <FlowColumn
          title="Automatikus minta"
          color="text-rose-600"
          bg="bg-rose-50"
          border="border-rose-100"
          items={oldFlow}
        />

        <FlowColumn
          title="Tudatos változás"
          color="text-emerald-600"
          bg="bg-emerald-50"
          border="border-emerald-100"
          items={newFlow}
        />

      </div>

    </section>
  );
}

