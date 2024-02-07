import { ImageBanner } from '../common/ImageBanner';

export const Contact = () => (
  <section id="Contact" className="bannerSection">
    <div className="container-fluid px-0 ">
      <ImageBanner text="Kontakt" />

      <div className="container p-3 px-0 px-lg-5  ">
        <div className="row p-3 d-flex justify-content-center">
          <div className="col-lg-4 px-2 col-12">
            <h2>AURATEK Marcin Wojciechowski</h2>
            <p>ul. Konstytucji 3 Maja 1/60 63-100 Śrem</p>

            <h4>NIP 7851056613</h4>
            <h4>REGON 300950531</h4>
            <br />
            <h4>
              <i className="bx bxs-phone me-3"></i>+48 500 180 044
            </h4>
            <h4>
              <i className="bx bx-envelope me-3"></i>biuro@auratek.pl
            </h4>
          </div>

          <div
            className="col-lg-8 col-12 gx-2 row d-flex justify-content-center justify-content-lg-start"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {personList.map((person) => (
              <Person key={person.key} {...person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Person = ({ name, tel, email }) => (
  <div className="icon-box  col-lg-6 col-md-10 col-12 py-3 px-lg-2 px-0" data-aos="zoom-in" data-aos-delay="150">
    <div className="contactBox overflow-hidden ">
      <h4>{name}</h4>
      <i className="bx bxs-phone d-inline"></i> <h6 className="d-inline">{tel}</h6>
      <i className="bx bx-envelope mt-4 d-block"></i>
      <h5>{email}</h5>
    </div>
  </div>
);

export const personList = [
  {
    key: 'MarcinW',
    name: 'Marcin Wojciechowski',
    tel: '500-180-044',
    email: 'marcin.wojciechowski@auratek.pl',
  },

  {
    key: 'JakubB',
    name: 'Jakub Błaszczak',
    tel: '660-739-814',
    email: 'jakub.blaszczak@auratek.pl',
  },

  {
    key: 'MichalD',
    name: 'Michał Dalkowski',
    tel: '501-626-265',
    email: 'michal.dalkowski@auratek.pl',
  },

  {
    key: 'JacekP',
    name: 'Jacek Pietraszewski',
    tel: '506-708-474',
    email: 'jacek.pietraszewski@auratek.pl',
  },

  {
    key: 'ZuzannaG',
    name: 'Zuzanna Grzybulska',
    tel: '606-505-857',
    email: 'biuro@auratek.pl',
  },
];
