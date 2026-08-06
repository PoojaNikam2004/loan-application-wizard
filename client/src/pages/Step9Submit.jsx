import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function Step9Submit({ formData }) {

  const [applicationId] = useState(
    "LN" + Date.now().toString().slice(-8)
  );

  useEffect(() => {

    // Backend API call 

  }, []);

  return (

    <Layout formData={formData}>

      <div className="text-center mt-5">

        <i
          className="bi bi-check-circle-fill text-success"
          style={{ fontSize: "80px" }}
        ></i>

        <h2 className="mt-4 fw-bold">

          Application Submitted Successfully

        </h2>

        <p className="text-muted">

          Thank you for applying.

        </p>

        <div className="card shadow p-4 mt-4">

          <h5>

            Application ID

          </h5>

          <h3 className="text-primary">

            {applicationId}

          </h3>

        </div>

        <button
          className="btn btn-success mt-4"
        >
          Download Receipt
        </button>

      </div>

    </Layout>

  );

}

export default Step9Submit;