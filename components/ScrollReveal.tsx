"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        (target as HTMLElement).dataset.reveal = "visible";
        observer.unobserve(target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -32px 0px" });

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 32) return;
      element.dataset.reveal = "pending";
      observer.observe(element);
    });

    const showAll = () => {
      if (!motion.matches) return;
      elements.forEach((element) => { element.dataset.reveal = "visible"; });
      observer.disconnect();
    };
    motion.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", showAll);
      elements.forEach((element) => { element.dataset.reveal = ""; });
    };
  }, []);

  return null;
}
