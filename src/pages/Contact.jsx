// src/pages/Contact.jsx
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import SEO from "../components/SEO";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import api from "../api/axios";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const position = [47.5219, 19.0421];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setError(null);
  setSuccess(null);

  try {
    const response = await api.post("/send-email", formData);

    setSuccess(response.data.message || "Üzenet sikeresen elküldve!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    setError(
      err.response?.data?.error ||
      err.message ||
      "Nem sikerült elküldeni az üzenetet."
    );
  } finally {
    setIsSubmitting(false);
  }
};


  

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

        <SEO
          title="Kapcsolat – Érzelmi Ösztönkód"
          description="Vedd fel velünk a kapcsolatot! Küldj üzenetet az Érzelmi Ösztönkód csapatának, vagy látogass el budapesti irodánkba."
          canonical="https://www.osztonkod.hu/kapcsolat"
          image="https://www.osztonkod.hu/og-image.jpg"
        />
                      

      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-green-600 text-center mb-12"
        >
          Kapcsolatfelvétel
        </motion.h1>

        <p className="text-gray-600 text-center mb-10">
        Ha kérdésed van az Érzelmi Ösztönkód programokkal kapcsolatban,
        írj nekünk az alábbi űrlapon.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl border border-green-200 shadow-xl rounded-3xl p-8 sm:p-10"
        >
          {/* Térkép */}
          <div className="rounded-2xl overflow-hidden shadow mb-10">
            <MapContainer center={position} zoom={16} style={{ height: "300px", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>1026 Budapest, Pasaréti út 121–123</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Űrlap */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 font-semibold mb-1">
                  {field === "name" ? "Név" : "Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl
                             focus:ring-green-400 focus:border-green-400"
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Üzenet
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl
                           focus:ring-green-400 focus:border-green-400"
              />
            </div>


            <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto
                        px-10 py-3
                        rounded-2xl
                        text-base sm:text-lg
                        font-semibold
                        shadow-lg transition transform
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 hover:scale-[1.05]"
                }
                text-white`}
            >
              {isSubmitting ? "Küldés..." : "Küldés"}
            </button>
            </div>


             {/* ✅ SIKER ÜZENET ITT */}
              {success && (
                <div className="text-green-600 text-center font-medium mt-4">
                  {success}
                </div>
              )}

            {error && (
              <div className="text-red-600 text-center text-sm mt-2">
                {error}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
