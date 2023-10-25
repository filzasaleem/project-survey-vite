export const HolidayDestination = ({ value, updateFormData }) => {
  const destination = (e) => updateFormData("desination", e.target.value);

  return (
    <div>
      <label>Where would you like to spend your next holidays.</label>
      <select name="destination" value={value} onChange={destination}>
        <option value="">Select favourite destination.</option>
        <option value="italy">Italy</option>
        <option value="dubai"> Dubai</option>
        <option value="malaysia">Malaysia</option>
        <option value="north-pole"> North Pole</option>
      </select>
    </div>
  );
};
