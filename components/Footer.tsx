import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine}></div>

      <div className={styles.container}>
        <div className={styles.footerCard}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <Image
                src="/logo-balpiz-gruas-spa.webp"
                alt="BALPIZ GRÚAS SPA"
                width={280}
                height={110}
                className={styles.logo}
              />
            </div>

            <p>
              Arriendo de grúas horquilla 3T y 5T para operaciones industriales,
              mineras y de construcción en Antofagasta y alrededores.
            </p>

            <a
              href="https://wa.me/56934580890?text=Hola,%20quiero%20cotizar%20el%20arriendo%20de%20maquinaria%20con%20BALPIZ%20GR%C3%9AAS%20SPA."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Cotizar por WhatsApp
            </a>
          </div>

          <nav className={styles.links} aria-label="Navegación footer">
            <span className={styles.columnTitle}>Secciones</span>
            <a href="#inicio">Inicio</a>
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#clientes">Clientes</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className={styles.contact}>
            <span className={styles.columnTitle}>Contacto directo</span>

            <a href="mailto:balpizgruas@gmail.com">
              <small>Correo</small>
              balpizgruas@gmail.com
            </a>

            <a
              href="https://wa.me/56934580890?text=Hola,%20quiero%20cotizar%20el%20arriendo%20de%20maquinaria%20con%20BALPIZ%20GR%C3%9AAS%20SPA."
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Teléfono / WhatsApp</small>
              +56 9 3458 0890
            </a>

            <a
              href="https://www.instagram.com/balpiz_gruas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Instagram</small>
              @balpiz_gruas
            </a>

            <div>
              <small>Dirección</small>
              Calle 14 de febrero #2959, Antofagasta
            </div>
          </div>
        </div>

        <div className={styles.serviceStrip}>
          <span>Grúas horquilla 3T</span>
          <span>Grúas horquilla 5T</span>
          <span>Arriendos flexibles</span>
          <span>Operación en Antofagasta</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {year} BALPIZ GRÚAS SPA. Todos los derechos reservados.</span>

          <a
            href="https://vialoop.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diseñado y potenciado por vialoop.cl
          </a>
        </div>
      </div>
    </footer>
  );
}