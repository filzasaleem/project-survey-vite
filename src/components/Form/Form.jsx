import { useState } from "react";

import { HolidayPlanner } from "../HolidayPlanner/HolidayPlanner";
import { HolidayDestination } from "../HolidayDestination/HolidayDestination";
import { HolidayType } from "../HolidayType/HolidayType";
import { FormSummary } from "../FormSummary/FormSummary";
import { Name } from "../Name/Name";
import { HolidayActivities } from "../HolidayActivities/HolidayActivities";
import { ExcitmentSlider } from "../ExcitmentSlider/ExcitmentSlider";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import "./Form.css";
import "../Button/Button.css";

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

  const steps = [
    <HolidayPlanner key={currentStep} />,
    <Name
      key={currentStep}
      value={formData.name}
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
          {steps.map(
            (step, index) =>
              currentStep == index && (
                <div key={index} className="formQuestions">
                  {step}
                </div>
              )
          )}
          <div className="buttons">
            {currentStep > 1 && (
              <button className="btn-back" onClick={prevStep}>
                Back
              </button>
            )}
            {currentStep < 5 ? (
              <button
                className={currentStep === 0 ? "btn" : "btn btn-secondary"}
                onClick={nextStep}
              >
                {currentStep === 0 ? "Let's plan" : "Continue"}
              </button>
            ) : (
              <button className="btn" onClick={renderSummary} type="submit">
                Submit
              </button>
            )}
          </div>
          <ProgressBar currentStep={currentStep} />
        </form>
      ) : (
        <div className="form-summary-wrapper">
          <FormSummary
            name={formData.name}
            destination={formData.destination}
            holidayType={formData.holidayType}
            holidayActivity={formData.holidayActivity}
            excitmentLevel={formData.excitmentLevel}
          />
          <button className="btn btn-center" onClick={resetForm}>
            Plan a new trip
          </button>
        </div>
      )}
    </div>
  );
};
