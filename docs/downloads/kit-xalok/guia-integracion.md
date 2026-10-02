# Ejemplo completo de una entrega para Xalok

## Qué recibes

`ejemplo-xalok.html` contiene una pieza de demostración terminada: «Diseñar para
entender». Tiene hero, índice con tres capítulos, textos completos, enlaces
internos, desplegables y un botón para abrir o cerrar todas las claves.
No hay clientes reales, marcadores por completar ni URLs inventadas.

El formato equivale al fragmento que un proveedor entrega para copiar a Xalok.
La prueba dentro del CMS sigue siendo necesaria: una preview independiente no
certifica el comportamiento de la plantilla editorial.

## Abrir el ejemplo

- `vista-previa.html`: página completa para navegador, con viewport móvil y la
  pieza incrustada. Abrir con doble clic o usar el enlace de la guía.
- `ejemplo-xalok.html`: archivo que se abre en el editor para copiar TODO su código
  al CMS. También puede abrirse en el navegador, pero no lleva la estructura de
  documento completa de la preview.

No copies `vista-previa.html` en Xalok: sus etiquetas html/head/body pertenecen
al documento de prueba, no al fragmento integrable.

## Anatomía exacta del archivo entregado

### 1. Bloque style

Empieza con las reglas para el artículo de LV que contiene `.bc-demo`:

- `article.visual__story--free:has(.bc-demo) > .container-fluid`: padding lateral.
- `article.visual__story--free:has(.bc-demo) > .container-fluid > .row`: márgenes.
- `.visual-article-free.col-12` dentro del artículo: padding.
- `.visual-article-free.col-12 > .content-free-html`: margin: 0 !important.
- El artículo acotado a esta pieza: overflow: visible !important.

Este bloque no depende de data-wf-page-id ni de un ID concreto de noticia. Usa
relaciones de hijos directos en los dos primeros ajustes. Revisar siempre qué
elementos coincide cada selector: no es un reset para cualquier plantilla.
La pieza de demo no necesita sticky; el overflow está incluido como parte del
patrón de integración mostrado y puede retirarse si no hace falta en otra pieza.

Después están todos los estilos del contenido, limitados a `.bc-demo`.

### 2. Fuente mediante URL absoluta

El link apunta a Google Fonts para Open Sans. Arial y sans-serif actúan como
respaldo si no carga. No se usan fuentes ni kits ligados a clientes.

### 3. Contenido completo

`<div class="bc-demo" data-bc-project="demo">` contiene la pieza entera, con IDs
propios. Todos los enlaces van a secciones reales del mismo fragmento.
Los details nativos se pueden abrir sin JavaScript; el texto esencial está visible.

### 4. Script final

El script busca la raíz y actúa solo sobre los detalles y el botón del ejemplo.
El botón abre/cierra todas las claves y actualiza su texto y aria-expanded. Se
muestra solo cuando la inicialización se completa. No modifica módulos del medio.

## Por qué CSS y JS están incluidos

Esta es una entrega autocontenida para que el proveedor pueda descargarla y probarla
sin preparar primero un alojamiento. Para una noticia real, los recursos deben alojarse en el repositorio de su
proyecto y mantenerse independientes de esta guía.

En una entrega real con recursos externos, el orden puede ser exactamente:

1. style: conservar los ajustes exclusivos del CMS.
2. link: fuente pública, si corresponde.
3. link: URL absoluta pública del CSS de la pieza.
4. div: todo el contenido.
5. script src: URL absoluta pública del JS.

Para usar ese formato, publicar `assets/css/main.css` y `assets/js/scripts.js`
en el alojamiento del proyecto, sustituir el CSS interno de la pieza por su link
y el script interno por su script src. No conservar ambas copias cargadas.
Las URLs deben ser las reales que sirven los archivos; no enlaces a la vista Git
ni a recursos de otras piezas. El ajuste de wrappers permanece en el style inicial.

## Qué copiar y dónde

1. Abrir `ejemplo-xalok.html` en un editor y seleccionar todo.
2. En una noticia de prueba de LV: Contenido > Visual story > plantilla Libre.
3. Abrir el bloque y pegarlo en «Coloca aquí el código embed». Guardar.
4. Revisar escritorio y móvil, enlaces, desplegables y botón general.
5. Comprobar que los estilos no afectan al resto del medio.

Para una noticia real, usar siempre su diseño y contenidos aprobados. El PM aporta
medio (LV, MD o ambos), sección, titular y descripción SEO y palabras clave con
brl al final. Si hay vídeo largo, añadir streaming o activar la opción de Xalok
para evitar la recarga automática; brl sigue al final. Una misma persona integra
y programa, con 1–2 días de margen y salida habitual a las 05:50 aproximadamente.
La revisión del cliente es mediante URL externa; la preview de Xalok es interna.

## Archivos auxiliares

- assets/css/main.css: copia de los estilos ya incrustados; no hace falta cargarlos de nuevo.
- assets/js/scripts.js: copia del script ya incrustado; no hace falta cargarlo de nuevo.
- contenido-demo.html: solo el marcado, útil para estudiar la raíz; NO es la entrega final.
- ajustes-lv-opcionales.css: referencia separada comentada, para otros proyectos.
  No se carga adicionalmente en este ejemplo porque el bloque inicial ya está incluido.
- checklist-xalok.md: criterios de revisión de cualquier entrega.
- reglas-para-asistentes.md: ayuda opcional independiente del editor.

## Para reutilizar la estructura

Cambiar la raíz, los IDs y todas sus referencias de manera coherente en HTML, CSS,
JS y ajuste de LV. Comprobar jerarquía de encabezados en el medio, contenido,
identificación comercial y créditos. No presentar la demo como una pieza de cliente.
Los selectores de LV no están validados para MD.
