import type { ReactNode } from "react";
import Link from "next/link";
import { privacy } from "../lib/privacy";
import styles from "./LegalPage.module.css";

export default function LegalPage({ title, intro, current, children }: {
  title: string; intro: string; current: "privacy" | "cookies" | "rights"; children: ReactNode;
}) {
  return (
    <main id="contenido" className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>Volver al sitio</Link>
        <header className={styles.heading}>
          <span className={styles.kicker}>Privacidad y protección de datos</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span className={styles.version}>Actualización: {privacy.updated} · Versión {privacy.version}</span>
        </header>
        <div className={styles.grid}>
          <nav className={styles.nav} aria-label="Información de privacidad">
            <Link href="/politica-privacidad" aria-current={current === "privacy" ? "page" : undefined}>Política de privacidad</Link>
            <Link href="/politica-cookies" aria-current={current === "cookies" ? "page" : undefined}>Cookies y almacenamiento</Link>
            <Link href="/solicitud-datos" aria-current={current === "rights" ? "page" : undefined}>Ejercer mis derechos</Link>
            <div className={styles.contact}>
              <span>Contacto de privacidad</span>
              <a href={`mailto:${privacy.email}`}>{privacy.email}</a>
            </div>
          </nav>
          <article className={styles.content}>{children}</article>
        </div>
      </div>
    </main>
  );
}
