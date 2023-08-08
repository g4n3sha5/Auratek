import Navbar from "../components/common/Navbar";
import Banner from "../components/index/Banner";
import About from "../components/index/About";
import Services from "../components/index/Services";
import CTA from "../components/index/CTA";
import Portfolio from "../components/index/Portfolio";
import Contact from "../components/index/Contact";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <main>
        <div id="main">
          <Navbar />
          <Banner />
          <About />
          <Services />
          <CTA />
          <Portfolio projectsList={projectsList} />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

const projectsList = [
  {
    key: "avenida",
    name: "CH Avenida - przebudowa",
    desc: "Przebudowa instalacji w CH AVENIDA w Poznaniu",
    photoURL: "/img/chavenida.webp",
  },
  {
    key: "nrynek",
    name: "Nowy Rynek, Poznań",
    desc: "Wykonanie zakresu fit-out w kompleksie biurowców",
    photoURL: "/img/nowyrynek.webp",
  },
  {
    key: "abc",
    name: "Biurowiec ABC, Poznań",
    desc: "Wykonanie zakresu fit-out w kompleksie biurowców ABC",
    photoURL: "/img/abc.webp",
  },
];
