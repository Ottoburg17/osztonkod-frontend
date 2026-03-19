import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/useAuth";
import UserAvatar from "./UserAvatar";
import { useCart } from "../hooks/useCart";


import {
  X,
  LayoutDashboard,
  LogOut,
  Settings,
  ReceiptText,
  Shield,
  ShoppingCart,
  ShoppingBag,
  Mail,
} from "lucide-react";

export default function UserMenuMobile({ onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { cart } = useCart();


  if (!user) return null;

  const handleLogout = () => {
    logout();                  // token + user törlés
    onClose();                 // mobil menü bezár
    navigate("/", { replace: true }); // HOME
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm flex flex-col">

      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-white">
          <UserAvatar user={user} size={40} maxInitials={2} />

          <div>
            <p className="font-semibold leading-tight">
              {user.name || "Felhasználó"}
            </p>
            <p className="text-sm text-gray-400 truncate max-w-[180px]">
              {user.email}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className=" p-2 rounded-md
                      text-white
                      hover:text-red-400
                      hover:bg-red-500/10
                      active:bg-red-500/20
                      transition"
          aria-label="Bezárás"
        >
          <X size={26} />
        </button>
      </div>

      {/* ===== MENU ===== */}
      <div className="flex-1 overflow-y-auto">
      <nav className="flex flex-col px-6 py-8 gap-5 text-lg text-white">

           {/* ===== SHOP SECTION ===== */}
          <MobileItem
            to="/services"
            onClose={onClose}
            icon={<ShoppingBag size={22} />}
          >
            Szolgáltatások
          </MobileItem>

          <MobileItem
            to="/cart"
            onClose={onClose}
            icon={<ShoppingCart size={22} />}
          >
            Kosár {cart.length > 0 && `(${cart.length})`}
          </MobileItem>




          <MobileItem
            to="/contact"
            onClose={onClose}
            icon={<Mail size={22} />}
          >
            Kapcsolat
          </MobileItem>


        <div className="h-px bg-white/10 my-4" />


        <MobileItem to="/dashboard" onClose={onClose} icon={<LayoutDashboard size={22} />}>
          Dashboard
        </MobileItem>

        <MobileItem to="/orders" onClose={onClose} icon={<ReceiptText size={22} />}>
          Rendeléseim
        </MobileItem>

        <MobileItem to="/account" onClose={onClose} icon={<Settings size={22} />}>
          Beállítások
        </MobileItem>

        {user.isAdmin && (
          <>
            <div className="h-px bg-white/10 my-4" />
            <MobileItem
              to="/admin"
              onClose={onClose}
              icon={<Shield size={22} />}
              className="text-amber-400"
            >
              Admin
            </MobileItem>
          </>
        )}
      </nav>
      </div>


      {/* ===== FOOTER / LOGOUT ===== */}
      <div className="mt-auto px-6 py-6 border-t border-white/10 pb-10">
        <button
          onClick={handleLogout}
          className="
            w-full flex items-center gap-3
            text-red-400 text-lg
            px-4 py-3 rounded-xl
            hover:bg-red-500/50
            active:bg-red-500/30
            transition
          "
        >
          <LogOut size={22} />
          Kijelentkezés
        </button>
      </div>
    </div>
  );
}

/* ===== SUBCOMPONENT ===== */
function MobileItem({ to, onClose, icon, children, className = "" }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className={`
        flex items-center gap-4
        px-3 py-3 rounded-lg
        hover:text-emerald-400
        active:bg-white/5
        transition
        ${className}
      `}
    >
      {icon}
      {children}
    </Link>
  );
}
