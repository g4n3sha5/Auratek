

const About = () => {
    return (

        <section id="Contact" className="bannerSection">
            <div className="container-fluid px-0 ">
                <div className="imageBanner   d-flex align-items-center justify-content-center w-100 h-100">


                    <h1>O nas</h1>


                </div>


                <div className="container p-3 px-5 ">


                    <h2 className="px-5 w-100 text-center"></h2>
                    <div className="row">
                        <div className=" col-lg-6">

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
                        {/*<div className="image col-lg-6" style='background-image: url("/img/features.jpg");'*/}


                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-receipt"></i>
                                <h4>Wieloletnie doświadczenie</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-cube-alt"></i>
                                <h4>Profesjonalne podejście</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-images"></i>
                                <h4>Wielokrotne wyróżnienia</h4>
                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-shield"></i>
                                <h4>Kompleksowa obsługa</h4>
                                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About