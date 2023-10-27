import "./HolidayDestination.css";

export const HolidayDestination = ({ value, updateFormData }) => {
  const dreamDestination = (e) => updateFormData("destination", e.target.value);

  return (
    <div className="form-row">
      <label>
        <h3 className="text-center">What's your dream destination?</h3>
      </label>
        <input type="text" value={value} onChange={dreamDestination} />
      </div>
    
  );
};

