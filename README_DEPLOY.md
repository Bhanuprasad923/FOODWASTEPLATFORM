Deployment instructions

This project builds to the `dist/` folder using Vite.

Quick build:

```bash
npm install
npm run build
```

Deploy options:

- Netlify (recommended for static sites):

```bash
npm i -g netlify-cli
npm run build
netlify deploy --dir=dist --prod
```

- Vercel:

```bash
npm i -g vercel
vercel --prod
```

- GitHub Pages: set `VITE_BASE` to your repo name (e.g. `/my-repo/`) before building:

```bash
# Windows PowerShell
$env:VITE_BASE = '/my-repo/'
npm run build
```

Notes:
- If deploying under a subpath, set `VITE_BASE` (or `base` in `vite.config.js`).
- If you use Netlify/Vercel, environment variables should be set in the provider's dashboard.
- We split vendor chunks (react-vendor/vendor) in `vite.config.js` to improve caching.
