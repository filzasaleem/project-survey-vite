

export const OnFlight = ({ value, updateFormData }) => {
  const todoOnFlight = (e) => updateFormData("onflight", e.target.value);
  const activities = ["reading", "sleeping", "watching movie"];

  return (
    <div>
      {activities.map((activity) => (
        <div key={activity}>
          <input
            type="radio"
            value={activity}
            checked={value === activity}
            onChange={todoOnFlight}
          />
          <label>{activity}</label>
        </div>
      ))}
    </div>
  );
};
