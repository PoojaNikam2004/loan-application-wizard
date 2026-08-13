import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="sidebar-logo">
          <i className="bi bi-bank2"></i>
          <span>LoanFlow</span>
        </div>

        <div className="sidebar-menu">

          <Link to="/dashboard" className="sidebar-link active">
            <i className="bi bi-grid-1x2"></i>
            <span>Dashboard</span>
          </Link>

          <Link to="/apply-loan" className="sidebar-link">
            <i className="bi bi-file-earmark-plus"></i>
            <span>Apply Loan</span>
          </Link>

          <Link to="/applications" className="sidebar-link">
            <i className="bi bi-folder2-open"></i>
            <span>My Applications</span>
          </Link>

          <Link to="/profile" className="sidebar-link">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </Link>

        </div>

        <div className="sidebar-bottom">

          <button
            className="sidebar-link logout-btn"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-left"></i>
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* TOP BAR */}
        <div className="dashboard-topbar">

          <div>
            <h2 className="fw-bold mb-1">
              Dashboard
            </h2>

            <p className="text-muted mb-0">
              Welcome back! Manage your loan applications here.
            </p>
          </div>

          <div className="user-profile">

            <div className="user-avatar">
              <i className="bi bi-person"></i>
            </div>

            <div>
              <strong>Applicant</strong>
              <small className="d-block text-muted">
                Loan Applicant
              </small>
            </div>

          </div>

        </div>


        {/* WELCOME CARD */}
        <div className="welcome-card">

          <div>

            <span className="welcome-small">
              Welcome to LoanFlow
            </span>

            <h2 className="fw-bold mt-2">
              Start your financial journey with us.
            </h2>

            <p>
              Apply for a loan through our secure step-by-step
              application process.
            </p>

            <Link
              to="/apply-loan"
              className="btn btn-light mt-2"
            >
              <i className="bi bi-arrow-right-circle me-2"></i>
              Start New Application
            </Link>

          </div>

          <div className="welcome-icon">
            <i className="bi bi-bank"></i>
          </div>

        </div>


        {/* STAT CARDS */}
        <div className="row g-4 mt-1">

          <div className="col-md-4">

            <div className="dashboard-stat-card">

              <div className="stat-icon blue">
                <i className="bi bi-file-earmark-text"></i>
              </div>

              <div>
                <span>Total Applications</span>
                <h3>0</h3>
              </div>

            </div>

          </div>


          <div className="col-md-4">

            <div className="dashboard-stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-clock-history"></i>
              </div>

              <div>
                <span>Pending Applications</span>
                <h3>0</h3>
              </div>

            </div>

          </div>


          <div className="col-md-4">

            <div className="dashboard-stat-card">

              <div className="stat-icon green">
                <i className="bi bi-check-circle"></i>
              </div>

              <div>
                <span>Approved Loans</span>
                <h3>0</h3>
              </div>

            </div>

          </div>

        </div>


        {/* APPLICATION SECTION */}
        <div className="row g-4 mt-2">

          <div className="col-lg-8">

            <div className="dashboard-card">

              <div className="card-heading">

                <div>
                  <h5 className="fw-bold mb-1">
                    Recent Applications
                  </h5>

                  <p className="text-muted mb-0">
                    Your latest loan applications
                  </p>
                </div>

                <Link
                  to="/applications"
                  className="btn btn-sm btn-outline-primary"
                >
                  View All
                </Link>

              </div>


              <div className="empty-application">

                <i className="bi bi-folder2-open"></i>

                <h5 className="fw-bold mt-3">
                  No Applications Yet
                </h5>

                <p className="text-muted">
                  You haven't submitted any loan applications yet.
                </p>

                <Link
                  to="/apply-loan"
                  className="btn btn-primary"
                >
                  Apply for a Loan
                </Link>

              </div>

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="col-lg-4">

            <div className="dashboard-card">

              <h5 className="fw-bold mb-4">
                Quick Actions
              </h5>

              <Link
                to="/apply-loan"
                className="quick-action"
              >
                <i className="bi bi-plus-circle"></i>

                <div>
                  <strong>New Application</strong>
                  <small>Apply for a new loan</small>
                </div>

                <i className="bi bi-chevron-right ms-auto"></i>
              </Link>


              <Link
                to="/profile"
                className="quick-action"
              >
                <i className="bi bi-person-circle"></i>

                <div>
                  <strong>My Profile</strong>
                  <small>Manage your information</small>
                </div>

                <i className="bi bi-chevron-right ms-auto"></i>
              </Link>


              <Link
                to="/applications"
                className="quick-action"
              >
                <i className="bi bi-clock-history"></i>

                <div>
                  <strong>Track Application</strong>
                  <small>Check application status</small>
                </div>

                <i className="bi bi-chevron-right ms-auto"></i>
              </Link>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;