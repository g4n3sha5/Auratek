import instalacja from "../../public/samuel-sianipar.webp"

const BoxComponent = ({text, icon}) =>{
    return(
        <div key={icon} className="col-xl-2 col-md-4">
            <div className="icon-box">
                <i className={icon}></i>
                {/*<a href="components/index/Banner">{text}</a>*/}
                <h3>{text}</h3>
            </div>
        </div>
    )
}
const boxList = [
    {text:"Instalacje gazowe", icon:"ri-temp-hot-line"},
    {text:"Instalacje węzłów ciepła", icon:"ri-temp-hot-line 2"},
    {text:"Instalacje wodno-kanalizacyjne", icon:"bx bx-water"},
    {text:"Nadzory inwestorskie", icon:"ri-clipboard-fill"},
    {text:"Doradztwo w zakresie instalacji", icon:"ri-survey-line"},

]


const Banner = () =>{
    return(
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">

                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="col-xl-8 col-lg-9">
                        <h1>AURATEK</h1>
                        <h2>
                            Wykonawstwo i doradztwo w zakresie instalacji sanitarnych i mechanicznych w obiektach przemysłowych, budynkach biurowych oraz obiektach użyteczności publicznej.
                        </h2>
                    </div>
                </div>

                <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                    {
                        boxList.map(BoxComponent)
                    }
                </div>

            </div>
        </section>
    )
}
export default Banner