import { HeartHandshake, CheckCircle2 } from "lucide-react";

export default function EmotionalReleasePreview() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border border-emerald-100
        bg-white/90
        backdrop-blur-xl
        shadow-[0_25px_60px_rgba(16,185,129,0.08)]
        p-6
        min-h-[320px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -right-12
          -top-12
          w-40
          h-40
          rounded-full
          bg-emerald-200/40
          blur-[90px]
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
          <HeartHandshake
            className="text-emerald-600"
            size={22}
          />
        </div>

        <div>
          <h3 className="font-bold text-gray-800">
            Érzelmi Feloldás
          </h3>

          <p className="text-sm text-gray-500">
            Vezetett folyamat
          </p>
        </div>
      </div>

      {/* Mini UI */}
      <div className="mt-8 space-y-4 relative z-10">

        <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-100">
          <p className="text-sm text-gray-700">
            Milyen érzést tapasztalsz most?
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white border border-gray-100 p-3 shadow-sm">
          <CheckCircle2
            size={20}
            className="text-emerald-500"
          />

          <span className="text-gray-700">
            Szorongás
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white border border-gray-100 p-3 shadow-sm">
          <CheckCircle2
            size={20}
            className="text-emerald-500"
          />

          <span className="text-gray-700">
            Elutasítottság
          </span>
        </div>

      </div>
    </div>
  );
}