// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { getStreakBadge } from "../utils/streakBadge";

export default function StreakBadge({ streak }) {
  const badge = getStreakBadge(streak);

  if (!badge) return null;

  return (
    <motion.span
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className={`
        px-3 py-1 text-xs font-semibold
        rounded-full border
        whitespace-nowrap
        ${badge.color}
      `}
      title={`${streak} napos sorozat`}
    >
      <span className="mr-1">{badge.icon}</span>
      {badge.label}
    </motion.span>
  );
}
