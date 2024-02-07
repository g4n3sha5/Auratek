import Link from 'next/link';
import { Project } from '../projects/Projects';

export const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Realizacje</h2>
        <p>Nasze realizacje</p>
      </div>
      <p>
        Na przestrzeni lat nasza firma zrealizowała szereg inwestycji. Poniżej ważniejsze z nich w przekroju całego
        okresu działalności.
      </p>

      <div className="row d-flex justify-content-center " data-aos="fade-up" data-aos-delay="200">
        {shortProjectsList.map((project) => (
          <Project key={project.key} {...project} />
        ))}
      </div>
      <div className="d-flex w-100 justify-content-center">
        <Link href="/realizacje/" className="get-started-btn scrollto">
          Zobacz więcej
        </Link>
      </div>
    </div>
  </section>
);

const projectsList = [
  {
    key: 'avenida',
    name: 'CH Avenida - przebudowa',
    desc: 'Przebudowa instalacji w CH AVENIDA w Poznaniu',
    photoURL: '/img/chavenida.webp',
  },
  {
    key: 'nrynek',
    name: 'Nowy Rynek, Poznań',
    desc: 'Wykonanie zakresu fit-out w kompleksie biurowców',
    photoURL: '/img/nowyrynek.webp',
  },
  {
    key: 'abc',
    name: 'Biurowiec ABC, Poznań',
    desc: 'Wykonanie zakresu fit-out w kompleksie biurowców ABC',
    photoURL: '/img/abc.webp',
  },
];
const shortProjectsList = projectsList.slice(0, 3);
