import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

// 🔐 TOKEN AUTOMATIKUS CSATOLÁSA
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🚪 TOKEN LEJÁRT → AUTH MODAL MEGNYITÁSA
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      !error.config.url.includes("/auth/login")
    ) {
      localStorage.removeItem("token");

      if (window.toggleAuthModal) {
        window.toggleAuthModal("login");
      }
    }

    return Promise.reject(error);
  }
);

export default api;