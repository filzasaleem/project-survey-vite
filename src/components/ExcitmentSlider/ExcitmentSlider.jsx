import "./ExcitmentSlider.css";

export const ExcitmentSlider = ({
  value,
  inputKey,
  updateFormData,
  nextStep,
  prevStep,
  question,
}) => {
  const excitmentLvelUpdate = (e) =>
    updateFormData(inputKey, e.target.value);
    const handleNextStep = () => nextStep();
    const handlePrevStep = () => prevStep();
  return (
    <>
      {" "}
      <div className="form-row">
        <label>
          <h3 className="text-center">{question}</h3>
        </label>
        <div className="slider-excited-wrapper">
          <div className="excitment-wrapper">
            <span className="excitment">0%</span>
            <span className="excitment">100%</span>
          </div>
          <input
            className="slider-excited"
            onChange={excitmentLvelUpdate}
            type="range"
            min="1"
            max="100"
            value={value}
          ></input>
        </div>
      </div>
      <div className="btns-wrapper">
        <button className="btn-back" onClick={handlePrevStep}>Back</button>
        <button className="btn btn-secondary" onClick={handleNextStep}>Submit</button>
      </div>
    </>
  );
};
