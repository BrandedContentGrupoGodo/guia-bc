# Instrucciones opcionales para un asistente de desarrollo

Adjunta este archivo como contexto en la herramienta que prefieras. No requiere
un editor concreto ni una extensión .mdc. Es una adaptación general de criterios
de compatibilidad y revisión; no presupone acceso al CMS ni al repositorio.

## Contexto

El trabajo se integra como HTML dentro de Xalok, en una página de un medio. No
controla toda la página. Confirmar si el destino es LV, MD o ambos. La maqueta
externa, la preview interna y la página publicada son entornos distintos.

## Respeta el proyecto

- Sigue el diseño aprobado, el alcance y las instrucciones del equipo.
- Conserva el editor, framework, estructura y proceso de desarrollo existentes.
- No añadas dependencias o funcionalidades que el trabajo no necesite.
- Usa una raíz propia; limita a ella estilos, variables, búsquedas y cambios de JS.
- Evita resets globales, cambios en html/body y manipulación de módulos del medio.
- Encapsula el JS y evita duplicar inicializaciones o listeners innecesarios.

## Prepara una entrega integrable

- El fragmento destinado al CMS no incluye doctype/html/head/body.
- Los recursos referenciados desde el HTML final usan URLs absolutas HTTPS.
- Las rutas relativas de una preview no son por sí mismas un error.
- Distingue rutas relativas válidas en CSS externo de referencias rotas en HTML.
- Revisa las URLs generadas en JS y evita rutas heredadas de otros proyectos.
- Entrega archivos finales utilizables por el navegador; documenta cómo regenerarlos
  si existe compilación. No impongas una herramienta de compilación nueva.
- No inventes el repositorio, sus URLs, credenciales, datos editoriales ni destinos.

## Accesibilidad y estabilidad

- El contenido esencial sigue visible si falla una animación o su dependencia.
- Respeta prefers-reduced-motion y la navegación por teclado.
- No calcules una sola vez posiciones que cambian al cargarse módulos del medio.
- Prueba scroll rápido, anclas y cambios de layout si hay efectos de scroll.
- Sticky, fixed y scroll horizontal no son errores automáticos: requieren pruebas.
- Ajusta únicamente los wrappers necesarios tras inspeccionar el DOM real.
- No des por válidos los selectores de LV en MD.

## Si te piden auditar

No modifiques archivos durante una auditoría. Identifica errores, advertencias,
comprobaciones superadas y pruebas no realizadas. Indica impacto, archivo y ubicación
cuando estén disponibles. Usa checklist-xalok.md como apoyo.

Si solo puedes leer código, declara la limitación. No afirmes que probaste consola,
responsive o interacción sin observar su ejecución. No inventes resultados de
navegador, despliegue ni acceso a Xalok. Propón el siguiente paso concreto.

## Si te piden corregir

Cambia solo lo necesario, conserva el alcance de la pieza y comprueba los riesgos
afectados. Explica qué cambió, en qué entorno lo comprobaste y qué queda sin verificar.
No ocultes un problema global con un reset o un selector que alcance todo el medio.

## Entrega y coordinación

- Diseño aprobado antes de maquetar; URL externa accesible para revisar con cliente.
- El PM facilita materiales y datos; el proveedor entrega el HTML final preparado.
- Una misma persona integra y programa, con unos 1–2 días para integrar y revisar.
- Palabras clave: brl siempre al final. Si hay vídeo largo, streaming mediante la
  palabra o la opción correspondiente en Xalok evita la recarga automática.
- La publicación habitual es aproximadamente a las 05:50 del día acordado.
- Los cambios pueden llegar en varios envíos; agruparlos cuando el tiempo lo permita.
