import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { privacy } from "../../lib/privacy";

export const metadata: Metadata = {
  title: "Política de privacidad | BALPIZ GRÚAS SPA",
  description: "Información sobre los datos de contacto y cotización, sus finalidades, proveedores y derechos de los titulares en BALPIZ GRÚAS SPA.",
  alternates: { canonical: "/politica-privacidad" },
  openGraph: { title: "Política de privacidad | BALPIZ GRÚAS SPA", url: "/politica-privacidad" },
};

export default function PrivacyPage() {
  return (
    <LegalPage current="privacy" title="Política de privacidad" intro="Conoce cómo se utilizan los datos que compartes al consultar por nuestros servicios y cómo puedes ejercer tus derechos.">
      <section>
        <h2>Responsable y contacto</h2>
        <p><strong>{privacy.company}</strong> es responsable del tratamiento de los datos que recibe para gestionar sus consultas, cotizaciones y servicios de arriendo de maquinaria.</p>
        <address>{privacy.address}<br />Correo: <a href={`mailto:${privacy.email}`}>{privacy.email}</a><br />Teléfono: <a href="tel:+56934580890">+56 9 3458 0890</a></address>
        <p>Esta política describe el sitio www.balpizgruas.cl. Considera la Ley N.º 19.628 y las modificaciones introducidas por la Ley N.º 21.719, cuya entrada en vigencia está prevista para el 1 de diciembre de 2026.</p>
      </section>
      <section>
        <h2>Qué información recibimos</h2>
        <p>Los datos provienen directamente de personas que se comunican con BALPIZ, por cuenta propia o en representación de una empresa.</p>
        <ul>
          <li><strong>Contacto:</strong> nombre, correo electrónico y teléfono.</li>
          <li><strong>Cotización:</strong> empresa y RUT de empresa, si los indicas; maquinaria, modalidad de arriendo y detalles del requerimiento.</li>
          <li><strong>Autorización:</strong> texto aceptado, versión de esta política, fecha y hora del envío, incluidos en la solicitud remitida por correo.</li>
          <li><strong>Información técnica:</strong> el alojamiento y los proveedores de entrega pueden procesar dirección IP y registros técnicos para servir el sitio y proteger su funcionamiento.</li>
        </ul>
        <p>Empresa, RUT de empresa y modalidad son opcionales. No adjuntes documentos de identidad, datos bancarios, antecedentes de salud u otra información sensible al mensaje.</p>
      </section>
      <section>
        <h2>Para qué se utilizan y con qué fundamento</h2>
        <p>Los datos del formulario se utilizan para responder tu consulta, preparar la cotización y coordinar el requerimiento que solicitaste. La autorización se recoge mediante una casilla sin marcar; no incluye publicidad ni suscripciones.</p>
        <p>Cuando corresponda, los datos también podrán utilizarse para preparar o ejecutar el servicio solicitado y cumplir obligaciones legales vinculadas a la contratación. Estos tratamientos se apoyan en la base jurídica que corresponda, sin extender la autorización a finalidades ajenas.</p>
        <p>No se venden los datos enviados por este formulario ni se utilizan para decisiones automatizadas o perfiles publicitarios desde el sitio.</p>
      </section>
      <section>
        <h2>Servicios que intervienen</h2>
        <p><strong>Vercel</strong> aloja el sitio. El formulario se envía a <strong>FormSubmit</strong>, que lo procesa para entregarlo al correo <strong>Gmail</strong> de BALPIZ. El envío a FormSubmit solo ocurre cuando pulsas «Enviar solicitud» y has autorizado el tratamiento.</p>
        <p>Estos proveedores pueden tratar datos en infraestructura situada fuera de Chile, conforme a sus condiciones de servicio y políticas de privacidad. Si prefieres otra vía de contacto, puedes llamar al teléfono publicado o escribir directamente al correo de BALPIZ, gestionado mediante Gmail.</p>
        <p>Revisa la información de <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel</a>, <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">FormSubmit</a> y <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer">Google</a>. FormSubmit informa que conserva los envíos en su archivo durante 30 días; ese plazo es independiente de la conservación del correo recibido por BALPIZ.</p>
        <p>WhatsApp e Instagram son enlaces externos: sus plataformas se abren únicamente si decides visitarlas y aplican sus propias condiciones.</p>
      </section>
      <section>
        <h2>Conservación y resguardo</h2>
        <p>Las consultas se conservan mientras se tramita el requerimiento y se realiza el seguimiento solicitado. Al finalizar esa finalidad, corresponde suprimir o anonimizar los datos que ya no sean necesarios, salvo que deban conservarse para cumplir obligaciones legales o atender responsabilidades vinculadas al servicio. Los antecedentes de una contratación se conservan durante la relación y los plazos legales aplicables.</p>
        <p>El sitio utiliza conexión HTTPS, no guarda los datos del formulario en el navegador y no incorpora una base de datos propia de cotizaciones. La información enviada queda en los servicios de entrega y en el correo del responsable. Puedes solicitar la revisión o supresión de esos antecedentes mediante el canal de privacidad.</p>
      </section>
      <section>
        <h2>Tus derechos y retiro de la autorización</h2>
        <p>Puedes solicitar acceso, rectificación, supresión, oposición, portabilidad y, cuando corresponda, bloqueo temporal de tus datos. También puedes retirar la autorización para tratamientos que dependan de ella; esto no afecta lo realizado lícitamente con anterioridad ni las obligaciones legales de conservación.</p>
        <p>Utiliza <Link href="/solicitud-datos">Ejercer mis derechos</Link> o escribe a <a href={`mailto:${privacy.email}?subject=Solicitud%20de%20datos%20personales`}>{privacy.email}</a>. La página permite preparar un correo sin enviar tus datos a FormSubmit.</p>
        <p>Desde la vigencia de la Ley N.º 21.719, la solicitud general debe responderse en 30 días corridos, con la prórroga legal que corresponda; para el bloqueo temporal rige el plazo especial de dos días hábiles. Si se rechaza o no se responde oportunamente, puedes acudir a la Agencia de Protección de Datos Personales conforme al procedimiento legal, una vez que dicho régimen se encuentre vigente.</p>
      </section>
      <section>
        <h2>Cookies y actualizaciones</h2>
        <p>El sitio no incorpora herramientas de analítica, píxeles publicitarios ni contenido social incrustado. Consulta el detalle en <Link href="/politica-cookies">Cookies y almacenamiento</Link>.</p>
        <p>Cualquier cambio en las finalidades o herramientas debe reflejarse en esta política y, cuando corresponda, requerirá una nueva autorización. Puedes consultar el <a href="https://www.bcn.cl/leychile/navegar?idNorma=1209272" target="_blank" rel="noopener noreferrer">texto oficial de la Ley N.º 21.719</a>.</p>
      </section>
    </LegalPage>
  );
}
