from pathlib import Path
root=Path(__file__).parent; kit=root/'docs/downloads/kit-xalok'
fix='''/* Ajuste exclusivo de esta pieza en la plantilla Libre de LV.
   Scope: article que contiene .bc-demo, tanto en preview como en publicada.
   No depende de data-wf-page-id ni de un ID de noticia.
   Verificar los wrappers reales al integrarlo. No aplicar a MD sin validación. */
article.visual__story--free:has(.bc-demo) > .container-fluid {
  padding-left: 0;
  padding-right: 0;
}
article.visual__story--free:has(.bc-demo) > .container-fluid > .row {
  margin-left: 0;
  margin-right: 0;
}
article.visual__story--free:has(.bc-demo) .visual-article-free.col-12 {
  padding-left: 0;
  padding-right: 0;
}
article.visual__story--free:has(.bc-demo)
.visual-article-free.col-12 > .content-free-html {
  margin: 0 !important;
}
article.visual__story--free:has(.bc-demo) {
  overflow: visible !important;
}
'''
css=(kit/'assets/css/main.css').read_text();js=(kit/'assets/js/scripts.js').read_text();body=(kit/'contenido-demo.html').read_text()
fragment='''<style>
'''+fix+'\n/* Estilos de la pieza incluidos para que esta entrega de ejemplo sea autocontenida. */\n'+css+'''</style>

<!-- Recurso de fuente mediante URL absoluta pública; hay tipografías de respaldo. -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap">

'''+body+'\n<!-- Comportamiento de la pieza, aislado de los módulos del medio. -->\n<script>\n'+js+'</script>\n'
(kit/'ejemplo-xalok.html').write_text(fragment)
# Full standalone preview reuses exact delivered fragment. Its wrappers are outside fragment.
preview='''<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Diseñar para entender · Ejemplo de entrega BC</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='5' fill='red'/%3E%3C/svg%3E"><style>body{margin:0}</style></head><body>'''+fragment+'</body></html>'
(kit/'vista-previa.html').write_text(preview)
