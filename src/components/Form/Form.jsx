import { useState } from "react";

import { HolidayPlanner } from "../HolidayPlanner/HolidayPlanner";
import { HolidayDestination } from "../HolidayDestination/HolidayDestination";
import { HolidayType } from "../HolidayType/HolidayType";
import { FormSummary } from "../FormSummary/FormSummary";
import { Name } from "../Name/Name";
import { HolidayActivities } from "../HolidayActivities/HolidayActivities";
import { ExcitmentSlider } from "../ExcitmentSlider/ExcitmentSlider";
import "./Form.css";
import "../Button/Button.css"


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
    <div className="form-outer-wrapper">
      {!showSummary ? (
        <form onSubmit={formSubmit} className="form">
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
            {currentStep > 1 && <button className="btn-back" onClick={prevStep}>Back</button>}
            {currentStep < 5 ? (
              <button 
                className={currentStep === 0 ? "btn" :"btn btn-secondary"  } 
                onClick={nextStep}> 
                  {currentStep === 0 ? "Let's plan" :"Continue"  }
              </button>
            ) : (
              <button className="btn" onClick={renderSummary} type="submit">
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
        <div className="form-summary-wrapper" >
          <FormSummary
            name={formData.name}
            destination={formData.destination}
            holidayType={formData.holidayType}
            holidayActivity={formData.holidayActivity}
            excitmentLevel={formData.excitmentLevel}
          />
          <button className="btn btn-center" onClick={resetForm}>Plan a new trip</button>
        </div>
      )}
    </div>
  );
};
