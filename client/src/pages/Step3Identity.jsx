function Step3Identity({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">

      <h2>Step 3 : Identity</h2>

      <input
        className="form-control mt-3"
        placeholder="PAN Number"
        name="pan"
        value={formData.pan || ""}
        onChange={handleChange}
      />

      <input
        className="form-control mt-3"
        placeholder="Aadhaar Number"
        name="aadhaar"
        value={formData.aadhaar || ""}
        onChange={handleChange}
      />

      <button className="btn btn-secondary mt-4 me-2" onClick={prevStep}>
        Previous
      </button>

      <button className="btn btn-primary mt-4" onClick={nextStep}>
        Next
      </button>

    </div>
  );
}

export default Step3Identity;