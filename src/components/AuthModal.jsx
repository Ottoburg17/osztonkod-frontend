// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";

import api from "../api/axios";

import { useAuth } from "../context/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import PasswordStrengthBar from "../components/PasswordStrengthBar";
import { useNavigate, useLocation } from "react-router-dom";


export default function AuthModal() {
  const {login} = useAuth();

  const [showPassword, setShowPassword] = useState(false);

   
  const location = useLocation();
  const navigate = useNavigate();

  const redirectTo = location.state?.from || "/dashboard";


  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [messageType, setMessageType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

   const [acceptedLegal, setAcceptedLegal] = useState(false);


  

  // 🌍 Globális megnyitás Navbarból
  useEffect(() => {
    window.toggleAuthModal = (mode = "login") => {
      setIsRegistering(mode === "register");
      setIsOpen(true);
    }

    return () => {
      delete window.toggleAuthModal;
    };
  }, []);



  const toggleModal = () => {
  setIsOpen(false);               // mindig zár
  setIsRegistering(false);        // vissza login módra
  setFormData({ name: "", email: "", password: "" });
  setAcceptedLegal(false);
  setErrorMessage("");
  setMessageType(null);
  setShowPassword(false);
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setFormData({ name: "", email: "", password: "" });
    setAcceptedLegal(false); // 👈 EZ
    setErrorMessage("");
    setMessageType(null);
    setShowPassword(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

   const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };



  const getPasswordStrength = (password) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) {
    return { level: "weak", text: "Gyenge jelszó", color: "text-red-500" };
  }

  if (score === 2) {
    return { level: "medium", text: "Közepes jelszó", color: "text-yellow-500" };
  }

  return { level: "strong", text: "Erős jelszó", color: "text-green-600" };
};



  // 🔐 LOGIN / REGISZTRÁCIÓ
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    console.log("LOGIN SUBMIT FUT");

    if (formData.email && !isValidEmail(formData.email)) {
    setErrorMessage(
      "Kérjük adjon meg egy érvényes email címet (pl. név@email.hu)."
    );
    setMessageType("error");
     return;
  }

       if (isRegistering && !acceptedLegal) {
        setErrorMessage(
          "A regisztrációhoz el kell fogadnod a Felhasználási feltételeket és az Adatkezelési tájékoztatót."
        );
        setMessageType("error");
        return;
      }


      if (
        !formData.email ||
        !formData.password ||
        (isRegistering && !formData.name)
      ) {
        setErrorMessage("Minden mező kitöltése kötelező.");
        setMessageType("error");
        return;
      }


      if (
        isRegistering &&
        getPasswordStrength(formData.password).level === "weak"
      ) {
        setErrorMessage(
          "A jelszó túl gyenge. Használj legalább 8 karaktert, számot és nagybetűt."
        );
        setMessageType("error");
        return;
      }

    setIsLoading(true);

    try {
      if (isRegistering) {
        await api.post("/auth/register", formData);
      
        setErrorMessage("Sikeres regisztráció! Küldtünk egy megerősítő emailt. Kattints a linkre, majd jelentkezz be.");
        setMessageType("success");
       
        setTimeout(() => {
          setIsRegistering(false);   
          setErrorMessage("");
        }, 3000);

        return;
      }

      console.log("LOGIN API HÍVÁS");
      // ✅ KÖZPONTI LOGIN (AuthContext)
      await login(formData.email, formData.password);

     

      toggleModal();
      navigate(redirectTo, { replace: true});
    } catch (err) {
      setErrorMessage(
        err.response?.data?.error || "Hálózati hiba történt."
      );
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    <>
     

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg sm:p-10"
          >
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={22} />
            </button>

            <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
              {isRegistering ? "Regisztráció" : "Bejelentkezés"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {isRegistering && (
                <input
                  type="text"
                  name="name"
                  placeholder="Név"
                  value={formData.name}
                  onChange={handleChange}
                 
                  className="w-full border rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              )}

              <input
                type="text"
                name="email"
                placeholder="Email cím"
                value={formData.email}
                onChange={handleChange}
               
                className="w-full border rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Jelszó"
                  value={formData.password}
                  onChange={ handleChange} 
                    
                  
                 
                  className="w-full border rounded-lg px-4 py-3 pr-10 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Jelszó elrejtése" : "Jelszó megjelenítése"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-green-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {isRegistering && (
                <PasswordStrengthBar password={formData.password} />
              )}


              {!isRegistering &&  (
                
                <div className="text-right">
                  <a
                    href="/forgot-password"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Elfelejtett jelszó?
                  </a>
                </div>
              )} 

              {errorMessage && (
                <div className="space-y-2">
                  <p
                    className={`text-sm ${
                      messageType === "success"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {errorMessage}
                  </p>

                  {/* 🔁 ÚJ MEGERŐSÍTŐ EMAIL – CSAK LOGINNÁL */}
                  {!isRegistering &&
                    errorMessage.toLowerCase().includes("email") &&
                    errorMessage.toLowerCase().includes("megerősít") && (
                      <Link
                        to="/resend-verification"
                        className="block text-sm text-green-600 hover:underline"
                      >
                        Új megerősítő email kérése
                      </Link>
                    )}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className=" w-full
                            px-8 py-3 rounded-2xl text-lg font-semibold
                            bg-green-600 hover:bg-green-700
                            text-white
                            shadow-lg transition transform hover:scale-[1.05]
                            disabled:opacity-50"
              >
                {isLoading
                  ? "Feldolgozás..."
                  : isRegistering
                  ? "Regisztráció"
                  : "Bejelentkezés"}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              {isRegistering
                ? "Már van fiókod?"
                : "Nincs még fiókod?"}{" "}
              <button
                onClick={toggleForm}
                className="text-green-600 font-semibold hover:underline"
              >
                {isRegistering ? "Bejelentkezés" : "Regisztráció"}
              </button>
            </p>
              
            {isRegistering && (
              <div className="flex items-start gap-2 text-xs text-gray-600 mt-4">
                  <input
                    type="checkbox"
                    checked={acceptedLegal}
                    onChange={(e) => setAcceptedLegal(e.target.checked)}
                    className="mt-1"
                  />
                              
                <span>      
                  Tudomásul veszem és elfogadom a{""}       
                <Link
                  to="/felhasznalasi-feltetelek"
                  className="text-green-600 hover:underline"
                  target="_blank"
                >
                  Felhasználási feltételeket
                </Link>{" "}
                , valamint az{" "}
                <Link
                  to="/adatkezeles"
                  className="text-green-600 hover:underline"
                  target="_blank"
                >
                  Adatkezelési tájékoztatót
                </Link>
                , és tudomásul veszem, hogy a regisztrációval személyes adataim 
                kezelése a szolgáltatás nyújtásához szükséges.
              </span>

             </div>
              
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}

