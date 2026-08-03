
 import "../Styles/Form.css";
import "../Styles/Button.css";
 import "../Styles/Progress.css";
 

import "../styles/layout.css";

import loanImage from "../assets/loan.png";



function Layout({ children }) {
  return (
    <div className="main-container">

      <div className="loan-card">

        <div className="row g-0">

          {/* Left Side */}
          <div className="col-lg-5 left-panel">

            <img
              src={loanImage}
              alt="Loan"
              className="img-fluid mb-4"
            />


            <h1 className="fw-bold text-white">
              LoanFlow
            </h1>

            <p className="text-white">
              Fast • Secure • Smart
            </p>

            <p>
              Apply for your loan in a few simple steps.
            </p>

            <div className="mt-4 text-start">

              <i className="bi bi-shield-check"></i> Secure Application

              <i className="bi bi-lightning-charge"></i> Instant Processing

              <i className="bi bi-lock"></i> Data Privacy

              <i className="bi bi-people"></i> 10,000+ Customers
            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-7 p-5">


            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Layout;