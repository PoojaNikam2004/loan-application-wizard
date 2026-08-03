
import "../Styles/Form.css";
import "../Styles/Button.css";
import "../Styles/Progress.css";
import "../styles/layout.css";

import loanImage from "../assets/loan.jpg";



function Layout({ children }) {
  return (
    <div className="main-container">

      <div className="loan-card">

        <div className="row g-0 h-100">

          {/* Left Side */}
          <div className="col-lg-4 left-panel">

            <img
              src={loanImage}
              alt="Loan"
              className="img-fluid mb-4"
            />


            <h1 className="fw-bold ">
              LoanFlow
            </h1>

            <p className="text-muted">
              Fast • Secure • Smart
            </p>

            <p>
              Apply for your loan in a few simple steps.
            </p>

            <div className="mt-4 text-start">
              <i className="bi bi-shield-check"></i> Secure Application
            </div>
            <div>
              <i className="bi bi-lightning-charge"></i> Instant Processing
            </div>

            <div>
              <i className="bi bi-lock"></i> Data Privacy

            </div>

            <div>
              <i className="bi bi-people"></i> 10,000+ Customers
            </div>



          </div>

          {/* Right Side */}
          <div className="col-lg-8 p-5 px-5">


            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Layout;