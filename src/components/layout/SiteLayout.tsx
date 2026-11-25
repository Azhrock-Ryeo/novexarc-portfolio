import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { site } from "../../data/site";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Container } from "../ui/Container";

export function SiteLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const label = site.navigation.find((item) => item.to === pathname)?.label ?? "Portfolio";
    document.title = `${label} — NOVEXARC · Structure Preview`;

    // Run after the newly selected page has rendered. No animated scrolling.
    const frame = requestAnimationFrame(() => {
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* Ignore malformed URL encoding. */ }
      const target = id ? document.getElementById(id) : null;
      if (target) {
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: "instant", block: "start" });
      } else {
        document.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:block focus:p-4">Skip to content</a>
      <SiteHeader />
      <aside aria-label="Development status" className="border-b border-line bg-surface py-3 text-sm">
        <Container>Structure preview only. Figma artwork, final styling, and animations are not implemented.</Container>
      </aside>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
