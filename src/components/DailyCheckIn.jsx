export function DailyCheckIn({ onCheckIn, disabled }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        Mai figyelemirányítás
      </h3>

      <button
        onClick={() => onCheckIn("general")}
        disabled={disabled}
        className={`w-full py-3 rounded-xl font-semibold text-white transition ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {disabled ? "Ma már rögzítve" : "Mai check-in"}
      </button>
    </div>
  );
}
