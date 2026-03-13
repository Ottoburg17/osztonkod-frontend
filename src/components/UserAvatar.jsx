export default function UserAvatar({ user, size = 40 }) {
  const maxLetters = size < 40 ? 1 : 2;
  const initials = getInitials(user, maxLetters);

  if (!user) return null;

  return (
    <div className="relative group">
      <div
        style={{ width: size, height: size }}
        className="
          rounded-full
          bg-gradient-to-br from-emerald-500 to-emerald-700
          flex items-center justify-center
          text-white font-semibold
          select-none
          overflow-visible
        "
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name || "User avatar"}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            className="leading-none"
            style={{ fontSize: size * 0.4 }}
          >
            {initials}
          </span>
        )}
      </div>

      {/* ===== TOOLTIP (DESKTOP ONLY) ===== */}
      {user.name && (
        <div
          className="
            absolute top-full mt-2 left-1/2 -translate-x-1/2
            whitespace-nowrap
            rounded-md
            bg-gray-900 text-white
            text-xs font-medium
            px-2 py-1
            opacity-0 scale-95
            group-hover:opacity-100 group-hover:scale-100
            transition
            pointer-events-none
            z-50
          "
        >
          {user.name}
        </div>
      )}
    </div>
  );
}

/* ================= HELPERS ================= */

function getInitials(user, maxLetters) {
  if (!user) return "?";

  const source =
    user.name?.trim() ||
    user.email?.split("@")[0] ||
    "";

  if (!source) return "?";

  return source
    .split(/\s+/)
    .map(part => part[0])
    .join("")
    .slice(0, maxLetters)
    .toUpperCase();
}
