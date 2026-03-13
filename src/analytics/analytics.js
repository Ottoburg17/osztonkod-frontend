const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function pageview(path) {
  if (!window.gtag || !GA_ID) return;

  window.gtag("config", GA_ID, {
    page_path: path,
  });
}

export function event({ action, category, label, value }) {
  if (!window.gtag || !GA_ID) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// 🛒 PURCHASE (később erre visszatérünk)
export function purchase({ transaction_id, value, currency, items }) {
  if (!window.gtag || !GA_ID) return;

  window.gtag("event", "purchase", {
    transaction_id,
    value,
    currency,
    items,
  });
}
