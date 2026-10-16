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
  // Contact form — no backend. Opens the visitor's email app with the inquiry pre-filled for info@bdrt.net.
  var form = document.querySelector('[data-inquiry-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.querySelector('#name') || {}).value || '';
      var email = (form.querySelector('#email') || {}).value || '';
      var topic = (form.querySelector('#topic') || {}).value || '';
      var message = (form.querySelector('#message') || {}).value || '';
      var subject = encodeURIComponent('BDRT inquiry: ' + topic);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nTopic: ' + topic + '\n\n' + message);
      window.location.href = 'mailto:info@bdrt.net?subject=' + subject + '&body=' + body;
      var msg = document.querySelector('[data-form-message]');
      if (msg) msg.textContent = 'Your email app should open with your inquiry ready for info@bdrt.net. If it did not open, please email info@bdrt.net directly.';
    });
  }
});
