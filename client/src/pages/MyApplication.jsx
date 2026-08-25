import { Link } from "react-router-dom";
import "../styles/applications.css";

function MyApplications() {

  // Temporary data
  // MySQL API 
  const applications = [];

  return (
    <div className="applications-page">

      <div className="container py-5">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              My Applications
            </h2>

            <p className="text-muted mb-0">
              View and track your loan applications.
            </p>
          </div>

          <Link
            to="/apply-loan"
            className="btn btn-primary"
          >
            <i className="bi bi-plus-circle me-2"></i>
            New Application
          </Link>

        </div>


        {/* APPLICATION TABLE */}

        <div className="card border-0 shadow-sm">

          <div className="card-body p-0">

            {applications.length === 0 ? (

              <div className="empty-applications">

                <div className="empty-icon">
                  <i className="bi bi-folder2-open"></i>
                </div>

                <h4 className="fw-bold mt-3">
                  No Applications Found
                </h4>

                <p className="text-muted">
                  You haven't submitted any loan applications yet.
                </p>

                <Link
                  to="/apply-loan"
                  className="btn btn-primary"
                >
                  <i className="bi bi-file-earmark-plus me-2"></i>
                  Apply for Loan
                </Link>

              </div>

            ) : (

              <div className="table-responsive">

                <table className="table align-middle mb-0">

                  <thead>

                    <tr>
                      <th>Application ID</th>
                      <th>Loan Type</th>
                      <th>Amount</th>
                      <th>Applied Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>

                  </thead>

                  <tbody>

                    {applications.map((application) => (

                      <tr key={application.id}>

                        <td>
                          <strong>
                            {application.id}
                          </strong>
                        </td>

                        <td>
                          {application.loanType}
                        </td>

                        <td>
                          ₹{application.amount}
                        </td>

                        <td>
                          {application.date}
                        </td>

                        <td>

                          <span
                            className={`status-badge ${application.status.toLowerCase()}`}
                          >
                            {application.status}
                          </span>

                        </td>

                        <td>

                          <button className="btn btn-sm btn-outline-primary">
                            View
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyApplications;