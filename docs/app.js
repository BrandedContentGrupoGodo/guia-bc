(() => {
  const pages = [...document.querySelectorAll('.page')];
  function navigate(focus) {
    const id = location.hash.slice(1) || 'inicio';
    const selected = pages.find(p => p.id === id) || pages[0];
    pages.forEach(p => { p.hidden = p !== selected; });
    document.querySelectorAll('.sidebar nav a').forEach(a => {
      if (a.hash === '#' + selected.id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.title = selected.querySelector('h1').textContent + ' · BC';
    if (focus) { window.scrollTo(0, 0); selected.querySelector('h1').focus({preventScroll:true}); }
  }
  window.addEventListener('hashchange', () => navigate(true));
  navigate(false);
  document.querySelector('.skip').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.page:not([hidden]) h1').focus();
  });
  let closedDetails = [];
  window.addEventListener('beforeprint', () => {
    closedDetails = [...document.querySelectorAll('.page:not([hidden]) details:not([open])')];
    closedDetails.forEach(detail => { detail.open = true; });
  });
  window.addEventListener('afterprint', () => closedDetails.forEach(detail => { detail.open = false; }));
  document.querySelector('.print').addEventListener('click', () => window.print());
  document.querySelectorAll('.copy').forEach(button => button.addEventListener('click', async () => {
    const block = button.closest('.code');
    try {
      await navigator.clipboard.writeText(block.querySelector('code').textContent);
      block.querySelector('.copy-status').textContent = 'Código copiado.';
    } catch {
      block.querySelector('.copy-status').textContent = 'No se pudo copiar automáticamente. Selecciona el texto del bloque y cópialo.';
    }
  }));
})();
