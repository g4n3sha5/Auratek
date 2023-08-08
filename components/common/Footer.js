import Link from "next/link";
import { NAV_ITEMS } from "./Navbar";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>
                  AURATEK<span>.</span>
                </h3>
                <p>
                  AURATEK Marcin Wojciechowski <br />
                  Śrem, Poland
                  <br />
                  <br />
                  <strong>Tel:</strong> +48 500 180 044
                  <br />
                  <strong>E-mail:</strong> biuro@auratek.pl
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links pt-3">
              <ul>
                {NAV_ITEMS.map(({ name, href }) => {
                  return (
                    <li key={name}>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link href={href}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer