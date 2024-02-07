import { Navbar } from '../components/common/Navbar';
import { Projects } from '../components/projects/Projects';
import { Footer } from '../components/common/Footer';

const Portfolio = () => (
  <>
    <main>
      <div id="main">
        <Navbar />
        <Projects />
        <Footer />
      </div>
    </main>
  </>
);
export default Portfolio;
