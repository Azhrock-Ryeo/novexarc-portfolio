import { Container } from "../../components/ui/Container";
import { SectionPlaceholder } from "../../components/ui/SectionPlaceholder";
import { ContactCTA } from "../../components/ContactCTA";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export function CreationPage() {
  return (
    <>
      <Container className="py-16">
        <p className="text-sm uppercase tracking-widest text-muted">Creation / Software portfolio</p>
        <h1 tabIndex={-1} className="mt-4 text-4xl font-bold sm:text-6xl">CREATION</h1>
        <p className="mt-5 text-muted">Structure preview. Project images and detailed case studies are not yet migrated.</p>
      </Container>
      <SectionPlaceholder id="creation-hero" title="Creation hero" note="CreationHeroSection was imported but its full code and artwork were not provided in the pasted text." />
      <section id="projects" aria-labelledby="projects-heading" className="py-12">
        <Container>
          <h2 id="projects-heading" className="text-sm uppercase tracking-widest text-muted">Selected creations</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </Container>
      </section>
      <SectionPlaceholder id="creation-origin" title="Why is this page called Creation?" note="Question wording corrected for the scaffold; the answer still needs your approved copy." />
      <ContactCTA />
    </>
  );
}
