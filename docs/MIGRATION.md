# Migration checklist

## Phase 1 — structure (this starter)

- One frontend package and an explicit route list.
- Shared header/main/footer.
- Plain typed content files; no custom module installer.
- No animation dependencies or client-side secrets.
- Clear placeholders rather than unverified substitute artwork.
- A separate Git history after YOU run git init in the new folder.

The initial files are a proposal you can inspect and rename before full
implementation. There is no requirement to preserve this scaffold's exact
placeholder layout.

## Phase 2 — static implementation

Use the actual approved Figma design as the visual reference. Obtain complete
exported component source plus actual images, or read the exact Figma nodes when
implementation begins. Do not reconstruct missing long class lists from editor
screenshots or treat a screenshot of the Figma UI as a website asset.

Implement one page/section at a time. Keep navigation functional, keep content
visible, and use normal flow/grid/flex for content. Restrict absolute positioning
to intentional image/text overlays.

Do not install all the technology names from the “How We Build” section. They
are service capability labels, not dependencies of this portfolio.

## Phase 3 — content and existing routes

- Reconcile AGORA's conflicting stacks.
- Separate project type, build status, availability, and deployment status.
- Preserve the original three case studies until the replacement is complete.
- Port only verified case-study content and approved screenshots.
- Decide the fate of `/teams` and old project URLs.
- Replace “migration preview” labels and all development placeholders.
- Connect the actual NOVEXARC wordmark, not a text approximation.
- Supply approved explanations for Creation, Architecture, and the brand name.

A complete but not deployed product can be shown as an internal product,
demonstration, or product available for customization when that is accurate.
Do not label it a live client system or invent measured results.

## Phase 4 — contact and launch choices

The current contact link opens an email application. A real “Send message” form
would require a deliberate backend/serverless or trusted form-service setup.
Do not show a fake success message or expose email-provider secrets in React.

Private email/API credentials belong on a server. `VITE_*` values are bundled
into browser code and must be treated as public.

Before launch:
- Run the real dependency-aware typecheck and production build.
- Test direct navigation and refresh on every page.
- Configure the actual host's SPA fallback and intentional HTTP redirects.
- Confirm image URLs, missing routes, keyboard navigation, and small screens.
- Replace the preview title/description and remove `noindex` only when ready.
- Decide whether static pre-rendering is needed for per-page crawler/social
  previews. This scaffold does not implement server rendering or prerendering.
- Do not switch the live domain until the new version is ready.

The preview's `noindex` tag is a crawler instruction, not access control.

## Phase 5 — animation (deferred until your instructions)

Add only the approved effects after the static pages are complete. Keep a usable
reduced-motion experience. Do not initially hide content behind an animation
hook that has to run successfully.

The old scanner, particles, space video, WASM demo, and animation utilities have
not been transferred. They remain in the old source for reference.

## Preserve rather than transplant

Keep: verified content, original brand identity, approved exact images, working
accessibility patterns, and useful performance lessons.

Do not copy wholesale: `.git/`, `.env`, `node_modules/`, generated output,
Docker services, template Next/WASM files, the module installer, or an old
package-lock for a different dependency graph.

The first successful install in this new project creates its OWN lockfile.
