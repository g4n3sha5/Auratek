export const personList = [
    {
        key: "MarcinW",
        name: "Marcin Wojciechowski",
        tel: "500-180-044",
        email: "marcin.wojciechowski@auratek.pl"
    },

    {
        key: "JakubB",
        name: "Jakub Błaszczak",
        tel: "660-739-814",
        email: "jakub.blaszczak@auratek.pl"
    },

    {
        key: "MichalD",
        name: "Michał Dalkowski",
        tel: "501-626-265",
        email: "michal.dalkowski@auratek.pl"
    },


    {
        key: "JacekP",
        name: "Jacek Pietraszewski",
        tel: "506-708-474",
        email: "jacek.pietraszewski@auratek.pl"
    },

    {
        key: "ZuzannaG",
        name: "Zuzanna Grzybulska",
        tel: "606-505-857",
        email: "biuro@auratek.pl"
    },


]

export const Person = ({key, name, tel, email}) => {
    return (


        <div className="icon-box  col-lg-6 py-3 px-2" data-aos="zoom-in" data-aos-delay="150">
            <div className="contactBox">
                <i className='bx bx-id-card'></i>
                <h4>{name}</h4>
                <h6>{tel}</h6>
                <h5>{email}</h5>
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

                    <div className="row p-3">
                        <div className="col-lg-5  px-2">
                            <h2>AURATEK Marcin Wojciechowski</h2>
                            <p>ul. Konstytucji 3 Maja 1/60

                                63-100 Śrem</p>
                            <h3>tel. kom. +48 500 180 044</h3>
                            <h3>E-mail:biuro@auratek.pl</h3>
                        </div>


                        <div className="col-lg-7 gx-2 row" data-aos="fade-left" data-aos-delay="100">
                            {
                                personList.map(Person)
                            }


                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Contact