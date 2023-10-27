import "./HolidayType.css"

export const HolidayType = ({ value, updateFormData }) => {
  const typeOfHoliday = (e) => updateFormData("holidayType", e.target.value);
  const activities = ["Active", "Relaxing"];

  return (
    <div className="form-row">
      <label>
        <h3 className="text-center">Do you prefer an active or relaxing holiday?</h3>
      </label>
      {activities.map((activity) => (
        <div key={activity}>
          <input
            type="radio"
            value={activity}
            checked={value === activity}
            onChange={typeOfHoliday}
            required
          />
          <label> {activity}</label>
        </div>
      ))}
    </div>
  );
};
