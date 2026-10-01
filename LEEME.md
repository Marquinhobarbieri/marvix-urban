# MARVIX URBAN

Sitio estático responsive, en español, sin instalación ni dependencias externas. Abre `index.html` con un navegador para verlo. Para publicarlo, sube el contenido de esta carpeta a tu alojamiento estático conservando la estructura. `index.html` debe quedar en la raíz pública. No hace falta compilar.

## Personalización

Todos los datos se editan en `config.js`:

1. **WhatsApp:** en `whatsapp`, escribe tu número completo con código de país, solo dígitos, sin `+`, espacios ni guiones. Cambia `whatsappMessage` para personalizar el mensaje. Al elegir una categoría se agrega al mensaje de cotización. El envío lo confirma el visitante en WhatsApp.
2. **PDF:** copia tu catálogo a `assets/catalogo-marvix-urban.pdf` y establece `pdf: "assets/catalogo-marvix-urban.pdf"`. El botón lo abre en otra pestaña; el visitante puede descargarlo con los controles del visor. No se incluye un catálogo ficticio.
3. **Fotografías:** copia archivos JPG, PNG, WebP o AVIF en `assets/`. Para cada entrada de `images`, escribe la ruta en `src` y una descripción real en `alt`. Ejemplo: `bancas: { src: "assets/banca-01.webp", alt: "Banca de acero con asiento de madera, vista frontal" }`. Los marcadores gráficos se ocultan automáticamente cuando carga la imagen. Si un archivo no carga, se conserva el marcador.
4. **Contacto:** completa `email` y `location` con datos reales. Si están vacíos, no se muestran.
5. **Texto y diseño:** cambia textos en `index.html`; colores y estilos en `styles.css`. Los colores principales están al inicio en `:root`. El logotipo es tipográfico provisional.

### Tamaños de imagen sugeridos

- Hero: 1400 × 1500 px, con el sujeto centrado.
- Categorías: 1000 × 800 px; mobiliario: 1600 × 800 px.
- Galería principal: 1200 × 1500 px; secundarias: 1200 × 700 px.

Las imágenes se recortan para llenar el espacio. Ajusta `object-position` en `.media img` si necesitas cambiar el encuadre. Usa fotos propias o con licencia y comprímelas, idealmente por debajo de 350 KB.

## Antes de publicar

Sustituye los marcadores con tus fotos, incorpora el PDF y verifica WhatsApp desde un teléfono. Revisa los textos comerciales con la información real de la marca. No se han inventado precios, especificaciones técnicas, certificaciones, testimonios ni obras realizadas. La galería contiene espacios de muestra, no fotografías de proyectos reales.

Mientras no se configuren WhatsApp y PDF, sus botones muestran un aviso claro en lugar de abrir enlaces inexistentes. No hay formulario, cookies, analítica ni envío de datos desde esta página. WhatsApp es un servicio externo al que se accede solo al pulsar el botón configurado.

## Archivos

- `index.html`: página y contenido.
- `styles.css`: diseño responsive y estilos.
- `config.js`: imágenes, WhatsApp, PDF y contacto.
- `script.js`: menú móvil, avisos y enlaces configurables.
- `assets/`: tus imágenes y PDF.

La página funciona tanto desde un archivo local como desde un alojamiento web moderno.
