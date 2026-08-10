function About() {


  return (
    <>

      {/* About Hero */}
      <section className="py-5 bg-light">

        <div className="container py-4">

          <div className="text-center">

            <span className="text-primary fw-semibold">
              ABOUT LOANFLOW
            </span>

            <h1 className="display-5 fw-bold mt-2">
              Making Loan Applications Simple
            </h1>

            <p className="lead text-muted mt-3 mx-auto about-text">
              LoanFlow is a digital loan application platform designed
              to simplify the process of applying for and managing loans
              through a secure and user-friendly web application.
            </p>

          </div>

        </div>

      </section>

      {/* About Content */}
      <section className="py-5">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-icon-box">

                <i className="bi bi-bank2"></i>

              </div>

            </div>

            <div className="col-lg-6">

              <h2 className="fw-bold mb-3">
                About Our Platform
              </h2>

              <p className="text-muted">
                LoanFlow provides applicants with a structured
                step-by-step loan application experience. Instead of
                filling out a large form at once, applicants can complete
                their information through multiple manageable steps.
              </p>

              <p className="text-muted">
                The platform supports different loan categories and
                allows users to provide personal information, identity
                details, address, employment information and required
                documents.
              </p>

              <p className="text-muted">
                Applicants can review their information before submitting
                the application and track the progress of their loan
                application.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Our Mission
            </h2>

            <p className="text-muted">
              Building a simple and transparent digital loan experience.
            </p>

          </div>

          <div className="row g-4">

            <InfoCard
              icon="bi-person-check"
              title="Easy Application"
              text="A simple step-by-step process makes loan applications easier to complete."
            />

            <InfoCard
              icon="bi-shield-lock"
              title="Secure Information"
              text="Applicant information and documents are handled through a structured system."
            />

            <InfoCard
              icon="bi-bar-chart"
              title="Application Tracking"
              text="Users can monitor their application status throughout the process."
            />

          </div>

        </div>

      </section>

    </>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="col-md-4">

      <div className="card border-0 shadow-sm h-100">

        <div className="card-body text-center p-4">

          <i className={`bi ${icon} text-primary fs-1`}></i>

          <h5 className="fw-bold mt-3">
            {title}
          </h5>

          <p className="text-muted">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;