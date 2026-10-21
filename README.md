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
