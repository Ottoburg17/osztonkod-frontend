import { useState } from "react";
import api from "../api/axios";

export default function ResendVerification() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/resend-verification", { email });
    setMessage(res.data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Email megerősítés újraküldése
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email cím"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            required
          />

          <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
            Küldés
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}
