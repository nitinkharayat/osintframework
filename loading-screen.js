(() => {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const loader = document.createElement('div');
  loader.className = 'field-loader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-label', 'Opening Fieldnotes directory');
  loader.innerHTML = '<div class="loader-inner"><div class="loader-mark" aria-hidden="true"><span class="loader-center"></span></div><div class="loader-title">FIELDNOTES / OSINT INDEX</div><div class="loader-script">Opening the field guide…</div><div class="loader-track" aria-hidden="true"><span></span></div><div class="loader-caption">Collect · Verify · Document</div></div>';
  document.body.prepend(loader);
  const finish = () => {
    loader.classList.add('is-leaving');
    window.setTimeout(() => loader.remove(), 600);
  };
  window.setTimeout(finish, 1150);
  window.addEventListener('pageshow', event => { if (event.persisted) finish(); }, { once: true });
})();
