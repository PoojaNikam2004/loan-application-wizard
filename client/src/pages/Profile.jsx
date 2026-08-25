import { Link } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              My Profile
            </h2>

            <p className="text-muted mb-0">
              Manage your personal information
            </p>
          </div>

          <Link
            to="/dashboard"
            className="btn btn-outline-primary"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Dashboard
          </Link>

        </div>


        <div className="row g-4">

          {/* PROFILE CARD */}

          <div className="col-lg-4">

            <div className="card border-0 shadow-sm profile-card">

              <div className="card-body text-center p-4">

                <div className="profile-avatar">
                  <i className="bi bi-person"></i>
                </div>

                <h4 className="fw-bold mt-3">
                  Applicant
                </h4>

                <p className="text-muted">
                  Loan Applicant
                </p>

                <hr />

                <div className="text-start">

                  <p>
                    <i className="bi bi-envelope text-primary me-2"></i>
                    applicant@example.com
                  </p>

                  <p>
                    <i className="bi bi-phone text-primary me-2"></i>
                    +91 XXXXX XXXXX
                  </p>

                  <p className="mb-0">
                    <i className="bi bi-calendar text-primary me-2"></i>
                    Member since 2026
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* PROFILE INFORMATION */}

          <div className="col-lg-8">

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div>
                    <h5 className="fw-bold mb-1">
                      Personal Information
                    </h5>

                    <p className="text-muted mb-0">
                      Your account information
                    </p>
                  </div>

                  <button className="btn btn-outline-primary">
                    <i className="bi bi-pencil me-2"></i>
                    Edit
                  </button>

                </div>


                <div className="row g-4">

                  <div className="col-md-6">

                    <label className="text-muted small">
                      Full Name
                    </label>

                    <p className="fw-semibold">
                      Applicant
                    </p>

                  </div>


                  <div className="col-md-6">

                    <label className="text-muted small">
                      Email Address
                    </label>

                    <p className="fw-semibold">
                      applicant@example.com
                    </p>

                  </div>


                  <div className="col-md-6">

                    <label className="text-muted small">
                      Mobile Number
                    </label>

                    <p className="fw-semibold">
                      +91 XXXXX XXXXX
                    </p>

                  </div>


                  <div className="col-md-6">

                    <label className="text-muted small">
                      Account Status
                    </label>

                    <p>
                      <span className="badge bg-success-subtle text-success">
                        Active
                      </span>
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* SECURITY */}

            <div className="card border-0 shadow-sm mt-4">

              <div className="card-body p-4">

                <h5 className="fw-bold">
                  Account Security
                </h5>

                <p className="text-muted">
                  Keep your account information secure.
                </p>

                <button className="btn btn-outline-secondary">
                  <i className="bi bi-key me-2"></i>
                  Change Password
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;