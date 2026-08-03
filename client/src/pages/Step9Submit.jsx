import Layout from "../components/Layout";
import Stepper from "../components/Stepper";

function Step9Submit() {



  return (
    <Layout>

      <Stepper step={9} />

      <div className="text-center py-5">

        <h1 className="text-success">
          🎉 Application Submitted Successfully
        </h1>

        <p className="mt-3 fs-5">
          Thank you for applying.
        </p>

        <button className="btn btn-success mt-4" onClick={() => window.location.href = "/"}>
          Back to Home
        </button>

      </div>

    </Layout>
  );
}

export default Step9Submit;