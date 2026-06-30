import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { useGsapExperience } from './hooks/useGsapExperience';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const rootRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  useGsapExperience(rootRef);

  useEffect(() => {
    if (!isProjectModalOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') handleCloseProject();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isProjectModalOpen]);

  useEffect(() => {
    if (!activeProject) return undefined;
    setIsProjectModalOpen(true);
    return undefined;
  }, [activeProject]);

  function handleCloseProject() {
    setIsProjectModalOpen(false);
  }

  return (
    <div ref={rootRef} className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio onSelectProject={setActiveProject} />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ProjectModal
        project={activeProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseProject}
        onExited={() => setActiveProject(null)}
      />
    </div>
  );
}
