# Soe Thiha portfolio

Astro renders the static portfolio and Markdown blog. Small React islands preserve the theme, terminal, and email-copy controls.

## Required tools

The project uses Node.js 24.22.1 LTS and pnpm 10.34.9, pinned in the project manifest. `scripts/setup.cmd` places the runtime and Corepack cache under the ignored `.tools/` folder; it does not change global PATH or execution policy. The bootstrap uses the matching Node runtime bundled with Codex when available, otherwise downloads the official Node archive and verifies its SHA-256 checksum.

## Environment setup

Run these commands from the project root in Command Prompt or PowerShell:

```powershell
Copy-Item .env.example .env
.\scripts\setup.cmd
```

The setup command installs the pinned pnpm release through local Corepack, then installs dependencies. The project had no lockfile, so the first successful install creates `pnpm-lock.yaml`. Subsequent setup runs install from that lockfile in frozen mode.

Verify that the project-local tools are active:

```powershell
.\scripts\node.cmd --version
.\scripts\pnpm.cmd --version
```

## Development commands

```powershell
.\scripts\pnpm.cmd dev
.\scripts\pnpm.cmd check
.\scripts\pnpm.cmd lint
.\scripts\pnpm.cmd format
.\scripts\pnpm.cmd format:check
.\scripts\pnpm.cmd build
.\scripts\pnpm.cmd preview
```

The development server defaults to `http://localhost:4321`.

## Environment variables

`SITE_URL` is optional in development and defaults to `http://localhost:4321`. Set it to the deployed HTTPS origin in `.env` or the production build environment to generate production canonical URLs and the sitemap. A localhost URL is excluded from sitemap generation.

## Blog posts

Add Markdown files under `src/content/blog/`. Frontmatter is validated in `src/content.config.ts` and accepts `title`, `description`, `pubDate`, optional `updatedDate`, `tags`, optional `draft` (defaults to `false`), and an optional absolute `coverImage` URL. Draft posts are omitted from the listing and generated public routes. The listing is at `/blog/`; published files generate routes from their filenames. Markdown code fences use Shiki highlighting.
