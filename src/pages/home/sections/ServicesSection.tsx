import { services } from "../../../data/services";
import { Container } from "../../../components/ui/Container";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-12">
      <Container>
        <h2 id="services-heading" className="text-3xl font-bold sm:text-5xl">OUR SERVICES</h2>
        <div className="mt-8 space-y-5">
          {services.map((service) => (
            <article key={service.number} className="grid gap-4 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[3rem_1fr_1.2fr]">
              <span aria-hidden="true" className="text-xl text-lavender">{service.number}</span>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
