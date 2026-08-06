import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Stepper from "../components/Stepper";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step8Review({
  nextStep,
  prevStep,
  formData,
}) {

  return (

    <Layout formData={formData}>

      <Progress step={8}/>
      <Stepper step={8}/>

      <StepHeader
        title="Review Application"
        subtitle="Please verify all details before submitting."
      />

      <div className="card shadow-sm p-4">

        <h5 className="text-primary mb-3">
          Loan Information
        </h5>

        <table className="table">

          <tbody>

            <tr>
              <th>Loan Type</th>
              <td>{formData.loanType}</td>
            </tr>

            <tr>
              <th>Loan Amount</th>
              <td>₹ {formData.loanAmount}</td>
            </tr>

            <tr>
              <th>Loan Tenure</th>
              <td>{formData.loanTenure}</td>
            </tr>

            <tr>
              <th>Loan Purpose</th>
              <td>{formData.loanPurpose}</td>
            </tr>

          </tbody>

        </table>

        <hr/>

        <h5 className="text-primary mb-3">
          Personal Information
        </h5>

        <table className="table">

          <tbody>

            <tr>
              <th>Name</th>
              <td>
                {formData.firstName} {formData.lastName}
              </td>
            </tr>

            <tr>
              <th>Email</th>
              <td>{formData.email}</td>
            </tr>

            <tr>
              <th>Mobile</th>
              <td>{formData.mobile}</td>
            </tr>

            <tr>
              <th>Date of Birth</th>
              <td>{formData.dob}</td>
            </tr>

            <tr>
              <th>Gender</th>
              <td>{formData.gender}</td>
            </tr>

          </tbody>

        </table>

        <hr/>

        <h5 className="text-primary mb-3">
          Identity Details
        </h5>

        <table className="table">

          <tbody>

            <tr>
              <th>Aadhaar</th>
              <td>{formData.aadhaar}</td>
            </tr>

            <tr>
              <th>PAN</th>
              <td>{formData.pan}</td>
            </tr>

          </tbody>

        </table>

        <hr/>

        <h5 className="text-primary mb-3">
          Address
        </h5>

        <table className="table">

          <tbody>

            <tr>
              <th>Address</th>
              <td>{formData.address}</td>
            </tr>

            <tr>
              <th>City</th>
              <td>{formData.city}</td>
            </tr>

            <tr>
              <th>State</th>
              <td>{formData.state}</td>
            </tr>

            <tr>
              <th>Pincode</th>
              <td>{formData.pincode}</td>
            </tr>

          </tbody>

        </table>

        <hr/>

        <h5 className="text-primary mb-3">
          Employment
        </h5>

        <table className="table">

          <tbody>

            <tr>
              <th>Employment Type</th>
              <td>{formData.employmentType}</td>
            </tr>

            <tr>
              <th>Company</th>
              <td>{formData.companyName}</td>
            </tr>

            <tr>
              <th>Monthly Income</th>
              <td>₹ {formData.monthlyIncome}</td>
            </tr>

          </tbody>

        </table>

        <hr/>

        <h5 className="text-primary mb-3">
          Uploaded Documents
        </h5>

        <table className="table">

          <tbody>

            <tr>
              <th>Aadhaar</th>
              <td>{formData.aadhaarFile?.name}</td>
            </tr>

            <tr>
              <th>PAN</th>
              <td>{formData.panFile?.name}</td>
            </tr>

            <tr>
              <th>Salary Slip</th>
              <td>{formData.salarySlip?.name}</td>
            </tr>

            <tr>
              <th>Bank Statement</th>
              <td>{formData.bankStatement?.name}</td>
            </tr>

            <tr>
              <th>Photo</th>
              <td>{formData.photo?.name}</td>
            </tr>

          </tbody>

        </table>

      </div>

      <NavigationButton
        prevStep={prevStep}
        nextStep={nextStep}
        nextLabel="Submit Application"
      />

    </Layout>

  );

}

export default Step8Review;