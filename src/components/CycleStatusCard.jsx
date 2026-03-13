import StreakBadge from "./StreakBadge";

export function CycleStatusCard({ state }) {
  if (!state) return null;

  const riskText = {
    low: "Most alacsonyabb feszültségi minták jelennek meg.",
    medium: "Vegyes feszültségi minták láthatók.",
    high: "Több megfigyelésben erősebb feszültség jelent meg.",
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-5 border border-emerald-200">

      {/* STREAK BADGE */}
      <div className="flex justify-end">
        <StreakBadge streak={state.streak} />
      </div>

      {/* FŐ ÜZENET */}
      <div className="text-gray-800 space-y-2">
        <p className="text-lg font-medium">
          {!state?.streak
            ? "Ma kezdődött a megfigyelés"
            : state.streak === 1
              ? "1 napja figyeled magad"
              : `${state.streak} napja figyeled magad`}
        </p>

        <p className="text-sm text-gray-600">
          Ez nem teljesítmény, hanem jelenlét.
          Akkor is számít, ha csak észreveszed, mi történik benned.
        </p>
      </div>

      {/* ÁLLAPOT MAGYARÁZAT */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800 space-y-1">
        <p className="font-medium">
          Mit jelent ez most?
        </p>

        <p>
          {riskText[state.riskLevel] ||
            "A jelenlegi megfigyelések alapján nincs kiugró minta."}
        </p>

        <p className="text-xs text-emerald-700 mt-2">
          Ez nem diagnózis és nem értékelés.
          Csak visszatükrözés abból, amit te rögzítettél.
        </p>
      </div>

      {/* CTA – MOST MIT CSINÁLJ? */}
      <div className="border-t pt-4 text-sm text-gray-700 space-y-1">
        <p className="font-medium">
          Mit csinálj most?
        </p>
        <p>
          Nem kell változtatnod semmin.
          Csak figyeld meg a mai fókuszt, és vedd észre, mi történik benned.
        </p>
      </div>

    </div>
  );
}