import { Navigate } from "react-router-dom";
import { useProductAccess } from "../hooks/useProductAccess";
import { useAuth } from "../context/useAuth";




export default function ProtectedProductRoute({ slug, children }) {
  const { loading, hasAccess } = useProductAccess(slug);
  const { user, canPreviewAll } = useAuth();

  if (loading) {
    return <div className="py-20 text-center">Jogosultság ellenőrzése…</div>;
  }

  // nincs belépve
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // ADMIN / PREVIEW
  if (canPreviewAll) {
    return children;
  }

  // ❌ nincs hozzáférés → NEM redirectelünk automatikusan
  if (!hasAccess) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-xl font-bold mb-4">
          Nincs hozzáférésed ehhez a tartalomhoz
        </h2>
        <a
          href={`/products/${slug}`}
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl"
        >
          Megvásárolom
        </a>
      </div>
    );
  }

  // ✅ minden rendben
  return children;
}
