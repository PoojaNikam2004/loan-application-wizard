function Step8Review({ nextStep, prevStep, formData }) {

  return (
    <div className="container mt-5">

      <h2>Review Details</h2>

      <pre>{JSON.stringify(formData, null, 2)}</pre>

      <button className="btn btn-secondary me-2" onClick={prevStep}>
        Previous
      </button>

      <button className="btn btn-success" onClick={nextStep}>
        Submit
      </button>

    </div>
  );
}

export default Step8Review;