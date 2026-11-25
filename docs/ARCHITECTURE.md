# NOVEXARC: the new code architecture

## Goal

A codebase you can explain, edit, and debug yourself. Preserve the brand and
valuable project content; do not preserve architecture solely because the old
repository has it.

“Architecture” has two meanings here:

- `/architecture` is your UI/UX portfolio page.
- This document describes how the website's code is organized.

## Chosen approach: one small frontend application

```text
Browser
  → main.tsx starts React
  → App.tsx matches the URL
  → SiteLayout supplies header + main + footer
  → Page arranges its sections
  → Section uses plain data and shared components
```

No API request or database is needed to show local portfolio content. The contact
CTA opens a mail client. A real form-delivery endpoint is a separate future
decision, not an imaginary working backend in this starter.

## Actual starter structure

```text
novexarc-portfolio/
  public/
    images/README.md
  src/
    main.tsx
    App.tsx
    components/
      layout/
        SiteLayout.tsx
        SiteHeader.tsx
        SiteFooter.tsx
      ui/
        Container.tsx
        SectionPlaceholder.tsx
      ContactCTA.tsx
      ProjectCard.tsx
    pages/
      home/
        HomePage.tsx
        sections/
          BuildProcessSection.tsx
          ServicesSection.tsx
      creation/
        CreationPage.tsx
      architecture/
        ArchitecturePage.tsx
      project/
        ProjectPage.tsx
      NotFoundPage.tsx
    data/
      site.ts
      services.ts
      capabilities.ts
      projects.ts
      designs.ts
    styles/
      global.css
  docs/
  index.html
  package.json
  tsconfig.json
  vite.config.ts
  .gitignore
  .gitattributes
  .nvmrc
  README.md
```

`SectionPlaceholder` and `ProjectPage` are explicitly unfinished scaffolding.
Replace placeholders section by section. Do not create dozens of empty modules
or fake complete case studies just to make the folder tree look finished.

## The few rules that matter

**Pages arrange.** A page controls section order and page-specific composition.
It should not duplicate global navigation and footer markup.

**Page-specific sections stay beside their page.** Home's planet/story section
belongs under `pages/home/sections/`, not a general-purpose library.

**Components are shared when there is a real reason.** Reuse a header, footer,
contact CTA, container, and project card. Do not turn every paragraph into an
abstraction or create a single universal component with dozens of switches.

**Data contains content, not coordinates.** Services should contain a title and
description, not `top-[424px]` or `left-[88px]`. Styling belongs in the rendering
component. A card can accept a meaningful variant such as `featured` when needed.

**Use explicit imports.** For a handful of projects, a plain exported array is
easier to trace than automatic discovery, a registry, and a loader.

**Keep one source per component.** Use `.tsx` for React UI and `.ts` for data or
logic. Avoid maintaining parallel JS and TS versions of the same component.
Let TypeScript infer component return types rather than copying global
`JSX.Element` annotations everywhere.

**Add state only where interaction needs it.** A menu or FAQ can use local
React state. This foundation does not need a global store or event bus.

**Keep the root simple.** There is one package.json and one Vite entry point.
There is no nested `frontend/`, because there is no active backend here.

## Routes

| Route | Purpose | Current starter state |
| --- | --- | --- |
| `/` | Company/home narrative | Structure preview and two example sections |
| `/creation` | Software/products | Preview cards for AGORA and StockKernel |
| `/architecture` | UI/UX design work | SEOULFORM placeholder |
| `/creation/:slug` | Future project case studies | Explicit migration notice |
| `/projects` | Previous listing URL | Client-side replacement to `/creation` |
| `/projects/:slug` | Previous project detail URL | Same migration notice for known slugs |
| unknown route or slug | Missing page | Visible not-found screen |

Premium Coffee remains a known catalog entry even though it is not featured on
the new Creation page. The old `/teams` page is not implemented; it must be
deliberately retained, redirected, or retired before changing the live deployment.

These client-side paths are not HTTP redirects. The hosting service must serve
`index.html` for valid SPA paths while continuing to serve real assets normally.
A not-found component alone also does not guarantee an HTTP 404 status.
The starter assumes deployment at the root of a domain, not a repository subpath.
No hosting configuration or live deployment has been changed.

## Mapping the supplied Figma sections

### Home

Keep the supplied order:
navigation → hero → ribbon → brand introduction → ribbon → purpose →
How We Build → services → ribbon → selected work → ribbon → contact →
brand-origin question → footer.

As implementation proceeds, replace each corresponding placeholder with:
`HeroSection`, `BrandIntroductionSection`, `PurposeSection`,
`PortfolioSection`, `ContactSection` (if a real form is approved), and
`BrandOriginSection`. `BuildProcessSection` and `ServicesSection` currently
demonstrate the content/layout separation, not final visual fidelity.

`BrandRibbon` will be a shared static component once the exact approved export
is available. Animation is not a prerequisite for its initial implementation.

### Creation

`CreationHeroSection` → selected-creations label → project showcase list →
Creation explanation → shared CTA.

Prefer one well-named project showcase component with a project prop rather
than near-identical Agora and StockKernel markup. The Home card and the full
Creation showcase may use different components if their layouts differ enough.

The scaffold changes the copied label “SELECTED ARCHITECTURE” on this page to
“Selected creations.” This is an explicit cleanup, not a claim that the Figma
file has been edited.

### Architecture

`ArchitectureHeroSection` → selected-design label → SEOULFORM showcase →
Architecture explanation → shared CTA.

The supplied page references three SEOULFORM sections. The scaffold treats them
as three compositions for the same design project, not three separate client
projects. Confirm their final purpose during implementation.

## Responsive layout, without changing the art direction

The design's approximately 1446-pixel desktop width is a reference, not the
minimum width of every device.

Use a full-width outer section, a maximum-width inner container, responsive
side padding, a grid/flex layout, and content-driven height. Use absolute layers
for intentional decorative art such as an astronaut over a wordmark, not for
every text paragraph, service row, or technology badge.

Do not hide horizontal overflow globally as a substitute for correcting sizing.
Do not scale the entire desktop canvas down to phone size: the text would shrink
rather than reflow.

Use the exact original palette and approved imagery. The starter centralizes
the supplied colors in `src/styles/global.css`; it is not a new visual design.

## Tailwind setup

This scaffold uses the Tailwind 4 Vite plugin, one CSS import, and CSS theme
tokens. It deliberately does not copy the exported Tailwind 3-style directives
and `module.exports` configuration into a Tailwind 4 project.

Keep full utility names visible in source. Avoid constructing class strings like
`bg-${color}`. A conditional choosing complete class strings is straightforward.

Short example:

```tsx
<section className="py-12">
  <Container>
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Content flows naturally; no fixed desktop x/y coordinates. */}
    </div>
  </Container>
</section>
```

## Later animation boundary

Keep all content visible by default. Once the static design is approved, add
motion to the smallest appropriate component. Choose one animation approach for
the actual effects rather than pre-installing multiple libraries.

Provide a static/reduced-motion alternative, clean up timers/listeners, and
avoid making reading, navigation, or contact depend on an effect. Video/3D
requirements can be decided then; none are installed here.
