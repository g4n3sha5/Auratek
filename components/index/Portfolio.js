import { projectsList, Project } from "/components/projects/Projects";
import Link from "next/link";

const shortProjectsList = projectsList.slice(0, 3);

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Realizacje</h2>
          <p>Nasze realizacje</p>
        </div>
        <p>
          Na przestrzeni lat nasza firma zrealizowała szereg inwestycji. Poniżej
          ważniejsze z nich w przekroju całego okresu działalności.
        </p>

        <div
          className="row d-flex justify-content-center "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {shortProjectsList.map(Project)}
        </div>
        <div className="d-flex w-100 justify-content-center">
          <Link href="/realizacje/" className="get-started-btn scrollto">
            Zobacz więcej
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Portfolio