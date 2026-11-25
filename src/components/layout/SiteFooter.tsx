import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { Container } from "../ui/Container";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-line py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xl font-bold">{site.tagline}</p>
            <a href={`mailto:${site.email}`} className="mt-3 inline-block break-all text-muted underline underline-offset-4">
              {site.email}
            </a>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 md:justify-end">
            {site.navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 text-sm text-muted">
          <p>© {new Date().getFullYear()} NOVEXARC Systems. All rights reserved.</p>
          <button
            type="button"
            onClick={() => {
              document.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            className="rounded border border-line px-4 py-2"
          >
            Back to top ↑
          </button>
        </div>
        <p className="mt-6 text-xs text-muted">Structure preview — the original nebula wordmark is not yet connected.</p>
      </Container>
    </footer>
  );
}
