import { Container } from "../../components/ui/Container";
import { SectionPlaceholder } from "../../components/ui/SectionPlaceholder";
import { ContactCTA } from "../../components/ContactCTA";
import { designs } from "../../data/designs";

export function ArchitecturePage() {
  return (
    <>
      <Container className="py-16">
        <p className="text-sm uppercase tracking-widest text-muted">Architecture / UI and UX portfolio</p>
        <h1 tabIndex={-1} className="mt-4 break-words text-4xl font-bold sm:text-6xl">ARCHITECTURE</h1>
        <p className="mt-5 max-w-2xl text-muted">The art behind the interface. This is the design portfolio, not the code architecture.</p>
      </Container>
      <SectionPlaceholder id="architecture-hero" title="Architecture hero" note="Connect the approved galaxy artwork. Screenshots show parts of the code, but not a complete runnable export." />
      <section aria-labelledby="designs-heading" className="py-12">
        <Container>
          <h2 id="designs-heading" className="text-sm uppercase tracking-widest text-muted">Selected architecture</h2>
          {designs.map((design) => (
            <article key={design.slug} className="mt-6 rounded-xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-3xl font-bold">{design.title}</h3>
              <p className="mt-3 text-muted">{design.summary}</p>
              <p className="mt-4 text-sm text-muted">Desktop, mobile, and alternate showcase compositions are pending exact assets and complete source.</p>
            </article>
          ))}
        </Container>
      </section>
      <SectionPlaceholder id="architecture-origin" title="Why is this page called Architecture?" note="No invented brand explanation. Add the approved FAQ answer here." />
      <ContactCTA />
    </>
  );
}
