import Image from 'next/image';

export const Banner = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <Image src="/img/samuel-sianipar.webp" priority={true} layout="fill" className="heroImg object-fit-cover" />
      <div className="overlay"></div>
      <div className="container d-flex justify-content-center flex-column align-items-center" data-aos="fade-up">
        <div className="row w-100 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-8 col-lg-9 col-12 d-flex flex-column justify-content-center">
            <h1 className="logo">AURATEK</h1>
            <h2>
              Wykonawstwo i doradztwo w zakresie instalacji sanitarnych i mechanicznych w obiektach przemysłowych,
              budynkach biurowych oraz obiektach użyteczności publicznej.
            </h2>
          </div>
        </div>

        <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          {boxList.map((box) => (
            <BoxComponent {...box} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BoxComponent = ({ text, icon }) => {
  return (
    <div key={icon} className="col-xl-2 col-md-4">
      <div className="icon-box">
        <i className={icon}></i>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

const boxList = [
  { text: 'Instalacje wentylacji i klimatyzacji', icon: 'ri-temp-cold-fill' },
  { text: 'Instalacje grzewczo-chłodzące', icon: 'ri-temp-hot-line 2' },
  { text: 'Instalacje wodno-kanalizacyjne', icon: 'bx bx-water' },
  { text: 'Instalacje technologiczne', icon: 'ri-home-wifi-fill' },
  { text: 'Instalacje gazowe i sprężonego powietrza', icon: 'ri-windy-line' },
];
