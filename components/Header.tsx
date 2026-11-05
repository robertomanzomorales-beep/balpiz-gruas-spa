"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";

const menuItems = [
  { label: "Inicio", id: "inicio" },
  { label: "Quiénes somos", id: "quienes-somos" },
  { label: "Servicios", id: "servicios" },
  { label: "Galería", id: "galeria" },
  { label: "Clientes", id: "clientes" },
  { label: "Contacto", id: "contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState("inicio");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pendingHref = useRef<string | null>(null);
  const hrefFor = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-18% 0px -65% 0px", threshold: 0 });
    menuItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1061px)");
    const closeOnDesktop = () => { if (desktop.matches) dialogRef.current?.close(); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previous;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function openMenu() {
    pendingHref.current = null;
    setClosing(false);
    dialogRef.current?.showModal();
    setOpen(true);
  }

  function closeMenu() { setClosing(true); }

  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    pendingHref.current = event.currentTarget.getAttribute("href");
    closeMenu();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topLine} />
        <div className={styles.inner}>
          <a href={hrefFor("inicio")} className={styles.logoButton} aria-label="BALPIZ GRÚAS SPA · Ir al inicio">
            <Image src="/logo-balpiz-gruas-spa.webp" alt="BALPIZ GRÚAS SPA" width={240} height={90} priority className={styles.logo} />
          </a>
          <nav className={styles.nav} aria-label="Menú principal">
            {menuItems.map(({ label, id }) => (
              <a key={id} href={hrefFor(id)} className={id === "contacto" ? styles.contactLink : styles.navLink}
                aria-current={pathname === "/" && active === id ? "location" : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <button type="button" className={styles.menuButton} aria-label="Abrir menú" aria-expanded={open} aria-controls="menu-movil" onClick={openMenu}>
            <span /><span />
          </button>
        </div>
      </header>
      <div className={styles.spacer} aria-hidden="true" />
      <dialog id="menu-movil" ref={dialogRef} className={styles.mobileMenu} aria-labelledby="mobile-menu-title" data-closing={closing}
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}
        onClose={() => { setOpen(false); setClosing(false); }}
        onAnimationEnd={(event) => {
          if (event.target !== event.currentTarget || !closing) return;
          dialogRef.current?.close();
          if (pendingHref.current) window.location.assign(pendingHref.current);
          pendingHref.current = null;
        }}>
        <div className={styles.menuTop}>
          <a href={hrefFor("inicio")} onClick={navigate} aria-label="BALPIZ GRÚAS SPA · Ir al inicio">
            <Image src="/logo-balpiz-gruas-spa.webp" alt="BALPIZ GRÚAS SPA" width={220} height={83} className={styles.logo} />
          </a>
          <button type="button" className={styles.closeButton} aria-label="Cerrar menú" onClick={closeMenu} autoFocus>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
        <div className={styles.menuBody}>
          <p className={styles.menuLabel} id="mobile-menu-title">Explora BALPIZ</p>
          <nav className={styles.mobileNav} aria-label="Menú móvil">
            {menuItems.map(({ label, id }, index) => (
              <a key={id} href={hrefFor(id)} onClick={navigate} style={{ animationDelay: `${70 + index * 40}ms` }}
                aria-current={pathname === "/" && active === id ? "location" : undefined}>
                {label}<span aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.menuBottom}>
          <span>Arriendo de grúas horquilla · Antofagasta</span>
          <a href="tel:+56934580890">+56 9 3458 0890</a>
          <a href="/politica-privacidad" onClick={navigate}>Privacidad y protección de datos</a>
        </div>
      </dialog>
    </>
  );
}
