import AutomaticThinkingAnimation from "./AutomaticThinkingAnimation";

export default function AutomaticThinkingCard() {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden

        rounded-3xl

        border border-white/60
        bg-white/60
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        p-8

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-emerald-200
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.16)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-emerald-300/10
          via-cyan-200/5
          to-blue-300/10

          pointer-events-none
        "
      />

      {/* Animation */}
      <div className="relative">
        <AutomaticThinkingAnimation />
      </div>

      {/* Content */}
      <div className="relative mt-8 flex-1">
        <h3 className="text-xl font-bold text-gray-900">
          Automatikus gondolkodás
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Egy helyzet önmagában még nem határozza meg az érzéseinket.
          Az automatikus gondolataink alakítják, hogyan értelmezzük az
          eseményeket, és ezek befolyásolják az érzelmeinket és a
          reakcióinkat.
        </p>
      </div>
    </div>
  );
}