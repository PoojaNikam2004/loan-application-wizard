import "../Styles/Progress.css";

function ProgressBar({ step }) {

  const percentage = (step / 9) * 100;

  return (

    <div className="mb-4">

      <div className="d-flex justify-content-between">

        <strong>Step {step} of 9</strong>

        <strong>{Math.round(percentage)}%</strong>

      </div>

      <div className="progress mt-2" style={{ height: "10px" }}>

        <div
          className="progress-bar bg-primary"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

    </div>

  );
}

export default ProgressBar;