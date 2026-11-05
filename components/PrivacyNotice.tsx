"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./PrivacyNotice.module.css";

const key = "balpiz_privacy_notice_v1";
const eventName = "balpiz:privacy-notice";
const maxAge = 183 * 24 * 60 * 60 * 1000;
let dismissedInSession = false;

function isDismissed() {
  if (dismissedInSession) return true;
  try {
    const saved = Number(window.localStorage.getItem(key));
    return saved > 0 && saved <= Date.now() && Date.now() - saved < maxAge;
  } catch { return false; }
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(eventName, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(eventName, callback);
  };
}

export default function PrivacyNotice() {
  const dismissed = useSyncExternalStore(subscribe, isDismissed, () => true);
  if (dismissed) return null;

  return (
    <aside className={styles.notice} aria-label="Información de privacidad">
      <div className={styles.copy}>
        <strong>Tu privacidad, con claridad.</strong>
        <p>Este sitio no utiliza cookies de publicidad ni analítica. Conoce cómo cuidamos los datos de tus consultas.</p>
        <div className={styles.links}>
          <Link href="/politica-privacidad">Privacidad</Link>
          <Link href="/politica-cookies">Cookies y almacenamiento</Link>
        </div>
      </div>
      <button type="button" onClick={() => {
        dismissedInSession = true;
        try { window.localStorage.setItem(key, String(Date.now())); } catch { /* Browsing remains available without storage. */ }
        window.dispatchEvent(new Event(eventName));
      }}>Entendido</button>
    </aside>
  );
}
