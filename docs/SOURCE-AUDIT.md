# Source audit: supplied novex.zip and Figma export

This is a limited code/content inspection, not a security certification.
The ZIP was read directly. The accompanying master-history text was useful
background, but was not used as a substitute for inspecting actual files.

No old source file, deployment, Git history, or remote was modified.

## What the ZIP actually shows

- `novex/README.md` explicitly describes a static Vite + React Router portfolio,
  with no server/API requirement, using Pavillion folder/module conventions.
- `novex/frontend/index.html` loads `/src/app/main.jsx`.
- `novex/frontend/src/app/main.jsx` renders the React application in BrowserRouter.
- `novex/frontend/src/app/App.jsx` defines `/`, `/projects`, `/projects/:id`,
  and `/teams`.
- `novex/frontend/package.json` declares React 19, Router 7, Vite 8, Tailwind 4
  tooling, and TypeScript infrastructure. The package name is still `terminal71`.
- The root package retains Terminal71 template naming and Docker/module-installer
  commands; it is not the same package as the active Vite application.
- `novex/backend/README.md` is empty. There is no active application backend in
  the supplied folder tree.
- The ZIP includes 13 `pavillion.module.json` manifests.
- Several reusable components/utilities have parallel `.jsx`/`.tsx` or `.js`/`.ts`
  implementations, plus types, READMEs, and module metadata.
- `frontend/next.config.ts`, `src/app/layout.tsx`, and a Next/WASM demo `page.tsx`
  remain, although the active entry point is Vite. Next is not declared in the
  active frontend dependencies.
- `frontend/tsconfig.json` contains Next-oriented configuration.
- Two ESLint config files are present: `.js` and `.mjs`.
- Project metadata and detailed case-study content live in `frontend/configs/work/`.
- `workLoader.js` discovers project JSON with `import.meta.glob`.
- Contact data is read from `configs/contact.json` through a loader and a social
  platform registry.
- The original archive includes `.git/` and `.env`. Those are not copied into
  this starter. The `.env` inspection found port-setting keys; this audit does
  not assert that it contains leaked API credentials.

The complexity is largely packaging, reusable-module conventions, duplicate
language variants, and template residue. It is not evidence that a small public
portfolio requires a backend or that the original developer's security work
should be dismissed.

## What is useful to keep

The separation of content from UI, project narratives, verified screenshots,
brand assets, semantic markup, keyboard-accessibility intent, and any proven
performance knowledge can still be valuable.

The recommendation is to retain useful behavior and content while removing the
extra machinery from the NEW project. Keep the original ZIP/repository as the
reference until the migration is complete.

## Issues in the pasted Figma code

These observations concern the supplied paste. They do not prove that the Figma
file or the old repository contains the same duplicates.

1. `BuildProcessSection`, `HeroSection`, `AgoraCaseStudySection`, and
   `FooterSection` are repeated in the paste. Keep one implementation per file;
   pasting all repeated exports into one module would create conflicting names.
2. Fixed widths around 1446–1480 pixels, fixed section heights, and many absolute
   x/y coordinates describe a desktop canvas. Responsive layout must be designed
   rather than inherited from those coordinates.
3. The `services` data object includes extensive class strings for every
   coordinate and sub-element. Those are layout instructions, not service data.
4. Navigation/footer components have multiple names across exports. A shared
   SiteHeader and SiteFooter avoid repeating the same site-wide work.
5. Internal links mix `#home`, `#creation`, `/case-studies/agora`, and other paths.
   The StockKernel “case study” link targets its technology-list element, not a
   complete case-study page.
6. Some case-study links have `h-0`. They should have intentional, visible,
   keyboard-accessible link areas in the rebuilt layout.
7. Home imports `NavigationSection`, `PortfolioSection`, and `ContactSection`
   without their implementations in the pasted Home source. Shared footer
   material appears elsewhere, but that is not a complete Home export.
8. Creation imports `CreationHeroSection`, `MainNavigationSection`, and
   `ContactCallToActionSection` without full implementations in the pasted
   Creation source.
9. Architecture's CSS contains malformed braces, incomplete identifiers, and UI
   fragments such as “Preview.” Screenshots show some component fragments, not
   a complete verified export. Do not paste that CSS as runnable source.
10. The export repeats `@tailwind` directives and uses older JS config syntax,
    while the ZIP's package.json includes Tailwind 4 tooling.
11. Global `outline-none` resets should not be copied without deliberate visible
    keyboard focus replacements.
12. The supplied CSS includes generic animation classes/keyframes, and footer
    code uses smooth scrolling. Their presence is not an implemented motion
    design. The new foundation excludes both.
13. The Creation page carries the label “SELECTED ARCHITECTURE,” and FAQ headings
    have wording/typing errors. The scaffold marks its small wording corrections;
    final copy and brand explanations remain unapproved.

## Missing exact assets

The ZIP has older astronauts, logos, project screenshots, and a background video.
None of these checked Figma import filenames is present:

- `mask-group.png`
- `astronaut-1.png`
- `hero.png`, `introduction.png`, `services.png`, `selected-work.png`
- `original-nebula-wordmark-preserved.png`
- `glowing-network-planet-in-deep-space-1.png`
- `pexels-renato-calsavara-51671778-8148893-1.png`
- `image.png`
- `482442c2-8245-4916-9732-ad5187770a49-1.png`
- `react-logo.png`, `figma-logo.png`

Absence of a matching filename does not prove that no visually identical image
exists under another name. Such equivalence was not established. The starter
therefore does not substitute the old astronaut/logo/screenshots for Figma art.

The SEOULFORM desktop/mobile source assets and full component files are not
available in the old ZIP under those new design names.

## Content that needs verification

| Topic | Existing ZIP | New Figma export | Starter decision |
| --- | --- | --- | --- |
| AGORA technologies | React, Node, Express, PostgreSQL, Prisma, Socket.IO | Laravel, Livewire, PostgreSQL | Do not publish either as verified; confirm first |
| StockKernel tags | Several framework/database technologies | POS, Stock, PostgreSQL | Separate product capabilities from technical stack |
| Premium Coffee | Existing configured case study | Not featured on new Creation page | Keep the catalog entry; do not silently discard the old content |
| Deployment/client status | Metadata says completed/internal, no live link | Portfolio showcase | Do not equate completion with client deployment |
| Name and page explanations | No confirmed ARC expansion in the supplied history | Question headings only | Do not invent answers |
| Brand identity | Legacy NOVEx/Terminal71 names remain | NOVEXARC | Centralize the public name in the new site |

This starter is not a fact-check of the showcased products. Metadata and marketing
text do not independently verify deployment, results, client use, or authorship.

## What has not been audited

Dependency vulnerabilities, all historical Git objects, every external link,
every line of legacy code, production server configuration, and actual client
systems were not audited. The old site was not built or run here.
