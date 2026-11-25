import { site } from "../data/site";
import { Container } from "./ui/Container";

type Props = { heading?: string };

export function ContactCTA({ heading = "Let’s shape what comes next." }: Props) {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="my-12 bg-lavender py-12 text-page">
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest">Next / Your idea</p>
        <h2 id="contact-heading" className="mt-4 text-3xl font-bold sm:text-4xl">{heading}</h2>
        <a href={`mailto:${site.email}`} className="mt-5 inline-block break-all text-lg underline underline-offset-4">
          {site.email} ↗
        </a>
        <p className="mt-3">Opens your email application. This starter does not send a form submission.</p>
      </Container>
    </section>
  );
}
