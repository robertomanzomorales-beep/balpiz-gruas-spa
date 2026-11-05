"use client";

import { useState, type FormEvent } from "react";
import { privacy } from "../lib/privacy";
import styles from "./DataRequest.module.css";

export default function DataRequest() {
  const [draft, setDraft] = useState<{ href: string; body: string } | null>(null);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const right = String(data.get("derecho"));
    const body = [
      "A BALPIZ GRÚAS SPA:", "", `Nombre: ${String(data.get("nombre")).trim()}`,
      `Correo para recibir respuesta: ${String(data.get("correo")).trim()}`,
      `Solicitud: ${right}`, "", String(data.get("detalle")).trim(), "",
      "Solicito confirmar la recepción y responder a esta dirección de correo.",
    ].join("\n");
    setDraft({ body, href: `mailto:${privacy.email}?subject=${encodeURIComponent(`Datos personales — ${right}`)}&body=${encodeURIComponent(body)}` });
  }

  return (
    <form className={styles.form} onSubmit={prepare} onChange={() => { if (draft) setDraft(null); }}>
      <label>Nombre completo<input name="nombre" autoComplete="name" maxLength={100} required /></label>
      <label>Correo para recibir respuesta<input name="correo" type="email" autoComplete="email" maxLength={150} required /></label>
      <label>Qué deseas solicitar
        <select name="derecho" defaultValue="" required>
          <option value="" disabled>Selecciona una solicitud</option>
          <option>Acceso a mis datos</option><option>Rectificación de mis datos</option>
          <option>Supresión de mis datos</option><option>Oposición al tratamiento</option>
          <option>Portabilidad de mis datos</option><option>Bloqueo temporal</option>
          <option>Retirar mi autorización</option><option>Consulta de privacidad</option>
        </select>
      </label>
      <label>Detalle de la solicitud<textarea name="detalle" rows={5} maxLength={1200} placeholder="Describe los datos o la consulta. Si solicitas rectificar información, indica qué deseas corregir." required /></label>
      <p className={styles.hint}>No adjuntes cédula de identidad, claves ni datos sensibles. Si se necesita comprobar tu identidad, BALPIZ deberá indicarte un medio adecuado.</p>
      <button type="submit">Preparar solicitud</button>
      {draft && (
        <div className={styles.draft} role="status">
          <strong>Tu solicitud está preparada.</strong>
          <p>Aún no se ha enviado. Revisa el texto y pulsa el botón para abrirlo en tu aplicación de correo; allí podrás enviarlo.</p>
          <pre>{draft.body}</pre>
          <a href={draft.href} className={styles.send}>Abrir en mi correo</a>
          <p>Si no se abre una aplicación, copia el texto y envíalo a <a href={`mailto:${privacy.email}`}>{privacy.email}</a>.</p>
        </div>
      )}
    </form>
  );
}
