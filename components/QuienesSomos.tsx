import Image from "next/image";
import styles from "./QuienesSomos.module.css";

const highlights = [
  {
    value: "3T / 5T",
    label: "Grúas horquilla disponibles",
  },
  {
    value: "Antofagasta",
    label: "Cobertura dentro y fuera de la ciudad",
  },
  {
    value: "Operación",
    label: "Respuesta ágil para continuidad del servicio",
  },
];

export default function QuienesSomos() {
  return (
    <section className={styles.section} id="quienes-somos">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <span className={styles.kicker}>Quiénes somos</span>
          </div>

          <h2>
            Soluciones de arriendo de maquinarias para operaciones exigentes
          </h2>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.mediaColumn}>
            <div className={styles.mediaFrame}>
              <Image
                src="/quienes-somos-grua-horquilla-5t-balpiz.webp"
                alt="Grúa horquilla 5T BALPIZ GRÚAS SPA"
                fill
                className={styles.image}
                sizes="(max-width: 980px) 100vw, 48vw"
              />

              <div className={styles.cornerMark}></div>

              <div className={styles.imageTag}>
                <span>Flota operativa</span>
                <strong>Grúas horquilla 3T y 5T</strong>
              </div>
            </div>
          </div>

          <div className={styles.contentColumn}>
            <div className={styles.copyCard}>
              <div className={styles.introLine}></div>

              <p className={styles.lead}>
                Somos <strong>BALPIZ GRÚAS SPA</strong>, una empresa dedicada a
                la prestación de servicios de arriendo de maquinarias para
                compañías del área minera, industrial, construcción y entidades
                anexas.
              </p>

              <p>
                Brindamos servicios de manera ágil y eficiente, tanto dentro como
                fuera de la ciudad de Antofagasta, con equipos de alta calidad
                preparados para responder a las exigencias operativas de cada
                proyecto.
              </p>

              <div className={styles.statement}>
                Nuestra operación se apoya en maquinaria estandarizada para
                trabajos en minería y en un equipo comprometido con la seguridad,
                la continuidad operacional y la eficiencia del servicio.
              </div>

              <div className={styles.highlights}>
                {highlights.map((item) => (
                  <div className={styles.highlight} key={item.value}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomStrip}>
          <span>Arriendo de maquinarias</span>
          <span>Estándar operativo</span>
          <span>Respuesta en terreno</span>
          <span>Continuidad operacional</span>
        </div>
      </div>
    </section>
  );
}