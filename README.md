# Soe Thiha portfolio

This is a static personal portfolio and blog built with Astro, React, TypeScript, and Tailwind CSS. It uses a static build output and keeps the design consistent with the current live site.

## Technology stack

- Node.js 26.13.0
- pnpm 12.18.0
- Astro 7.4.7
- React 19
- TypeScript
- Tailwind CSS 4
- Cloudflare Pages for production hosting

## Prerequisites

Install Node.js 26.13.0 and pnpm 12.18.0 locally.

```bash
node --version
pnpm --version
```

Use the standard package manager installation path; do not use repo-local tool wrappers.

## Install dependencies

```bash
pnpm install --frozen-lockfile
```

The pnpm release-age protection remains enabled at its default 24-hour window. The overrides in `pnpm-workspace.yaml` keep Astro's compatible `satteri`, `tinyps`, and Volar dependencies on versions old enough to pass that policy. The development dependencies pin a matching stable `@emnapi` 1.x core/runtime pair for Astro's WASM tooling instead of allowing an incompatible beta peer combination.

## Development

```bash
pnpm dev
```

The app runs at `http://localhost:4321` by default.

## Type checking, linting, formatting

```bash
pnpm check
pnpm lint
pnpm format:check
```

## Production build

```bash
pnpm build
pnpm preview
```

The build output is generated in `dist/`.

## Environment variables

The project uses `SITE_URL` for canonical URLs and sitemap generation.

- Local development: leave unset to default to `http://localhost:4321`
- Production: set `SITE_URL=https://yuliux.pages.dev` before building or in the deployment environment

Use the sample file at `.env.example`.

## Blog content

Add markdown files under `src/content/blog/`.

The frontmatter schema in `src/content.config.ts` supports:

- `title`
- `description`
- `pubDate`
- optional `updatedDate`
- optional `tags`
- optional `draft` (defaults to `false`)
- optional absolute `coverImage` URL

Draft posts are omitted from the listing and public routes.

## Project structure

```text
.
├── src/
│   ├── components/
│   ├── content.config.ts
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── .env.example
├── .gitignore
├── .npmrc
├── astro.config.mjs
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── tsconfig.json
└── dist/
```

## Cloudflare Pages deployment

Production hosting is Cloudflare Pages for the existing project at `https://yuliux.pages.dev`.

Cloudflare Pages project settings should be configured as follows:

- Production branch: `main`
- Root directory: `/`
- Build command: `pnpm run build`
- Build output directory: `dist`
- Node.js version: `26.13.0`
- pnpm version: `12.18.0`

Set the runtime variables in Cloudflare Pages under Settings → Environment variables:

- `NODE_VERSION=26.13.0`
- `PNPM_VERSION=12.18.0`

The repository’s `.node-version` and `packageManager` fields should match the Cloudflare configuration. Manual dashboard settings may still be required if the Cloudflare project was configured independently from the repo.

## Notes

- This repository intentionally uses standard pnpm and static Astro output.
- Obsolete Windows-specific custom bootstrapping and GitHub Pages-specific settings have been removed.
- The existing UI, styling, and functionality were preserved.
