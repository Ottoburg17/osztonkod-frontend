export function getStreakBadge(streak = 0) {
  if (streak >= 30) {
    return {
      icon: "🏁",
      label: "Ciklus teljesítve",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    };
  }

  if (streak >= 14) {
    return {
      icon: "🧠",
      label: "Tudatos minta",
      color: "text-indigo-700 bg-indigo-50 border-indigo-200",
    };
  }

  if (streak >= 7) {
    return {
      icon: "🔥",
      label: "Stabil jelenlét",
      color: "text-orange-700 bg-orange-50 border-orange-200",
    };
  }

  if (streak >= 3) {
    return {
      icon: "🌱",
      label: "Kezdő figyelem",
      color: "text-green-700 bg-green-50 border-green-200",
    };
  }

  return null;
}
