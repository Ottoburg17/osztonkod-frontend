import { Brain } from "lucide-react";

export default function BrainMapPreview() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border border-emerald-100
        bg-white/90
        backdrop-blur-xl
        shadow-[0_35px_80px_rgba(16,185,129,0.10)]
        p-8
        lg:p-10
        min-h-[520px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -top-24
          right-[-80px]
          w-80
          h-80
          rounded-full
          bg-emerald-200/40
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-3">
        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-emerald-100
            flex
            items-center
            justify-center
          "
        >
          <Brain className="text-emerald-600" size={24} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            BrainMap
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Az érzelmi minták vizuális feltérképezése
          </p>
        </div>
      </div>

      {/* Preview area */}
      <div
        className="
          relative
          mt-10
          h-[330px]
          rounded-[28px]
          bg-gradient-to-br
          from-slate-900
          via-slate-950
          to-black
          border
          border-slate-700
          overflow-hidden
        "
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain
            size={110}
            className="text-emerald-400 opacity-80"
          />
        </div>

        {/* Fake nodes */}
        <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-emerald-400 shadow-lg" />
        <div className="absolute top-16 right-16 w-3 h-3 rounded-full bg-yellow-400" />
        <div className="absolute bottom-14 left-20 w-3 h-3 rounded-full bg-blue-400" />
        <div className="absolute bottom-10 right-12 w-4 h-4 rounded-full bg-pink-400" />
      </div>
    </div>
  );
}