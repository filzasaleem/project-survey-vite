import "./ProgressBar.css"

export const ProgressBar = ({currentStep,totalLength}) => {
  return (
    <div className="form-row">
      {currentStep > 0 && (
        <input className="progressBar" type="range" min="1" max={totalLength} value={currentStep} ></input>
        
      )}
      {currentStep > 0 && (
        <span className="current-step">{currentStep}/{totalLength} </span>
      )}
      
    </div>
  );
};


