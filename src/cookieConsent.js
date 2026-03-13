const CONSENT_KEY = "cookie-consent";

export function getConsent() {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setConsent(consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export function clearConsent() {
  localStorage.removeItem(CONSENT_KEY);
}
