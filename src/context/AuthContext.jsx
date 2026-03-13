// src/context/AuthContext.jsx

import { createContext, useEffect, useState, useCallback } from "react";
import axios from "../api/axios";
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const isAdmin = user?.isAdmin === true;
  const canPreviewAll = isAdmin;
  const hasStruggleBreaker = user?.has_struggle_breaker === true;

  /* ======================================================
     TOKEN → USER
  ====================================================== */
  const setUserFromToken = (token) => {
    const decoded = jwtDecode(token);

    setUser({
      id: decoded.userId,
      email: decoded.email,
      isAdmin: decoded.isAdmin,
      emailVerified: decoded.emailVerified,
      has_struggle_breaker: decoded.has_struggle_breaker,
    });
  };

  /* ======================================================
     LOADERS
  ====================================================== */

  const loadUserFlags = async () => {
    const res = await axios.get("/auth/me");
    setUser((prev) => ({
      ...prev,
      has_struggle_breaker: res.data.has_struggle_breaker,
    }));
  };

  const loadSubscriptions = async () => {
    const res = await axios.get("/subscriptions/my");
    setSubscriptions(res.data.subscriptions || []);
  };

  const loadUserProducts = async () => {
    const res = await axios.get("/user/my-products");
    setPurchasedProducts(res.data.products || []);
  };

  /* ======================================================
     FULL AUTH REFRESH
  ====================================================== */
  const refreshAuth = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);

      const [flagsRes, subsRes, productsRes] = await Promise.all([
        axios.get("/auth/me"),
        axios.get("/subscriptions/my"),
        axios.get("/user/my-products"),
      ]);

      setUser({
        id: decoded.userId,
        email: decoded.email,
        isAdmin: decoded.isAdmin,
        emailVerified: decoded.emailVerified,
        has_struggle_breaker: flagsRes.data.has_struggle_breaker,
      });

      setSubscriptions(subsRes.data.subscriptions || []);
      setPurchasedProducts(productsRes.data.products || []);
    } catch (err) {
      console.error("refreshAuth failed:", err);
    }
  }, []);

  /* ======================================================
     AUTO LOGIN
  ====================================================== */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        setUserFromToken(token);

        await Promise.all([
          loadSubscriptions(),
          loadUserFlags(),
          loadUserProducts(),
        ]);
      } catch (err) {
        console.error("Auto login failed:", err);
        localStorage.removeItem("token");
        setUser(null);
        setSubscriptions([]);
        setPurchasedProducts([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ======================================================
     LOGIN
  ====================================================== */
  const login = async (email, password) => {
    const res = await axios.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);
    setUserFromToken(res.data.token);

    await Promise.all([
      loadSubscriptions(),
      loadUserFlags(),
      loadUserProducts(),
    ]);
  };

  /* ======================================================
     LOGOUT
  ====================================================== */
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setSubscriptions([]);
    setPurchasedProducts([]);
  };

  /* ======================================================
     STRIPE
  ====================================================== */
  const goToStripePortal = async () => {
    const res = await axios.post("/subscriptions/stripe/portal");
    window.location.href = res.data.url;
  };

  const cancelSubscription = async () => {
    await axios.post("/subscriptions/stripe/cancel");
    await loadSubscriptions();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        subscriptions,
        purchasedProducts,
        loading,
        login,
        logout,
        refreshAuth,
        isAdmin,
        canPreviewAll,
        hasStruggleBreaker,
        goToStripePortal,
        cancelSubscription,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}