export const Contact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Kontakt</h2>
          <p>Skontaktuj się z nami</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Lokalizacja:</h4>
                <p>Śrem, Polska</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>biuro@auratek.pl</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Telefon:</h4>
                <p>+48 500 180 044</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit} method="post" role="form" className="email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Twoje imię" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Twój Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Temat" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Wiadomość" required></textarea>
              </div>
              <div className="my-3">
                <div className="error-message"></div>
                <div className="sent-message">Twoja wiadomość została wysłana!</div>
              </div>
              <div className="text-center">
                <button type="submit">Wyślij wiadomość</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
