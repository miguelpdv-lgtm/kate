# Kate Cabarcas Peluquería

Landing page de Kate Peluquería & Prestige Barber Club (Cartagena), especialistas en rizos y lisos. Sitio estático, sin paso de compilación: se publica tal cual en cualquier hosting (GitHub Pages, Netlify, Vercel…).

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
| `assets/servicios.js` | Carta completa de servicios y precios, tomada de la página de reservas en Weibook |
| `assets/site.css` | Maquetación de la landing |
| `assets/tokens.css` / `tokens.json` | Tokens del sistema de diseño (temas Mármol y Noche) |
| `assets/components/` | Componentes del sistema de diseño (`window.KC`) |
| `assets/fonts/` | Cinzel, Ms Madi, Cormorant Garamond, Jost (OFL) |
| `assets/img/` | Monograma, texturas y fotos |

## Antes de publicar

- Los datos de contacto, horario y precios se copiaron de la página de reservas en Weibook: si cambian allá, actualiza `CONFIG` en `assets/site.js` y `assets/servicios.js`.
- El testimonio es de ejemplo: cámbialo por uno real, con permiso de la clienta.
- Las fotos son de Unsplash (licencia libre); reemplázalas por fotos de clientas cuando existan.
