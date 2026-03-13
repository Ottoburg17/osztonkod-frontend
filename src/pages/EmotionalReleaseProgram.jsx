import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import EmotionalReleaseMap from "./EmotionalReleaseMap";
import api from "../api/axios";
import { jsPDF } from "jspdf";



/* 🔐 BACKEND TERMÉK SLUG */
const PRODUCT_SLUG = "emotional-release-program";

export default function EmotionalReleaseProgram() {
  const navigate = useNavigate();
  const { canPreviewAll } = useAuth();

  /* 🔐 HOZZÁFÉRÉS */
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  /* 🧠 PROGRAM */
  const totalSteps = 8;
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    emotion: "",
    trigger: "",
    bodyLocation: "",
    bodyShift: "",
    initialIntensity: 5,
    finalIntensity: 5,
    reframe: "",
    forgiveness: "",
    integration: "",
    commitment: ""
  });

  const [countdown, setCountdown] = useState(0);

  /* 🔐 Jogosultság ellenőrzés */
  useEffect(() => {
    if (canPreviewAll) {
      setHasAccess(true);
      setCheckingAccess(false);
      return;
    }

    const checkAccess = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setCheckingAccess(false);
        return;
      }

      try {
        const res = await api.get(`/orders/has-product/${PRODUCT_SLUG}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHasAccess(res.data.hasAccess);
      } catch {
        setHasAccess(false);
      } finally {
        setCheckingAccess(false);
      }
    };

    checkAccess();
  }, [canPreviewAll]);

  /* 💾 Progress mentés */
  useEffect(() => {
    const saved = localStorage.getItem("emotionalReleaseProgress");
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm(parsed.form);
      setStep(Math.min(parsed.step, totalSteps));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "emotionalReleaseProgress",
      JSON.stringify({ form, step })
    );
  }, [form, step]);


  useEffect(() => {
  if (countdown <= 0) return;

  const timer = setInterval(() => {
    setCountdown((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [step]);


  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 1));
  
  const canContinue = () => {
  if (step === 1 && !form.emotion) return false;

  if (step === 2 && !form.trigger.trim()) return false;

  if (
    step === 3 &&
    (!form.bodyLocation.trim() || !form.bodyShift.trim())
  ) return false;

  if (step === 4 && !form.reframe.trim()) return false;

  if (step === 5 && !form.forgiveness.trim()) return false;

  if (
    step === 7 &&
    (!form.integration.trim() || !form.commitment.trim())
  ) return false;

  return true;
};

  
   const [showMap, setShowMap] = useState(false);

  const improvement = form.initialIntensity - form.finalIntensity;

  const exportPDF = () => {
  const doc = new jsPDF();
  let y = 20;

  doc.setFontSize(18);
  doc.text("Érzelmi Feldolgozás - Összefoglaló", 20, y);
  y += 20;

  doc.setFontSize(12);

  const addBlock = (text) => {
    const lines = doc.splitTextToSize(text, 170);
    doc.text(lines, 20, y);
    y += lines.length * 7;
  };

  addBlock(`Érzelem: ${form.emotion}`);
  addBlock(`Trigger: ${form.trigger}`);
  addBlock(`Testérzet: ${form.bodyLocation}`);
  addBlock(`Kezdeti intenzitás: ${form.initialIntensity}`);
  addBlock(`Végső intenzitás: ${form.finalIntensity}`);
  addBlock(`Változás: ${improvement}`);
  addBlock(`Somatikus változás: ${form.bodyShift}`);
  addBlock(`Új értelmezés: ${form.reframe}`);
  addBlock(`Új működés: ${form.integration}`);
  addBlock(`Alkalmazási helyzet: ${form.commitment}`);

  doc.save("erzelmi-felszabaditas.pdf");
};

  /* 🔐 Access UI */
  if (checkingAccess) {
    return <div className="pt-32 text-center">Jogosultság ellenőrzése…</div>;
  }

  if (!hasAccess && !canPreviewAll) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Hozzáférés megtagadva
        </h1>
        <button
          onClick={() => navigate("/plan")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Vásárlás
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pt-28 px-6 pb-32 space-y-8 mt-20">

      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Érzelmi Feldolgozás
      </h1>
      
      <div className="text-right text-xs text-gray-500 mb-2">
      {Math.round((step / totalSteps) * 100)}% kész
    </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          className="bg-emerald-600 h-3 transition-all duration-500"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

       <div
          key={step}
          className={`bg-white rounded-3xl shadow-2xl p-10 border border-emerald-200
                      transition-all duration-500 animate-fadeIn
                      ${step === 8 ? "animate-glowBorder" : ""}`}
        >


        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6">
              1. Érzelem azonosítása
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {["Harag", "Félelem", "Szégyen", "Szomorúság"].map((e) => (
                <button
                  key={e}
                  onClick={() => update("emotion", e)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    form.emotion === e
                      ? "bg-emerald-600 text-white shadow-md  scale-105"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label>Milyen erős most?</label>
              <input
                type="range"
                min="1"
                max="10"
                value={form.initialIntensity}
                onChange={(e) =>
                  update("initialIntensity", Number(e.target.value))
                }
                className="w-full"
              />
              <p className="text-center font-bold">
                {form.initialIntensity}/10
              </p>
            </div>
          </>
        )}

        
         {/* STEP 2 */}
         {step === 2 && (
        <>
            <h2 className="text-2xl font-bold mb-2">2. Trigger</h2>

            <p className="text-gray-600 mb-4 text-sm">
            (Trigger = az a konkrét helyzet, mondat vagy esemény,
            ami elindította benned az érzelmet.)
            </p>

            {/* Segítő doboz */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl mb-6">
            <p className="font-semibold text-emerald-700 mb-2">
                Segítő kérdések:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Mi történt pontosan?</li>
                <li>Ki mondott vagy tett valamit?</li>
                <li>Melyik mondat vagy pillanat érintett meg?</li>
                <li>Volt benne valami ismerős, ami már korábban is előfordult?</li>
            </ul>

            <p className="mt-3 text-xs text-gray-500 italic">
                Példa: „Amikor nem válaszolt az üzenetemre.”
            </p>
            </div>

            <textarea
            className="w-full border border-emerald-300 focus:ring-2 focus:ring-emerald-300 p-3 rounded-xl"
            placeholder="Írd le a konkrét helyzetet..."
            value={form.trigger}
            onChange={(e) => update("trigger", e.target.value)}
            />
        </>
        )}

      
         {/* STEP 3 */}
        {step === 3 && (
        <>
            <h2 className="text-2xl font-bold mb-2">3. Testi reakció</h2>

            <p className="text-sm text-gray-600 mb-4">
            (Hol jelent meg az érzés a testedben? A test gyakran hamarabb reagál,
            mint ahogy tudatosítanánk az érzelmet.)
            </p>

            {/* Segítő doboz */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl mb-6">
            <p className="font-semibold text-emerald-700 mb-2">
                Figyeld meg:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Hol jelent meg először az érzés a testedben?</li>
                <li>Feszülés, nyomás vagy zsibbadás formájában?</li>
                <li>Volt hőérzet (melegség / hideg)?</li>
                <li>Változott a légzésed vagy a pulzusod?</li>
            </ul>

            <p className="mt-3 text-xs text-gray-500 italic">
                Példák: mellkasi szorítás, torokszorítás, gyomorgörcs,
                vállfeszülés, szapora szívverés.
            </p>
            </div>

            <textarea
            className="w-full border border-emerald-300 focus:ring-2 focus:ring-emerald-300 p-3 rounded-xl"
            value={form.bodyLocation}
            onChange={(e) => update("bodyLocation", e.target.value)}
            placeholder="Írd le pontosan mit és hol érzel..."
            />

            {/* 10 mp figyelem indító */}
            <div className="mt-4 flex justify-center">
            <button
              onClick={() => setCountdown(10)}
              disabled={!form.bodyLocation.trim()}
              className={`mt-4 px-4 py-2 rounded-xl transition ${
                !form.bodyLocation.trim()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}
              
            >
              10 mp figyelem indítása
            </button>
            </div>

            {countdown > 0 && (
              <div className="mt-3 text-center text-emerald-600 font-bold text-xl animate-pulse">
                Figyeld… {countdown}
              </div>
            )}

            <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-2xl mt-6 text-sm text-gray-700">
              <p className="font-semibold text-cyan-700 mb-2">
                Testi tudatosítás
              </p>

              <p className="mb-3">
                Maradj 10 másodpercig ennél a testérzetnél.
                Ne változtasd meg – csak figyeld.
              </p>

              <p className="mb-3">
                Változik az intenzitás, ha figyeled?
                Mozdul, pulzál, gyengül vagy erősödik?
              </p>

              <textarea
                className="w-full border border-emerald-300 focus:ring-2 focus:ring-emerald-300 p-3 rounded-xl"
                value={form.bodyShift}
                onChange={(e) => update("bodyShift", e.target.value)}
                placeholder="Mi történt a testérzettel, miközben figyelted?"
              />
            </div>
        </>
        )}


        {/* STEP 4 */}
        {step === 4 && (
        <>
            <h2 className="text-2xl font-bold mb-2">4. Újraértelmezés</h2>

            <p className="text-sm text-gray-600 mb-4">
            (Mit jelenthet ez a helyzet egy másik nézőpontból?)
            </p>

            {/* Segítő kérdések */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mb-4 text-sm text-gray-700 space-y-2">
            <p className="font-medium text-emerald-700">Segítő kérdések:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Biztos, hogy ez rólam szól — vagy csak aktivált bennem valamit?</li>
                <li>Mit mondanék egy barátomnak ebben a helyzetben?</li>
                <li>Van ennek a helyzetnek egy semlegesebb magyarázata?</li>
                <li>Ez valóban a jelenről szól, vagy egy régi minta aktiválódott?</li>
            </ul>
            </div>

            <textarea
            className="w-full border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 p-3 rounded-xl transition"
            value={form.reframe}
            onChange={(e) => update("reframe", e.target.value)}
            placeholder="Írd le az új nézőpontot..."
            />

            <p className="text-xs text-gray-400 mt-2">
            Nem az a cél, hogy pozitív legyen — hanem hogy árnyaltabb és reálisabb.
            </p>
        </>
        )}



       
       {/* STEP 5 */}
        {step === 5 && (
        <>
            <h2 className="text-2xl font-bold mb-2">5. Megbocsátás</h2>

            <p className="text-sm text-gray-600 mb-4">
            (A megbocsátás itt nem felmentés. Nem azt jelenti, hogy rendben volt.
            Hanem azt, hogy nem akarod tovább hordozni a feszültséget.)
            </p>

            {/* Segítő doboz */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl mb-6">
            <p className="font-semibold text-emerald-700 mb-2">
                Strukturált formula:
            </p>

            <p className="text-sm text-gray-700 mb-3">
                „Elismerem, hogy ez fájt / hatott rám.  
                Megengedem magamnak, hogy érezzem.  
                És most elengedem azt a belső feszültséget,
                amit eddig ehhez kötöttem.”
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Mit engedsz most el pontosan?</li>
                <li>Kitől veszed vissza az érzelmi kontrollt?</li>
                <li>Mi az, amit már nem akarsz tovább cipelni?</li>
            </ul>
            </div>

            <textarea
            className="w-full border border-emerald-300 focus:ring-2 focus:ring-emerald-300 p-3 rounded-xl"
            value={form.forgiveness}
            onChange={(e) => update("forgiveness", e.target.value)}
            placeholder="Írd le a saját megfogalmazásodban az elengedést..."
            />

  
        </>
        )}

         {/* STEP 6 */}
        {step === 6 && (
        <>
            <h2 className="text-2xl font-bold mb-2">
            6. Újramérés
            </h2>

            <p className="text-sm text-gray-600 mb-4">
            Most ugyanazt az érzelmi intenzitást mérjük újra,
            amit az elején megadtál.
            <br />
            Nem az a cél, hogy „0” legyen —
            hanem hogy lásd, történt-e elmozdulás.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl mb-6 text-sm text-gray-700">
            <p className="font-semibold text-emerald-700 mb-2">
                Mit mérünk pontosan?
            </p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Mekkora most az érzelmi feszültség?</li>
                <li>Ugyanott érzed-e a testedben?</li>
                <li>Ugyanolyan erősen aktivál?</li>
            </ul>
            <p className="mt-3 text-gray-500 italic">
                Néha a változás csak 1-2 pont.
                Az idegrendszer szintjén ez is jelentős.
            </p>
            </div>

            <input
            type="range"
            min="1"
            max="10"
            value={form.finalIntensity}
            onChange={(e) =>
                update("finalIntensity", Number(e.target.value))
            }
            className="w-full accent-emerald-600"
            />

            <p className="text-center font-bold text-lg mt-2">
            {form.finalIntensity}/10
            </p>

            <p className="text-center text-xs text-gray-500 mt-1">
            Kezdeti érték: {form.initialIntensity}/10
            </p>


            {step === 6 &&  improvement > 0 && (
            <div className="mt-4 bg-emerald-100 border border-emerald-300 p-3 rounded-xl text-emerald-700 text-sm text-center">
              Szép munka. Az intenzitás csökkent.
            </div>
          )}
        </>
        )}


       
         {/* STEP 7 */}
        {step === 7 && (
        <>
            <h2 className="text-2xl font-bold mb-2">
            7. Integráció – Új belső pozíció
            </h2>

            <p className="text-sm text-gray-600 mb-4">
            Ez nem „pozitív gondolkodás”.
            <br />
            Hanem annak megfogalmazása, hogy ki vagy ebben a helyzetben
            akkor, amikor nem az automatikus reakció irányít.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl mb-6 text-sm text-gray-700">
            <p className="font-semibold text-emerald-700 mb-2">
                Segítő kérdések:
            </p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Hogyan reagál az a verzióm, aki tudatosabb?</li>
                <li>Mit csinálok másképp most?</li>
                <li>Mi az új belső mondatom ebben a helyzetben?</li>
                <li>Mit választok most reakció helyett?</li>
            </ul>

            <p className="mt-3 text-gray-500 italic">
                Nem kell tökéletesnek lennie.
                Elég, ha valóságos.
            </p>
            </div>

            <textarea
            className="w-full border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 p-3 rounded-xl transition"
            value={form.integration}
            onChange={(e) =>
                update("integration", e.target.value)
            }
            placeholder="Pl.: Meg tudok állni, mielőtt reagálok. Nem kell azonnal védekeznem."
            />

            <p className="text-xs text-gray-500 mt-3">
            Ez az új identitás nem szerep.
            Ez egy választott működés.
            </p>

            <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-2xl mt-6 text-sm text-gray-700">
            <p className="font-semibold text-cyan-700 mb-2">
              Tudatos vállalás
            </p>

            <p className="mb-3">
              Mi lesz az első konkrét helyzet,
              ahol ezt az új működést alkalmazni fogod?
            </p>

            <textarea
              className="w-full border border-emerald-300 focus:ring-2 focus:ring-emerald-300 p-3 rounded-xl"
              value={form.commitment}
              onChange={(e) => update("commitment", e.target.value)}
              placeholder="Pl.: Amikor legközelebb kritikát kapok a munkahelyen..."
            />
          </div>
        </>
        )}

      
        {/* STEP 8 */}
        {step === 8 && (
        <>
            <h2 className="text-3xl font-bold text-center text-emerald-700 mb-4 animate-successPop">
            🌿 Lezártad a folyamatot
            </h2>

            <p className="text-sm text-gray-600 text-center mb-6">
            Most végigmentél egy teljes érzelmi cikluson:
            <br />
            azonosítottad az érzést,
            feltártad a kiváltót,
            megfigyelted a testi reakciót,
            újraértelmezted a helyzetet,
            és tudatos döntést hoztál.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center mb-6">
            <p className="text-lg font-semibold text-emerald-700">
                Intenzitás változás: {improvement} pont
            </p>

            <p className="mt-3 text-gray-700">
                Ez azt jelenti, hogy az érzelem intenzitása
                {improvement > 0
                ? " csökkent."
                : " nem csökkent – és ez is információ."}
            </p>

            <p className="text-sm text-gray-500 mt-3">
                Nem az a cél, hogy eltűnjön az érzelem.
                <br />
                Hanem hogy már ne az automatikus reakció irányítson.
            </p>
            </div>

            <div className="mt-6 mb-6">
             
             <h3 className="text-lg font-semibold text-center mb-4">
                Érzelmi intenzitás változása (1–10 skálán)
              </h3>

            <div className="flex items-end justify-center gap-10 h-32">

              <div className="flex flex-col items-center">
                <div
                  className="w-10 bg-gray-300 rounded-t-lg transition-all duration-700"
                  style={{ height: `${form.initialIntensity * 10}%` }}
                />
                <span className="text-xs mt-2">Kezdeti intenzitás</span>
                <span className="text-sm font-semibold">
                  {form.initialIntensity}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className="w-10 bg-emerald-500 rounded-t-lg transition-all duration-700"
                  style={{ height: `${form.finalIntensity * 10}%` }}
                />
                <span className="text-xs mt-2">Jelenlegi intenzitás</span>
                <span className="text-sm font-semibold">
                  {form.finalIntensity}
                </span>
              </div>

            </div>


            <div
              className={`mt-4 text-xs text-center rounded-xl p-3 ${
                improvement > 0
                  ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                  : improvement < 0
                  ? "bg-violet-100 text-violet-800 border border-violet-300"
                  : "bg-gray-100 text-gray-600 border border-gray-300"
              }`}
            >
              {improvement > 0 && (
                <>
                  Az intenzitás csökkent. Ez azt jelzi, hogy a tested reagált.
                </>
              )}

              {improvement < 0 && (
                <>
                  Az intenzitás nőtt. Ez nem hiba — most jobban érzékeled az érzelmet.
                </>
              )}

              {improvement === 0 && (
                <>
                  Az intenzitás nem változott. Ez teljesen rendben van .
                </>
              )}

              <div className="mt-2 text-[11px] opacity-70">
                A magasabb szám erősebb érzelmi feszültséget jelent.
              </div>
            </div>

           
          </div>

            <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-2xl text-sm text-gray-700 mb-6">
            <p className="font-semibold mb-2">
                Mit jelent ez a gyakorlat?
            </p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Megálltál a reakció előtt.</li>
                <li>Tudatosítottad a testi választ.</li>
                <li>Új értelmezést hoztál létre.</li>
                <li>Megfogalmaztad az új működésed.</li>
            </ul>

            <p className="mt-3 italic text-gray-500">
                Ez már idegrendszeri újrapozicionálás.
            </p>
            </div>

            {/* AUTOMATIKUS ÖSSZEFOGLALÓ */}
          <div className="bg-white border-2 border-emerald-300 p-6 rounded-2xl shadow-md mb-6">
            <h3 className="text-lg font-bold text-emerald-700 mb-4">
              Az új működésed összefoglalója
            </h3>

            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Eredeti reakció:</strong> {form.emotion} – {form.bodyLocation}</p>
              <p><strong>Új értelmezés:</strong> {form.reframe}</p>
              <p><strong>Új választott működés:</strong> {form.integration}</p>
              <p><strong>Alkalmazási helyzet:</strong> {form.commitment}</p>
            </div>
          </div>

            <div className="text-center">
            <button
            onClick={exportPDF}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl transition"
            >
            Letöltés PDF-ben 
            </button>
          </div>


          <div className="text-center mt-4">
            <button
              onClick={() => setShowMap(true)}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition"
            >
              Érzelmi ciklus vizualizálása →
            </button>
          </div>

          {showMap && (
            <div className="mt-8">
              <EmotionalReleaseMap form={form} />
            </div>
          )}

           <div className="text-center mt-10">
            <div className="border-t border-gray-200 mb-6"></div>

            <button
              onClick={() => {
                localStorage.removeItem("emotionalReleaseProgress");
                setShowMap(false);
                setForm({
                  emotion: "",
                  trigger: "",
                  bodyLocation: "",
                  bodyShift: "",
                  initialIntensity: 5,
                  finalIntensity: 5,
                  reframe: "",
                  forgiveness: "",
                  integration: "",
                  commitment: ""
                });
                setStep(1);
              }}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Új folyamat indítása
            </button>
          </div>
              
        </>
        )}
    </div>

       
       {step !== 8 && (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={prev}
            disabled={step === 1}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition disabled:opacity-50"
          >
            Vissza
          </button>

          <button
            onClick={next}
            disabled={step === totalSteps || !canContinue()}
            className={`px-6 py-2 rounded-xl transition ${
              step === totalSteps || !canContinue()
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-emerald-600 text-white hover:bg-emerald-700"
            }`}
          >
            Tovább
          </button>
        </div>
      )}

      <p className="mt-12 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Az itt megjelenő tartalom önreflexiós és edukációs célú,
        nem minősül orvosi, pszichológiai vagy mentálhigiénés tanácsadásnak.
        Súlyos pszichés tünetek esetén kérem fordulj képzett szakemberhez.
        Az alkalmazás használata nem helyettesíti szakemberrel való konzultációt.
      </p>
    </div>
  );
}
