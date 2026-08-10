import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Temporary login
    // Backend authentication connect here
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5">

            <div className="card border-0 shadow-lg auth-card">

              <div className="card-body p-5">

                <div className="text-center mb-4">

                  <div className="auth-icon">
                    <i className="bi bi-person-circle"></i>
                  </div>

                  <h2 className="fw-bold mt-3">
                    Welcome Back
                  </h2>

                  <p className="text-muted">
                    Login to continue your LoanFlow application
                  </p>

                </div>

                <form onSubmit={handleLogin}>

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                    </div>

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                      </span>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                    </div>

                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login
                  </button>

                </form>

                <div className="text-center mt-4">

                  <span className="text-muted">
                    Don't have an account?
                  </span>

                  <Link
                    to="/register"
                    className="text-primary fw-semibold ms-2 text-decoration-none"
                  >
                    Create Account
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;