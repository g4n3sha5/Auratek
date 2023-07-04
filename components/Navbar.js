import {useRef} from "react";
import Link from "next/link";

const NavItem = ({name, href}) => {
    return (
        <li className="nav-item" key={name}>
            <Link className="nav-link" href={href} scroll={false}>
                {name}
            </Link>
        </li>
    )
}
const NAV_ITEMS = [
    {name: "Home", href: "#about"},
    {name: "Projekty", href: "#technologies"},
    {name: "O nas", href: "#projects"},
    {name: "Kontakt", href: "#contact"},
]

const Navbar = () => {
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle('navShow')
    }


    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center justify-content-lg-between">

                <h1 className="logo me-auto me-lg-0"><a href="index.html">AURATEK<span></span></a></h1>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        {
                            NAV_ITEMS.map(NavItem)
                        }

                        {/*<li className="dropdown"><a href="#"><span>Drop Down</span> <i*/}
                        {/*    className="bi bi-chevron-down"></i></a>*/}
                        {/*    /!*<ul>*!/*/}
                        {/*    /!*    <li><a href="#">Drop Down 1</a></li>*!/*/}
                        {/*    /!*    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i*!/*/}
                        {/*    /!*        className="bi bi-chevron-right"></i></a>*!/*/}
                        {/*    /!*        <ul>*!/*/}
                        {/*    /!*           *!/*/}
                        {/*    /!*        </ul>*!/*/}
                        {/*    /!*    </li>*!/*/}
                        {/*    /!*    <li><a href="#">Drop Down 2</a></li>*!/*/}
                        {/*    /!*    <li><a href="#">Drop Down 3</a></li>*!/*/}
                        {/*    /!*    <li><a href="#">Drop Down 4</a></li>*!/*/}
                        {/*    /!*</ul>*!/*/}
                        {/*</li>*/}

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <a href="#about" className="get-started-btn scrollto">Get Started</a>

            </div>
        </header>

        // <header
        //     className="navigation fixed-top navbar-dark rajdhani my-0 py-0  navbar-expand-xl slideInTop">
        //     <nav className="  h-100 p-0 navbar  py-lg-0">
        //         <a
        //             className="navbar-brand  m-0 p-0 h-100 d-flex align-items-center "
        //             href="/pages"
        //         >
        //             {/*<img src="/logo.png" alt="logo"/>*/}
        //         </a>
        //         <button
        //             className="navbar-toggler mr-3"
        //             type="button"
        //             aria-controls="navigation"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //             onClick={() => showNavbar()}>
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //
        //         <div className="navbar-collapse d-xl-flex justify-content-center text-center  justify-content-xl-end px-lg-4 p-1 "
        //              id="navigation"
        //         ref={navRef}>
        //             <ul className="navbar-nav pt-3 pt-xl-0 px-2 d-flex justify-content-center mb-5 mb-xl-0 ">
        //
        //
        //             </ul>
        //         </div>
        //     </nav>
        // </header>
    )
}
export default Navbar