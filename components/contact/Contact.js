export const projectsList = [
    {
        key: "avenida",
        name: "CH Avenida - przebudowa",
        desc: "Przebudowa instalacji w CH AVENIDA w Poznaniu",
        photoURL: "/img/chavenida.webp"
    },



]

export const Project = ({key, name, desc, photoURL}) => {
    return (
        <div key={key} className="col-lg-4 col-md-6 portfolio-item ">
            <div className="portfolio-wrap h-100">
                <img src={photoURL} className="img-fluid h-100" alt=""/>
                <div className="portfolio-info ">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <div className="portfolio-links">
                        <a href="../../portfolio-details.html" title="More Details"><i
                            className="bx bx-link"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (

        <section id="Contact" className="bannerSection">
            <div className="container-fluid px-0 ">
                <div className="imageBanner   d-flex align-items-center justify-content-center w-100 h-100">


                    <h1>Kontakt</h1>


                </div>


                <div className="container p-3 px-5 ">


                    <h2 className="px-5 w-100 text-center"></h2>
                    <div className="row p-3">

                        <h2>AURATEK Marcin Wojciechowski</h2>
                        <p>ul. Konstytucji 3 Maja 1/60

                            63-100 Śrem</p>
                        <h3>tel. kom. +48 500 180 044</h3>
                        <h3>E-mail:biuro@auratek.pl</h3>



                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">

                            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                                {
                                    projectsList.map(Project)
                                }


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
export default Contact