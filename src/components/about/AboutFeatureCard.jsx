import clsx from "clsx";

const colorVariants = {
  emerald: {
    icon: "bg-emerald-100 text-emerald-600",
    border: "border-emerald-100",
    glow: "group-hover:shadow-emerald-200/60",
  },

  sky: {
    icon: "bg-sky-100 text-sky-600",
    border: "border-sky-100",
    glow: "group-hover:shadow-sky-200/60",
  },

  violet: {
    icon: "bg-violet-100 text-violet-600",
    border: "border-violet-100",
    glow: "group-hover:shadow-violet-200/60",
  },
};

export default function AboutFeatureCard({
  icon,
  title,
  description,
  color = "emerald",
}) {
  const styles = colorVariants[color] || colorVariants.emerald;

  return (
    <div
      className={clsx(
        "group rounded-3xl border bg-white p-8 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        styles.border,
        styles.glow
      )}
    >
      <div
        className={clsx(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl",
          styles.icon
        )}
      >
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}

