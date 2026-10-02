# Guía BC — PMs y proveedores

Web estática sobre diseño, entrega e integración de contenidos HTML de Branded
Content. Incluye el tutorial de Xalok para LV, capturas y el kit descargable.

## Publicar en GitHub Pages

1. Crear un repositorio público llamado `guia-bc` en la cuenta de Branded.
2. Extraer el ZIP. Subir **el contenido de la carpeta guia-bc**, no el ZIP, a la raíz
   del repositorio. Deben verse `README.md`, `docs/`, `build_content.py`,
   `build_demo.py` y `referencia-lv.css` en el primer nivel.
3. Guardar los archivos en la rama `main`.
4. En el repositorio: **Settings > Pages > Build and deployment**.
5. En **Source**, elegir **Deploy from a branch**.
6. Elegir la rama **main**, carpeta **/docs**, y pulsar **Save**.
7. Esperar a que termine la publicación y usar la URL que GitHub muestre en Pages.

No es necesario instalar paquetes, ejecutar una compilación o configurar un workflow
para la primera publicación: `docs/` contiene la web terminada. La persona que
active Pages debe tener permisos de administración o mantenimiento del repositorio.

Si la cuenta y el repositorio conservan estos nombres, la URL prevista es:
https://brandedcontentgrupogodo.github.io/guia-bc/

Es una URL prevista, no una confirmación de publicación. El estado real se comprueba
en Settings > Pages y en Actions.

Documentación oficial:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Estructura

- `docs/index.html`: guía publicada.
- `docs/styles.css`: apariencia y responsive.
- `docs/app.js`: navegación, impresión y copia de código.
- `docs/images/`: capturas del tutorial.
- `docs/downloads/kit-xalok/`: archivos individuales del ejemplo y documentación.
- `docs/downloads/kit-xalok.zip`: kit descargable.
- `build_content.py`: fuente editable de los textos de la guía y generador del ZIP.
- `build_demo.py`: genera la entrega HTML de ejemplo y su vista previa.
- `referencia-lv.css`: CSS de referencia utilizado en la guía técnica.

## Cómo actualizar

Editar textos en `build_content.py`, estilos en `docs/styles.css`, comportamiento
en `docs/app.js` y documentos del kit dentro de `docs/downloads/kit-xalok/`.

Para cambiar la demo: editar `contenido-demo.html`, `assets/css/main.css` y
`assets/js/scripts.js` dentro del kit. `build_demo.py` define el ajuste de Xalok y
ensambla `ejemplo-xalok.html` y `vista-previa.html`. Estos dos archivos se regeneran,
por lo que no conviene editarlos directamente.

Después de editar contenido o kit, ejecutar con Python 3:

```sh
python build_content.py
```

No requiere librerías externas. El comando regenera `docs/index.html`, la demo y el
ZIP, manteniendo sincronizados los ejemplos mostrados y las descargas. Guardar los
cambios en Git, incluidos los archivos generados de docs/, y subirlos a main.

Para revisar localmente:

```sh
python -m http.server 8000 --directory docs
```

Abrir http://localhost:8000 en el navegador. Detener con Ctrl+C.

## Revisar después de publicar

- Recorrer las secciones de la guía desde el menú.
- Abrir y ampliar las tres capturas de Xalok.
- Probar las descargas individuales y el ZIP.
- Abrir la vista previa de la demo y sus controles.
- Comprobar móvil y escritorio.

Las rutas de la guía son relativas y funcionan bajo `/guia-bc/`. La demo incluye
sus estilos y script; únicamente su fuente usa una URL pública, con tipografías
de respaldo. La prueba de la demo en navegador no certifica su integración en Xalok.

## Alcance de esta versión

El proceso específico de LV está documentado. MD conserva su sección para la
validación específica de su plantilla. El paquete no contiene configuración de
ChatGPT Sites ni credenciales. El despliegue de GitHub es independiente del sitio
anterior; mantener esta copia como fuente de las futuras actualizaciones del equipo.
