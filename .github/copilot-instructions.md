## Repository overview

- **Type**: Jekyll static website (source in repository root, generated site in `_site`).
- **Primary purpose**: Content-driven site for Association Maison Verte d'Haïti — pages, posts, slides, events and projects.

## How to build & preview locally

- **Install deps (Windows)**: run `bundle install` (Gemfile pins `jekyll ~> 4.4.1`).
- **Serve locally**: run `bundle exec jekyll serve --livereload` to preview at `http://localhost:4000`.
- **Netlify / CI build**: Netlify runs `bundle exec jekyll build` and publishes the `_site` folder (see `netlify.toml`).
- **Do not edit**: `_site` is generated — edit source files (folders starting with `_` or other content files).

## Key directories & files (examples)

- `/_layouts/` : page templates (e.g. `_layouts/default.html` uses `{% include header.html %}` and `{{ content }}`).
- `/_includes/` : reusable snippets (`header.html`, `footer.html`, `slides.html`).
- `/_posts/`, `/_slides/`, `/_presses/`, `/_events/`, etc.: collection sources (defined in `_config.yml`).
- `/assets/` : CSS, JS and images (`assets/css/styles.css`, `assets/js/main.js`, `assets/uploads`).
- `/admin/` : Netlify CMS entrypoint and configuration (`admin/config.yml`).

## Content conventions & patterns (important for editors/agents)

- Collections are stored in underscored folders (e.g. `_slides`) and are enabled in `_config.yml` with `output: true` so each item becomes an HTML page.
- Front matter keys are used by templates and Netlify CMS. Example: slides include `title`, `image`, `order`, `active`, `description` (see `admin/config.yml`).
- Post slugs follow the CMS pattern: `{{year}}-{{month}}-{{day}}-{{slug}}` for `_posts`; other collections use `{{slug}}`.
- Many collection items use `layout: post` (often set as hidden default by CMS); preserve `layout` when creating new content.
- Filenames and slugs may contain non-ASCII characters (e.g. `_slides/agir-localement-pour-un-avenir-durable-en-haïti.md`) — prefer creating slugs without spaces/special chars when programmatically generating files.

## Netlify CMS / Admin workflows

- Netlify CMS is configured in `admin/config.yml` and uses `git-gateway` with branch `main` — content can be edited at `/admin/` in production.
- Uploaded media are saved to `assets/uploads` (`media_folder` in CMS config). When adding images, refer to them with `/assets/uploads/<file>`.

## Templates & rendering notes for code edits

- Templates use Liquid (`{{ }}` and `{% %}`) — changes to `_config.yml` require restarting `jekyll serve` to take effect.
- Includes are referenced by name, e.g. `{% include slides.html %}` pulls `_includes/slides.html` (not `_includes/slides.html` in `_site`).
- When modifying CSS/JS under `assets/`, the browser cache may persist — use `--livereload` or clear cache for accurate previews.

## Common tasks examples for an AI coding agent

- Add a new slide: create `*_slides/<slug>.md` with YAML front matter: `---\nlayout: post\ntitle: ...\nimage: /assets/uploads/...\norder: 1\nactive: true\n---` then push.
- Add a static page: create `about/index.html` or add a file under a relevant collection and include appropriate front matter.
- Update site metadata: edit `_config.yml` (restart local server after change).

## Notes & gotchas

- The repository contains generated `_site/`. Avoid editing `_site` — it mirrors build output. Prefer source files outside `_site`.
- No automated tests or linters detected; manual visual checks and `jekyll serve` are the primary validations.
- Encoding: content is UTF-8 and includes French/Haitian text — be careful when programmatically manipulating filenames or front matter.

If anything here is unclear or you'd like more details about templates, collection fields, or an example PR workflow, tell me which area to expand.
