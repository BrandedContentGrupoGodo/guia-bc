/* Interacción de ejemplo: abrir o cerrar todas las claves, sin actuar fuera de la pieza. */
(() => {
  function init() {
    const root = document.querySelector('[data-bc-project="demo"]');
    if (!root || root.dataset.bcInitialized === 'true') return;
    const button = root.querySelector('[data-bc-demo-toggle]');
    const details = [...root.querySelectorAll('[data-bc-demo-detail]')];
    if (!button || !details.length) return;
    root.dataset.bcInitialized = 'true';
    function update() {
      const allOpen = details.every(detail => detail.open);
      button.textContent = allOpen ? 'Cerrar todas las claves' : 'Abrir todas las claves';
      button.setAttribute('aria-expanded', String(allOpen));
    }
    button.addEventListener('click', () => {
      const shouldOpen = !details.every(detail => detail.open);
      details.forEach(detail => { detail.open = shouldOpen; });
      update();
    });
    details.forEach(detail => detail.addEventListener('toggle', update));
    update();
    button.hidden = false;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else { init(); }
})();
