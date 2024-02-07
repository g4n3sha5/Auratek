import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const navRef = useRef();

  const handleClick = () => {
    navRef.current.classList.toggle('navShow');
    navRef.current.classList.toggle('d-none');
  };

  useEffect(() => {
    let listener = () => {
      navRef.current.classList.remove('navShow');
      navRef.current.classList.add('d-none');
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return (
    <header id="header" className="fixed-top ">
      <div className="navbar container d-flex align-items-center justify-content-lg-between justify-content-center navbar-expand-xl navbar-dark px-4">
        <h1 className="navbar-brand logo me-auto me-lg-0 w-25 d-inline">
          <Link href="/">AURATEK</Link>
        </h1>
        <button
          className="navbar-toggler mr-3 d-xl-none"
          type="button"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleClick()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav
          ref={navRef}
          id="navbar"
          className="navbar-collapse d-none d-xl-flex order-last order-lg-0
                justify-content-center justify-content-xl-end "
        >
          <ul className="navbar-nav">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ name, href }) => (
  <li className="nav-item  d-flex justify-content-center mx-2 " key={name}>
    <Link className="nav-link w-100 d-block text-center" href={href} scroll={false}>
      {name}
    </Link>
  </li>
);

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Nasze realizacje', href: '/projects/' },
  { name: 'O nas', href: '/about/' },
  { name: 'Kontakt', href: '/contact/' },
];
