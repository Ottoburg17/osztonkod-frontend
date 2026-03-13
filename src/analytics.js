import { getConsent } from "./cookieConsent";

export function trackEvent(action, params = {}) {
  const consent = getConsent();
  if (!consent?.analytics) return;

  if (typeof window.gtag !== "function") return;

  window.gtag("event", action, params);
}

