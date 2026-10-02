# Checklist de revisión para Xalok

Usar sobre la versión que se entrega. Anotar versión, URL y entorno revisados.
Marcar cada punto como correcto, error, advertencia, no aplicable o no comprobado.
No considerar correctas pruebas que no se han podido realizar.

## Entrega y contenido

- [ ] Medio definido: LV, MD o ambos; responsable único de integración y programación.
- [ ] Diseño aprobado y contenido final identificados.
- [ ] URL externa accesible al cliente con la maqueta funcional actualizada.
- [ ] HTML final para Xalok diferenciado de la página de preview.
- [ ] Sin URLs de ejemplo, REEMPLAZAR, textos entre corchetes ni avisos del kit.
- [ ] Repo, carpeta, versión, contacto y notas necesarias localizables.
- [ ] Aproximadamente 1–2 días de margen para integrar y revisar antes de publicar.

## Aislamiento y contexto

- [ ] Contenedor raíz propio; CSS, variables y JS limitados a la pieza.
- [ ] Sin resets globales ni modificaciones de html/body que afecten al medio.
- [ ] IDs únicos y anclas internas correctas.
- [ ] Encabezados, textos alternativos y nombres de controles adecuados.
- [ ] Ajustes de wrappers únicamente si son necesarios y con alcance comprobado.
- [ ] Los selectores de LV no se han asumido válidos para MD.

## Recursos

- [ ] CSS, JS, imágenes, vídeos y fuentes publicados y accesibles por HTTPS.
- [ ] Referencias del HTML final resuelven desde el medio mediante URLs absolutas.
- [ ] Rutas dentro de CSS y URLs dinámicas de JS revisadas en su contexto.
- [ ] Sin 404, duplicaciones evidentes ni dependencias sin uso.
- [ ] Imágenes dimensionadas; evitar vídeo pesado con carga inmediata innecesaria.

## Comportamiento y accesibilidad

- [ ] Contenido esencial visible aunque falle JS o una animación.
- [ ] Teclado, foco visible, botones, enlaces e interacciones comprobados.
- [ ] Movimiento reducido respetado si se añaden animaciones.
- [ ] Scroll normal, rápido y llegada mediante anclas comprobados.
- [ ] Sticky/fixed y efectos de scroll probados dentro del CMS si existen.
- [ ] Sin errores propios de consola que rompan el contenido.

## Responsive y publicación

- [ ] Revisado a 375, 768, 1024 y 1440 px.
- [ ] Sin desbordamiento horizontal accidental, solapamientos o texto cortado.
- [ ] Preview interna de Xalok comprobada; no se ofrece como enlace al cliente.
- [ ] Medio, sección, titular y descripción SEO completados.
- [ ] Palabras clave con brl siempre al final.
- [ ] Si hay vídeo largo, streaming configurado para evitar la recarga automática.
- [ ] Fecha confirmada; hora habitual de salida, 05:50 aproximadamente.
- [ ] URL final y versión publicada revisadas después de la salida.

## Resultado que acompaña a la revisión

- Errores: problema, impacto, archivo/ubicación o pasos para reproducirlo.
- Advertencias: riesgo, decisión o tarea por resolver y responsable.
- Correcto: qué se ha comprobado y en qué entorno.
- No comprobado: qué no se pudo probar y por qué.
- Siguiente paso: corrección o comprobación concreta necesaria.

Una lectura estática de archivos no certifica responsive, consola, recursos reales
ni comportamiento en el navegador. Esta checklist no exige un editor ni una IA.
