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
    {name: "Home", href: "/"},
    {name: "Nasze realizacje", href: "/realizacje/"},
    {name: "O nas", href: "/onas/"},
    {name: "Kontakt", href: "/kontakt/"},
]

const Navbar = () => {
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle('navShow')
    }


    return (
        <header id="header" className="fixed-top  ">
            <div className="container d-flex align-items-center justify-content-lg-between">

                <h1 className="logo me-auto me-lg-0"><a href="../../index.html">AURATEK<span></span></a></h1>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        {
                            NAV_ITEMS.map(NavItem)
                        }


                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>


    )
}
export default Navbar