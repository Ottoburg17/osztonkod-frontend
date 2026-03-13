import React from "react";

function DeepConfrontation({ fear, avoidance }) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-rose-50 border border-rose-200 p-7 rounded-2xl shadow-sm space-y-6">

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-rose-600 font-semibold">
          Mélyebb réteg
        </p>

        <h4 className="text-lg font-semibold text-rose-900">
          Amit ez a működés csendben fenntart
        </h4>
      </div>

      <div className="space-y-4 text-sm text-gray-800 leading-relaxed">

        <p>
          A{" "}
          <span className="font-semibold text-rose-800">{avoidance}
            </span>{" "}
          rövid távon csökkentheti a belső feszültséget. 
          Hosszú távon viszont észrevétlenül beszűkítheti a mozgásteredet.
        </p>

        <p>
          A{" "}
          <span className="font-semibold text-rose-800">{fear}
            </span>{" "}
          nem gyengeség. Valamit védeni próbál benned. 
          Lehet egy régi tapasztalatot, egy önképet, 
          vagy egy korábbi fájdalom emlékét.
        </p>

        <p className="text-rose-900 font-medium">
          A kérdés nem az, hogy ez a működés jó vagy rossz.  
          Hanem az, hogy még mindig szolgál-e téged —  
          vagy már inkább korlátoz.
        </p>

        <p className="italic text-gray-700">
          Ha ez a védelem egyszer nem lenne jelen,  
          mi az, amitől igazán tartanál?
        </p>

      </div>
    </div>
  );
}

export default DeepConfrontation;