import { Navbar } from '../components/common/Navbar';
import { Banner } from '../components/index/Banner';
import { About } from '../components/index/About';
import { Services } from '../components/index/Services';
import { CTA } from '../components/index/CTA';
import { Portfolio } from '../components/index/Portfolio';
import { Contact } from '../components/index/Contact';
import { Footer } from '../components/common/Footer';

const Home = () => (
  <>
    <main>
      <div id="main">
        <Navbar />
        <Banner />
        <About />
        <Services />
        <CTA />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  </>
);
export default Home;
