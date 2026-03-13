import { getConsent } from "../cookieConsent";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function loadAnalytics() {
  const consent = getConsent();
  if (!consent || !consent.analytics) return;
  if (!GA_ID) return;

  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("consent", "update", {
  analytics_storage: "granted",
});

  gtag("config", GA_ID, {
    anonymize_ip: true,
  });
}

