import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";

export function NotFoundPage() {
  return (
    <Container className="py-20">
      <h1 tabIndex={-1} className="text-4xl font-bold">Page not found</h1>
      <p className="mt-5 text-muted">This page is not part of the current starter.</p>
      <Link to="/" className="mt-6 inline-block text-cyan underline">Return home →</Link>
    </Container>
  );
}
