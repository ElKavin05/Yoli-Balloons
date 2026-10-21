# Yoli Balloons — propuesta visual

Muestra no oficial, con noindex y robots.txt. Sin backend ni almacenamiento.

## Contenido y fotografías
- `dist/content.js`: teléfono, mensaje, imagen principal y galería.
- `dist/assets/`: colocar fotografías reales autorizadas, preferiblemente WebP comprimido.
- `dist/index.html`: textos y secciones editables.
- `dist/styles.css`: diseño adaptable.

Para activar fotografías, definir heroImage/heroAlt y completar photos con src, alt y caption. La galería habilita ampliación mediante un diálogo accesible. No añadir datos de eventos o clientes sin confirmar. Los espacios actuales son sustituciones gráficas, no trabajos realizados.

## Antes de publicar oficialmente
Recibir fotografía principal y selección de portafolio con autorización de uso, textos alternativos y cualquier descripción confirmada. Confirmar nombre de marca, logo si existe, contactos y aprobación del diseño. Configurar dominio oficial y revisar privacidad según la configuración final; retirar noindex y actualizar robots.txt solo tras aprobar la publicación oficial.
## Revisión visual local (21 de octubre de 2026)

Diseño actualizado con la referencia local de Nail Spot: portada editorial, composición botánica vectorial identificada como ilustrativa, tarjetas de servicios, presentación breve, preguntas frecuentes y cierre destacado. El sitio permanece como muestra no oficial. Subir el código a GitHub no equivale a publicar ni aprobar el sitio.

Vista previa: http://localhost:4178 mientras esté activo el servidor local.

La ilustración no es un trabajo de Yoli Balloons. Sustituir por fotografía autorizada mediante content.js. La ubicación confirmada es únicamente Panamá; no se añadió dirección, mapa, horario ni área de cobertura sin confirmar.

Validación: comprobados 320, 390, 430, 768 y 1440 px; sin desbordamiento horizontal, imagen principal cargada y controles principales de al menos 44 px. Comprobados foco visible de teclado, apertura de preguntas frecuentes, navegación por anclas y construcción del mensaje de WhatsApp con caracteres especiales. La galería fotográfica real queda pendiente de los materiales del cliente.

## Ejecutar localmente

Desde esta carpeta, ejecutar `python -m http.server 4178 --directory dist` y abrir http://localhost:4178. No requiere instalación de dependencias ni compilación.

Repositorio: https://github.com/ElKavin05/Yoli-Balloons

## Logo proporcionado por la clienta

`dist/assets/yoli-balloons-logo.png` conserva el archivo original, sus colores y proporciones. Se muestra completo sobre una superficie blanca, sin estirar ni recortar el globo o el texto, en el encabezado y el pie de página. El tamaño intrínseco evita saltos de composición y permite una presentación nítida en pantallas de alta densidad.

Logo transparente: `dist/assets/yoli-balloons-logo-transparent.png`. Versión sin fondo para integrarse directamente al crema del sitio. Se conserva el original proporcionado por la clienta.


## Desplegar en Cloudflare Pages y Netlify

El repositorio es independiente: la raíz es esta carpeta, no la carpeta del proyecto CirenCore. No requiere React, Vite, dependencias de ejecución, backend ni variables secretas. `dist` ya contiene el sitio completo. `npm run build` comprueba archivos y recursos sin regenerarlos ni borrarlos.

### Cloudflare Pages

- Repositorio: `ElKavin05/Yoli-Balloons`.
- Rama de producción: `main`.
- Framework: `None`.
- Directorio raíz: dejar vacío (raíz del repositorio).
- Comando de build: `npm run build`.
- Directorio de salida: `dist`.
- El archivo `wrangler.toml` declara la carpeta de salida para Pages. Si tu proyecto existente tiene otro nombre, sustituye `name = "yoli-balloons"` por su nombre real antes de desplegar.
- Seleccionar un proyecto **Pages**, no un Worker con comando `wrangler deploy`.

Si aparece “project disconnected”, revisar en GitHub Settings → Applications → Installed GitHub Apps → Cloudflare Workers and Pages que el repositorio Yoli-Balloons esté autorizado. Mantener el acceso que ya requiere CirenCore-Page. Los archivos del repositorio no pueden conceder ese permiso ni resolver incidencias de webhooks.

### Netlify

`netlify.toml` define el comando `npm run build`, Node 22 y la carpeta publicable `dist`.

- Importar `ElKavin05/Yoli-Balloons`, rama `main`.
- Base directory: raíz del repositorio (vacío).
- Build command: `npm run build`.
- Publish directory: `dist`.
- No establecer `sites/yoli-balloons` como base: esa ruta pertenece al workspace local, no al repositorio independiente.

Para una carga manual, subir el contenido de `dist`, no la carpeta raíz del repositorio.

### Comprobar antes de publicar

Ejecutar `npm run build` con Node 22 o posterior. La validación comprueba archivos esenciales, referencias locales del HTML, sintaxis de JavaScript y protección noindex de la muestra. El éxito de esta comprobación no confirma que Cloudflare o Netlify hayan desplegado: comprobar el resultado y la URL en la plataforma elegida.

Fuentes oficiales:
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/functions/wrangler-configuration/
- https://docs.netlify.com/build/configure-builds/file-based-configuration/
