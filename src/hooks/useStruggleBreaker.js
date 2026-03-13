import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function useStruggleBreaker() {

  console.log("useStruggleBreaker FUT");

  const [session, setSession] = useState(null);
  const [energy, setEnergy] = useState(50);
  const [lastTriggerId, setLastTriggerId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const res = await axios.get("/struggle-breaker/active-session");

      if (res.data) {
        setSession(res.data);
      } else {
        const start = await axios.post("/struggle-breaker/start");
        setSession({ id: start.data.sessionId });
      }
    } catch (err) {
      console.error("Init error:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTrigger = async (data) => {
    if (!session) return;

    const res = await axios.post("/struggle-breaker/trigger", {
      ...data,
      sessionId: session.id,
    });

    setLastTriggerId(res.data.triggerId);

    // energia csökken
    setEnergy((prev) => Math.max(prev - data.intensity * 2, 0));

    return res.data.triggerId;
  };

  const addBreak = async (data) => {
    if (!session) return;

    await axios.post("/struggle-breaker/break", {
      ...data,
      sessionId: session.id,
    });

    if (data.wasSuccessful) {
      setEnergy((prev) =>
        Math.min(prev + (data.energyDelta || 0), 100)
      );
    }

    // Break után töröljük az aktív triggert
    setLastTriggerId(null);
  };

  const saveReflection = async (data) => {
    if (!session) return;

    await axios.post("/struggle-breaker/reflection", {
      ...data,
      sessionId: session.id,
    });
  };

  const getWeeklyReport = async (week) => {
    const res = await axios.get(
      `/struggle-breaker/weekly-report/${week}`
    );
    return res.data;
  };

  const exportData = async () => {
    const res = await axios.get("/struggle-breaker/export");
    return res.data;
  };

  return {
    currentSessionId: session?.id,
    energy,
    lastTriggerId,
    loading,
    addTrigger,
    addBreak,
    saveReflection,
    getWeeklyReport,
    exportData,
  };
}
