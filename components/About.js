const About = () => {
    return (<section id="about" className="about">


            <div className="container" data-aos="fade-up">


                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src="/img/about.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>Kim jesteśmy?</h3>
                        <p>
                            Jesteśmy przedsiębiorstwem prywatnym, działamy na rynku branży instalacyjnej od 2008 roku.
                            Zakres naszej działalności obejmuje przede wszystkim wykonawstwo wewnętrznych instalacji
                            sanitarnych oraz nadzory dot. realizacji
                            przedsięwzięć budowlanych.
                        </p>

                        <ul>
                            <li><i className="ri-check-double-line"></i> Klientami AURATEK są firmy budowlane oraz
                                prywatni inwestorzy.
                            </li>
                            <li><i className="ri-check-double-line"></i> Działamy zarówno na obiektach przemysłowych jak
                                również użyteczności publicznej.
                            </li>
                            <li><i className="ri-check-double-line"></i> Firma działa zarówno na terenie Polski, jak i
                                za granicą
                            </li>
                        </ul>
                        <p>
                            Naszą specjalnością są instalacje, począwszy od małych obiektów budowlanych, poprzez galerie
                            handlowe, hipermarkety, hale magazynowe, budynki biurowe, po obiekty przemysłowe.
                        </p>
                    </div>
                </div>

            </div>
        </section>

    )
}
export default About