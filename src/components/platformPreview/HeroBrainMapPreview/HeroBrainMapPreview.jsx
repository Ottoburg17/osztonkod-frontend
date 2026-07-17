/* eslint-disable react-hooks/purity */

import { useEffect, useMemo, useState } from "react";

import BrainSvg from "./BrainSvg";
import ConnectionLayer from "./ConnectionLayer";
import NeuronLayer from "./NeuronLayer";

import { SETTINGS } from "./constants";
import { generateBrainNeurons } from "./brainShape";

export default function HeroBrainMapPreview() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Neuronok létrehozása agy alakban
  const neurons = useMemo(() => {
    return generateBrainNeurons(
      SETTINGS.neuronCount
    );
  }, []);

  // Lebegés + pulzálás
  const animatedNeurons = useMemo(() => {
    return neurons.map((n) => {
      const x =
        n.x +
        Math.sin(tick * 0.015 + n.phase) * 8 +
        n.dx * tick * SETTINGS.floatSpeed;

      const y =
        n.y +
        Math.cos(tick * 0.018 + n.phase) * 8 +
        n.dy * tick * SETTINGS.floatSpeed;

      return {
        ...n,
        x,
        y,

        active:
          Math.sin(
            tick * 0.05 + n.phase
          ) > 0.93,
      };
    });
  }, [neurons, tick]);

  return (
    <div className="w-full flex justify-center">
      <BrainSvg className="w-full max-w-[620px]">

        <ConnectionLayer
          neurons={animatedNeurons}
          tick={tick}
        />

        <NeuronLayer
          neurons={animatedNeurons}
        />

      </BrainSvg>
    </div>
  );
}