import Image from "next/image";
import styles from "./Servicios.module.css";

const services = [
  {
    title: "Arriendo de grúa horquilla 3T",
    text: "Maquinaria para operaciones de carga, descarga, traslado interno y apoyo logístico en faenas o instalaciones industriales.",
    image: "/servicios-grua-horquilla-3t-operacion-industrial.webp",
  },
  {
    title: "Arriendo de grúa horquilla 5T",
    text: "Equipo de mayor capacidad para maniobras que requieren fuerza, estabilidad y continuidad operacional.",
    image: "/servicios-flota-gruas-horquilla-3t-5t.webp",
  },
  {
    title: "Arriendos flexibles",
    text: "Modalidades semanales, mensuales y anuales según duración del proyecto o contrato de servicio.",
    image: "/galeria-grua-horquilla-5t-en-traslado.webp",
  },
  {
    title: "Maquinaria estándar minero",
    text: "Equipos acondicionados para trabajar en entornos exigentes, con foco en seguridad y eficiencia.",
    image: "/servicios-grua-horquilla-30-balpiz.webp",
  },
];

export default function Servicios() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.kicker}>Servicios</span>
          </div>

          <div className={styles.titleBlock}>
            <h2>
              Arriendo de grúas horquilla 3T y 5T para operaciones industriales
            </h2>
            <p>
              Ofrecemos soluciones operativas flexibles para adaptarnos a las
              exigencias, tiempos y continuidad de cada proyecto.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureImage}>
            <Image
              src="/servicios-flota-gruas-horquilla-3t-5t.webp"
              alt="Flota de grúas horquilla 3T y 5T BALPIZ GRÚAS SPA"
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
            />

            <div className={styles.featureBadge}>
              <span>3T / 5T</span>
              <strong>Flota disponible</strong>
            </div>
          </div>

          <div className={styles.featureContent}>
            <span>Disponibilidad operativa</span>
            <h3>Respuesta ágil para apoyar la continuidad de cada operación</h3>
            <p>
              Gestionamos disponibilidad, traslado y coordinación de equipos para
              responder a requerimientos dentro y fuera de Antofagasta.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              className={styles.card}
              key={service.title}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 25vw"
                />

                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}