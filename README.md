# My Portfolio

A React + TypeScript + Vite portfolio app ready for GitHub Pages and custom domain deployment.

## Local development

```bash
export PATH="$HOME/.local/node-v22.12.0-darwin-arm64/bin:$PATH"
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This uses `gh-pages` to publish the contents of the `dist` folder.

## Custom domain setup

1. Replace `yourdomain.com` in `public/CNAME` with your actual domain.
2. Point your domain A/ALIAS records to GitHub Pages.
3. In GitHub repo settings, enable Pages and select the deployed branch or Pages source.
4. If using a custom domain, store the domain in the GitHub Pages settings and DNS.

## Environment variables

Copy `.env.example` to `.env` and update values for your personal details:

```bash
cp .env.example .env
```

## Notes

- This app is set up for static hosting.
- For a custom domain, keep the `base` value in `vite.config.ts` set to `/` unless you are deploying under a subpath.
- You can customize content in `src/App.tsx` and `src/App.css`.
