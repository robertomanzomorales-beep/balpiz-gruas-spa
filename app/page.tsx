import ScrollReveal from "../components/ScrollReveal";
import Hero from "../components/Hero";
import QuienesSomos from "../components/QuienesSomos";
import Servicios from "../components/Servicios";
import Galeria from "../components/Galeria";
import Clientes from "../components/Clientes";
import Contacto from "../components/Contacto";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <main id="contenido">
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Galeria />
        <Clientes />
        <Contacto />
      </main>

      <WhatsAppButton />
    </>
  );
}