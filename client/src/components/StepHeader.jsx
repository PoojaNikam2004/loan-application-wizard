function StepHeader({ title }) {

  return (

    <div className="mb-4">

      <h2 className="fw-bold text-primary">

        Loan Application Wizard

      </h2>

      <p className="text-muted">

        {title}

      </p>

      <hr />

    </div>

  );

}

export default StepHeader;