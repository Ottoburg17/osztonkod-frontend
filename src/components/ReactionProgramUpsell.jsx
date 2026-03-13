export default function ReactionProgramUpsell() {
  return (
    <div
      className="
        mt-6 sm:mt-16
        mb-10 sm:mb-32
        bg-green-50 border border-green-200
        rounded-3xl
        p-2.5 sm:p-6 lg:p-8
        space-y-3 sm:space-y-6
        max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto
      "
    >
      <h3 className="text-lg sm:text-2xl font-bold text-green-700 text-center">
        Megértetted. Most megszakíthatod.
      </h3>

      <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed max-w-2xl mx-auto">
        Az ösztönkód elemzés megmutatta, hogyan működsz automatikusan.
        A következő lépés nem az, hogy „jobban csináld” —
        hanem hogy észrevedd a pillanatot, mielőtt reagálsz.
      </p>

      <div className="space-y-1.5 text-xs sm:text-sm text-gray-600 text-center">
        <p>✔ 7 napos strukturált, vezetett felismerési folyamat</p>
        <p>✔ napi 10–15 perc</p>
        <p>✔ automatikus reakciók megszakítása a reakció előtt</p>
        <p>✔ nem tanácsadás, nem terápia</p>
      </div>

      <div className="text-center pt-2 sm:pt-4 space-y-3">
        <p className="text-base sm:text-lg font-semibold text-green-700">
          Automatikus reakciók megszakítása – 7 napos program
        </p>

        <button
          className="
            mt-2
            inline-flex
            px-6 sm:px-8
            py-2 sm:py-3
            text-sm sm:text-base
            rounded-2xl
            bg-green-600
            text-white
            font-semibold
            hover:bg-green-700
            transition
          "
          onClick={() => {
            window.location.href = "/services";
          }}
        >
          Elkezdem a 7 napos megfigyelést →
        </button>

        <p className="text-xs sm:text-sm text-gray-500">
          Egyszeri hozzáférés • 7000 Ft • online • azonnal indul
          <br />
          <span className="italic">
            Ez az alapfolyamat minden további mélyebb modulhoz.
          </span>
        </p>
      </div>
    </div>
  );
}
