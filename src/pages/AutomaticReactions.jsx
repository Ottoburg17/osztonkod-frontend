import { Link } from "react-router-dom";

export default function AutomaticReactions() {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-12">

        {/* HERO */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-green-600">
            Az automatikus reakciók megszakítása
          </h1>
          <p className="text-lg text-gray-700">
            Nem az a kérdés, miért reagálsz.
            Hanem hogy van-e tér a reakció és a válasz között.
          </p>
        </section>

        {/* VALIDÁLÁS */}
        <section className="text-gray-700 space-y-4">
          <p>
            Ha most itt vagy, valószínűleg már észrevetted,
            hogy bizonyos helyzetekben automatikusan működsz.
          </p>
          <p>
            Nem rosszul. Nem gyengén. Hanem megszokásból.
          </p>
        </section>

        {/* PROGRAM */}
        <section className="bg-white rounded-3xl p-8 shadow space-y-4">
          <h2 className="text-2xl font-bold text-green-600">
            Mit kapsz ebben a 7 napban?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Napi rövid, vezetett felismerési lépések</li>
            <li>Testi és érzelmi minták megfigyelése</li>
            <li>Biztonságos lassítás a reakció előtt</li>
            <li>Integráció, nem „megoldás”</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            to="/products/automatikus-reakciok"
            className="inline-block px-8 py-4 rounded-2xl
              bg-green-600 text-white font-semibold
              hover:bg-green-700 transition"
          >
            Szeretném elkezdeni a 7 napos folyamatot
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Egyszeri díj: 7000 Ft
          </p>
        </section>

      </div>
    </div>
  );
}
