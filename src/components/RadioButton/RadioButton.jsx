import "./RadioButton.css";
import { useState } from "react";

export const RadioButton = ({
  value,
  inputKey,
  updateFormData,
  nextStep,
  prevStep,
  question,
  options,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const selectedValue = e.target.value;
    updateFormData(inputKey, selectedValue);
    setIsButtonDisabled(false); // Enable the button when an option is selected
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
        {options.map((activity) => (
          <div key={activity}>
            <input
              type="radio"
              value={activity}
              checked={value === activity}
              onChange={handleInputChange}
              required
            />
            <label> {activity}</label>
          </div>
        ))}
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
