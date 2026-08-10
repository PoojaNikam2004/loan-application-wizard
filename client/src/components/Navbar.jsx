import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="bi bi-bank2 me-2"></i>
          LoanFlow
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/loans">
                Loan Types
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex gap-2">

            <Link
              to="/login"
              className="btn btn-outline-primary px-4"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary px-4"
            >
              Register
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;