import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOAST UI */}
      {toast && (
        <div className="
          fixed
          bottom-4 left-1/2 -translate-x-1/2
          z-[100]
          bg-emerald-700 text-white
          px-6 py-3
          rounded-xl shadow-xl
          animate-slide-up
        ">
          {toast}
        </div>
      )}
    </ToastContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);
