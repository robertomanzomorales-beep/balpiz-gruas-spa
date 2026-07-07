"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const menuItems = [
  { label: "Inicio", href: "inicio" },
  { label: "Quiénes somos", href: "quienes-somos" },
  { label: "Servicios", href: "servicios" },
  { label: "Galería", href: "galeria" },
  { label: "Clientes", href: "clientes" },
  { label: "Contacto", href: "contacto", featured: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 94;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topLine}></div>

        <div className={styles.inner}>
          <button
            type="button"
            className={styles.logoButton}
            aria-label="Ir al inicio"
            onClick={() => scrollToSection("inicio")}
          >
            <Image
              src="/logo-balpiz-gruas-spa.webp"
              alt="BALPIZ GRÚAS SPA"
              width={240}
              height={90}
              priority
              className={styles.logo}
            />
          </button>

          <nav className={styles.nav} aria-label="Menú principal">
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={item.featured ? styles.contactLink : styles.navLink}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className={`${styles.menuButton} ${open ? styles.active : ""}`}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
          <nav className={styles.mobileNav} aria-label="Menú móvil">
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={item.featured ? styles.mobileContact : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className={styles.spacer}></div>
    </>
  );
}