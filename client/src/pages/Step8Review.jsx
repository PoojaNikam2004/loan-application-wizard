import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step8Review({ nextStep, prevStep, formData }) {

  return (
    <Layout>

      <Progress step={8} />

      <StepHeader title="Step 8 : Review Application" />

      <table className="table table-bordered">

        <tbody>

          <tr>
            <th>Loan Type</th>
            <td>{formData.loanType}</td>
          </tr>

          <tr>
            <th>Full Name</th>
            <td>{formData.fullName}</td>
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
            <th>Company</th>
            <td>{formData.company}</td>
          </tr>

          <tr>
            <th>Monthly Income</th>
            <td>{formData.salary}</td>
          </tr>

        </tbody>

      </table>

      <NavigationButton
        prevStep={prevStep}
        nextStep={nextStep}
        isLast={true}
      />

    </Layout>
  );
}

export default Step8Review;