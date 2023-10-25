import { useState } from "react";

import { HolidayDestination } from "./HolidayDestination";
import { Hotel } from "./Hotel";
import { OnFlight } from "./OnFlight";
import { FormSummary } from "./FormSummary";

export const Form = () => {
  const [formData, setFormData] = useState({
    desination: "",
    hotel: "",
    onflight: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  // Function to move to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const renderSummary = () => {
    setShowSummary(!showSummary);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData.desination);
  };

  return (
    <div>
      <p>form for favourite holiday destination</p>
      {!showSummary ? (
        <form onSubmit={formSubmit}>
          {currentStep == 1 && (
            <HolidayDestination
              value={formData.desination}
              updateFormData={updateFormData}
            />
          )}
          <br />
          {currentStep == 2 && (
            <Hotel value={formData.hotel} updateFormData={updateFormData} />
          )}
          <br></br>
          {currentStep === 3 && (
            <OnFlight
              value={formData.onflight}
              updateFormData={updateFormData}
            />
          )}
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {currentStep < 3 ? (
            <button onClick={nextStep}>Next</button>
          ) : (
            <button onClick={renderSummary} type="submit">
              Submit
            </button>
          )}
        </form>
      ) : (
        <FormSummary
          destination={formData.desination}
          hotel={formData.hotel}
          onFlight={formData.onflight}
        />
      )}
    </div>
  );
};
