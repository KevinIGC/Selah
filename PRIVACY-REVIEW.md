# Revisión de privacidad de Selah

Revisión sustantiva: 23 de noviembre de 2026. **Borrador pendiente de aprobación.**

## Implementación del sitio

- `privacy/index.html`: página completa en español, sin selector de idioma ni traducción propia; el navegador puede traducirla.
- `privacy/privacy.css`: estilos específicos; reutiliza `styles.css`, las fuentes y la apariencia clara/oscura del sitio.
- `terms/index.html`: versión española de los Términos de Uso proporcionados para la app, con sus 16 secciones y subsecciones 13.1–13.4; conserva la fecha original del 6 de noviembre de 2026. Disponible localmente en `/terms`, con redirección a `/terms/`.
- `index.html` y `equipo.html`: enlaces de privacidad y Términos añadidos a cada pie de página. Ambas páginas legales se enlazan entre sí.
- No se cambió `app.js`, Clarity en las páginas existentes, el dominio ni el proveedor de alojamiento.
- No hay dependencias, compilador ni sistema de pruebas configurados en este repositorio.

## Evidencia disponible

El repositorio contiene el sitio estático y `CNAME` con `selahunidos.com`. El remoto es `KevinIGC/Selah`; no contiene código Swift, configuración de Firebase, reglas de seguridad, SDK publicitario ni un flujo de eliminación de cuenta. No se ha revisado la configuración del servicio de hosting o la consola de Firebase/AdMob.

El equipo proporcionó los strings de localización en inglés de los Términos de Uso de la app, fechados el 6 de noviembre de 2026. Se revisaron sus 16 secciones y cuatro subsecciones de bloqueos, y se trasladaron al español para la web sin añadir obligaciones ni ampliar licencias, sanciones o garantías. El texto suministrado es evidencia de las condiciones de uso, no prueba de que sus funciones estén implementadas. La política ya enlaza a `/terms` y deja de indicar que los Términos faltan. No se modificaron los strings de la app.

El correo `selah.app.unidos@gmail.com` figura en las páginas de inicio y equipo para colaborar con el proyecto. Es un contacto existente, pero su uso como buzón formal de privacidad debe confirmarse. Las páginas existentes cargan Microsoft Clarity con el identificador `zh9fbumaih`, sin panel de consentimiento en el código del repositorio. `styles.css` solicita Google Fonts. La nueva página usa esa hoja compartida y no incluye Clarity.

El uso de Firebase y AES-GCM en notas privadas procede de la descripción del equipo. No se presenta como una auditoría de implementación. La integración de AdMob se describe como prevista.

## Información y controles pendientes antes de aprobar

1. Proporcionar el código de iOS y las configuraciones pertinentes para verificar cada afirmación. Los Términos ya fueron suministrados, revisados y añadidos en `/terms`. Mantener la versión web alineada con futuras revisiones de la app.
2. Identificar al responsable del tratamiento y su domicilio, territorios de lanzamiento, jurisdicciones aplicables y canal formal de privacidad. No inferir una sociedad registrada ni una jurisdicción a partir del idioma del sitio.
3. Inventariar campos de registro, proveedores de autenticación, perfiles, publicaciones, seguidores, mensajes/grupos, archivos, notificaciones, notas, oración, devocionales, lectura, trivia y compras. Confirmar campos obligatorios, permisos, visibilidad y finalidades reales. No incluir funciones musicales retiradas.
4. Confirmar Authentication, Firestore, Storage y cualquier otro producto/SDK: datos que procesa, ubicaciones, acceso de administradores y terceros, reglas de seguridad, registros y transferencias internacionales. Verificar bases jurídicas y salvaguardas por territorio, incluidas las correspondientes a creencias religiosas u otros datos sensibles.
5. Revisar AES-GCM: alcance exacto, claves, nonce, almacenamiento, sincronización, recuperación y copias. No ampliar la afirmación a conversaciones, diarios de oración u otros datos.
6. Comprobar AdMob/mediación, versiones y datos de cada SDK, mensajes de UMP, actualización del consentimiento al iniciar, bloqueo de solicitudes hasta que estén permitidas, acceso para revisar decisiones cuando sea necesario y ATT cuando corresponda. Probar aceptación, rechazo, retirada y geografías de prueba. No usar creencias religiosas para segmentación personalizada.
7. Definir edades/territorios admitidos y evaluar legislación sobre menores; comprobar registro, consentimiento parental cuando proceda y restricciones de anuncios/datos. No asumir que la clasificación de App Store o UMP resuelve estas obligaciones.
8. Comprobar edición de perfil y cuenta, borrado de publicaciones/archivos y eliminación de cuenta iniciada dentro de iOS. Definir acceso/exportación, rectificación, retirada de consentimiento y solicitudes por correo, comprobación de identidad, responsables y plazos legales aplicables.
9. Definir conservación por categoría, eliminación de datos y archivos asociados, mensajes compartidos, respaldos, cachés, registros, excepciones y plazos reales de purga. No prometer borrado inmediato universal.
10. Verificar el uso efectivo de Clarity: configuración, finalidad, cookies, consentimiento regional, señales de consentimiento, conservación, acceso y cualquier uso publicitario de Microsoft. Actualizar la divulgación del sitio o implementar controles si corresponde. Esta tarea no modifica la integración existente.
11. Los Términos suministrados especifican compras dentro de la aplicación de Apple para el acceso premium vitalicio mientras las funciones y el servicio estén disponibles. Comprobar esa integración y los datos de transacciones/derechos de acceso que Selah recibe o conserva; los Términos no demuestran la implementación.
12. Definir notificaciones de cambios importantes, revisar jurídicamente el contenido, sustituir las frases pendientes por prácticas comprobadas y retirar el aviso de borrador solo después de la aprobación. La fecha visible es la revisión real del borrador; actualizarla ante cambios sustantivos y registrar la publicación efectiva.

## Publicación en el alojamiento existente

El archivo `privacy/index.html` permite servir `/privacy/` como un directorio estático. GitHub Pages normalmente redirige `/privacy` a `/privacy/` y entrega el documento con HTTP 200. No necesita cuenta, JavaScript, un router de SPA ni una página 404 de respaldo. La URL canónica solicitada es `https://selahunidos.com/privacy`; todos los recursos internos usan rutas desde la raíz para funcionar con o sin la barra final.

Publicar estos archivos mediante el proceso existente de GitHub Pages, manteniendo el `CNAME`. Confirmar que la fuente de Pages incluye el nuevo directorio y que está activado HTTPS. No se ha hecho push ni deployment en esta tarea: la política necesita verificación y aprobación de contenido. Después de publicar, comprobar con una sesión sin autenticar:

- `https://selahunidos.com/privacy` redirige correctamente a `/privacy/` y termina en HTTP 200, sin recurrir a un 404.
- Abrir directamente y actualizar `/privacy/`; comprobar CSS, icono, índice, correo, regreso al inicio y enlaces desde ambos pies de página.
- Probar teléfono, tablet y escritorio, teclado, zoom, modos claro/oscuro y traducción del navegador.
- Registrar el enlace tanto en App Store Connect como dentro de la app y en la configuración pertinente de AdMob, después de aprobar el texto y las prácticas.

## Fuentes oficiales consultadas

Las fuentes orientan la revisión; no certifican cumplimiento ni demuestran la configuración de Selah.

- [Google AdMob Publisher Policies](https://support.google.com/admob/answer/10502938?hl=en).
- [Google: divulgaciones de privacidad](https://support.google.com/publisherpolicies/answer/10437794).
- [Google: publicidad personalizada y restricciones de datos sensibles](https://support.google.com/publisherpolicies/answer/15101728).
- [Google UMP para iOS](https://developers.google.com/admob/ios/privacy).
- [Google Mobile Ads SDK: datos declarables en App Store](https://developers.google.com/admob/ios/privacy/data-disclosure).
- [Firebase: privacidad y seguridad](https://firebase.google.com/support/privacy).
- [Apple App Store Review Guidelines, sección 5.1](https://developer.apple.com/app-store/review/guidelines/#privacy).
- [Microsoft Clarity: divulgación de privacidad](https://learn.microsoft.com/en-us/clarity/setup-and-installation/privacy-disclosure).
- [Google Fonts: privacidad](https://developers.google.com/fonts/faq/privacy).
- [FTC: COPPA y aviso sobre la regla revisada](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions). Confirmar la regla vigente y su aplicabilidad a los mercados elegidos; no convertir la edad citada en esa norma en una edad mínima inventada de Selah.
- [Comisión Europea: derechos y datos sensibles](https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en). Evaluar su aplicabilidad, incluida la protección específica de datos que revelan creencias religiosas.

## Verificación local realizada

- HTTP: `/privacy` responde con 301 a `/privacy/`; el documento responde con 200.
- Apertura directa y recarga comprobadas en el navegador; el contenido no requiere cuenta ni JavaScript.
- Validados todos los enlaces y fragmentos internos de inicio, equipo y privacidad; IDs únicos y las 13 secciones presentes.
- Navegación desde inicio al enlace de privacidad del pie comprobada en el navegador; enlace del pie de equipo comprobado en la validación de archivos.
- Revisión visual de la apariencia oscura y mediciones a 390, 768 y 1440 píxeles: sin desbordamiento horizontal; texto de párrafos de 16 px. Índice de una columna en teléfono, dos en tablet y lateral fijo en escritorio.
- Las reglas claras heredadas y específicas están presentes; no se hizo una prueba visual con el sistema en modo claro ni una prueba de traducción del navegador.
- `git diff --check` pasó. No existe un build o suite de pruebas configurados.
- No se ha comprobado la URL pública, HTTPS ni la configuración de despliegue. Son comprobaciones posteriores a la publicación, no resultados de la prueba local.

## Revisión de los Términos suministrados

- Se mantuvieron la licencia no exclusiva y libre de regalías para operar el contenido dentro de la app, la propiedad del usuario y las condiciones de compra vitalicia, disponibilidad y reembolsos.
- Se conservaron todos los plazos de bloqueo (1 día, 3 días, 1 semana, 1 mes, 1 año y permanente), las restricciones de acceso y la posibilidad de retirada por administradores. No se añadieron plazos o procedimientos nuevos.
- Las notas se describen como cifradas y destinadas al titular de la cuenta; esto no se amplía a mensajes o diarios. La política mantiene pendiente la revisión de claves y acceso real.
- Se conservaron las declaraciones del texto fuente sobre Reina-Valera 1909, la adaptación propia y KJV. Esta traducción no constituye una comprobación de derechos/licencias por territorio; esa comprobación sigue correspondiendo al equipo antes de publicar/distribuir los textos.
- Se conserva la referencia original a canales oficiales de soporte en la sección 16. Los Términos no especifican un correo ni un flujo de apelación; no se inventaron. La confirmación del buzón de privacidad sigue pendiente.
- Verificación de esta actualización: enlaces y fragmentos internos de las cuatro páginas válidos; 16 secciones, cuatro subsecciones de bloqueos, seis duraciones y fecha original comprobadas. Apertura directa y recarga de `/terms/`, navegación entre ambas páginas legales y diseño oscuro comprobados en navegador; sin desbordamiento horizontal a 390 y 1280 px y texto de párrafos a 16 px en móvil. No se ha publicado ni verificado la ruta en producción.
