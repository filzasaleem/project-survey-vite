import "./TextInputQuestion.css";
import { useState } from "react";

export const TextInputQuestion = ({
  value,
  inputKey, 
  updateFormData,
  nextStep,
  prevStep,
  question,
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
        <input type="text" value={value} onChange={handleInputChange} />
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
