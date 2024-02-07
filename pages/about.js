import { Navbar } from '../components/common/Navbar';
import { About as AboutSection } from '../components/about/About';
import { Footer } from '../components/common/Footer';

const About = () => (
  <>
    <main>
      <div id="main">
        <Navbar />
        <AboutSection />
        <Footer />
      </div>
    </main>
  </>
);

export default About;
