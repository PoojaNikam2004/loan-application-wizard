const handleSubmit = async () => {

  try {

    const response = await fetch(
      "http://localhost:5000/api/loan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log(data);

    nextStep();

  } catch (error) {

    console.log(error);

  }
  <NavigationButton
    prevStep={prevStep}
    nextStep={handleSubmit}
    nextLabel="Submit Application"
/>

};