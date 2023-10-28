import "./DropDownList.css";
import { useState } from "react";

export const DropDownList = ({
  value,
  inputKey,
  updateFormData,
  nextStep,
  prevStep,
  question,
  activities,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setIsButtonDisabled(inputValue === ""); // Disable the button if the input is empty
    updateFormData(inputKey, inputValue);
  };

  const handleNextStep = () => {
    if (!isButtonDisabled) {
      nextStep();
    }
  };
  const handlePrevStep = () => prevStep();

  return (
    <>
      <div className="form-row">
        <label>
          <h3 className="text-center">{question}</h3>
        </label>
        <select className="dropdown" value={value} onChange={handleInputChange}>
          <option value="">Select your favorite option</option>
          {activities.map((activity) => (
            <option key={activity} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>
      <div className="btns-wrapper">
        <button className="btn-back" onClick={handlePrevStep}>Back</button>
        <button className="btn btn-secondary" onClick={handleNextStep} disabled={isButtonDisabled}>
          Continue
        </button>
      </div>
    </>
  );
};
