# Kate Cabarcas Peluquería

Landing page de Kate Cabarcas Peluquería (Barranquilla), especialistas en rizos y lisos. Sitio estático, sin paso de compilación: se publica tal cual en cualquier hosting (GitHub Pages, Netlify, Vercel…).

## Ver en local

```sh
python3 -m http.server 8000
# abre http://localhost:8000
```

## Estructura

| Ruta | Qué es |
| --- | --- |
| `index.html` | Página y estructura de secciones |
| `assets/site.js` | Arma la página con los componentes y los datos del salón (`CONFIG`) |
| `assets/site.css` | Maquetación de la landing |
| `assets/tokens.css` / `tokens.json` | Tokens del sistema de diseño (temas Mármol y Noche) |
| `assets/components/` | Componentes del sistema de diseño (`window.KC`) |
| `assets/fonts/` | Cinzel, Ms Madi, Cormorant Garamond, Jost (OFL) |
| `assets/img/` | Monograma, texturas y fotos |

## Antes de publicar

- Pon el número real de WhatsApp, el horario y la ciudad en `CONFIG`, al inicio de `assets/site.js`.
- Revisa los precios de las tarjetas y de la carta en `assets/site.js`.
- El testimonio es de ejemplo: cámbialo por uno real, con permiso de la clienta.
- Las fotos son de Unsplash (licencia libre); reemplázalas por fotos de clientas cuando existan.
