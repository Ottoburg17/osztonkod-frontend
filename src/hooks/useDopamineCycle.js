import { useEffect, useState } from "react";
import api from "../api/axios";

export function useDopamineCycle() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  /* =====================================================
     🌀 CIKLUS ÁLLAPOT
     ===================================================== */
  useEffect(() => {
    let active = true;

    const loadStatus = async () => {
      try {
        const res = await api.get("/dopamine-cycle/status");
        if (active) setState(res.data);
      } catch (err) {
        console.error("Dopamine cycle status error:", err);
        if (active) setState({ active: false });
      } finally {
        if (active) setLoading(false);
      }
    };

    loadStatus();

    return () => {
      active = false;
    };
  }, []);

  /* =====================================================
     📝 NAPI CHECK-IN
     ===================================================== */
  const checkIn = async (data) => {
    try {
      const res = await api.post("/dopamine-cycle/checkin", data);

      setState((prev) => ({
        ...prev,
        ...res.data,
      }));

      return true; // 👈 EZ KULCSFONTOSSÁGÚ
    } catch (err) {
      console.error("Check-in error:", err);
      return false;
    }
  };

  /* =====================================================
     ✅ ACKNOWLEDGE
     ===================================================== */
  const acknowledge = async () => {
    if (state?.acknowledgedToday) return;

    try {
      const res = await api.post("/dopamine-cycle/acknowledge");

      setState((prev) => ({
        ...prev,
        acknowledgedToday: true,
        streak: res.data.streak,
      }));
    } catch (err) {
      console.error("Acknowledge error:", err);
    }
  };

  /* =====================================================
     🪞 HETI TÜKÖR
     ===================================================== */
  const getWeeklyMirror = async () => {
    try {
      const res = await api.get("/dopamine-cycle/weekly-mirror");
      return res.data.text;
    } catch (err) {
      console.error("Weekly mirror error:", err);
      return null;
    }
  };

  const today = new Date().toISOString().slice(0, 10);

  return {
    state,
    loading,

    hasCheckedInToday: state?.lastCheckIn === today,
    acknowledgedToday: state?.acknowledgedToday,
    streak: state?.streak,

    checkIn,
    acknowledge,
    getWeeklyMirror,
  };
}
