import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/home/HomePage";
import { CreationPage } from "./pages/creation/CreationPage";
import { ArchitecturePage } from "./pages/architecture/ArchitecturePage";
import { ProjectPage } from "./pages/project/ProjectPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// This is the complete route map. There is no automatic route discovery.
export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/creation" element={<CreationPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/creation/:slug" element={<ProjectPage />} />

        {/* Keep previous project URLs meaningful during the rebuild. */}
        <Route path="/projects" element={<Navigate to="/creation" replace />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
