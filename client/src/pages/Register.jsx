import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created successfully!");

    navigate("/login");
  };

  return (

    <div className="auth-page">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-7 col-lg-6">

            <div className="card border-0 shadow-lg auth-card">

              <div className="card-body p-5">

                <div className="text-center mb-4">

                  <div className="auth-icon">
                    <i className="bi bi-person-plus"></i>
                  </div>

                  <h2 className="fw-bold mt-3">
                    Create Your Account
                  </h2>

                  <p className="text-muted">
                    Start your secure loan application journey
                  </p>

                </div>

                <form onSubmit={handleRegister}>

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter full name"
                      value={form.name}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                      />

                    </div>

                    <div className="col-md-6 mb-3">

                      <label className="form-label fw-semibold">
                        Mobile Number
                      </label>

                      <input
                        type="tel"
                        name="mobile"
                        className="form-control"
                        placeholder="Enter mobile number"
                        value={form.mobile}
                        onChange={handleChange}
                      />

                    </div>

                  </div>

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Create password"
                      value={form.password}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />

                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                  >
                    <i className="bi bi-person-check me-2"></i>
                    Create Account
                  </button>

                </form>

                <div className="text-center mt-4">

                  <span className="text-muted">
                    Already have an account?
                  </span>

                  <Link
                    to="/login"
                    className="text-primary fw-semibold ms-2 text-decoration-none"
                  >
                    Login
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

export default Register;