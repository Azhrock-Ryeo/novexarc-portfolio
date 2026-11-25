# NOVEXARC — clean portfolio starter

This is a **structure-first scaffold**, not a finished reproduction of the Figma
design. It keeps the supplied dark/purple/cyan direction, introduces readable
page organization, and deliberately leaves missing visuals as labeled placeholders.

The original `novex.zip` is unchanged. This folder does not contain the original
`.git`, `.env`, Docker setup, module installer, template backend, or old animations.

## 1. Start here

Use a supported Node.js LTS release. Node 24 LTS is the suggested local baseline
(`.nvmrc` is included); this project's minimum is Node 22.12.

Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Use the localhost URL printed by Vite. Stop it with Ctrl+C.

Before your first commit, run:

```bash
npm run typecheck
npm run build
npm run preview
```

After the first successful `npm install`, commit the generated `package-lock.json`.
Subsequent installs on the same locked project can use `npm ci`.

**Validation limitation:** npm registry DNS was unavailable in the authoring
environment. Dependencies were not installed, and a production build, full
dependency-aware typecheck, and browser test were not run. See
`docs/VALIDATION.md` for exactly which checks were performed. Do not treat this
starter as production-ready.

## 2. What is included

- React + TypeScript + Vite, with Tailwind 4's Vite plugin.
- React Router 7 declarative routes, preserving the old project's router major.
- Home, Creation, Architecture, project-preview, and not-found pages.
- One shared header, main landmark, and footer.
- Central public site details and plain arrays for services, capabilities,
  projects, and UI/UX designs.
- Two simple responsive data-to-UI examples: How We Build and Our Services.
- A mailto contact CTA, visible keyboard focus, and instant navigation/scroll.
- Clearly labeled placeholders for artwork and unfinished case studies.
- A fresh `.gitignore` and documentation for starting a separate repository.

There is no animation library, backend, database, CMS, authentication, email
sending service, or deployment integration. The mailto link opens the user's
email application; it does not prove that a message was sent.

Space Grotesk is named in the CSS but is NOT bundled or fetched. Until an
approved font source is connected, the preview uses a system font fallback.

## 3. Read the application in this order

1. `src/main.tsx` — starts React and routing.
2. `src/App.tsx` — lists the URLs and their pages.
3. `src/components/layout/SiteLayout.tsx` — shared header, main, footer.
4. `src/pages/home/HomePage.tsx` — section order for the Home page.
5. `src/pages/home/sections/ServicesSection.tsx` — one section's layout.
6. `src/data/services.ts` — the text rendered by that section.

Editing a service should require opening the last file, not understanding a
module manifest or a custom loader.

## 4. Editing map

| Change | File |
| --- | --- |
| Contact email, navigation labels | `src/data/site.ts` |
| Services text | `src/data/services.ts` |
| Tool lists and capability descriptions | `src/data/capabilities.ts` |
| Software project summaries | `src/data/projects.ts` |
| UI/UX portfolio entries | `src/data/designs.ts` |
| Colors and base styles | `src/styles/global.css` |
| Home section order | `src/pages/home/HomePage.tsx` |
| Main routes | `src/App.tsx` |
| Shared navigation/footer | `src/components/layout/` |
| Exact image exports, once supplied | `public/images/` |

## 5. New Git repository

Extract this project beside your old project, NOT inside it:

```text
Projects/
  novex/                 # Leave the old repository and deployment alone.
  novexarc-portfolio/     # This new starter.
```

In the new folder, after installation and checks:

```bash
git init -b main
git status
git add .
git diff --cached --stat
git diff --cached
git commit -m "chore: initialize clean NOVEXARC portfolio"
```

Review the staged changes before committing. Do not add `.env`, passwords,
tokens, `node_modules`, or generated `dist` files.

Create a NEW empty GitHub repository, suggested name `novexarc-portfolio`.
Do not initialize that remote with another README, license, or `.gitignore`.
Choose your intended account/organization and visibility. Then substitute the
actual URL in these commands:

```bash
git remote add origin https://github.com/YOUR-ACCOUNT/novexarc-portfolio.git
git remote -v
git push -u origin main
```

No GitHub repository has been created or pushed by this starter. No existing
remote is changed. No Git identity has been configured on your behalf. If Git
asks for a user name/email, set your own identity before committing.

A small workflow is enough:

```bash
git switch -c feat/home-layout
# Make one focused improvement and run the checks.
git add .
git diff --cached
git commit -m "feat: build responsive home layout"
git push -u origin feat/home-layout
```

Open a pull request into `main`. Keep `main` usable. Do not add a complex
multi-branch release process for this three-page rebuild.

## 6. Next implementation sequence

Structure and routing → shared navigation/footer → static Home → static
Creation → static Architecture → verified project content/assets →
responsive and keyboard checks → animations under your later instructions.

Keep the old website live until the new version is ready. Before launch, remove
development placeholders and the `noindex` meta tag, migrate or deliberately
retire old routes, configure the host for SPA routing, and verify contact behavior.

## More detail

- `docs/ARCHITECTURE.md` — boundaries, page/section mapping, and examples.
- `docs/SOURCE-AUDIT.md` — observations from the supplied ZIP and Figma code.
- `docs/MIGRATION.md` — what to keep, exclude, review, and implement later.
- `docs/VALIDATION.md` — performed checks and untested areas.

## Official references

These are setup references, not evidence about the old private repository:

- Vite guide: https://vite.dev/guide/
- Tailwind Vite integration: https://tailwindcss.com/docs/installation/using-vite
- React Router declarative guide: https://reactrouter.com/start/declarative/installation
  (The live latest guide may show a newer major; this starter keeps Router 7
  from the supplied ZIP and uses `react-router-dom` imports consistently.)
- Node release status: https://nodejs.org/en/about/previous-releases
- Vite environment safety: https://vite.dev/guide/env-and-mode
- GitHub existing-local-project guide:
  https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
