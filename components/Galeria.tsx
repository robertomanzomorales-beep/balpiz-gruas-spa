"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
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

function GalleryPhoto({ index, previous }: { index: number; previous: number | null }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const image = galleryImages[index];

  return (
    <div className={styles.photoFrame} data-ready={ready}>
      {previous !== null && (
        <Image src={galleryImages[previous].src} alt="" fill unoptimized loading="eager"
          className={styles.previousImage} draggable={false} aria-hidden="true" />
      )}
      <Image src={image.src} alt={image.alt} fill unoptimized loading="eager"
        className={styles.fullImage} draggable={false}
        onLoad={() => setReady(true)} onError={() => setFailed(true)} />
      {!ready && !failed && previous === null && <span className={styles.loader} role="status" aria-label="Cargando imagen" />}
      {failed && <p className={styles.imageError} role="alert">No se pudo cargar esta imagen. Puedes continuar con las demás fotografías.</p>}
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={direction === "left" ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} />
    </svg>
  );
}

export default function Galeria() {
  const [viewer, setViewer] = useState({ index: 0, previous: null as number | null });
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const requestedIndex = useRef(0);
  const requestId = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const backdropPressed = useRef(false);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const body = document.body;
    const previous = { rootOverflow: root.style.overflow, gutter: root.style.scrollbarGutter, bodyOverflow: body.style.overflow };
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      root.style.overflow = previous.rootOverflow;
      root.style.scrollbarGutter = previous.gutter;
      body.style.overflow = previous.bodyOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    for (const offset of [-1, 1]) {
      const next = (viewer.index + offset + galleryImages.length) % galleryImages.length;
      const image = new window.Image();
      image.decoding = "async";
      image.src = galleryImages[next].src;
    }
  }, [open, viewer.index]);

  useEffect(() => () => {
    requestId.current += 1;
    if (closeTimer.current !== null) clearTimeout(closeTimer.current);
  }, []);

  function openLightbox(index: number) {
    requestId.current += 1;
    requestedIndex.current = index;
    setViewer({ index, previous: null });
    setClosing(false);
    setLoading(false);
    setLoadError(false);
    setOpen(true);
    dialogRef.current?.showModal();
  }

  function closeLightbox() {
    if (closeTimer.current !== null || !dialogRef.current?.open) return;
    requestId.current += 1;
    setClosing(true);
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
    closeTimer.current = setTimeout(() => {
      dialogRef.current?.close();
      closeTimer.current = null;
    }, duration);
  }

  async function changeImage(offset: number) {
    if (closing || !dialogRef.current?.open) return;
    const index = (requestedIndex.current + offset + galleryImages.length) % galleryImages.length;
    requestedIndex.current = index;
    const currentRequest = ++requestId.current;
    setLoading(true);
    setLoadError(false);

    try {
      const image = new window.Image();
      image.decoding = "async";
      image.src = galleryImages[index].src;
      await image.decode();
      if (currentRequest !== requestId.current || !dialogRef.current?.open) return;
      setViewer((current) => ({ index, previous: current.index }));
      setLoading(false);
    } catch {
      if (currentRequest !== requestId.current || !dialogRef.current?.open) return;
      requestedIndex.current = viewer.index;
      setLoading(false);
      setLoadError(true);
    }
  }

  function finishSwipe(event: PointerEvent<HTMLDivElement>) {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const x = event.clientX - start.x;
    const y = event.clientY - start.y;
    if (Math.abs(x) > 48 && Math.abs(x) > Math.abs(y) * 1.25) void changeImage(x < 0 ? 1 : -1);
  }

  return (
    <section className={styles.section} id="galeria">
      <div className={styles.container}>
        <div className={styles.header} data-reveal>
          <div><span className={styles.kicker}>Galería</span></div>
          <div className={styles.titleBlock}>
            <h2>Maquinarias listas para operar en terreno</h2>
            <p>Conoce parte de nuestra flota y equipos disponibles para apoyar operaciones de carga, descarga, traslado interno y continuidad operacional.</p>
          </div>
        </div>

        <div className={styles.galleryShell} data-reveal>
          <div className={styles.gallery}>
            {galleryImages.map((item, index) => (
              <button type="button" className={styles.item} key={item.src}
                onClick={() => openLightbox(index)} aria-label={`Abrir imagen ${index + 1} de la galería`} aria-haspopup="dialog">
                <Image src={item.src} alt={item.alt} fill className={styles.image}
                  sizes="(max-width: 700px) 78vw, (max-width: 1100px) 38vw, 310px" />
                <span className={styles.zoomIcon} aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4" /></svg>
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.mobileHint}>Desliza para ver más imágenes</div>
      </div>

      <dialog ref={dialogRef} className={styles.lightbox} data-gallery data-closing={closing}
        aria-labelledby="gallery-viewer-title" aria-describedby="gallery-caption"
        onCancel={(event) => { event.preventDefault(); closeLightbox(); }}
        onClose={() => {
          requestId.current += 1;
          if (closeTimer.current !== null) clearTimeout(closeTimer.current);
          closeTimer.current = null;
          setOpen(false);
          setClosing(false);
          setLoading(false);
          pointerStart.current = null;
        }}
        onPointerDown={(event) => { backdropPressed.current = event.target === event.currentTarget; }}
        onClick={(event) => {
          if (event.target !== event.currentTarget || !backdropPressed.current) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeLightbox();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            void changeImage(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        <div className={styles.viewerHeader}>
          <h3 id="gallery-viewer-title">Galería BALPIZ</h3>
          <span className={styles.counter} aria-label={`Imagen ${viewer.index + 1} de ${galleryImages.length}`}>
            {String(viewer.index + 1).padStart(2, "0")} <span>/</span> {String(galleryImages.length).padStart(2, "0")}
          </span>
          <button type="button" className={styles.closeButton} onClick={closeLightbox} aria-label="Cerrar galería" autoFocus>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>

        <div className={styles.imageArea} aria-busy={loading}
          onPointerDown={(event) => {
            if (!event.isPrimary || event.button !== 0) return;
            pointerStart.current = { x: event.clientX, y: event.clientY };
            event.currentTarget.setPointerCapture(event.pointerId);
          }} onPointerUp={finishSwipe} onPointerCancel={() => { pointerStart.current = null; }}>
          {open && <GalleryPhoto key={viewer.index} index={viewer.index} previous={viewer.previous} />}
          {loading && <span className={styles.loadingNote} role="status">Cargando imagen…</span>}
          {loadError && <span className={styles.loadingNote} role="alert">No se pudo cargar la siguiente imagen. Intenta nuevamente.</span>}
        </div>

        <div className={styles.viewerFooter}>
          <div className={styles.caption}>
            <p id="gallery-caption" aria-live="polite" aria-atomic="true">{galleryImages[viewer.index].alt}</p>
            <span>Desliza o usa las teclas de dirección</span>
          </div>
          <nav className={styles.viewerControls} aria-label="Recorrer imágenes">
            <button type="button" className={styles.navButton} onClick={() => void changeImage(-1)} aria-label="Imagen anterior" disabled={closing}><Chevron direction="left" /></button>
            <button type="button" className={styles.navButton} onClick={() => void changeImage(1)} aria-label="Imagen siguiente" disabled={closing}><Chevron direction="right" /></button>
          </nav>
        </div>
      </dialog>
    </section>
  );
}
