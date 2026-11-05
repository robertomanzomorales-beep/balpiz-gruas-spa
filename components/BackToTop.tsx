"use client";

export default function BackToTop({ className }: { className: string }) {
  return (
    <button type="button" className={className} onClick={() => {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      document.querySelector<HTMLAnchorElement>("header a")?.focus({ preventScroll: true });
    }}>
      Volver arriba
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
    </button>
  );
}
