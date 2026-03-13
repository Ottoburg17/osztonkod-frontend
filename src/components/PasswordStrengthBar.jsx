import { useMemo } from "react";

export default function PasswordStrengthBar({ password }) {
  const strength = useMemo(() => getStrength(password), [password]);

  if (!password) return null;

  return (
    <div className="mt-2 space-y-1">
      {/* PROGRESS BAR */}
      <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`
            h-full rounded-full transition-all duration-300
            ${strength.color}
          `}
          style={{ width: `${strength.percent}%` }}
        />
      </div>

      {/* LABEL */}
      <p className={`text-xs font-medium ${strength.textColor}`}>
        {strength.label}
      </p>
    </div>
  );
}

/* ================= LOGIC ================= */

function getStrength(password) {
  let score = 0;

  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) {
    return {
      label: "Gyenge jelszó",
      percent: 25,
      color: "bg-red-500",
      textColor: "text-red-600",
    };
  }

  if (score <= 3) {
    return {
      label: "Közepes jelszó",
      percent: 60,
      color: "bg-yellow-400",
      textColor: "text-yellow-600",
    };
  }

  return {
    label: "Erős jelszó",
    percent: 100,
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
  };
}
