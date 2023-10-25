import { useState } from "react";

import { HolidayPlanner } from "./HolidayPlanner";
import { HolidayDestination } from "./HolidayDestination";
import { HolidayType } from "./HolidayType";
import { FormSummary } from "./FormSummary";
import { Name } from "./Name";
import { HolidayActivities } from "./HolidayActivities";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    holidayType: "",
    desination: "",
    holidayActivity: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  // const [buttonState, setButtonState] = useState("let's plan");

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
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
      <p>form for favourite holiday destination</p>
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
          {currentStep == 0 && <button onClick={nextStep}>Let's Plan</button>}
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {currentStep < 4 ? (
            <button onClick={nextStep}>Continue</button>
          ) : (
            <button onClick={renderSummary} type="submit">
              Submit
            </button>
          )}
        </form>
      ) : (
        <FormSummary  
          name={formData.name}
          destinaton={formData.desination}
          holidayType={formData.holidayType}
          holidayActivity =  {formData.holidayActivity}
        />
      )}
    </div>
  );
};
