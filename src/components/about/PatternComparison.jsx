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

function FlowCard({ title, items, color }) {
  const styles =
    color === "emerald"
      ? {
          border: "border-emerald-100",
          bg: "bg-emerald-50",
          icon: "bg-emerald-100",
          text: "text-emerald-700",
        }
      : {
          border: "border-rose-100",
          bg: "bg-rose-50",
          icon: "bg-rose-100",
          text: "text-rose-700",
        };

  return (
    <div
      className={`
        rounded-3xl
        border
        ${styles.border}
        ${styles.bg}
        p-8
      `}
    >
      <h3
        className={`mb-8 text-center text-2xl font-bold ${styles.text}`}
      >
        {title}
      </h3>

      <div className="space-y-5">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.title}>
              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-sm
                "
              >
                <div
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    ${styles.icon}
                  `}
                >
                  <Icon
                    size={20}
                    className={styles.text}
                  />
                </div>

                <span className="font-medium text-gray-700">
                  {item.title}
                </span>
              </div>

              {index !== items.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="h-8 w-px bg-gray-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PatternComparison() {
  return (
    <section className="mt-24">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Hogyan alakulnak ki a minták?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          A különbség nem a triggerben van,
          hanem abban, hogyan reagálsz rá.
          A tudatos felismerés fokozatosan új
          idegi kapcsolatokat épít fel.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <FlowCard
          title="Régi automatikus minta"
          items={oldFlow}
          color="rose"
        />

        <FlowCard
          title="Új tudatos minta"
          items={newFlow}
          color="emerald"
        />
      </div>
    </section>
  );
}