import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { pageview } from "./analytics";

export default function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}
