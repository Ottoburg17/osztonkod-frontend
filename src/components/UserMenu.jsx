import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { useAuth } from "../context/useAuth";
import UserAvatar from "./UserAvatar";
import {
  LogOut,
  LayoutDashboard,
  ReceiptText,
  Settings,
} from "lucide-react";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // click outside + ESC
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handler);
    };
  }, []);

  if (!user) return null;

  // 🔥 EZ A LÉNYEG
  const handleLogout = () => {
    logout();                 // token + user törlés
    setOpen(false);           // dropdown bezár
    navigate("/", { replace: true }); // HOME
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* TRIGGER */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 hover:text-amber-300 transition"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <UserAvatar user={user} size={32} />
        <span className="text-sm font-medium">
          {user.name || "Fiók"}
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-3 w-64
            rounded-xl bg-white text-gray-800
            shadow-xl border border-gray-100
            ring-1 ring-black/5
            overflow-hidden
            animate-in fade-in slide-in-from-top-2
          "
        >
          {/* HEADER */}
          <div className="px-4 py-3 border-b bg-gray-50">
            <p className="text-sm font-semibold">{user.name || "Felhasználó"}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>

          {/* MENU */}
          <nav className="py-1">
            <MenuItem to="/dashboard" icon={<LayoutDashboard size={16} />}>
              Dashboard
            </MenuItem>

            <MenuItem to="/orders" icon={<ReceiptText size={16} />}>
              Rendeléseim
            </MenuItem>

            <MenuItem to="/account" icon={<Settings size={16} />}>
              Beállítások
            </MenuItem>
          </nav>

          <div className="h-px bg-gray-100 my-1" />

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="
              w-full flex items-center gap-3
              px-4 py-2.5 text-sm
              text-red-600
              hover:bg-red-50
              transition
            "
          >
            <LogOut size={16} />
            Kijelentkezés
          </button>
        </div>
      )}
    </div>
  );
}

/* ===== SUBCOMPONENT ===== */
function MenuItem({ to, icon, children }) {
  return (
    <Link
      to={to}
      className="
        flex items-center gap-3
        px-4 py-2.5 text-sm
        rounded-lg mx-1
        transition-all
        hover:bg-green-100
        hover:text-green-800
        hover:pl-5
      "
    >
      {icon}
      {children}
    </Link>
  );
}
