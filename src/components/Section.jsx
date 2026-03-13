// src/components/Section.jsx
import React from "react";

export default function Section({ title, items, strong = false }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {items.map((item, index) => (
          <li key={index}>
            {strong ? <span className="font-medium">{item}</span> : item}
          </li>
        ))}
      </ul>
    </div>
  );
}
