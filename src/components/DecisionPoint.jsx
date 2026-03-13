import React from "react";

function DecisionPoint({ fear, avoidance }) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-indigo-50 border border-indigo-200 p-7 rounded-2xl shadow-sm space-y-6">

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
          Döntési pont
        </p>

        <h4 className="text-lg font-semibold text-indigo-900">
          Innen már tudatos választás
        </h4>
      </div>

      <div className="space-y-4 text-sm text-gray-800 leading-relaxed">

        <p>
          Most már látod, hogyan kapcsolódik össze a{" "}
          <span className="font-semibold text-indigo-800">{fear}</span> és a{" "}
          <span className="font-semibold text-indigo-800">{avoidance}</span>.
        </p>

        <p>
          A következő alkalommal, amikor ez a minta elindul, 
          lesz egy rövid pillanat — mielőtt automatikusan reagálnál.
        </p>

        <p className="font-medium text-indigo-900">
          Ebben a néhány másodpercben dől el, 
          hogy a megszokott reakciót választod, 
          vagy egy apró, tudatos eltérést.
        </p>

        <p className="italic text-gray-700">
          Mi lesz az az egyetlen kicsi mozdulat, 
          amit legközelebb másképp próbálsz meg?
        </p>

      </div>
    </div>
  );
}

export default DecisionPoint;