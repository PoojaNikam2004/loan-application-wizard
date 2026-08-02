function Step4Address({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">

      <h2>Step 4 : Address</h2>

      <textarea
        className="form-control"
        rows="4"
        name="address"
        placeholder="Enter Address"
        value={formData.address || ""}
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

export default Step4Address;