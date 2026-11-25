import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <p className="text-xs uppercase tracking-widest text-muted">Project — migration preview</p>
      <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>
      <p className="mt-3 text-muted">{project.summary}</p>
      <Link to={`/creation/${project.slug}`} className="mt-5 inline-block text-cyan underline underline-offset-4">
        Open migration preview →
      </Link>
    </article>
  );
}
