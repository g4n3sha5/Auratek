import { Navbar } from '../components/common/Navbar';
import { Projects as ProjectsSection } from '../components/projects/Projects';
import { Footer } from '../components/common/Footer';

const Projects = () => (
  <>
    <main>
      <div id="main">
        <Navbar />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  </>
);
export default Projects;
