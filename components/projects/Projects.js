export const projectsList = [
    {
        key: "avenida",
        name: "CH Avenida - przebudowa",
        desc: "Przebudowa instalacji w CH AVENIDA w Poznaniu",
        photoURL: "/img/chavenida.webp"
    },

    {
        key: "nrynek",
        name: "Nowy Rynek, Poznań",
        desc: "Wykonanie zakresu fit-out w kompleksie biurowców",
        photoURL: "/img/nowyrynek.webp"
    },

    {
        key: "abc",
        name: "Biurowiec ABC, Poznań",
        desc: "Wykonanie zakresu fit-out w biurowcu ABC",
        photoURL: "/img/abc.webp"
    },

    {
        key: "posnania",
        name: "CH POSNANIA, Poznań",
        desc: "Przebudowa instalacji oraz wykonanie projektu Food Fyrtel w CH POSNANIA",
        photoURL: "/img/posnania.webp"
    },

    {
        key: "blum",
        name: "Obiekt BLUM, Jasin koło Swarzędza",
        desc: "Przebudowa biurowca i budowa hali produkcyjnej w obiekcie BLUM w Jasinie",
        photoURL: "/img/blum.webp"
    },

    {
        key: "maraton",
        name: "Kompleks biurowców Maraton, Poznań",
        desc: "Wykonanie zakresu fit-out w kompleksie biurowców Maraton w Poznaniu",
        photoURL: "/img/maraton.webp"
    },

    {
        key: "huta",
        name: "Huta szkła ARDAGH GLASS, Ujście koło Piły",
        desc: "Rozbudowa i montaż instalacji wentylacji mechanicznej i klimatyzacji",
        photoURL: "/img/ujscie.webp"
    },

    {
        key: "lumag",
        name: "Hala LUMAG, Budzyń",
        desc: "Budowa hali LUMAG (montaż instalacji co, kotłowni i sprężonego powietrza)",
        photoURL: "/img/lumag.webp"
    },

    {
        key: "malta",
        name: "MALTA HOUSE, Poznań",
        desc: "Wykonanie zakresu fit-out w biurowcu MALTA HOUSE",
        photoURL: "/img/maltahouse.webp"
    },

    {
        key: "jankowice",
        name: "IMPERIAL TOBACCO, Jankowice",
        desc: "Rozbudowa hali IMPERIAL TOBACCO (kotłownia, instalacja hydrantowa, odwodnienie dachu, izolacja instalacji rurowych)",
        photoURL: "/img/jankowice.webp"
    },

    {
        key: "lidl",
        name: "Centrum dystrybucyjne LIDL, Jankowice",
        desc: "Rozbudowa centrum LIDL w Jankowicach (instalacja c.o., ct, instalacja hydrantowa, podciśnieniowe odwodnienie dachu, woda lodowa)",
        photoURL: "/img/lidl.webp"
    },

    {
        key: "temida",
        name: "Wieżowiec TEMIDA, Poznań",
        desc: "Budowa wieżowca biurowo handlowego TEMIDA przy ul. Młyńskiej w Poznaniu (montaż instalacji: wody lodowej, ciepła technologicznego, instalacji hydrantowej, podciśnieniowego odwodnienia dachu)",
        photoURL: "/img/temida.webp"
    },

    {
        key: "uamrubiez",
        name: "Budynek UAM, Poznań",
        desc: "Zespół Inkubatorów Wysokich Technologii UAM przy ul. Rubież w Poznaniu (montaż węzła wody lodowej oraz instalacji klimatyzacji serwerowi)",
        photoURL: "/img/uamrubiez.webp"
    },

    {
        key: "zeelandia",
        name: "Biurowiec ZEELANDIA, Tarnowo Podgórne",
        desc: "Rozbudowa biurowca ZEELANDIA w Tarnowie Podgórnym (instalacja wentylacji, klimatyzacji, c.o., kotłownia, woda lodowa, wod-kan, instalacja hydrantowa)",
        photoURL: "/img/zeelandia.webp"
    },

    {
        key: "kimball",
        name: "KIMBALL ELECTRONICS, Sady",
        desc: "Hala produkcyjna KIMBALL ELECTRONICS w Sadach (montaż Instalacji sprężonego powietrza azotu i próżni)",
        photoURL: "/img/kimball.webp"
    },


]

export const Project = ({key, name, desc, photoURL}) => {
    return (
        <div key={key} className="col-lg-4 col-md-6 portfolio-item ">
            <div className="portfolio-wrap h-100">
                <img src={photoURL} className=" w-100 h-100" alt=""/>
                <div className="portfolio-info pb-lg-3">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    {/*<div className="portfolio-links">*/}
                    {/*    /!*<a href="../../portfolio-details.html" title="More Details"><i*!/*/}
                    {/*    /!*    className="bx bx-link"></i></a>*!/*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (

        <section id="Projects" className="bannerSection p-0" >
            <div className="container-fluid px-0  ">
                <div className="imageBanner
                  d-flex align-items-center justify-content-center w-100 h-100 ">

                {/*style={{*/}
                {/*     //     backgroundImage: `url("/img/posnaniafyrtel.jpg")`*/}
                {/*     // }}>*/}

                    <h1>Nasze realizacje</h1>


                </div>


                <div className="container p-3 px-xl-5 containerStyling my-5">

                    <div className="w-100 d-flex justify-content-center">
                        <h2 className="header1 text-center w-75 ">W swojej długoletniej działalności nasza firma realizowała szereg inwestycji.
                            Najważniejsze z nich to między innymi:</h2>
                    </div>


                    <div className="row p-xl-3 d-flex justify-content-center">


                        {
                            projectsList.map(Project)
                        }


                    </div>
                </div>
            </div>

        </section>
    )
}
export default Projects