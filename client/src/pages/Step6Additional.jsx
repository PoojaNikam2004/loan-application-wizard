function Step6Additional({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">

      <h2>Step 6 : Additional Details</h2>

      <textarea
        className="form-control"
        rows="4"
        name="remarks"
        placeholder="Additional Details"
        value={formData.remarks || ""}
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

export default Step6Additional;