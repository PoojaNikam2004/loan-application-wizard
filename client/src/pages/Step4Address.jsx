import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step4Address({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Progress step={4} />
      <StepHeader title="Step 4 : Address Details" />

      <input
        className="form-control mb-3"
        placeholder="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Pincode"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
      />

      <NavigationButton prevStep={prevStep} nextStep={nextStep} />
    </Layout>
  );
}

export default Step4Address;