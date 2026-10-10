/* @ds-bundle: {"format":4,"namespace":"KC","components":[{"name":"Button"},{"name":"Field"},{"name":"Frase"},{"name":"Tag"},{"name":"Ornament"},{"name":"Medallion"},{"name":"Header"},{"name":"Hero"},{"name":"ServiceCard"},{"name":"PriceMenu"},{"name":"Testimonial"},{"name":"Duality"},{"name":"BookingBar"}]} */
(function(){
var ICONS={"corte":"<circle cx=\"6.5\" cy=\"17.5\" r=\"2.75\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"2.75\"/><path d=\"M8.4 15.5 16.6 3.2\"/><path d=\"M15.6 15.5 7.4 3.2\"/><path d=\"M12 9.6v.01\"/>","rizos":"<path d=\"M12.00 3.20L12.03 3.16L12.12 3.12L12.26 3.09L12.46 3.09L12.70 3.10L12.98 3.14L13.30 3.22L13.64 3.33L14.00 3.48L14.37 3.67L14.73 3.91L15.07 4.18L15.39 4.50L15.68 4.85L15.91 5.24L16.09 5.66L15.96 6.06L15.78 6.45L15.56 6.82L15.28 7.18L14.97 7.51L14.62 7.83L14.23 8.11L13.82 8.37L13.39 8.60L12.93 8.80L12.47 8.97L12.00 9.10L11.53 9.20L11.07 9.27L10.61 9.31L10.18 9.31L9.77 9.29L9.38 9.24L9.03 9.16L8.72 9.06L8.44 8.94L8.22 8.81L8.04 8.66L7.91 8.49L7.83 8.32L7.80 8.15L7.83 7.98L7.91 7.81L8.04 7.64L8.22 7.49L8.44 7.36L8.72 7.24L9.03 7.14L9.38 7.06L9.77 7.01L10.18 6.99L10.61 6.99L11.07 7.03L11.53 7.10L12.00 7.20L12.47 7.33L12.93 7.50L13.39 7.70L13.82 7.93L14.23 8.19L14.62 8.47L14.97 8.79L15.28 9.12L15.56 9.48L15.78 9.85L15.96 10.24L16.09 10.64L16.17 11.04L16.20 11.45L16.17 11.86L16.09 12.26L15.96 12.66L15.78 13.05L15.56 13.42L15.28 13.78L14.97 14.11L14.62 14.43L14.23 14.71L13.82 14.97L13.39 15.20L12.93 15.40L12.47 15.57L12.00 15.70L11.53 15.80L11.07 15.87L10.61 15.91L10.18 15.91L9.77 15.89L9.38 15.84L9.03 15.76L8.72 15.66L8.44 15.54L8.22 15.41L8.04 15.26L7.91 15.09L7.83 14.92L7.80 14.75L7.83 14.58L7.91 14.41L8.04 14.24L8.22 14.09L8.44 13.96L8.72 13.84L9.03 13.74L9.38 13.66L9.77 13.61L10.18 13.59L10.61 13.59L11.07 13.63L11.53 13.70L12.00 13.80L12.47 13.93L12.93 14.10L13.39 14.30L13.82 14.53L14.23 14.79L14.62 15.07L14.97 15.39L15.28 15.72L15.56 16.08L15.78 16.45L15.96 16.84L16.09 17.24L16.17 17.64L16.20 18.05L16.17 18.46L16.09 18.86L15.91 19.25L15.50 19.56L15.07 19.83L14.63 20.05L14.19 20.23L13.77 20.36L13.37 20.46L13.00 20.52L12.68 20.54L12.40 20.54L12.17 20.52L12.00 20.48\"/>","lisos":"<path d=\"M7.5 2.5c-.2 6.4-.3 12.6-.9 19\"/><path d=\"M10.5 2.5c0 6.4-.1 12.6-.3 19\"/><path d=\"M13.5 2.5c0 6.4.1 12.6.3 19\"/><path d=\"M16.5 2.5c.2 6.4.3 12.6.9 19\"/>","keratina":"<path d=\"M8 2.5h2.6v12.2L9.3 21 8 14.7z\"/><path d=\"M13.4 2.5H16v12.2L14.7 21l-1.3-6.3z\"/><path d=\"M10.6 5.5h2.8\"/><path d=\"M10.6 8.5h2.8\"/>","color":"<path d=\"M3.5 12.5h12a6 6 0 0 1-12 0z\"/><path d=\"M14 10.2 19.6 4.6a1.4 1.4 0 0 1 2 2L16 12.2\"/><path d=\"M6.5 15.5c.8.9 1.9 1.4 3 1.4\"/>","brushing":"<rect x=\"2.5\" y=\"4.5\" width=\"13\" height=\"7.5\" rx=\"3.75\"/><path d=\"M15.5 6.2 21 4.7v7.1l-5.5-1.5\"/><path d=\"M7.5 12l1.4 8.5h3L10.5 12\"/><circle cx=\"6.25\" cy=\"8.25\" r=\"1.25\"/>","tratamiento":"<path d=\"M12 2.8c3.4 4.6 6.2 7.8 6.2 11.2a6.2 6.2 0 0 1-12.4 0c0-3.4 2.8-6.6 6.2-11.2z\"/><path d=\"M9.2 14.6a2.8 2.8 0 0 0 2.8 2.8\"/>","agenda":"<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"1.5\"/><path d=\"M3.5 9.5h17\"/><path d=\"M8 3v4\"/><path d=\"M16 3v4\"/><path d=\"m12 12.2.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 14.3l2-.3z\"/>","reloj":"<circle cx=\"12\" cy=\"12\" r=\"8.75\"/><path d=\"M12 7v5l3.2 2\"/>","ubicacion":"<path d=\"M12 21.2s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z\"/><circle cx=\"12\" cy=\"10.2\" r=\"2.3\"/>","mensaje":"<path d=\"M20.5 11.6a8.2 8.2 0 0 1-12 7.3L3.5 20.5l1.6-4.6A8.2 8.2 0 1 1 20.5 11.6z\"/><path d=\"M8.8 11.8h.01M12 11.8h.01M15.2 11.8h.01\"/>","diamante":"<path d=\"M12 3.5 18.5 12 12 20.5 5.5 12z\"/>","flecha":"<path d=\"M4 12h15.5\"/><path d=\"m14 6.5 5.5 5.5-5.5 5.5\"/>","cerrar":"<path d=\"M6 6l12 12M18 6 6 18\"/>","menu":"<path d=\"M3.5 8h17M3.5 16h11\"/>"};
var ORN={"hebras":{"vb":"0 0 360 36","body":"<defs><linearGradient id=\"ID\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#6d400a\" stop-opacity=\"0\"/><stop offset=\".22\" stop-color=\"#a46a16\"/><stop offset=\".5\" stop-color=\"#f4d380\"/><stop offset=\".78\" stop-color=\"#a46a16\"/><stop offset=\"1\" stop-color=\"#6d400a\" stop-opacity=\"0\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#ID)\" stroke-linecap=\"round\"><path stroke-width=\"1.4\" d=\"M166 18C140 17 122 9 96 10 70 11 52 22 28 20 18 19 10 16 4 17\"/><path stroke-width=\".8\" d=\"M164 21c-22 3-38 9-62 7-20-2-34-10-58-7\"/><path stroke-width=\".6\" d=\"M162 15c-16-5-30-10-50-9\"/><path stroke-width=\"1.4\" d=\"M194 18c26-1 44-9 70-8 26 1 44 12 68 10 10-1 18-4 24-3\"/><path stroke-width=\".8\" d=\"M196 21c22 3 38 9 62 7 20-2 34-10 58-7\"/><path stroke-width=\".6\" d=\"M198 15c16-5 30-10 50-9\"/></g><path fill=\"url(#ID)\" d=\"M180 9l5.5 9-5.5 9-5.5-9z\"/><path fill=\"none\" stroke=\"url(#ID)\" stroke-width=\".7\" d=\"M180 3l10 15-10 15-10-15z\"/>"},"esquina":{"vb":"0 0 120 120","body":"<defs><linearGradient id=\"ID\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#6d400a\" stop-opacity=\"0\"/><stop offset=\".22\" stop-color=\"#a46a16\"/><stop offset=\".5\" stop-color=\"#f4d380\"/><stop offset=\".78\" stop-color=\"#a46a16\"/><stop offset=\"1\" stop-color=\"#6d400a\" stop-opacity=\"0\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#ID)\" stroke-linecap=\"round\"><path stroke-width=\"1.3\" d=\"M4 116C4 60 20 22 62 10c18-5 34-2 44 6 8 7 6 18-3 20-8 2-14-5-10-11\"/><path stroke-width=\".7\" d=\"M12 116C14 70 28 38 60 26\"/><path stroke-width=\".7\" d=\"M4 100c10-6 18-6 26 0\"/></g>"},"medallon":{"vb":"0 0 200 200","body":"<defs><linearGradient id=\"ID\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#6d400a\" stop-opacity=\"0\"/><stop offset=\".22\" stop-color=\"#a46a16\"/><stop offset=\".5\" stop-color=\"#f4d380\"/><stop offset=\".78\" stop-color=\"#a46a16\"/><stop offset=\"1\" stop-color=\"#6d400a\" stop-opacity=\"0\"/></linearGradient></defs><circle cx=\"100\" cy=\"100\" r=\"96\" fill=\"none\" stroke=\"url(#ID)\" stroke-width=\"1.6\"/><circle cx=\"100\" cy=\"100\" r=\"90\" fill=\"none\" stroke=\"url(#ID)\" stroke-width=\".6\" stroke-dasharray=\"1 5\"/>"}};
(function () {
  'use strict';
  // DATA (ICONS, ORN) is injected above by build.
  var ASSETS = {
    logo: '/_blob/3ddaea727bcf73f56cf52c684eae4c83',
    logoNoche: '/_blob/8e93b7641722679de4716fc055df2c4f',
    monograma: '/_blob/5c9177d30884f0f62dd64b6c34dcc44f',
    marmolClaro: '/_blob/1a1dfd2c47a696e8f3019c9db466603c',
    marmolNoche: '/_blob/6984bbb31547d1a88acb4aacdc3fb1ae',
    oroFoil: '/_blob/a0f3711c5cf9009f79034b837f3684f4',
    fotoRizos: '/_blob/00000000000000000000000000000001',
    fotoLisos: '/_blob/00000000000000000000000000000002',
    fotoOscuro: '/_blob/00000000000000000000000000000003'
  };
  var uid = 0;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function icon(name, opts) {
    opts = opts || {};
    var body = ICONS[name]; if (!body) return '';
    var s = opts.size || 24;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (opts.stroke || 1.25) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }
  function ornament(name) {
    var o = ORN[name]; if (!o) return '';
    var id = 'kc-g' + (++uid);
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + o.vb + '" aria-hidden="true">' + o.body.split('ID').join(id) + '</svg>';
  }

  // ---------- Drawing: colours come from the live tokens ----------
  function cssVar(el, n, fb) { var v = getComputedStyle(el).getPropertyValue(n).trim(); return v || fb; }
  function rgb(hex) { hex = hex.replace('#', ''); if (hex.length === 3) hex = hex.replace(/./g, '$&$&'); var n = parseInt(hex.slice(0, 6), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function rng(seed) { var s = seed >>> 0 || 1; return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; }; }
  function makeNoise(seed) {
    var r = rng(seed), p = []; for (var i = 0; i < 512; i++) p[i] = r();
    function h(x, y) { return p[((x * 73856093) ^ (y * 19349663)) & 511]; }
    function sm(t) { return t * t * (3 - 2 * t); }
    function n2(x, y) { var xi = Math.floor(x), yi = Math.floor(y), xf = sm(x - xi), yf = sm(y - yi);
      var a = h(xi, yi), b = h(xi + 1, yi), c = h(xi, yi + 1), d = h(xi + 1, yi + 1);
      return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf; }
    return function fbm(x, y, oct) { var v = 0, amp = .5, f = 1; for (var o = 0; o < (oct || 5); o++) { v += amp * n2(x * f, y * f); f *= 2; amp *= .5; } return v; };
  }
  function fit(canvas, scale) {
    var r = canvas.getBoundingClientRect(), w = Math.max(2, Math.round(r.width * scale)), h = Math.max(2, Math.round(r.height * scale));
    canvas.width = w; canvas.height = h; return [w, h];
  }

  // Marble: domain-warped noise, soft broad veins + rare fine gold veins.
  function marble(canvas, opts) {
    opts = opts || {};
    var dark = opts.theme ? opts.theme === 'noche' : (document.documentElement.getAttribute('data-theme') === 'noche');
    var wh = fit(canvas, opts.scale || .5), W = wh[0], H = wh[1];
    var ctx = canvas.getContext('2d'), img = ctx.createImageData(W, H), d = img.data;
    var nz = makeNoise(opts.seed || 7), k = 2.6 / Math.max(W, H);
    var base = rgb(cssVar(canvas, dark ? '--noir' : '--marble', dark ? '#14110d' : '#fbf9f4'));
    var cloud = dark ? [38, 33, 26] : [240, 232, 218], vein = dark ? [62, 54, 42] : [224, 211, 188];
    var gold = rgb(cssVar(canvas, '--gold', '#b8862b'));
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      var u = x * k, v = y * k;
      var wx = nz(u * .9, v * .9, 4), wy = nz(u * .9 + 5.2, v * .9 + 1.3, 4);
      var det = nz(u * 2.2 + 3, v * 2.2, 5);
      var s1 = Math.sin((u + wx * 1.4) * 2.1 + (v + wy * 1.4) * 3.0 + det * 2.4);
      var broad = Math.exp(-(s1 * s1) / .05);
      var s2 = Math.sin((u + wx * 1.6) * -1.3 + (v + wy * 1.6) * 2.4 + det * 5);
      var thin = Math.exp(-(s2 * s2) / .0016) * (nz(u * .8 + 9, v * .8, 3) > .5 ? 1 : 0);
      var c = nz(u * .7 + 2, v * .7 + 7, 4);
      var i = (y * W + x) * 4;
      for (var ch = 0; ch < 3; ch++) {
        var val = base[ch] * (1 - .45 * c) + cloud[ch] * .45 * c;
        val = val * (1 - .45 * broad) + vein[ch] * .45 * broad;
        val = val * (1 - (dark ? .85 : .6) * thin) + gold[ch] * (dark ? .85 : .6) * thin;
        d[i + ch] = val;
      }
      d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }

  // Strands: 'rizos' = helical coils, 'lisos' = silky parallel strands with a sheen band.
  function strands(canvas, opts) {
    opts = opts || {};
    var wh = fit(canvas, Math.min(window.devicePixelRatio || 1, 2)), W = wh[0], H = wh[1];
    var ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, W, H);
    var r = rng(opts.seed || 11), g = rgb(cssVar(canvas, '--gold', '#b8862b')), lt = rgb(cssVar(canvas, '--foil-light', '#f4d380'));
    var col = function (a, t) { var m = t || 0; return 'rgba(' + Math.round(g[0] + (lt[0] - g[0]) * m) + ',' + Math.round(g[1] + (lt[1] - g[1]) * m) + ',' + Math.round(g[2] + (lt[2] - g[2]) * m) + ',' + a + ')'; };
    var dpr = W / canvas.getBoundingClientRect().width;
    ctx.lineCap = 'round';
    if ((opts.mode || 'rizos') === 'lisos') {
      var n = Math.round(W / (4.5 * dpr));
      for (var i = 0; i < n; i++) {
        var x0 = (i + r() * .6) / n * W * 1.1 - W * .05, sway = (r() - .5) * 26 * dpr;
        var grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, col(0)); grad.addColorStop(.18, col(.18 + r() * .2));
        grad.addColorStop(.38, col(.7 + r() * .3, 1)); grad.addColorStop(.52, col(.3 + r() * .2, .3));
        grad.addColorStop(1, col(.12 + r() * .1));
        ctx.strokeStyle = grad; ctx.lineWidth = (.5 + r() * 1.1) * dpr;
        ctx.beginPath(); ctx.moveTo(x0, -10);
        ctx.bezierCurveTo(x0 + sway * .3, H * .35, x0 - sway * .4, H * .7, x0 + sway, H + 10); ctx.stroke();
      }
    } else {
      var cols = Math.max(4, Math.round(W / (64 * dpr)));
      for (var c = 0; c < cols; c++) {
        var cx = (c + .5 + (r() - .5) * .7) / cols * W, rad = (11 + r() * 12) * dpr, pitch = rad * (.9 + r() * .55);
        var phase = r() * 6.283, ph2 = r() * 6.283, drift = (r() - .5) * 60 * dpr, yStart = -r() * H * .25, len = H * (.75 + r() * .45);
        var steps = Math.round(len / pitch * 56), pts = [];
        for (var s = 0; s <= steps; s++) {
          var k = s / steps, t = s / 56 * 6.283 + phase, grow = Math.min(1, s / 70);
          var rr = rad * (.55 + .45 * grow) * (.85 + .2 * Math.sin(k * 5 + ph2));
          pts.push([cx + drift * Math.sin(k * 2.4 + ph2) + Math.sin(t) * rr, yStart + k * len - Math.cos(t) * rr * .55 * grow, Math.cos(t) > 0, k]);
        }
        // back pass: the whole coil, faint
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.beginPath(); pts.forEach(function (q, i) { if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
        ctx.strokeStyle = col(.28); ctx.lineWidth = .7 * dpr; ctx.stroke();
        // front pass: continuous runs where the strand faces the viewer, with highlight
        var run = null;
        for (var j = 1; j < pts.length; j++) {
          if (pts[j][2]) { if (!run) { run = true; ctx.beginPath(); ctx.moveTo(pts[j - 1][0], pts[j - 1][1]); } ctx.lineTo(pts[j][0], pts[j][1]); }
          if (run && (!pts[j][2] || j === pts.length - 1)) { run = null; ctx.strokeStyle = col(.75 * Math.min(1, (1 - pts[j][3]) * 3 + .15), .6); ctx.lineWidth = 1.35 * dpr; ctx.stroke(); }
        }
      }
    }
  }

  function hydrate(root) {
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll('[data-kc-raya]'), wireRaya);
    var run = function () {
      Array.prototype.forEach.call(root.querySelectorAll('canvas[data-kc-marble]'), function (c) { marble(c, { seed: +c.getAttribute('data-kc-marble') || 7, theme: c.getAttribute('data-kc-theme') || undefined }); });
      Array.prototype.forEach.call(root.querySelectorAll('canvas[data-kc-strands]'), function (c) { strands(c, { mode: c.getAttribute('data-kc-strands'), seed: +c.getAttribute('data-kc-seed') || 11 }); });
    };
    var go = function () { (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(run); };
    go();
    var t; window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(run, 180); });
    if (window.MutationObserver) new MutationObserver(function () { clearTimeout(t); t = setTimeout(run, 60); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  // ---------- Components: each returns an HTML string ----------
  // Coil generators: a strand that loops (rizo) and the same length laid straight (liso).
  function coilPath(x0, x1, y, r, turns) {
    // Prolate cycloid: loops when r exceeds the forward step per radian.
    var d = '', n = Math.round(turns * 40), A = turns * 6.283, c = (x1 - x0) / A;
    for (var k = 0; k <= n; k++) { var a = k / n * A; d += (k ? 'L' : 'M') + (x0 + c * a - r * Math.sin(a)).toFixed(2) + ' ' + (y - r * Math.cos(a) + r * .35).toFixed(2); }
    return d;
  }
  function wavePath(w, h, waves) {
    var d = 'M0 ' + (h / 2), n = waves * 24;
    for (var k = 1; k <= n; k++) { var t = k / n; d += 'L' + (t * w).toFixed(2) + ' ' + (h / 2 - Math.sin(t * waves * 6.283) * h * .42).toFixed(2); }
    return d;
  }
  var SEAL_SVG = '<svg viewBox="0 0 26 26" aria-hidden="true"><path class="rizo" pathLength="1" d="' + coilPath(4, 22, 13, 4.6, 2.5) + '"/><path class="liso" pathLength="1" d="M3 13H23"/></svg>';
  var HEBRA_SVG = '<svg viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true"><path class="rizo" pathLength="1" d="' + wavePath(120, 10, 5) + '"/><path class="liso" pathLength="1" d="M0 5H120"/></svg>';

  function Button(p) {
    p = p || {};
    var v = { oro: 'primario', linea: 'primario', texto: 'hebra', noir: 'claro' }[p.variant] || p.variant || 'primario';
    var tag = p.href ? 'a' : 'button';
    var attrs = (p.href ? ' href="' + esc(p.href) + '"' : ' type="' + (p.type || 'button') + '"') + (p.disabled ? ' disabled' : '');
    if (v === 'hebra' || v === 'hebra-claro') return '<' + tag + ' class="kc-hebra' + (v === 'hebra-claro' ? ' kc-hebra--claro' : '') + '"' + attrs + '>' + esc(p.label || 'Ver más') + HEBRA_SVG + '</' + tag + '>';
    return '<' + tag + ' class="kc-cta' + (v === 'claro' ? ' kc-cta--claro' : '') + (p.size === 'compacto' ? ' kc-cta--compacto' : '') + '"' + attrs + '><span>' + esc(p.label || 'Reservar cita') + '</span><span class="kc-cta__seal">' + SEAL_SVG + '</span></' + tag + '>';
  }
  function Field(p) {
    p = p || {}; var id = p.id || ('kc-f' + (++uid)), ctl, desc = (p.error || p.hint) ? ' aria-describedby="' + id + '-h"' : '';
    if (p.options) ctl = '<select id="' + id + '" name="' + esc(p.name || id) + '"' + desc + '>' + (p.placeholder ? '<option value="" disabled selected>' + esc(p.placeholder) + '</option>' : '') + p.options.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select>';
    else if (p.multiline) ctl = '<textarea id="' + id + '" rows="3" name="' + esc(p.name || id) + '" placeholder="' + esc(p.placeholder) + '"' + desc + '></textarea>';
    else ctl = '<input id="' + id + '" name="' + esc(p.name || id) + '" type="' + (p.type || 'text') + '" placeholder="' + esc(p.placeholder) + '"' + (p.value ? ' value="' + esc(p.value) + '"' : '') + (p.error ? ' aria-invalid="true"' : '') + desc + '>';
    var hint = p.error ? '<span class="kc-field__hint" id="' + id + '-h">' + icon('cerrar') + esc(p.error) + '</span>' : (p.hint ? '<span class="kc-field__hint" id="' + id + '-h">' + esc(p.hint) + '</span>' : '');
    return '<div class="kc-field' + (p.error ? ' kc-field--error' : '') + '"><label for="' + id + '">' + esc(p.label) + '</label>' + ctl + hint + '</div>';
  }
  // A booking request written as one sentence: «Quiero consentir mis [rizos] el [sábado] en la [mañana]».
  function Frase(p) {
    p = p || {};
    var sel = function (name, label, opts) { return '<select name="' + name + '" aria-label="' + label + '">' + opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select>'; };
    return '<form class="kc-frase" data-kc-frase onsubmit="return false"><p>Quiero consentir mis ' + sel('textura', 'Textura', p.texturas || ['rizos', 'lisos', 'ondas']) +
      ' el ' + sel('dia', 'Día', p.dias || ['martes', 'miércoles', 'jueves', 'viernes', 'sábado']) + ' en la ' + sel('franja', 'Franja horaria', p.franjas || ['mañana', 'tarde']) + '</p>' +
      Button({ label: p.cta || 'Pedir mi cita', type: 'submit' }) + '</form>';
  }
  function Tag(p) {
    p = p || {}; var tone = p.tone || '';
    var ic = tone === 'rizos' ? icon('rizos') : tone === 'lisos' ? icon('lisos') : '';
    return '<span class="kc-tag' + (tone ? ' kc-tag--' + tone : '') + '">' + ic + esc(p.label || tone) + '</span>';
  }
  function Ornament(p) {
    p = p || {};
    return '<div class="kc-ornament' + (p.word ? ' kc-ornament--word' : '') + '" role="separator">' + ornament(p.name || 'hebras') + (p.word ? '<span class="kc-ornament__word">' + esc(p.word) + '</span>' : '') + '</div>';
  }
  function Medallion(p) { p = p || {}; return '<span class="kc-medallion" style="--size:' + (p.size || 72) + 'px">' + icon(p.icon || 'corte') + '</span>'; }
  function Header(p) {
    p = p || {};
    var izq = p.izquierda || ['Rizos', 'Lisos', 'Color'], der = p.derecha || ['El salón', 'Kate'];
    var link = function (l, i) { return '<a href="#"' + (l === p.actual ? ' aria-current="page"' : '') + '>' + esc(l) + '</a>'; };
    return '<header class="kc-nav' + (p.sobre ? ' kc-nav--sobre' : '') + '">' +
      (p.sobre ? '' : '<div class="kc-nav__rail"><span>' + esc(p.ciudad || 'Barranquilla, Atlántico') + '</span><span>' + esc(p.horario || 'Martes a sábado, 9:00 a 19:00') + '</span><a href="#">' + esc(p.telefono || 'WhatsApp +57 300 000 0000') + '</a></div>') +
      '<div class="kc-nav__bar"><nav class="kc-nav__links" aria-label="Servicios"><button class="kc-nav__menu" aria-label="Abrir menú">' + icon('menu') + 'Menú</button>' + izq.map(link).join('') + '</nav>' +
      '<span></span><nav class="kc-nav__links kc-nav__links--der" aria-label="El salón">' + der.map(link).join('') + Button({ label: p.cta || 'Reservar', variant: 'hebra' }) + '</nav>' +
      '<a class="kc-nav__seal" href="#" aria-label="Kate Cabarcas Peluquería, inicio"><img src="' + esc(p.monogram || ASSETS.monograma) + '" alt=""></a></div></header>';
  }
  function Hero(p) {
    p = p || {};
    return '<section class="kc-raya" data-kc-raya>' +
      '<div class="kc-raya__foto kc-raya__foto--lisos"><img src="' + esc(p.fotoLisos || ASSETS.fotoLisos) + '" alt="' + esc(p.altLisos || 'Cabello largo, liso y brillante') + '"></div>' +
      '<div class="kc-raya__foto kc-raya__foto--rizos"><img src="' + esc(p.fotoRizos || ASSETS.fotoRizos) + '" alt="' + esc(p.altRizos || 'Mujer de perfil con rizos definidos') + '"></div>' +
      '<div class="kc-raya__velo"></div>' +
      (p.nav === false ? '' : Header({ sobre: true })) +
      '<p class="kc-raya__intro">' + esc(p.intro || 'Peluquería de Kate Cabarcas en Barranquilla, para dos texturas') + '</p>' +
      '<h1><span class="kc-raya__palabra kc-raya__palabra--rizos">Rizos</span><span class="kc-raya__y">y</span><span class="kc-raya__palabra kc-raya__palabra--lisos">Lisos</span></h1>' +
      '<button class="kc-raya__linea" role="slider" aria-label="Comparar rizos y lisos" aria-valuemin="15" aria-valuemax="85" aria-valuenow="50"><span class="kc-raya__nudo"></span></button>' +
      '<div class="kc-raya__frase">' + Frase(p.frase) + '</div>' +
      '<span class="kc-raya__creditos">' + esc(p.creditos || 'Fotos: Unsplash') + '</span></section>';
  }
  function wireRaya(sec) {
    if (sec.__kc) return; sec.__kc = 1;
    var line = sec.querySelector('.kc-raya__linea');
    var set = function (v, anim) { v = Math.max(15, Math.min(85, v)); sec.classList.toggle('is-anim', !!anim); sec.style.setProperty('--split', v + '%'); line.setAttribute('aria-valuenow', Math.round(v)); };
    var drag = false;
    var move = function (e) { if (!drag) return; var r = sec.getBoundingClientRect(); set((e.clientX - r.left) / r.width * 100, false); };
    line.addEventListener('pointerdown', function (e) { drag = true; line.setPointerCapture(e.pointerId); move(e); });
    line.addEventListener('pointermove', move);
    line.addEventListener('pointerup', function () { drag = false; });
    line.addEventListener('keydown', function (e) { var v = +line.getAttribute('aria-valuenow'); if (e.key === 'ArrowLeft') set(v - 5, true); if (e.key === 'ArrowRight') set(v + 5, true); });
    var tex = sec.querySelector('select[name="textura"]');
    if (tex) tex.addEventListener('change', function () { set(tex.value === 'rizos' ? 66 : tex.value === 'lisos' ? 34 : 50, true); });
  }
  function ServiceCard(p) {
    p = p || {};
    return '<article class="kc-service">' + (p.tag ? Tag(p.tag) : '') + Medallion({ icon: p.icon || 'corte', size: 64 }) +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.text) + '</p>' +
      '<div class="kc-service__meta"><span class="kc-service__price"><small>Desde</small>' + esc(p.price) + '</span>' +
      (p.duration ? '<span class="kc-service__time">' + icon('reloj') + esc(p.duration) + '</span>' : '') + '</div></article>';
  }
  function PriceMenu(p) {
    p = p || {};
    return '<section class="kc-menu"><div class="kc-menu__head"><span class="kc-eyebrow">' + esc(p.eyebrow || 'Carta de servicios') + '</span><h3>' + esc(p.title) + '</h3>' + ornament('hebras').replace('<svg', '<svg style="width:180px;margin:6px auto 0;display:block"') + '</div><ul>' +
      (p.items || []).map(function (it) { return '<li><b>' + esc(it.name) + '</b><span class="lead"></span><em>' + esc(it.price) + '</em>' + (it.detail ? '<i>' + esc(it.detail) + '</i>' : '') + '</li>'; }).join('') + '</ul></section>';
  }
  function Testimonial(p) {
    p = p || {}; var f = p.ficha || {};
    var rows = [['Textura', f.textura || 'Rizo 3B'], ['Servicio', f.servicio || 'Corte en seco y definición'], ['Duración', f.duracion || '2 h 15 min'], ['Clienta desde', f.desde || '2023']];
    return '<figure class="kc-ficha"><div class="kc-ficha__foto"><img src="' + esc(p.foto || ASSETS.fotoOscuro) + '" alt="' + esc(p.alt || 'Rizos definidos después del servicio') + '"></div>' +
      '<div class="kc-ficha__cuerpo"><blockquote>' + esc(p.quote) + '</blockquote>' +
      '<figcaption class="kc-ficha__firma"><b>' + esc(p.name) + '</b><span>' + esc(p.service || '') + '</span></figcaption>' +
      '<dl>' + rows.map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('') + '</dl></div></figure>';
  }
  function Duality(p) {
    p = p || {}; var a = p.rizos || {}, b = p.lisos || {};
    return '<section class="kc-duality"><div class="kc-duality__side"><canvas data-kc-strands="rizos" data-kc-seed="5" aria-hidden="true"></canvas>' + Tag({ tone: 'rizos', label: 'Método rizos' }) + '<h3>' + esc(a.title || 'Rizos') + '</h3><p>' + esc(a.text) + '</p>' + Button({ label: a.cta || 'Ver tratamientos', variant: 'hebra' }) + '</div>' +
      '<div class="kc-duality__side"><canvas data-kc-strands="lisos" data-kc-seed="9" aria-hidden="true"></canvas>' + Tag({ tone: 'lisos', label: 'Alisados' }) + '<h3>' + esc(b.title || 'Lisos') + '</h3><p>' + esc(b.text) + '</p>' + Button({ label: b.cta || 'Ver alisados', variant: 'hebra' }) + '</div></section>';
  }
  function BookingBar(p) {
    p = p || {}; var name = 'kc-turno' + (++uid);
    var turnos = p.turnos || [{ dia: 'Jue 16', hora: '10:00' }, { dia: 'Jue 16', hora: '15:30' }, { dia: 'Vie 17', hora: '9:00' }, { dia: 'Sáb 18', hora: '11:00', lleno: true }, { dia: 'Sáb 18', hora: '14:00' }];
    return '<aside class="kc-agenda"><div><h2>' + esc(p.title || 'Agenda abierta esta semana') + '</h2><p>' + esc(p.text || 'Elige un espacio y te confirmamos por WhatsApp en menos de una hora.') + '</p></div>' +
      Button({ label: p.cta || 'Agendar por WhatsApp', variant: 'claro' }) +
      '<fieldset class="kc-agenda__turnos"><legend>Espacios disponibles</legend>' + turnos.map(function (t, i) { return '<label class="kc-turno"><input type="radio" name="' + name + '"' + (i === 0 ? ' checked' : '') + (t.lleno ? ' disabled' : '') + '><span>' + esc(t.dia) + '<b>' + esc(t.hora) + '</b></span></label>'; }).join('') + '</fieldset></aside>';
  }
  function Fab(p) { p = p || {}; return '<a class="kc-fab" href="' + esc(p.href || '#') + '" aria-label="' + esc(p.label || 'Reservar por WhatsApp') + '"><span class="kc-fab__sello">' + icon('mensaje') + '</span><span class="kc-fab__texto">' + esc(p.label || 'Reservar por WhatsApp') + '</span></a>'; }
  function mount(el, html) { el.innerHTML = html; hydrate(el); return el; }

  window.KC = { assets: ASSETS, icons: Object.keys(ICONS), icon: icon, ornament: ornament, marble: marble, strands: strands, hydrate: hydrate, mount: mount,
    Button: Button, Field: Field, Tag: Tag, Ornament: Ornament, Medallion: Medallion, Header: Header, Hero: Hero, ServiceCard: ServiceCard, PriceMenu: PriceMenu, Testimonial: Testimonial, Duality: Duality, BookingBar: BookingBar, Frase: Frase, Fab: Fab };
})();
})();
