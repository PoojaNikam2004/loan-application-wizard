import "../Styles/Stepper.css";


function Stepper({ step }) {

  const steps = [
    "Loan",
    "Personal",
    "Identity",
    "Address",
    "Employment",
    "Loan Info",
    "Documents",
    "Review",
    "Submit",
  ];

  return (
    <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">

      {steps.map((item, index) => (

        <div
          key={index}
          className="text-center"
          style={{ width: "80px" }}
        >

          <div
            className={`step-circle ${
              step >= index + 1 ? "active-step" : ""
            }`}
          >
            {index + 1}
          </div>

          <small className="step-text">
            {item}
          </small>

        </div>

      ))}

    </div>
  );
}

export default Stepper;