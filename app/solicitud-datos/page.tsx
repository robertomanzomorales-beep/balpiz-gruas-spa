import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import DataRequest from "../../components/DataRequest";
import { privacy } from "../../lib/privacy";

export const metadata: Metadata = {
  title: "Ejercer mis derechos | BALPIZ GRÚAS SPA",
  description: "Canal para solicitar acceso, rectificación, supresión y otros derechos sobre tus datos personales ante BALPIZ GRÚAS SPA.",
  alternates: { canonical: "/solicitud-datos" },
  openGraph: { title: "Ejercer mis derechos | BALPIZ GRÚAS SPA", url: "/solicitud-datos" },
};

export default function DataRequestPage() {
  return (
    <LegalPage current="rights" title="Ejercer mis derechos" intro="Puedes consultar por tus datos, solicitar una corrección o eliminación y retirar tu autorización a través del correo de BALPIZ.">
      <section>
        <h2>Un canal directo para tus datos</h2>
        <p>Escribe a <a href={`mailto:${privacy.email}?subject=Solicitud%20de%20datos%20personales`}>{privacy.email}</a> o prepara tu mensaje con el formulario de esta página. No necesitas aceptar publicidad ni autorizar una cotización para ejercer tus derechos.</p>
        <p>Este formulario solo prepara un borrador en tu navegador. No envía información a FormSubmit, no la almacena y no registra la solicitud: el envío se realiza desde tu aplicación de correo.</p>
        <DataRequest />
      </section>
      <section>
        <h2>Qué ocurre después del envío</h2>
        <p>Conserva el correo enviado como respaldo. BALPIZ debe confirmar la recepción y, cuando sea necesario, solicitar los antecedentes mínimos para verificar la identidad y localizar la información.</p>
        <p>Desde la entrada en vigencia de la Ley N.º 21.719, el plazo general de respuesta es de 30 días corridos, con posibilidad de la prórroga legal correspondiente. El bloqueo temporal tiene un plazo especial de dos días hábiles. Podrás recurrir a la Agencia de Protección de Datos Personales por rechazo o falta de respuesta, de acuerdo con el régimen aplicable desde su vigencia.</p>
      </section>
    </LegalPage>
  );
}
