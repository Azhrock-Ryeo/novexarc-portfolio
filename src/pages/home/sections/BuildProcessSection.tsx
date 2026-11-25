import { capabilities } from "../../../data/capabilities";
import { Container } from "../../../components/ui/Container";

// A readable data-to-UI example. This is a responsive structure preview,
// not a claim of pixel-perfect Figma implementation.
export function BuildProcessSection() {
  return (
    <section id="how-we-build" aria-labelledby="build-heading" className="py-12">
      <Container>
        <h2 id="build-heading" className="text-3xl font-bold sm:text-5xl">HOW WE <span className="text-magenta">BUILD</span></h2>
        <p className="mt-5 max-w-4xl text-muted">You do not need to choose the technology. We choose the tools that fit the product, then explain the trade-offs in plain language.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-muted">{item.description}</p>
              <ul aria-label={`${item.title} technologies`} className="mt-6 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <li key={tool} className="rounded-md border border-line px-3 py-1.5 text-sm">{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
