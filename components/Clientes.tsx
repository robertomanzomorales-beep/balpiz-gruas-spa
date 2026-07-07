import Image from "next/image";
import styles from "./Clientes.module.css";

const logos = [
  {
    src: "/ahimco.webp",
    alt: "AHIMCO Ingeniería y Construcción S.A.",
  },
  {
    src: "/ceim-fundacion-educacional-escondida.webp",
    alt: "Fundación Educacional Escondida CEIM",
  },
  {
    src: "/irk-servicios-spa.webp",
    alt: "IRK Servicios SPA",
  },
  {
    src: "/mallplaza.webp",
    alt: "Mall Plaza Antofagasta",
  },
  {
    src: "/minera-sierra-gorda-scm.webp",
    alt: "Minera Sierra Gorda SCM",
  },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function Clientes() {
  return (
    <section className={styles.section} id="clientes">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Clientes</span>

          <div className={styles.titleBlock}>
            <h2>Empresas que confían en BALPIZ GRÚAS SPA</h2>

            <p>
              Hemos trabajado con empresas e instituciones que requieren
              maquinaria confiable para operaciones industriales, comerciales y
              mineras.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>

        <div className={styles.track}>
          {duplicatedLogos.map((logo, index) => (
            <div className={styles.logoBox} key={`${logo.src}-${index}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={90}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}