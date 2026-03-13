import { Navigate, useParams } from "react-router-dom";

export default function SafeProductRoute({ children }) {
  const params = useParams();

  // csak a /products/:slug route-ra vonatkozik
  if ("slug" in params) {
    const { slug } = params;

    if (!slug || slug === "undefined" || slug === "null") {
      console.warn("Érvénytelen product slug:", slug);
      return <Navigate to="/services" replace />;
    }
  }

  return children;
}
