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
        <header
            className="navigation fixed-top navbar-dark rajdhani my-0 py-0  navbar-expand-xl slideInTop">
            <nav className="  h-100 p-0 navbar  py-lg-0">
                <a
                    className="navbar-brand  m-0 p-0 h-100 d-flex align-items-center "
                    href="/pages"
                >
                    {/*<img src="/logo.png" alt="logo"/>*/}
                </a>
                <button
                    className="navbar-toggler mr-3"
                    type="button"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => showNavbar()}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse d-xl-flex justify-content-center text-center  justify-content-xl-end px-lg-4 p-1 "
                     id="navigation"
                ref={navRef}>
                    <ul className="navbar-nav pt-3 pt-xl-0 px-2 d-flex justify-content-center mb-5 mb-xl-0 ">
                        {
                            NAV_ITEMS.map(NavItem)

                        }

                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar