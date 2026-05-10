# Safeti Web v2

## Arranque
```bash
npm install
npm run dev
```

## Qué actualizar antes de publicar
1. `src/data/content.js` — datos reales (WhatsApp, email, servicios, clientes, cobertura, casos)
2. `src/sections/Contacto.jsx` — reemplazar `FORMSPREE_ID` con tu ID de formspree.io
3. `index.html` — actualizar URL canónica y og:image cuando tengas el dominio
4. `public/` — agregar favicon.svg, og-image.jpg, apple-touch-icon.png

## Deploy en Vercel
```bash
# Opción 1: desde CLI
npx vercel

# Opción 2: conectar repo en vercel.com → deploy automático en cada push
```
