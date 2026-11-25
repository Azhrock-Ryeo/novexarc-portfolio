import { Link, NavLink } from "react-router-dom";
import { site } from "../../data/site";
import { Container } from "../ui/Container";

export function SiteHeader() {
  return (
    <header className="border-b border-line py-5">
      <Container className="flex flex-wrap items-center justify-between gap-5">
        <Link to="/" className="text-xl font-bold tracking-tight" aria-label="NOVEXARC home">
          {site.name}
        </Link>
        {/* A wrapping navigation keeps the foundation usable without a menu library. */}
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {site.navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => isActive ? "text-cyan underline underline-offset-8" : "text-muted hover:text-ink"}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/#contact" className="rounded-lg border border-line px-4 py-2">
            Contact us
          </Link>
        </nav>
      </Container>
    </header>
  );
}
