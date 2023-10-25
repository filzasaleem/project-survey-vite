

export const ExcitmentSlider = ({ value, updateFormData }) => {
    const excitmentLvelUpdate = (e) => updateFormData("excitmentLevel", e.target.value);
  return (
    <div>
        <p>How excited are you for your trip?</p>
            <input onChange= {excitmentLvelUpdate} type="range" min="1" max="100" value={value}></input>
    </div>
  )
}
