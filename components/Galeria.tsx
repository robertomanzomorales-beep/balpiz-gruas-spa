"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./Galeria.module.css";

const galleryImages = [
  {
    src: "/contacto-cotizacion-grua-horquilla-operativa.webp",
    alt: "Grúa horquilla BALPIZ en operación",
  },
  {
    src: "/galeria-detalle-cabina-grua-horquilla.webp",
    alt: "Detalle de cabina de grúa horquilla",
  },
  {
    src: "/galeria-flota-gruas-horquilla-patio-balpiz.webp",
    alt: "Flota de grúas horquilla BALPIZ en patio",
  },
  {
    src: "/galeria-grua-horquilla-5t-en-terreno.webp",
    alt: "Grúa horquilla 5T BALPIZ en terreno",
  },
  {
    src: "/galeria-grua-horquilla-5t-en-traslado.webp",
    alt: "Grúa horquilla 5T BALPIZ en traslado",
  },
  {
    src: "/galeria-traslado-nocturno-grua-horquilla.webp",
    alt: "Traslado nocturno de grúa horquilla BALPIZ",
  },
  {
    src: "/hero-arriendo-gruas-horquilla-balpiz-antofagasta.webp",
    alt: "Arriendo de grúas horquilla BALPIZ en Antofagasta",
  },
  {
    src: "/quienes-somos-grua-horquilla-5t-balpiz.webp",
    alt: "Grúa horquilla 5T BALPIZ",
  },
  {
    src: "/servicios-flota-gruas-horquilla-3t-5t.webp",
    alt: "Flota de grúas horquilla 3T y 5T BALPIZ",
  },
  {
    src: "/servicios-grua-horquilla-3t-operacion-industrial.webp",
    alt: "Grúa horquilla 3T en operación industrial",
  },
  {
    src: "/servicios-grua-horquilla-30-balpiz.webp",
    alt: "Grúa horquilla BALPIZ estándar operativo",
  },
];

export default function Galeria() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === 0 ? galleryImages.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === galleryImages.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className={styles.section} id="galeria">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.kicker}>Galería</span>
          </div>

          <div className={styles.titleBlock}>
            <h2>Maquinarias listas para operar en terreno</h2>
            <p>
              Conoce parte de nuestra flota y equipos disponibles para apoyar
              operaciones de carga, descarga, traslado interno y continuidad
              operacional.
            </p>
          </div>
        </div>

        <div className={styles.galleryShell}>
          <div className={styles.gallery}>
            {galleryImages.map((item, index) => (
              <button
                type="button"
                className={styles.item}
                key={item.src}
                onClick={() => openLightbox(index)}
                aria-label={`Abrir imagen ${index + 1} de la galería`}
                style={
                  {
                    "--delay": `${index * 0.055}s`,
                  } as CSSProperties
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 700px) 78vw, (max-width: 1100px) 38vw, 310px"
                />

                <span className={styles.zoomIcon}>+</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.mobileHint}>Desliza para ver más imágenes</div>
      </div>

      {activeIndex !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true">
          <button
            type="button"
            className={styles.backdrop}
            onClick={closeLightbox}
            aria-label="Cerrar galería"
          ></button>

          <div className={styles.lightboxPanel}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              ×
            </button>

            <button
              type="button"
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={showPrev}
              aria-label="Imagen anterior"
            >
              ‹
            </button>

            <div className={styles.lightboxImage}>
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className={styles.fullImage}
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={showNext}
              aria-label="Imagen siguiente"
            >
              ›
            </button>

            <div className={styles.counter}>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}