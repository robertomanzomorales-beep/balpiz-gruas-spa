import Image from "next/image";
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <div className={styles.header}>
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
          <div className={styles.infoPanel}>
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
            className={styles.form}
            action="https://formsubmit.co/balpizgruas@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Nueva cotización desde sitio web BALPIZ GRÚAS SPA" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className={styles.formTop}>
              <span>Formulario de cotización</span>
              <strong>Completa los datos y responderemos a la brevedad.</strong>
            </div>

            <div className={styles.formGrid}>
              <label>
                Nombre
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  required
                />
              </label>

              <label>
                Empresa
                <input
                  type="text"
                  name="empresa"
                  placeholder="Nombre de empresa"
                />
              </label>

              <label>
                Teléfono
                <input
                  type="tel"
                  name="telefono"
                  placeholder="+56 9"
                  required
                />
              </label>

              <label>
                RUT de empresa
                <input
                  type="text"
                  name="rut_empresa"
                  placeholder="76.000.000-0"
                />
              </label>

              <label>
                Correo
                <input
                  type="email"
                  name="correo"
                  placeholder="correo@empresa.cl"
                  required
                />
              </label>

              <label>
                Tipo de maquinaria requerida
                <select name="maquinaria" defaultValue="" required>
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
                <select name="modalidad" defaultValue="">
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
                  name="mensaje"
                  rows={5}
                  placeholder="Indique lugar de operación, capacidad requerida, fecha estimada y detalles del servicio."
                  required
                ></textarea>
              </label>
            </div>

            <div className={styles.actions}>
              <button type="submit">Enviar solicitud</button>

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