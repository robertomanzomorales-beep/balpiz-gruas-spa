import Header from "../components/Header";
import Hero from "../components/Hero";
import QuienesSomos from "../components/QuienesSomos";
import Servicios from "../components/Servicios";
import Galeria from "../components/Galeria";
import Clientes from "../components/Clientes";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Galeria />
        <Clientes />
        <Contacto />
        <Footer />
      </main>

      <WhatsAppButton />
    </>
  );
}