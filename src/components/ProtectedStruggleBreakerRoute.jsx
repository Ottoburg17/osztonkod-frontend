import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function ProtectedStruggleBreakerRoute({ children }) {
  const { loading, hasStruggleBreaker, canPreviewAll } = useAuth();

  if (loading) return null;

  if (!hasStruggleBreaker && !canPreviewAll) {
    return <Navigate to="/products/struggle-breaker" replace />;
  }

  return children;
}
