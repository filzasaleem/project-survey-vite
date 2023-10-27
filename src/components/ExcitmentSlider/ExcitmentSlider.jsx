import "./ExcitmentSlider.css";

export const ExcitmentSlider = ({ value, updateFormData }) => {
    const excitmentLvelUpdate = (e) => updateFormData("excitmentLevel", e.target.value);
  return (
    <div className="form-row">
      <label>
        <h3 className="text-center">How excited are you going on your dream holiday?</h3>
      </label>
      <div className="slider-excited-wrapper">
        <div className="excitment-wrapper">
          <span className="excitment">0%</span>
          <span className="excitment">100%</span>
        </div>  
        <input className="slider-excited" onChange= {excitmentLvelUpdate} type="range" min="1" max="100" value={value}></input>
      </div>
    </div>
  )
}
