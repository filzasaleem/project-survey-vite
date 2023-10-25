export const HolidayDestination = ({ value, updateFormData }) => {
  const destination = (e) => updateFormData("desination", e.target.value);

  return (
    <div>
        <label>What's your Dream destination</label>
        <input type="text" value={value} onChange={destination} />
      </div>
    
  );
};

