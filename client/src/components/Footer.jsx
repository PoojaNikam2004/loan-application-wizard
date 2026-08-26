import { Link } from "react-router-dom";
import "../Styles/footer.css";

function Footer() {
  return (
    <footer className="loan-footer">

      <div className="container">

        <div className="row g-4 py-5">

          {/* BRAND */}
          <div className="col-lg-4">

            <h4 className="fw-bold text-white">
              <i className="bi bi-bank2 me-2"></i>
              LoanFlow
            </h4>

            <p className="footer-text mt-3">
              A simple, secure and transparent digital loan
              application platform designed to make your
              loan journey easier.
            </p>

            <div className="social-links mt-4">

              <a href="#!" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#!" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>

              <a href="#!" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div className="col-6 col-lg-2">

            <h6 className="footer-title">
              Quick Links
            </h6>

            <ul className="footer-links">

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link to="/loans">
                  Loan Types
                </Link>
              </li>

              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>

            </ul>

          </div>


          {/* LOAN TYPES */}
          <div className="col-6 col-lg-3">

            <h6 className="footer-title">
              Loan Services
            </h6>

            <ul className="footer-links">

              <li>
                Personal Loan
              </li>

              <li>
                Home Loan
              </li>

              <li>
                Business Loan
              </li>

              <li>
                Education Loan
              </li>

              <li>
                Vehicle Loan
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div className="col-lg-3">

            <h6 className="footer-title">
              Contact
            </h6>

            <ul className="footer-contact">

              <li>
                <i className="bi bi-envelope"></i>
                support@loanflow.com
              </li>

              <li>
                <i className="bi bi-telephone"></i>
                +91 XXXXX XXXXX
              </li>

              <li>
                <i className="bi bi-geo-alt"></i>
                Pune, Maharashtra, India
              </li>

            </ul>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <p className="mb-0">
            © 2026 LoanFlow. All rights reserved.
          </p>

          <div>

            <Link to="/about">
              Privacy Policy
            </Link>

            <span> | </span>

            <Link to="/about">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;