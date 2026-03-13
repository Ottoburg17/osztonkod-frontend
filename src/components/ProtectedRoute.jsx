import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";






export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Ellenőrzés…
      </div>
    );
  }

  // ❌ nincs user → redirect, DE NEM MODAL
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // ❌ nem admin
  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  // ✅ ok
  return children;
}
