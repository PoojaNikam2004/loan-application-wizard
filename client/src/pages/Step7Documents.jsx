function Step7Documents({ nextStep, prevStep }) {

  return (
    <div className="container mt-5">

      <h2>Step 7 : Upload Documents</h2>

      <input className="form-control mt-3" type="file" />

      <button className="btn btn-secondary mt-4 me-2" onClick={prevStep}>
        Previous
      </button>

      <button className="btn btn-primary mt-4" onClick={nextStep}>
        Next
      </button>

    </div>
  );
}

export default Step7Documents;