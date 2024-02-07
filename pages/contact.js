import { Navbar } from '../components/common/Navbar';
import { Contact as ContactSection } from '../components/contact/Contact';
import { Footer } from '../components/common/Footer';

const Contact = () => (
  <>
    <main>
      <div id="main">
        <Navbar />
        <ContactSection />
        <Footer />
      </div>
    </main>
  </>
);
export default Contact;
