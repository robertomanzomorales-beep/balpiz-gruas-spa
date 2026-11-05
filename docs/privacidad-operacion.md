# Protección de datos: implementación web y gestión del responsable

Actualización: 5 de noviembre de 2026. Política v1.0.

## Implementado en el sitio

- Política adaptada al flujo real de BALPIZ: cotización → FormSubmit → Gmail; alojamiento en Vercel.
- Casilla afirmativa obligatoria y desmarcada, limitada a la solicitud de cotización.
- Registro del texto autorizado, versión, URL de política y fecha UTC junto al correo de cada solicitud. La evidencia debe conservarse con la solicitud.
- Campos secundarios opcionales y advertencia para evitar información sensible.
- Comprobación del resultado real de FormSubmit; una respuesta HTTP 200 con `success: false` no se muestra como envío exitoso. Tiempo límite de 20 segundos y alternativa de contacto.
- Canal para ejercer derechos que prepara un borrador local y explica que el envío debe hacerse desde la aplicación de correo del titular; no registra solicitudes hasta que BALPIZ recibe el correo.
- Información de cookies fiel a la versión publicada: sin analítica, publicidad ni contenidos externos incrustados. El aviso solo guarda su fecha de lectura tras pulsar Entendido.
- Entradas al llegar al viewport, alternativa para movimiento reducido, navegación móvil mediante un diálogo nativo y retorno al inicio desde el footer.

## Información y decisiones que debe completar BALPIZ

1. Confirmar la razón social completa, RUT e identidad vigente del representante legal. El código recibido solo identifica BALPIZ GRÚAS SPA y publica dirección y correo; no se inventó un representante.
2. Revisar los acuerdos con Vercel, FormSubmit y Google, los lugares efectivos de tratamiento y el fundamento y garantías de eventuales transferencias internacionales. Publicar políticas y una casilla no sustituye esa revisión.
3. Establecer y ejecutar los plazos de conservación en los correos, respaldos y proveedores. La web no elimina automáticamente los mensajes de Gmail ni los registros de FormSubmit.
4. Restringir los accesos al correo y cuentas del alojamiento, aplicar medidas de seguridad acordes y mantener los respaldos y registros pertinentes. Las políticas no declaran medidas organizativas que no se verificaron.
5. Asignar a una persona para revisar el canal de privacidad, acusar recibo, autenticar de forma proporcionada, responder, documentar su respuesta y atender retiros, rectificaciones o supresiones ante todos los proveedores aplicables.
6. Aplicar desde su vigencia los plazos de la Ley 21.719: respuesta general en 30 días corridos, con una prórroga legal de hasta el mismo plazo, y bloqueo temporal en dos días hábiles; revisar el régimen vigente para cada solicitud recibida antes del 1 de diciembre de 2026.

No hay base de datos propia ni una bandeja administrativa nueva. El funcionamiento del envío depende de que el correo de FormSubmit esté activado y operativo. Las verificaciones de publicación no incluyen el envío de correos de prueba a terceros.

## Mantención

Actualizar los textos, la versión compartida en `lib/privacy.ts` y el mecanismo de consentimiento si cambian las finalidades, los proveedores o las herramientas. Si se agregan métricas, publicidad o contenido incrustado, mantenerlos bloqueados hasta recabar la autorización que corresponda. Conservar evidencia de la versión aceptada junto a cada envío.

Fuente normativa: https://www.bcn.cl/leychile/navegar?idNorma=1209272
