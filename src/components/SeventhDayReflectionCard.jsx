export default function SeventhDayReflectionCard({ onContinue }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 space-y-8 border border-emerald-200">

      {/* 🌱 FEJLÉC */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          Ez volt az első heted.
        </h2>
        <p className="text-sm text-gray-500">
          Nem teljesítmény. Nem kihívás. Megfigyelés.
        </p>
      </div>

      {/* 🪞 MIT TÖRTÉNT */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Az elmúlt napokban többször megálltál,
          és észrevetted, mi történik benned.
        </p>

        <p>
          Nem próbáltad megjavítani.
          Nem próbáltad kontrollálni.
        </p>

        <p className="font-medium">
          Csak észrevetted.
        </p>
      </div>

      {/* ❓ MIT FIGYELSZ MEG */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-2 text-sm text-emerald-800">
        <p className="font-medium">
          Mit figyelsz meg pontosan?
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>mik a tipikus kiváltó helyzeteid</li>
          <li>hol jelenik meg ez a testedben</li>
          <li>milyen erős valójában</li>
        </ul>
      </div>

      {/* 🧠 MIT JELENT A „LOW” */}
      <div className="space-y-2 text-gray-700 text-sm">
        <p className="font-medium">
          Mit jelent, ha a kockázati szint „low”?
        </p>
        <p>
          Nem azt, hogy nincs benned feszültség.
          Hanem azt, hogy <strong>észreveszed, mielőtt elvinne</strong>.
        </p>
      </div>

      {/* 🌱 MIÉRT JÓ EZ NEKED */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700 space-y-2">
        <p className="font-medium">
          Mitől „jó” ez neked?
        </p>
        <p>
          Attól, hogy egyre kevesebb dolog történik automatikusan.
        </p>
        <p>
          És egyre több dolog történik tudatosan.
        </p>
      </div>

      {/* 👉 MIT CSINÁLJ MOST */}
      <div className="text-center space-y-3">
        <p className="text-gray-700 font-medium">
          Mit csinálj MOST?
        </p>
        <p className="text-sm text-gray-600">
          Holnap is csak ugyanazt.
          Állj meg egy pillanatra.
          Jelöld be.
          Menj tovább.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onContinue}
          className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition"
        >
          Rendben. Folytatom.
        </button>
      </div>
    </div>
  );
}
