import { Link } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { SectionPlaceholder } from "../../components/ui/SectionPlaceholder";
import { ContactCTA } from "../../components/ContactCTA";
import { BuildProcessSection } from "./sections/BuildProcessSection";
import { ServicesSection } from "./sections/ServicesSection";

export function HomePage() {
  return (
    <>
      <Container className="py-16">
        <p className="text-sm uppercase tracking-widest text-muted">Home / Structure preview</p>
        <h1 tabIndex={-1} className="mt-4 text-4xl font-bold sm:text-6xl">NOVEXARC</h1>
        <p className="mt-5 max-w-2xl text-muted">This page establishes the section order. It is not the finished redesign.</p>
      </Container>

      <SectionPlaceholder id="hero" title="Hero / Astronaut + original wordmark" note="Use the exact approved astronaut, mask, and wordmark exports. Do not replace them with similar old assets." />
      <SectionPlaceholder id="ribbon-hero" title="Brand ribbon" note="Static first. Reuse one BrandRibbon component once the original artwork is available." />
      <SectionPlaceholder id="introduction" title="Built on Earth. Designed to stand out." note="BrandIntroductionSection: preserve the supplied copy and imagery when implementing the final layout." />
      <SectionPlaceholder id="ribbon-introduction" title="Brand ribbon" note="Same reusable component; no marquee animation yet." />
      <SectionPlaceholder id="purpose" title="Built with purpose" note="PurposeSection: use the approved planet image and the supplied origin-story copy." />

      <BuildProcessSection />
      <ServicesSection />

      <SectionPlaceholder id="ribbon-services" title="Brand ribbon" note="The existing Figma export refers to services.png; confirm the actual asset." />
      <section id="selected-work" aria-labelledby="selected-work-heading" className="py-12">
        <Container>
          <h2 id="selected-work-heading" className="text-3xl font-bold">Selected work</h2>
          <p className="mt-3 text-muted">PortfolioSection was imported, but its complete implementation was not in the pasted Home code.</p>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link to="/creation" className="text-cyan underline">Explore Creation →</Link>
            <Link to="/architecture" className="text-cyan underline">Explore Architecture →</Link>
          </div>
        </Container>
      </section>
      <SectionPlaceholder id="ribbon-work" title="Brand ribbon" note="Connect the approved selected-work artwork during the visual implementation phase." />

      <ContactCTA heading="Let’s build what’s next." />
      <SectionPlaceholder id="brand-origin" title="Why we chose the name NOVEXARC" note="Keep the original meaning pending confirmation. No invented acronym or FAQ answer." />
    </>
  );
}
