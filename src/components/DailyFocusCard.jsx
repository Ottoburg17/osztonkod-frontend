// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { dopamineCategoryMap } from "../config/dopamineCategoryMap";

export default function DailyFocusCard({
  day,
  title,
  text,
  category,
  disclaimer,
  acknowledgedToday,
  onAcknowledge,
}) {
  const config =
    dopamineCategoryMap[category] ||
    dopamineCategoryMap.awareness;

  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        ${config.bg} ${config.border}
        border rounded-2xl p-6 shadow-lg space-y-4
      `}
    >
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <Icon size={26} className={config.text} />
        <span className={`text-xs font-semibold uppercase ${config.text}`}>
          {config.label} · {day}. nap
        </span>
      </div>

      {/* TITLE */}
      <h2 className={`text-2xl font-bold ${config.text}`}>
        {title}
      </h2>

      {/* CONTENT */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {text}
      </p>

      {/* ACTION */}
      <button
        onClick={onAcknowledge}
        disabled={acknowledgedToday}
        className={`
          w-full mt-4 py-3 rounded-xl font-semibold transition
          ${
            acknowledgedToday
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white/70 hover:bg-white border " + config.border
          }
        `}
      >
        {acknowledgedToday
          ? "✔ Ma már tudatosítottad"
          : "Ma ezt figyelem →"}
      </button>

      {/* DISCLAIMER */}
      {disclaimer && (
        <div className="pt-4 text-xs text-gray-500 border-t">
          {disclaimer}
        </div>
      )}
    </motion.div>
  );
}
