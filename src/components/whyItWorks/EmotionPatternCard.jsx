export default function EmotionalPatternCard() {
  return (
    <div
      className="
        relative
        rounded-3xl
        bg-white/60
        backdrop-blur-xl
        border border-white/60
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        p-8
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.16)]
      "
    >
      <div className="text-4xl mb-5">❤️</div>

      <h3 className="text-xl font-bold text-gray-900">
        Érzelmi minták
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        Sok élethelyzetben ugyanazok az érzelmi reakciók ismétlődnek.
        A módszer segít felismerni ezeket a visszatérő mintákat,
        így tudatosabban reagálhatsz a jövőben.
      </p>

      {/* IDE KERÜL MAJD AZ ANIMÁCIÓ */}
      <div className="mt-8 h-36 rounded-2xl bg-gradient-to-br from-rose-50 to-white border border-rose-100 flex items-center justify-center">
        <span className="text-sm text-gray-400">
          Emotion Pattern Animation
        </span>
      </div>
    </div>
  );
}