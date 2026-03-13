import { useNavigate } from "react-router-dom";

export default function StripeCancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Előfizetés megszakítva
        </h1>

        <p className="text-gray-600 mb-6">
          A fizetési folyamat megszakadt.
          Az előfizetés nem jött létre.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/checkout", { replace: true })}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Újrapróbálom
          </button>

          <button
            onClick={() => navigate("/services")}
            className="text-sm text-gray-500 hover:underline"
          >
            Vissza a szolgáltatásokhoz
          </button>
        </div>
      </div>
    </div>
  );
}
