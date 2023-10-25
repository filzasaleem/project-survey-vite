import { useState } from "react";

import { HolidayPlanner } from "./HolidayPlanner";
import { HolidayDestination } from "./HolidayDestination";
import { HolidayType } from "./HolidayType";
import { FormSummary } from "./FormSummary";
import { Name } from "./Name";
import { HolidayActivities } from "./HolidayActivities";
import { ExcitmentSlider } from "./ExcitmentSlider";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    holidayType: "",
    destination: "",
    holidayActivity: "",
    excitmentLevel: 1,
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [buttonState, setButtonState] = useState("let's plan");

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
    currentStep > 0 ? setButtonState("Continue") : setButtonState("let's plan");

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
  };

  return (
    <div>
      {!showSummary ? (
        <form onSubmit={formSubmit}>
           
         {currentStep == 0 && 
             
              <HolidayPlanner />
              
              
          }
          {currentStep == 1 && (
            <Name value={formData.name} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <HolidayType
              value={formData.holidayType}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 3 && (
            <HolidayActivities
              value={formData.holidayActivity}
              updateFormData={updateFormData}
             holidayType = {formData.holidayType}

            />
          )}
          {currentStep == 4 && (
            <HolidayDestination
              value={formData.destinaton}
              updateFormData={updateFormData}
            />
          )}
          {currentStep == 5 && (
            <ExcitmentSlider
              value={formData.excitmentLevel}
              updateFormData={updateFormData}
            />
          )}
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {currentStep < 5 ? (
            <button onClick={nextStep}>{buttonState}</button>
          ) : (
            <button onClick={renderSummary} type="submit">
              Submit
            </button>
          )}
        </form>
      ) : (
        <FormSummary  
          name={formData.name}
          destination={formData.destination}
          holidayType={formData.holidayType}
          holidayActivity =  {formData.holidayActivity}
        />
      )}
    </div>
  );
};
