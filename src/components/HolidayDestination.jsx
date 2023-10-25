export const HolidayDestination = ({ value, updateFormData }) => {
  const dreamDestination = (e) => updateFormData("destinaton", e.target.value);

  return (
    <div>
        <label>What's your Dream destination</label>
        <input type="text" value={value} onChange={dreamDestination} />
      </div>
    
  );
};

