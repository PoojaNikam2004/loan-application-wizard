import "../Styles/Button.css";


function NavigationButtons({
  nextStep,
  prevStep,
  isFirst,
  isLast
}) {

  return (

    <div className="d-flex justify-content-between mt-5">

      <button
        className="btn btn-outline-secondary px-4"
        disabled={isFirst}
        onClick={prevStep}
      >
        ← Previous
      </button>

      <button
        className="btn btn-primary px-4"
        onClick={nextStep}
      >
        {isLast ? "Submit" : "Next →"}
      </button>

    </div>

  );

}

export default NavigationButtons;