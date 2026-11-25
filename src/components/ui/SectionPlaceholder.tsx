import { Container } from "./Container";

type Props = {
  id: string;
  title: string;
  note: string;
};

// Development-only scaffolding, not a finished Figma section.
// Replace each call with a real page-specific section as work is approved.
export function SectionPlaceholder({ id, title, note }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-6">
      <Container>
        <div className="rounded-xl border border-dashed border-line p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Layout placeholder</p>
          <h2 id={`${id}-title`} className="mt-3 text-2xl font-bold">{title}</h2>
          <p className="mt-3 max-w-3xl text-muted">{note}</p>
        </div>
      </Container>
    </section>
  );
}
