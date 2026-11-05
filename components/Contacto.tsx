"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { privacy } from "../lib/privacy";
import styles from "./Contacto.module.css";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (status === "sending" || !form.reportValidity()) return;
    if (formData.get("_honey")) return;
    if (formData.get("Consentimiento de datos") !== "Autorizado") return;
    formData.set("Texto de autorizacion", privacy.consent);
    formData.set("Version de politica", privacy.version);
    formData.set("Politica consultable", privacy.url);
    formData.set("Fecha de autorizacion UTC", new Date().toISOString());
    formData.set("_replyto", String(formData.get("Correo") || ""));

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/balpizgruas@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
          signal: AbortSignal.timeout(20000),
        }
      );

      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("No se pudo enviar el formulario.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <div className={styles.header} data-reveal>
          <div>
            <span className={styles.kicker}>Contacto</span>
          </div>

          <div className={styles.titleBlock}>
            <h2>Cotiza el arriendo de maquinaria para tu operación</h2>
            <p>
              Contáctanos para coordinar disponibilidad, capacidad requerida y
              modalidad de arriendo según las necesidades de tu proyecto.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.infoPanel} data-reveal>
            <div className={styles.imageWrap}>
              <Image
                src="/contacto-cotizacion-grua-horquilla-operativa.webp"
                alt="Grúa horquilla BALPIZ GRÚAS SPA lista para cotización"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 42vw"
              />

              <div className={styles.imageBadge}>
                <span>Atención directa</span>
                <strong>Cotizaciones operativas</strong>
              </div>
            </div>

            <div className={styles.contactData}>
              <a
                href="https://www.balpizgruas.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Sitio web</span>
                www.balpizgruas.cl
              </a>

              <a href="mailto:balpizgruas@gmail.com">
                <span>Correo</span>
                balpizgruas@gmail.com
              </a>

              <a
                href="https://wa.me/56934580890?text=Hola,%20quiero%20cotizar%20el%20arriendo%20de%20maquinaria%20con%20BALPIZ%20GR%C3%9AAS%20SPA."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Teléfono / WhatsApp</span>
                +56 9 3458 0890
              </a>

              <a
                href="https://www.instagram.com/balpiz_gruas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Instagram</span>
                @balpiz_gruas
              </a>

              <div>
                <span>Dirección</span>
                Calle 14 de febrero #2959, Antofagasta
              </div>
            </div>
          </div>

          <form
            className={styles.form} data-reveal
            aria-busy={status === "sending"}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/balpizgruas@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nueva solicitud de cotización desde sitio web BALPIZ GRÚAS SPA"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

            <div className={styles.formTop}>
              <span>Formulario de cotización</span>
              <strong>Completa los datos y responderemos a la brevedad.</strong>
            </div>

            <div className={styles.formGrid}>
              <label>
                Nombre
                <input
                  type="text"
                  name="Nombre"
                  autoComplete="name"
                  maxLength={100}
                  placeholder="Nombre completo"
                  required
                />
              </label>

              <label>
                Empresa
                <input
                  type="text"
                  name="Empresa"
                  autoComplete="organization"
                  maxLength={150}
                  placeholder="Nombre de empresa"
                />
              </label>

              <label>
                Teléfono
                <input
                  type="tel"
                  name="Telefono"
                  autoComplete="tel"
                  maxLength={30}
                  placeholder="+56 9"
                  required
                />
              </label>

              <label>
                RUT de empresa
                <input
                  type="text"
                  name="RUT empresa"
                  maxLength={20}
                  placeholder="76.000.000-0"
                />
              </label>

              <label>
                Correo
                <input
                  type="email"
                  name="Correo"
                  autoComplete="email"
                  maxLength={150}
                  placeholder="correo@empresa.cl"
                  required
                />
              </label>

              <label>
                Tipo de maquinaria requerida
                <select name="Maquinaria requerida" defaultValue="" required>
                  <option value="" disabled>
                    Seleccionar maquinaria
                  </option>
                  <option value="Grúa horquilla 3T">Grúa horquilla 3T</option>
                  <option value="Grúa horquilla 5T">Grúa horquilla 5T</option>
                  <option value="Otra / consultar disponibilidad">
                    Otra / consultar disponibilidad
                  </option>
                </select>
              </label>

              <label>
                Modalidad de arriendo
                <select name="Modalidad de arriendo" defaultValue="">
                  <option value="" disabled>
                    Seleccionar modalidad
                  </option>
                  <option value="Semanal">Semanal</option>
                  <option value="Mensual">Mensual</option>
                  <option value="Anual">Anual</option>
                </select>
              </label>

              <label className={styles.full}>
                Mensaje
                <textarea
                  name="Mensaje"
                  maxLength={3000}
                  rows={5}
                  placeholder="Indique lugar de operación, capacidad requerida, fecha estimada y detalles del servicio."
                  required
                ></textarea>
              </label>
            </div>

            <div className={styles.privacyBlock}>
              <label className={styles.consent}>
                <input type="checkbox" name="Consentimiento de datos" value="Autorizado" required aria-describedby="cotizacion-privacidad" />
                <span>Autorizo a BALPIZ GRÚAS SPA a tratar mis datos para responder y gestionar esta solicitud de cotización, según su <Link href="/politica-privacidad" target="_blank" rel="noopener noreferrer">Política de privacidad</Link>.</span>
              </label>
              <p id="cotizacion-privacidad">Los campos Empresa, RUT y Modalidad son opcionales. El envío se procesa mediante FormSubmit y llega al correo de BALPIZ; estos servicios pueden tratar datos fuera de Chile. No incluye publicidad. Puedes <Link href="/solicitud-datos">ejercer tus derechos o retirar tu autorización</Link>.</p>
            </div>

            {status === "success" && (
              <div className={`${styles.statusMessage} ${styles.success}`} role="status">
                Mensaje enviado correctamente. Gracias por contactarnos, pronto
                responderemos su solicitud.
              </div>
            )}

            {status === "error" && (
              <div className={`${styles.statusMessage} ${styles.error}`} role="alert">
                No fue posible enviar el mensaje. Por favor intente nuevamente o
                contáctenos por WhatsApp.
              </div>
            )}

            <div className={styles.actions}>
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Enviando..." : "Enviar solicitud"}
              </button>

              <a
                href="https://wa.me/56934580890?text=Hola,%20quiero%20cotizar%20el%20arriendo%20de%20maquinaria%20con%20BALPIZ%20GR%C3%9AAS%20SPA."
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
