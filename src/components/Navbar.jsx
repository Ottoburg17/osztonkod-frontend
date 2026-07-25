import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import UserMenu from "./UserMenu";
import UserMenuMobile from "./UserMenuMobile";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useCart } from "../hooks/useCart";

import { useAuth } from "../context/useAuth";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.webp";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { user } = useAuth();

  // BODY SCROLL LOCK – mobil menünél
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Kezdőlap" },
    { to: "/about", label: "Rólunk" },
    { to: "/services", label: "Szolgáltatások" },
    { to: "/contact", label: "Kapcsolat" },
  ];

  return (
    <>
      <header className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-emerald-50 fixed w-full z-50 shadow-lg">
        {/* ===== HEADER GRID ===== */}
        <div className="container mx-auto px-6 py-4 grid grid-cols-2 lg:grid-cols-3 items-center">
          
          {/* LOGO */}
          <div className="justify-self-start">
            <Link
              to="/"
              className="flex items-center gap-1"
            >
              <img
                src={logo}
                alt="Ösztönkód logó"
                className="w-18 h-12 object-contain"
              />

              <span className="text-2xl font-extrabold tracking-wide">
                Ösztönkód
              </span>
            </Link>
          </div>
          
          {/* NAV – desktop */}
          <nav className="hidden lg:flex justify-center space-x-6">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="hover:text-amber-300 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP: CART + AUTH */}
          <div className="hidden lg:flex items-center space-x-4 justify-self-end">
            
            {/* CART */}
            <Link
              to="/cart"
              className="relative transition hover:text-amber-300 active:scale-95"
            >
              <ShoppingCart size={26} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* AUTH */}
            {!user ? (
              <button
                onClick={() => window.toggleAuthModal?.("login")}
                className="text-2xl text-amber-300 hover:text-white transition"
                title="Bejelentkezés"
              >
                <FaUserCircle />
              </button>
            ) : (
              <UserMenu />
            )}
          </div>

          {/* HAMBURGER – mobil */}
          <div className="lg:hidden justify-self-end">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md hover:bg-white/10 transition"
              aria-label="Menü megnyitása"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
        {/* ===== /HEADER GRID ===== */}

        {/* ===== MOBIL MENÜ ===== */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col transition-all duration-300 ease-out lg:hidden">
            
            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-red-500 transition"
              aria-label="Menü bezárása"
            >
              <X size={30} />
            </button>

            {/* NAV LINKS */}
            <ul className="mt-32 flex flex-col space-y-8 text-center text-2xl font-semibold">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-300 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* CART – mobil */}
              <li>
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="mx-auto flex items-center justify-center gap-2 mb-4 text-gray-300 hover:text-amber-300 transition"
                >
                  <ShoppingCart size={20} />
                  Kosár {cart.length > 0 && `(${cart.length})`}
                </Link>
              </li>
            </ul>

            {/* ACCOUNT SECTION – mobil */}
            <div className="absolute bottom-16 w-full text-center">
              {!user ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.toggleAuthModal?.("login");
                  }}
                  className="mx-auto flex items-center justify-center gap-2 mb-4 text-gray-300 hover:text-amber-300 transition"
                >
                  <User size={20} />
                  <span>Bejelentkezés</span>
                </button>
              ) : (
                <UserMenuMobile onClose={() => setIsOpen(false)} />
              )}
            </div>
          </div>
        )}
        {/* ===== /MOBIL MENÜ ===== */}
      </header>

      {/* 🔐 AUTH MODAL – EGYSZER, REJTETTEN */}
      <AuthModal />
    </>
  );
};

export default Navbar;

