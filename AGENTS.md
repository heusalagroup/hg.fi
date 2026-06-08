# AGENTS.md - hg.fi working memory

Use this file as persistent guidance for future Codex work in this repository. Update it when conversations reveal new preferences, project facts, or gotchas.

## Project identity

- This repo contains the static `hg.fi` website for Heusala Group Oy.
- The deployed website lives in `docs/`, which is served by GitHub Pages. `docs/CNAME` contains `hg.fi`.
- The live production URL is `https://hg.fi`.
- The site is intentionally simple: static HTML, CSS, and vanilla JavaScript. There is no active package manager, framework, or build step in the current checkout.
- Keep additions lightweight and dependency-free unless the user explicitly asks for a larger change.

## Important directories and files

- `docs/index.html`: language selector. It detects `localStorage.preferred-language` or browser language and redirects to `fi.html` for Finnish, otherwise `en.html`.
- `docs/en.html` and `docs/fi.html`: main English and Finnish marketing pages. These contain inline JavaScript for smooth scrolling, mobile nav, active nav highlighting, and reveal animations.
- `docs/index.css`: shared CSS for the main language selector and main marketing pages.
- `docs/privacy.html`: bilingual privacy page with its own language toggle logic using `localStorage.privacyLanguage`.
- `scripts/`: maintenance scripts. Some are historical and assume a `frontend/` submodule tree that is not present in the current checkout.

Do not create nested `AGENTS.md` files inside `docs/` or other public/deployed folders. Root `AGENTS.md` is the safe place for general memory.

## Local development

- Serve the site from `docs/`:

```bash
./start-dev.sh
```

- Equivalent manual command:

```bash
cd docs
python3 -m http.server 8000
```

- Then open `http://localhost:8000`.
- For static inspection, opening individual HTML files can work, but a local server is safer because many links are absolute from `/`.

## Deployment model

- GitHub Pages deploys the `docs/` directory.
- `docs/robots.txt` allows all crawlers and points to `https://hg.fi/sitemap.xml`.
- `docs/sitemap.xml` lists the root pages.
- Be careful with `scripts/publish.sh`: it deletes and recreates `docs/` from `frontend/build/`, but `frontend/` is absent in this checkout. Treat it as stale/historical unless the frontend tree is restored.

## Content and localization rules

- Main site content usually needs parallel edits in both `docs/en.html` and `docs/fi.html`.
- When changing one locale, check the paired locale for matching structure, links, metadata, CTAs, and pricing language.
- Keep contact and company details synchronized across pages:
  - Email: `info@hg.fi` on the main site.
  - Company: Heusala Group Oy.

## SEO and metadata checklist

For user-facing page changes, especially new pages or renamed sections, check:

- `<title>` and `<meta name="description">`.
- Canonical URL.
- `hreflang` alternates between English and Finnish pages.
- Open Graph and Twitter image/title/description tags.
- JSON-LD structured data where present.
- `docs/sitemap.xml`.
- Image `alt` text and loading mode (`eager` for above-the-fold hero images, `lazy` below the fold).

Historical SEO notes live in `README_SEO.md`. Some dates there and in sitemaps may be stale, so update them deliberately when making current SEO changes.

## Design and implementation style

- Preserve the Apple-inspired, minimal, professional visual tone: ample whitespace, clean system fonts, restrained shadows, high contrast, and blue primary accents.
- CSS uses custom properties in `:root` for colors, spacing, typography, radius, shadows, and transitions.
- Existing class naming is BEM-like (`nav__link`, `service-card__title`). Follow that pattern.
- Do not reintroduce bundled fixed-price offer cards, public ready-made prices, or a guarantee section. Pricing is project-specific; the site may say fixed project pricing is agreed after scoping.
- The main site uses a sticky header. Account for header offsets in anchor scrolling.
- Keep touch targets at least 44px high.
- Prefer semantic HTML and accessible labels. Existing mobile nav buttons use `aria-label`.
- Avoid adding external scripts or dependencies by default. Existing analytics hooks are placeholders and should stay privacy-conscious.

## JavaScript behavior to preserve

- Main pages (`en.html`, `fi.html`) have inline scripts for:
  - anchor smooth scrolling with fixed-header offset,
  - hash handling on initial load and browser navigation,
  - mobile navigation toggle,
  - active nav link highlighting,
  - IntersectionObserver reveal animations.

When changing DOM class names, update the relevant script selectors at the same time.

## Testing guidance

- For small static changes, serve `docs/` locally and spot-check affected pages in desktop and mobile widths.
- For navigation or layout changes, test:
  - `http://localhost:8000/`
  - `/en.html`
  - `/fi.html`
- Check hash links with the sticky header, e.g. `/en.html#contact`.
- If SEO was touched, run Lighthouse when available and inspect the rendered head tags.

## Repo notes

- `.gitmodules` references old `frontend/src/fi/hg/core` and `frontend/src/fi/hg/frontend` submodules. They are not present in this checkout.
- `.gitignore` ignores `.idea`, `tmp`, and `.DS_Store`.
- `AGENTS.md` was created as an untracked empty file before this review and now contains the project memory.
