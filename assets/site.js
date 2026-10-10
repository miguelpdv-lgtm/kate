/* Kate Cabarcas Peluquería — landing. Arma la página con los componentes de window.KC (assets/components/bundle.js). */
(function () {
  'use strict';

  // Datos del salón: cámbialos aquí.
  var CONFIG = {
    whatsapp: '573000000000',            // número con indicativo, sin "+" ni espacios
    telefono: 'WhatsApp +57 300 000 0000',
    ciudad: 'Barranquilla, Atlántico',
    horario: 'Martes a sábado, 9:00 a 19:00'
  };

  var K = window.KC;
  if (!K) return;

  K.assets.monograma = 'assets/img/monograma-kc.png';
  K.assets.fotoRizos = 'assets/img/fotos/rizos-perfil.jpg';
  K.assets.fotoLisos = 'assets/img/fotos/lisos-largo.jpg';
  K.assets.fotoOscuro = 'assets/img/fotos/rizos-oscuro.jpg';

  // Tema Noche si el sistema lo pide.
  var oscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  var aplicarTema = function () { document.documentElement.setAttribute('data-theme', oscuro && oscuro.matches ? 'noche' : 'marmol'); };
  aplicarTema();
  if (oscuro && oscuro.addEventListener) oscuro.addEventListener('change', aplicarTema);

  function wa(mensaje) { return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(mensaje); }
  function abrir(url) { window.open(url, '_blank', 'noopener'); }
  function slot(nombre) { return document.querySelector('[data-slot="' + nombre + '"]'); }
  function ir(selector) {
    var el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  // ---------- Héroe ----------
  var hero = slot('hero');
  hero.innerHTML = K.Hero({
    altRizos: 'Mujer de perfil con rizos definidos',
    altLisos: 'Cabello largo y liso movido por el viento',
    creditos: 'Fotos: Unsplash'
  });

  // Enlaces de la navegación del héroe.
  var destinos = { 'Rizos': '#carta-rizos', 'Lisos': '#carta-lisos', 'Color': '#servicios', 'El salón': '#salon', 'Kate': '#kate' };
  Array.prototype.forEach.call(hero.querySelectorAll('.kc-nav__links a'), function (a) {
    var d = destinos[a.textContent.trim()]; if (d) a.setAttribute('href', d);
  });
  hero.querySelector('.kc-nav__seal').setAttribute('href', '#inicio');
  var reservarNav = hero.querySelector('.kc-nav .kc-hebra');
  if (reservarNav) reservarNav.addEventListener('click', function () { ir('#reservar'); });

  // Frase de reserva → WhatsApp.
  var frase = hero.querySelector('[data-kc-frase]');
  if (frase) frase.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (n) { return frase.querySelector('[name="' + n + '"]').value; };
    abrir(wa('Hola Kate, quiero consentir mis ' + v('textura') + ' el ' + v('dia') + ' en la ' + v('franja') + '.'));
  });

  // Menú móvil.
  var panel = document.getElementById('menu-panel');
  var botonMenu = hero.querySelector('.kc-nav__menu');
  var cerrar = panel.querySelector('.menu-panel__cerrar');
  cerrar.innerHTML = K.icon('cerrar', { size: 28 });
  var abrirMenu = function () { panel.hidden = false; document.body.style.overflow = 'hidden'; cerrar.focus(); };
  var cerrarMenu = function () { panel.hidden = true; document.body.style.overflow = ''; if (botonMenu) botonMenu.focus(); };
  if (botonMenu) { botonMenu.setAttribute('aria-controls', 'menu-panel'); botonMenu.addEventListener('click', abrirMenu); }
  cerrar.addEventListener('click', cerrarMenu);
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) cerrarMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) cerrarMenu(); });

  // ---------- Secciones ----------
  slot('ornamento').innerHTML = K.Ornament({ word: 'Kate' });

  slot('servicios').innerHTML = [
    K.ServiceCard({ icon: 'rizos', title: 'Definición de rizos', text: 'Lavado con método curly, hidratación profunda y definición con difusor.', price: '$ 150.000', duration: '2 h', tag: { tone: 'rizos', label: 'Favorito' } }),
    K.ServiceCard({ icon: 'corte', title: 'Corte en seco', text: 'Cortamos rizo a rizo, respetando la forma natural de tu patrón.', price: '$ 90.000', duration: '1 h' }),
    K.ServiceCard({ icon: 'keratina', title: 'Alisado de keratina', text: 'Liso brillante y sin frizz hasta por 4 meses, con fórmula libre de formol.', price: '$ 280.000', duration: '3 h', tag: { tone: 'lisos', label: 'Lisos' } }),
    K.ServiceCard({ icon: 'color', title: 'Color y balayage', text: 'Mechas y balayage que iluminan sin romper el rizo ni resecar el liso.', price: '$ 220.000', duration: '3 h' }),
    K.ServiceCard({ icon: 'brushing', title: 'Cepillado', text: 'Un liso de espejo para el evento, con protección térmica.', price: '$ 60.000', duration: '1 h' }),
    K.ServiceCard({ icon: 'tratamiento', title: 'Hidratación profunda', text: 'Recupera brillo y elasticidad según la porosidad de tu cabello.', price: '$ 120.000', duration: '1 h 30 min' })
  ].join('');

  var dualidad = slot('dualidad');
  dualidad.innerHTML = K.Duality({
    rizos: { text: 'Cortes en seco, definición e hidratación pensados para cada patrón, del 2A al 4C.', cta: 'Ver carta de rizos' },
    lisos: { text: 'Keratina, cirugía capilar y cepillados que dejan un liso de espejo, sin sacrificar la salud.', cta: 'Ver carta de lisos' }
  });
  var ctasDualidad = dualidad.querySelectorAll('.kc-hebra');
  if (ctasDualidad[0]) ctasDualidad[0].addEventListener('click', function () { ir('#carta-rizos'); });
  if (ctasDualidad[1]) ctasDualidad[1].addEventListener('click', function () { ir('#carta-lisos'); });

  slot('carta-rizos').innerHTML = K.PriceMenu({ title: 'Rizos', items: [
    { name: 'Diagnóstico de rizo', price: '$ 40.000', detail: 'Lectura de porosidad y patrón' },
    { name: 'Corte en seco', price: '$ 90.000', detail: 'Rizo a rizo, con definición' },
    { name: 'Definición', price: '$ 150.000', detail: 'Lavado, hidratación y difusor' },
    { name: 'Hidratación profunda', price: '$ 120.000' },
    { name: 'Color para rizos', price: 'desde $ 220.000', detail: 'Mechas y balayage sin romper el rizo' }
  ] });
  slot('carta-lisos').innerHTML = K.PriceMenu({ title: 'Lisos', items: [
    { name: 'Cepillado', price: '$ 60.000', detail: 'Con protección térmica' },
    { name: 'Corte y cepillado', price: '$ 110.000' },
    { name: 'Alisado de keratina', price: 'desde $ 280.000', detail: 'Sin formol, hasta 4 meses' },
    { name: 'Cirugía capilar', price: 'desde $ 250.000', detail: 'Reconstrucción y sellado' },
    { name: 'Color y balayage', price: 'desde $ 220.000' }
  ] });

  // Testimonio de ejemplo del sistema de diseño: reemplázalo por uno real, con permiso de la clienta.
  slot('testimonio').innerHTML = K.Testimonial({
    quote: 'Llegué con el rizo cansado de planchas y salí con la melena que tenía de niña. Kate lee el cabello antes de tocarlo.',
    name: 'Valentina R.',
    service: 'Clienta en Barranquilla',
    alt: 'Mujer con rizos afro definidos'
  });

  var agenda = slot('agenda');
  agenda.innerHTML = K.BookingBar({
    title: 'Agenda tu cita',
    text: 'Escríbenos por WhatsApp y te confirmamos en menos de una hora.',
    cta: 'Agendar por WhatsApp',
    turnos: []
  });
  var ctaAgenda = agenda.querySelector('.kc-cta');
  if (ctaAgenda) ctaAgenda.addEventListener('click', function () { abrir(wa('Hola Kate, quiero agendar una cita.')); });

  slot('fab').innerHTML = K.Fab({ href: wa('Hola Kate, quiero reservar una cita.') });
  var fab = document.querySelector('.kc-fab');
  if (fab) { fab.setAttribute('target', '_blank'); fab.setAttribute('rel', 'noopener'); }

  // ---------- Pie ----------
  Array.prototype.forEach.call(document.querySelectorAll('[data-config]'), function (el) { el.textContent = CONFIG[el.getAttribute('data-config')]; });
  Array.prototype.forEach.call(document.querySelectorAll('[data-wa]'), function (a) {
    a.href = wa('Hola Kate, quiero información.'); a.target = '_blank'; a.rel = 'noopener';
  });
  document.querySelector('[data-anio]').textContent = new Date().getFullYear();

  K.hydrate(document.querySelector('.kc'));
})();
