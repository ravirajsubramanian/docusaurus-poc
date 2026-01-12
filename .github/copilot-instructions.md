# Copilot Instructions for AI Agents

## Project Overview
- This is a Docusaurus-based static website project.
- Main content is organized under `docs/` (documentation), `blog/` (blog posts), and `src/` (custom React components, pages, and styles).
- Configuration files: `docusaurus.config.js` (site config), `sidebars.js` (sidebar structure), `package.json` (dependencies/scripts).

## Key Workflows
- **Install dependencies:**
  - `yarn`
- **Start local dev server:**
  - `yarn start` (auto-reloads on file changes)
- **Build static site:**
  - `yarn build` (outputs to `build/`)
- **Deploy to GitHub Pages:**
  - With SSH: `USE_SSH=true yarn deploy`
  - With GitHub user: `GIT_USER=<username> yarn deploy`

## Project Structure & Conventions
- **Documentation:**
  - Markdown/MDX files in `docs/` (grouped by topic, see subfolders)
  - Sidebar order/structure in `sidebars.js`
- **Blog:**
  - Markdown/MDX posts in `blog/` (date-prefixed filenames)
  - Author and tag metadata in `blog/authors.yml` and `blog/tags.yml`
- **Custom Components:**
  - React components in `src/components/`
  - Custom pages in `src/pages/` (e.g., `index.js`, `markdown-page.md`)
  - Global and component styles in `src/css/` and `src/components/**/styles.module.css`
- **Static Assets:**
  - Place images in `static/img/` (referenced via `/img/...` in markdown or React)

## Patterns & Integration Points
- **MDX support:**
  - Use `.mdx` for docs/blogs needing embedded React components.
- **No backend/server code:**
  - All logic is static or client-side React.
- **Configuration:**
  - Site-wide settings in `docusaurus.config.js` (title, navbar, plugins, etc.)
- **Extending functionality:**
  - Add new docs/blogs by creating markdown/MDX files in the respective folders.
  - Add new React components in `src/components/` and import as needed.

## Examples
- To add a new doc: create `docs/tutorial-basics/my-topic.md` and update `sidebars.js`.
- To add a new blog post: create `blog/YYYY-MM-DD-my-post.md`.
- To add a new homepage feature: edit `src/components/HomepageFeatures/index.js`.

## References
- [README.md](../../README.md) for workflow commands
- [docusaurus.config.js](../../docusaurus.config.js) for site config
- [sidebars.js](../../sidebars.js) for sidebar structure
- [src/pages/](../../src/pages/) for custom pages

---
For more, see the [Docusaurus docs](https://docusaurus.io/docs).
