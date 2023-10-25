import { useState } from "react";

import { HolidayPlanner } from "./HolidayPlanner";
import { HolidayDestination } from "./HolidayDestination";
import { HolidayType } from "./HolidayType";
import { FormSummary } from "./FormSummary";
import { Name } from "./Name";
import { HolidayActivities } from "./HolidayActivities";
import { ExcitmentSlider } from "./ExcitmentSlider";

export const Form = () => {
  const initialFormData = {
    name: "",
    holidayType: "",
    destination: "",
    holidayActivity: "",
    excitmentLevel: 1,
  };

  const [formData, setFormData] = useState(initialFormData);

  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [buttonState, setButtonState] = useState("let's plan");

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setShowSummary(false);
    setButtonState("Let's plan");
  };

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
    // if (currentStep === 0 ) setButtonState("let's plan")
    // else 
    // setButtonState("Continue")
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
          {currentStep == 0 && (
            <div>
              <HolidayPlanner />
            </div>
          )}
          {currentStep == 1 && (
            <div>
              <Name value={formData.name} updateFormData={updateFormData} />
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <HolidayType
                value={formData.holidayType}
                updateFormData={updateFormData}
              />
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <HolidayActivities
                value={formData.holidayActivity}
                updateFormData={updateFormData}
                holidayType={formData.holidayType}
              />
            </div>
          )}
          {currentStep == 4 && (
            <div>
              <HolidayDestination
                value={formData.destinaton}
                updateFormData={updateFormData}
              />
            </div>
          )}
          {currentStep == 5 && (
            <div>
              <ExcitmentSlider
                value={formData.excitmentLevel}
                updateFormData={updateFormData}
              />
            </div>
          )}
          <div className="buttons">
            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
            {currentStep < 5 ? (
              <button onClick={nextStep}> {currentStep === 0 ? "Let's plan" :"Continue"  }</button>
            ) : (
              <button onClick={renderSummary} type="submit">
                Submit
              </button>
            )}
          </div>
          <div className="progressBar">
            {currentStep > 0 && (
              <input type="range" min="1" max="5" value={currentStep}></input>
            )}
          </div>
        </form>
      ) : (
        <div>
          <FormSummary
            name={formData.name}
            destination={formData.destination}
            holidayType={formData.holidayType}
            holidayActivity={formData.holidayActivity}
            excitmentLevel={formData.excitmentLevel}
          />
          <button onClick={resetForm}>Plan a new trip</button>
        </div>
      )}
    </div>
  );
};
