import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";

export function useProductAccess(slug) {
  const { purchasedProducts, loading: authLoading } = useAuth();
  const normalizedSlug = slug?.toLowerCase().trim();

  const [hasAccess, setHasAccess] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("AUTH loading:", authLoading);
    console.log("Purchased products:", purchasedProducts);
    console.log("Slug:", normalizedSlug);

    if (authLoading) return;

    if (!normalizedSlug) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChecked(true);
      return;
    }

    const access = purchasedProducts.some(
      (p) => p.product_slug === normalizedSlug
    );

    console.log("Computed access:", access);

    setHasAccess(access);
    setChecked(true);
  }, [purchasedProducts, normalizedSlug, authLoading]);

  return {
    loading: authLoading || !checked,
    hasAccess,
  };
}