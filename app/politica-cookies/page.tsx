import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookies y almacenamiento | BALPIZ GRÚAS SPA",
  description: "Información sobre cookies, almacenamiento local y enlaces externos en el sitio web de BALPIZ GRÚAS SPA.",
  alternates: { canonical: "/politica-cookies" },
  openGraph: { title: "Cookies y almacenamiento | BALPIZ GRÚAS SPA", url: "/politica-cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage current="cookies" title="Cookies y almacenamiento" intro="Una explicación clara de los recursos que utiliza este sitio y de la información que permanece en tu navegador.">
      <section>
        <h2>Cómo funciona este sitio</h2>
        <p>Esta versión del sitio no instala cookies de analítica o publicidad ni integra Google Analytics, Meta Pixel, mapas, videos o publicaciones sociales incrustadas. Las imágenes y las tipografías se sirven desde el propio alojamiento.</p>
        <p>La infraestructura de alojamiento puede utilizar recursos técnicos para entregar el sitio y protegerlo. No utilizamos esa información para crear perfiles comerciales.</p>
      </section>
      <section>
        <h2>Recordatorio del aviso de privacidad</h2>
        <p>Cuando pulsas «Entendido», el navegador guarda una preferencia local llamada <strong>balpiz_privacy_notice_v1</strong>. Contiene únicamente la fecha en que leíste el aviso y permite ocultarlo durante seis meses en ese navegador. No contiene tu nombre, correo, consulta ni identificadores publicitarios y no se envía a BALPIZ.</p>
        <p>El almacenamiento local es distinto de una cookie. Si lo bloqueas o lo eliminas, puedes seguir utilizando el sitio; el aviso volverá a mostrarse. No guardamos el contenido de los formularios en ese almacenamiento.</p>
      </section>
      <section>
        <h2>Enlaces y formulario</h2>
        <p>WhatsApp e Instagram se abren al pulsar sus enlaces. El formulario de cotización conecta con FormSubmit únicamente al enviarlo. Los servicios externos pueden aplicar sus propias políticas y tecnologías en sus dominios.</p>
        <p>Consulta los proveedores y las finalidades del envío en la <Link href="/politica-privacidad">Política de privacidad</Link>.</p>
      </section>
      <section>
        <h2>Cómo controlar el almacenamiento</h2>
        <p>Puedes borrar los datos de www.balpizgruas.cl desde las opciones de privacidad de tu navegador. Allí también puedes bloquear las cookies de terceros y revisar los permisos del sitio.</p>
        <p>Como esta versión no incorpora categorías opcionales de seguimiento, no necesitas aceptar publicidad o analítica para navegar. Si en el futuro se incorporan, deberán permanecer desactivadas hasta que otorgues la autorización que corresponda.</p>
      </section>
    </LegalPage>
  );
}
