import { useState } from "react";

import { HolidayPlanner } from "../HolidayPlanner/HolidayPlanner";
import { TextInputQuestion } from "../TextInputQuestion/TextInputQuestion";
import { RadioButton } from "../RadioButton/RadioButton";
import { DropDownList } from "../DropDownList/DropDownList";
import { ExcitmentSlider } from "../ExcitmentSlider/ExcitmentSlider";
import { Error } from "../Error/Error";
import { ProgressBar } from "../ProgressBar/ProgressBar";

import { FormSummary } from "../FormSummary/FormSummary";

import "./Form.css";
import "../Button/Button.css";

import questions from "../questions.json";

const questionsArray = questions.questions;
const numOfQuestions = questionsArray.length;

export const Form = () => {
  const initialFormData = {
    name: "",
    holidayType: "",
    holidayActivity: "",
    destination: "",
    excitmentLevel: 1,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setError(false);
  };

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < numOfQuestions + 1) setCurrentStep(currentStep + 1);
    if (currentStep == 6) validate();
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const validate = () => {
    if (
      formData.name == initialFormData.name &&
      formData.holidayType == initialFormData.holidayType &&
      formData.destination == initialFormData.destination &&
      formData.holidayActivity == initialFormData.holidayActivity
    )
      setError(true);
  };

  return (
    <div className="form-outer-wrapper">
      {currentStep == 0 && <HolidayPlanner nextStep={nextStep} />}
      {currentStep == 1 && (
        <TextInputQuestion
          value={formData.name}
          inputKey="name"
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          question={questionsArray[0].question1}
        />
      )}

      {currentStep == 2 && (
        <RadioButton
          value={formData.holidayType}
          inputKey="holidayType"
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          question={questionsArray[1].question2}
          options={questionsArray[1].options}
        />
      )}
      {currentStep == 3 && (
        <DropDownList
          value={formData.holidayActivity}
          inputKey="holidayActivity"
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          question={questionsArray[2].question3}
          activities={questionsArray[2][formData.holidayType]}
        />
      )}
      {currentStep == 4 && (
        <TextInputQuestion
          value={formData.destination}
          inputKey="destination"
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          question={questionsArray[3].question4}
        />
      )}
      {currentStep == 5 && (
        <ExcitmentSlider
          value={formData.excitmentLevel}
          inputKey="excitmentLevel"
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          question={questionsArray[4].question5}
        />
      )}
      {currentStep == 6 &&
        (error ? (
          <Error resetForm={resetForm} />
        ) : (
          <FormSummary
            name={formData.name}
            destination={formData.destination}
            holidayType={formData.holidayType}
            holidayActivity={formData.holidayActivity}
            excitmentLevel={formData.excitmentLevel}
            resetForm={resetForm}
          />
        ))}
        {currentStep > 0 && currentStep < 6 && <ProgressBar currentStep={currentStep} totalLength={numOfQuestions} />}
    </div>
  );
};
