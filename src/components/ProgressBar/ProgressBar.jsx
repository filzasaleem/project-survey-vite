export const ProgressBar = ({currentStep}) => {
  return (
    <div className="progressBar">
      {currentStep > 0 && (
        <input type="range" min="1" max="6" value={currentStep}></input>
      )}
    </div>
  );
};


