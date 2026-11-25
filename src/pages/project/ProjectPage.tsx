import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { Container } from "../../components/ui/Container";
import { NotFoundPage } from "../NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;

  return (
    <Container className="py-16">
      <p className="text-sm uppercase tracking-widest text-muted">Case study / Migration placeholder</p>
      <h1 tabIndex={-1} className="mt-4 text-4xl font-bold">{project.title}</h1>
      <p className="mt-5 max-w-2xl text-muted">{project.summary}</p>
      <div className="mt-8 rounded-xl border border-line bg-surface p-6">
        <h2 className="text-xl font-bold">The full case study has not been migrated.</h2>
        <p className="mt-3 text-muted">The previous project content remains in your original novex.zip. Review its facts before publishing it in this rebuild.</p>
        <p className="mt-3 text-muted">Old /projects/:slug URLs resolve to this preview; that is not a complete content migration or a server-side redirect.</p>
      </div>
      <Link to="/creation" className="mt-8 inline-block text-cyan underline">← Back to Creation</Link>
    </Container>
  );
}
