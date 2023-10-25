import { useState } from "react";

import { HolidayPlanner } from "./HolidayPlanner";
import { HolidayDestination } from "./HolidayDestination";
import { HolidayType } from "./HolidayType";
import { FormSummary } from "./FormSummary";
import { Name } from "./Name";
import { Email } from "./Email";
import { HolidayActivities } from "./HolidayActivities";
import { ExcitmentSlider } from "./ExcitmentSlider";


export const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    holidayType: "",
    destination: "",
    holidayActivity: "",
    excitmentLevel: 1,
  };
 
  const [formData, setFormData] = useState(initialFormData);

  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  
  // const [buttonState, setButtonState] = useState("let's plan");
  const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setShowSummary(false);
    // setButtonState("Let's plan");
  };

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
    // if (currentStep === 0 ) setButtonState("let's plan")
    // else
    // setButtonState("Continue")
  };

  // Function to move to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const renderSummary = () => {
    
      if (!validEmail.test(formData.email)) {
         setEmailErr(true);
      }
    

    setShowSummary(!showSummary);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };

  const steps = [
    <HolidayPlanner key={currentStep} />,
    <Name
      key={currentStep}
      value={formData.name}
      updateFormData={updateFormData}
    />,
    <Email
      key={currentStep}
      value={formData.email}
      updateFormData={updateFormData}
    />,
    <HolidayType
      key={currentStep}
      value={formData.holidayType}
      updateFormData={updateFormData}
    />,
    <HolidayActivities
      key={currentStep}
      value={formData.holidayActivity}
      updateFormData={updateFormData}
      holidayType={formData.holidayType}
    />,
    <HolidayDestination
      key={currentStep}
      value={formData.destinaton}
      updateFormData={updateFormData}
    />,
    <ExcitmentSlider
      key={currentStep}
      value={formData.excitmentLevel}
      updateFormData={updateFormData}
    />,
  ];

  return (
    <div>
      {!showSummary ? (
        <form onSubmit={formSubmit}>
          {steps.map(
            (step, index) =>
              currentStep == index && (
                <div key={index} className="formQuestions">
                  {step}
                </div>
              )
          )}
          <div className="buttons">
            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
            {currentStep < 6 ? (
              <button onClick={nextStep}>
                {" "}
                {currentStep === 0 ? "Let's plan" : "Continue"}
              </button>
            ) : (
              <button onClick={renderSummary} type="submit">
                Submit
              </button>
            )}
          </div>
          <div className="progressBar">
            {currentStep > 0 && (
              <input type="range" min="1" max="6" value={currentStep}></input>
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
