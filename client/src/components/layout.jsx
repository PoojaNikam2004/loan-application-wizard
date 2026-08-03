import "../styles/layout.css";
import loan from "../assets/loan.jpg";
import personal from "../assets/personal.png";
import home from "../assets/home.png";
import business from "../assets/business.jpg";
import vehical from "../assets/vehical.jpg";
import education from "../assets/education.jpg";

function Layout({ children, formData }) {

  let image = loan;
  let heading = "Welcome to LoanFlow";
  let theme = "#5479c9";


  switch (formData?.loanType) {

    case "Home Loan":
      image = home;
      heading = "Home Loan";
      theme = "#80c7d5";
      break;

    case "Business Loan":
      image = business;
      heading = "Business Loan";
      theme = "#9da1d3";
      break;

    case "Education Loan":
      image = education;
      heading = "Education Loan";
      theme = "#6b7280";
      break;

    case "Vehicle Loan":
      image = vehical;
      heading = "Vehicle Loan";
       theme = "#daa86f";
      break;

    case "Personal Loan":
      image = personal;
      heading = "Personal Loan";
      theme = "#836ab1";
      break;

    default:
      image = loan;
      heading = "Welcome to LoanFlow";
      theme = "#799be3";
  }

  return (

    <div className="main-container">

      <div className="loan-card">

        <div className="row h-100">

          {/* LEFT PANEL */}

          <div
            className="col-lg-4 left-panel"
            style={{ background: theme }}
          >

            <h2 className="text-white fw-bold mb-4">
              LoanFlow
            </h2>

            <img
              src={image}
              alt=""
              className="img-fluid mb-4"
            />

            <h3 className="text-white">
              {heading}
            </h3>

            <p className="text-white mt-3">

              Fast • Secure • Smart

            </p>

            <div className="mt-5">

              <p className="text-white">
                <i className="bi bi-shield-check"></i>
                {" "}100% Secure
              </p>

              <p className="text-white">
                <i className="bi bi-lightning-charge"></i>
                {" "}Instant Processing
              </p>

              <p className="text-white">
                <i className="bi bi-lock"></i>
                {" "}Data Privacy
              </p>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div
            className="col-lg-8 right-panel"
            style={{ backgroundColor: "#ffffff" }}
          >
            {children}
          </div>
        </div>

      </div>

    </div>

  );

}

export default Layout;