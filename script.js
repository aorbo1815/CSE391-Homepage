// ===== Footer metadata (year, url, last modified) =====
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const url = document.getElementById('pageUrl');
  if (url) url.textContent = window.location.href;

  const lm = document.getElementById('lastModified');
  if (lm) {
    const d = new Date(document.lastModified);
    lm.textContent = d.toLocaleString();
    lm.setAttribute('datetime', d.toISOString());
  }
})();

// ===== Dark / Light theme toggle (with persistence) =====
(function () {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const apply = (mode) => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme', mode);
  };

  // apply saved or system preference on load
  if (saved === 'dark' || saved === 'light') {
    apply(saved);
  } else {
    apply(prefersDark ? 'dark' : 'light');
  }

  // toggle on click
  btn.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    apply(next);
  });
})();
