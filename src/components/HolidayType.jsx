

export const HolidayType = ({ value, updateFormData }) => {
  const typeOfHoliday = (e) => updateFormData("holidayType", e.target.value);
  const activities = ["active", "relaxing"];

  return (
    <div>
      {activities.map((activity) => (
        <div key={activity}>
          <input
            type="radio"
            value={activity}
            checked={value === activity}
            onChange={typeOfHoliday}
            required
          />
          <label>{activity}</label>
        </div>
      ))}
    </div>
  );
};
