(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const mount = () => {
    if (document.getElementById('sakura-layer')) return;

    const layer = document.createElement('div');
    layer.id = 'sakura-layer';

    const count = window.innerWidth < 768 ? 12 : 22;
    for (let i = 0; i < count; i += 1) {
      const petal = document.createElement('span');
      petal.className = 'sakura-petal';

      const size = 8 + Math.random() * 10;
      const left = Math.random() * 100;
      const drift = -20 + Math.random() * 40;
      const duration = 10 + Math.random() * 14;
      const delay = -Math.random() * 24;
      const rotate = Math.random() * 360;

      petal.style.setProperty('--size', `${size.toFixed(2)}px`);
      petal.style.setProperty('--left', `${left.toFixed(2)}vw`);
      petal.style.setProperty('--drift', `${drift.toFixed(2)}vw`);
      petal.style.setProperty('--fall-duration', `${duration.toFixed(2)}s`);
      petal.style.setProperty('--delay', `${delay.toFixed(2)}s`);
      petal.style.setProperty('--rotate', `${rotate.toFixed(2)}deg`);

      layer.appendChild(petal);
    }

    document.body.appendChild(layer);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
})();
