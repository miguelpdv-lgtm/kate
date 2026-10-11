/* Kate Cabarcas Peluquería — landing. Arma la página con los componentes de window.KC (assets/components/bundle.js). */
(function () {
  'use strict';

  // Datos del salón: cámbialos aquí.
  // Datos tomados de la página de reservas en Weibook.
  var CONFIG = {
    whatsapp: '573205416557',            // número con indicativo, sin "+" ni espacios
    telefono: 'WhatsApp 320 541 6557',
    direccion: 'Barrio Santa Clara\nMz F Lote 14, piso 2',
    ciudad: 'Cartagena, Colombia',
    horario: 'Martes a viernes: 10:00 a 20:00\nSábado: 9:15 a 20:00\nDomingo: 11:00 a 17:00\nLunes: cerrado',
    reservas: 'https://book.weibook.co/kate-peluqueria-prestige-barber-club',
    instagram: 'https://www.instagram.com/rizosylisoskatepeluqueria'
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
    intro: 'Peluquería de Kate Cabarcas en Cartagena, para dos texturas',
    creditos: 'Fotos: Unsplash'
  });

  // Enlaces de la navegación del héroe.
  var destinos = { 'Rizos': 'rizos', 'Lisos': 'lisos', 'Color': 'color' };
  var anclas = { 'El salón': '#salon', 'Kate': '#kate' };
  Array.prototype.forEach.call(hero.querySelectorAll('.kc-nav__links a'), function (a) {
    var t = a.textContent.trim();
    if (destinos[t]) {
      a.setAttribute('href', '#carta');
      a.addEventListener('click', function (e) { e.preventDefault(); verCategoria(destinos[t], true); });
    } else if (anclas[t]) a.setAttribute('href', anclas[t]);
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
    K.ServiceCard({ icon: 'rizos', title: 'Definición de rizos', text: 'Lavado, acondicionado, definición y secado para realzar la forma natural de tu rizo.', price: '$ 80.000', duration: '1 h 20 min', tag: { tone: 'rizos', label: 'Rizos' } }),
    K.ServiceCard({ icon: 'tratamiento', title: 'Spa Rizos Premium', text: 'Todo en uno: corte de forma, hidratación profunda, ozonoterapia y definición.', price: '$ 170.000', duration: '2 h' }),
    K.ServiceCard({ icon: 'corte', title: 'Corte de forma rizos', text: 'Corte en seco que realza la forma de tus rizos. Se complementa con la definición.', price: '$ 75.000', duration: '40 min' }),
    K.ServiceCard({ icon: 'keratina', title: 'Alisado Diamante', text: 'Alisado enjuagable con protocolo avanzado que cuida la hebra y deja el cabello liso y saludable.', price: '$ 350.000', duration: '3 h 55 min', tag: { tone: 'lisos', label: 'Lisos' } }),
    K.ServiceCard({ icon: 'color', title: 'Balayage', text: 'Iluminación personalizada que respeta la textura y el historial de tu cabello, con prueba de mechón.', price: '$ 750.000', duration: '4 h' }),
    K.ServiceCard({ icon: 'brushing', title: 'Blower', text: 'Lavado profesional, termoprotección, blower y planchado. El precio va según el largo.', price: '$ 25.000', duration: '30 min' })
  ].join('');

  var dualidad = slot('dualidad');
  dualidad.innerHTML = K.Duality({
    rizos: { text: 'Cortes de forma, definición, spas y terapias para cabello rizado, afro y ondulado.', cta: 'Ver servicios de rizos' },
    lisos: { text: 'Blower, Alisado Diamante y cortes de puntas que dejan un liso de espejo, sin sacrificar la salud.', cta: 'Ver servicios de lisos' }
  });
  var ctasDualidad = dualidad.querySelectorAll('.kc-hebra');
  if (ctasDualidad[0]) ctasDualidad[0].addEventListener('click', function () { verCategoria('rizos', true); });
  if (ctasDualidad[1]) ctasDualidad[1].addEventListener('click', function () { verCategoria('lisos', true); });

  // Carta completa por categorías (datos en assets/servicios.js).
  var CATEGORIAS = window.KC_SERVICIOS || [];
  var pestanas = slot('carta-tabs'), panel = slot('carta');
  pestanas.innerHTML = CATEGORIAS.map(function (c) {
    return '<button type="button" role="tab" id="tab-' + c.id + '" aria-controls="carta-panel" data-cat="' + c.id + '">' + c.title + '</button>';
  }).join('');
  function verCategoria(id, desplazar) {
    var cat = CATEGORIAS.filter(function (c) { return c.id === id; })[0] || CATEGORIAS[0];
    if (!cat) return;
    Array.prototype.forEach.call(pestanas.children, function (b) {
      var activa = b.getAttribute('data-cat') === cat.id;
      b.setAttribute('aria-selected', activa ? 'true' : 'false');
      b.tabIndex = activa ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', 'tab-' + cat.id);
    panel.innerHTML = K.PriceMenu({ eyebrow: cat.items.length + (cat.items.length === 1 ? ' servicio' : ' servicios'), title: cat.title, items: cat.items });
    if (desplazar) ir('#carta');
  }
  pestanas.addEventListener('click', function (e) { var b = e.target.closest('[data-cat]'); if (b) verCategoria(b.getAttribute('data-cat')); });
  pestanas.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var botones = Array.prototype.slice.call(pestanas.children), i = botones.indexOf(document.activeElement);
    if (i < 0) return;
    var sig = botones[(i + (e.key === 'ArrowRight' ? 1 : botones.length - 1)) % botones.length];
    sig.focus(); verCategoria(sig.getAttribute('data-cat'));
  });
  verCategoria('rizos');

  // Testimonio de ejemplo del sistema de diseño: reemplázalo por uno real, con permiso de la clienta.
  slot('testimonio').innerHTML = K.Testimonial({
    quote: 'Llegué con el rizo cansado de planchas y salí con la melena que tenía de niña. Kate lee el cabello antes de tocarlo.',
    name: 'Valentina R.',
    service: 'Clienta en Cartagena',
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
  if (ctaAgenda) {
    ctaAgenda.addEventListener('click', function () { abrir(wa('Hola Kate, quiero agendar una cita.')); });
    ctaAgenda.insertAdjacentHTML('afterend', K.Button({ label: 'Reservar en línea', variant: 'hebra-claro', href: CONFIG.reservas }));
    var enLinea = ctaAgenda.nextElementSibling; enLinea.target = '_blank'; enLinea.rel = 'noopener';
  }

  slot('fab').innerHTML = K.Fab({ href: wa('Hola Kate, quiero reservar una cita.') });
  var fab = document.querySelector('.kc-fab');
  if (fab) { fab.setAttribute('target', '_blank'); fab.setAttribute('rel', 'noopener'); }

  // ---------- Pie ----------
  Array.prototype.forEach.call(document.querySelectorAll('[data-config]'), function (el) { el.textContent = CONFIG[el.getAttribute('data-config')]; });
  Array.prototype.forEach.call(document.querySelectorAll('[data-link]'), function (a) { a.href = CONFIG[a.getAttribute('data-link')]; });
  Array.prototype.forEach.call(document.querySelectorAll('[data-wa]'), function (a) {
    a.href = wa('Hola Kate, quiero información.'); a.target = '_blank'; a.rel = 'noopener';
  });
  document.querySelector('[data-anio]').textContent = new Date().getFullYear();

  K.hydrate(document.querySelector('.kc'));
})();
