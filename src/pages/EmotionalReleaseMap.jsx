import React from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function EmotionalReleaseMap({ form = {} }) {
  const nodes = [
    {
      id: "1",
      position: { x: 250, y: 0 },
      data: { label: `Trigger\n\n${form.trigger || "—"}` },
      style: nodeStyle("#facc15"),
    },
    {
      id: "2",
      position: { x: 500, y: 150 },
      data: { label: `Érzelem\n\n${form.emotion || "—"}` },
      style: nodeStyle("#ef4444"),
    },
    {
      id: "3",
      position: { x: 500, y: 350 },
      data: { label: `Testi reakció\n\n${form.bodyLocation || "—"}` },
      style: nodeStyle("#3b82f6"),
    },
    {
      id: "4",
      position: { x: 250, y: 500 },
      data: { label: `Új értelmezés\n\n${form.reframe || "—"}` },
      style: nodeStyle("#10b981"),
    },
    {
      id: "5",
      position: { x: 0, y: 350 },
      data: { label: `Új működés\n\n${form.integration || "—"}` },
      style: nodeStyle("#4e26ac"),
    },
    {
      id: "6",
      position: { x: 0, y: 150 },
      data: { label: `Alkalmazás\n\n${form.commitment || "—"}` },
      style: nodeStyle("#22d3ee"),
    },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
    { id: "e3-4", source: "3", target: "4", animated: true },
    { id: "e4-5", source: "4", target: "5", animated: true },
    { id: "e5-6", source: "5", target: "6", animated: true },
    {
      id: "e6-1",
      source: "6",
      target: "1",
      animated: true,
      style: { stroke: "#ef4444", strokeWidth: 2 },
    },
  ];

  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-xl mt-10"
      style={{ height: 600 }}
    >
      <h3 className="text-xl font-bold text-center mb-4">
        Érzelmi Ciklus Térkép
      </h3>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll
        panOnScroll
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

function nodeStyle(color) {
  return {
    background: color,
    color: "#fff",
    padding: 10,
    borderRadius: 12,
    width: 220,
    whiteSpace: "pre-wrap",
    textAlign: "center",
    fontSize: 12,
  };
}