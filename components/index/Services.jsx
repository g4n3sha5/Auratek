export const Services = () => (
  <section id="services" className="services">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Działalność</h2>
        <p>Nasza działalność</p>
      </div>

      <div className="row d-flex justify-content-center">
        {servicesList.map((service) => (
          <Service {...service} />
        ))}
      </div>
    </div>
  </section>
);

const Service = ({ icon = 'bx bxl-dribbble', name, text }) => (
  <div key={name} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-3" data-aos="zoom-in" data-aos-delay="100">
    <div className="icon-box w-100">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h4>{name}</h4>
    </div>
  </div>
);

const servicesList = [
  { icon: 'bx bxs-hot', name: 'Instalacje centralnego ogrzewania' },
  { icon: 'bx bx-wind', name: 'Instalacje wentylacyjne i klimatyzacyjne' },
  { icon: 'bx bx-water', name: 'Instalacje wodociągowe i kanalizacyjne' },
  { icon: 'bx bx-droplet', name: 'Instalacje wodne i parowe' },
  { icon: 'ri-temp-hot-line', name: 'Instalacje gazowe i węzłów ciepła' },
  { icon: 'bx bx-wind', name: 'Instalacje sprężonego powietrza' },
  { icon: 'bx bxs-home-smile', name: 'Instalacje odwodnienia dachów' },
  { icon: 'bx bx-list-check', name: 'Projektowanie i kosztorysowanie' },
  {
    icon: 'bx bxs-chalkboard',
    name: 'Doradztwo w zakresie instalacji sanitarnych',
  },
];
