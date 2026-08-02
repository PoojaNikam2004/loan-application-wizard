function Step5Employment({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">

      <h2>Step 5 : Employment</h2>

      <input
        className="form-control mt-3"
        placeholder="Company Name"
        name="company"
        value={formData.company || ""}
        onChange={handleChange}
      />

      <input
        className="form-control mt-3"
        placeholder="Monthly Income"
        name="salary"
        value={formData.salary || ""}
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

export default Step5Employment;