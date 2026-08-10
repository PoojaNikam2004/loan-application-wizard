import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-6">

              <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                <i className="bi bi-shield-check me-2"></i>
                Secure & Reliable Loan Services
              </span>

              <h1 className="display-4 fw-bold mt-3">
                Your Loan Journey,
                <span className="text-primary"> Made Simple.</span>
              </h1>

              <p className="lead text-muted mt-4">
                Apply for a loan online with a simple, secure and
                transparent application process. Track your application
                from start to finish.
              </p>

              <div className="mt-4 d-flex gap-3">

                <Link
                  to="/login"
                  className="btn btn-primary btn-lg px-4"
                >
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  Apply for Loan
                </Link>

                <Link
                  to="/about"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Learn More
                </Link>

              </div>

            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <div className="hero-card">

                <i className="bi bi-bank2 hero-icon"></i>

                <h3 className="fw-bold mt-4">
                  Smart Loan Application
                </h3>

                <p className="text-muted">
                  Fast • Secure • Transparent
                </p>

                <div className="row mt-4">

                  <div className="col-4">
                    <i className="bi bi-lightning-charge text-primary fs-3"></i>
                    <p className="small mt-2">Fast Process</p>
                  </div>

                  <div className="col-4">
                    <i className="bi bi-shield-lock text-success fs-3"></i>
                    <p className="small mt-2">Secure</p>
                  </div>

                  <div className="col-4">
                    <i className="bi bi-graph-up-arrow text-warning fs-3"></i>
                    <p className="small mt-2">Easy Tracking</p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-semibold">
              OUR LOAN SERVICES
            </span>

            <h2 className="fw-bold mt-2">
              Choose the Right Loan for You
            </h2>

            <p className="text-muted">
              Flexible loan options designed for different financial needs.
            </p>

          </div>

          <div className="row g-4">

            <LoanCard
              icon="bi-person"
              title="Personal Loan"
              text="For personal expenses, emergencies and other financial needs."
            />

            <LoanCard
              icon="bi-house"
              title="Home Loan"
              text="Make your dream of owning a home a reality."
            />

            <LoanCard
              icon="bi-briefcase"
              title="Business Loan"
              text="Financial support to start or grow your business."
            />

            <LoanCard
              icon="bi-mortarboard"
              title="Education Loan"
              text="Invest in your education and build your future."
            />

          </div>

        </div>

      </section>

      {/* Why LoanFlow */}
      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Why Choose LoanFlow?
            </h2>
          </div>

          <div className="row g-4 text-center">

            <Feature
              icon="bi-shield-check"
              title="Secure"
              text="Your information is handled through a secure application process."
            />

            <Feature
              icon="bi-clock"
              title="Quick Process"
              text="Complete your loan application through a simple step-by-step process."
            />

            <Feature
              icon="bi-eye"
              title="Transparent"
              text="Track your application status and review your submitted information."
            />

          </div>

        </div>

      </section>

    </>
  );
}

function LoanCard({ icon, title, text }) {
  return (
    <div className="col-md-6 col-lg-3">

      <div className="card h-100 border-0 shadow-sm loan-type-card">

        <div className="card-body text-center p-4">

          <div className="loan-icon">
            <i className={`bi ${icon}`}></i>
          </div>

          <h5 className="fw-bold mt-3">
            {title}
          </h5>

          <p className="text-muted small">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="col-md-4">

      <div className="p-4">

        <i className={`bi ${icon} text-primary fs-1`}></i>

        <h5 className="fw-bold mt-3">
          {title}
        </h5>

        <p className="text-muted">
          {text}
        </p>

      </div>

    </div>
  );
}

export default Home;