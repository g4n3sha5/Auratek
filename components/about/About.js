import ImageBanner from "../common/ImageBanner.js"

const iconBoxes =[
    {
        name : "Wieloletnie doświadczenie",
        desc : "Działamy na rynku instalacji od roku 2008, dzięki zdobytej przez te lata wiedzy możemy skutecznie obsługiwać nawet najbardziej wymagających klientów.",
        icon : "bx bx-receipt"
    },
    {
        name : "Jakość i profesjonalne podejście",
        desc : "Dążymy do najwyższej jakości w każdym aspekcie naszej działalności. Skrupulatnie dbamy o szczegóły i dokładamy wszelkich starań, aby dostarczyć produkty/usługi o doskonałej jakości.",
        icon : "bx bxs-user-check"
    },
    {
        name : "Innowacyjność",
        desc : "Jesteśmy zawsze na bieżąco z najnowszymi technologiami i trendami w naszej dziedzinie. Dążymy do stałego doskonalenia i wprowadzania innowacyjnych rozwiązań. Stale się rozwijamy, aby być liderem w naszej branży.",
        icon : "bx bx-cube-alt"
    },
    {
        name : "Elastyczność i precyzja",
        desc : "Rozumiemy, że każdy klient jest inny i ma swoje unikalne potrzeby. Dlatego dokładnie słuchamy i współpracujemy z naszymi klientami, aby zrozumieć ich cele i dostosować nasze usługi lub produkty do ich indywidualnych wymagań.",
        icon : "bx bx-target-lock"
    },


]

const IconBox = ({name, desc, icon}) =>{
    return(
        <div className="icon-box mt-5 mt-lg-0 mb-4" data-aos="zoom-in" data-aos-delay="150">
            <i className={icon}></i>
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>

    )
}

const About = () => {
    return (

        <section id="Contact" className="bannerSection p-0">
            <div className="container-fluid px-0 ">

                <ImageBanner text="O nas"/>
                    {/*<div className="imageBanner   d-flex align-items-center justify-content-center w-100 h-100">*/}
                    {/*    <h1>O nas</h1>*/}
                    {/*</div>*/}


                <div className="container p-3 px-5 ">


                    <h2 className="px-5 w-100 text-center"></h2>
                    <div className="row">
                        <div className=" col-lg-6 descriptions pt-4">

                                <p>
                                    Jesteśmy dynamicznym przedsiębiorstwem prywatnym, które od 2008 roku działa na rynku branży instalacyjnej. Nasza firma specjalizuje się w kompleksowych rozwiązaniach z zakresu wewnętrznych instalacji sanitarnych oraz nadzoruje realizację różnorodnych przedsięwzięć budowlanych.
                                </p>
                            <p>
                                Dzięki naszemu doświadczeniu i profesjonalizmowi, wykonujemy projekty na obiektach przemysłowych oraz w sektorze użyteczności publicznej. Niezależnie od skali i złożoności projektu, zapewniamy wysoką jakość usług na terenie Polski oraz za granicą.
                            </p>
                            <p>
                                  Jesteśmy gotowi podjąć wyzwania każdego projektu i dostarczyć rozwiązania, które spełnią oczekiwania naszych klientów. Dołącz do grona zadowolonych partnerów, którzy czerpią korzyści z naszej fachowej wiedzy i doświadczenia.
                                </p>



                        </div>
                        {/*<div className="image col-lg-6" style='background-image: url("/img/features.jpg");'*/}


                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                            {
                                iconBoxes.map(IconBox)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About