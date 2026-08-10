import { Link } from "react-router-dom";

function Dashboard() {

  return (

    <div className="dashboard-page">

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold">
              Welcome to LoanFlow 👋
            </h2>

            <p className="text-muted mb-0">
              Manage your loan applications from here.
            </p>
          </div>

          <div className="profile-circle">
            <i className="bi bi-person"></i>
          </div>

        </div>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <i className="bi bi-file-earmark-text text-primary fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Apply for Loan
                </h5>

                <p className="text-muted">
                  Start a new loan application using our step-by-step process.
                </p>

                <Link
                  to="/apply-loan"
                  className="btn btn-primary"
                >
                  Start Application
                </Link>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <i className="bi bi-clock-history text-warning fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Application Status
                </h5>

                <p className="text-muted">
                  Track the status of your submitted loan applications.
                </p>

                <button className="btn btn-outline-warning">
                  View Status
                </button>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <i className="bi bi-person-vcard text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  My Profile
                </h5>

                <p className="text-muted">
                  View and manage your personal profile information.
                </p>

                <button className="btn btn-outline-success">
                  View Profile
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;