// BDRT Holdings — minimal front-end only. No backend, no login systems.
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-mainnav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
  // Contact form — front-end only demo. No data is sent anywhere.
  var form = document.querySelector('[data-inquiry-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('[data-form-message]');
      if (msg) msg.textContent = 'Thank you — this is a front-end demo form. No inquiry was sent. Connect it to your preferred form service to go live.';
      form.reset();
    });
  }
});
