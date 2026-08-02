import { useState } from "react";

function Step2PersonalInfo({ nextStep, prevStep, formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.mobile ||
      !formData.dob
    ) {
      alert("Fill all fields");
      return;
    }

    nextStep();
  };

  return (
    <div className="container mt-5">

      <h2>Step 2 : Personal Information</h2>

      <input
        className="form-control mt-3"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName || ""}
        onChange={handleChange}
      />

      <input
        className="form-control mt-3"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email || ""}
        onChange={handleChange}
      />

      <input
        className="form-control mt-3"
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile || ""}
        onChange={handleChange}
      />

      <input
        className="form-control mt-3"
        type="date"
        name="dob"
        value={formData.dob || ""}
        onChange={handleChange}
      />

      <button className="btn btn-secondary mt-4 me-2" onClick={prevStep}>
        Previous
      </button>

      <button className="btn btn-primary mt-4" onClick={next}>
        Next
      </button>

    </div>
  );
}

export default Step2PersonalInfo;