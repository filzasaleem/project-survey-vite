import "./ProgressBar.css"

export const ProgressBar = ({currentStep}) => {
  return (
    <div className="form-row">
      {currentStep > 0 && (
        <input className="progressBar" type="range" min="1" max="5" value={currentStep} ></input>
        
      )}
      {currentStep > 0 && (
        <span className="current-step">{currentStep}/5 </span>
      )}
      
    </div>
  );
};


