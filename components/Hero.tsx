import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <Image
        src="/grua-hero-ok.webp"
        alt="Arriendo de grúas horquilla BALPIZ GRÚAS SPA en Antofagasta"
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      <div className={styles.overlay}></div>
      <div className={styles.texture}></div>
      <div className={styles.bottomShade}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.kicker}>BALPIZ GRÚAS SPA</span>

          <h1>
            Arriendo de grúas horquilla para minería, industria y construcción
          </h1>

          <p>
            En BALPIZ GRÚAS SPA apoyamos las operaciones de nuestros clientes
            con una flota moderna de maquinarias, entregando soluciones
            confiables, ágiles y eficientes dentro y fuera de Antofagasta.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/56934580890?text=Hola,%20quiero%20cotizar%20el%20arriendo%20de%20maquinaria%20con%20BALPIZ%20GR%C3%9AAS%20SPA."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Solicitar cotización
            </a>

            <a href="#servicios" className={styles.secondaryButton}>
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}