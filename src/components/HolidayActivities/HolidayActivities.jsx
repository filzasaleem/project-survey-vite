import React from 'react';
import "./HolidayActivities.css";

export const HolidayActivities = ({ value, updateFormData, holidayType }) => {
  const activities = {
    active: ["Skiing and snowboarding", "Diving", "Mountain biking", "Skiing", "Surfing"],
    relaxing: ["Chilling by the pool", "Sipping a glass of wine", "Reading a book", "Enjoying nice views"],
  };

  const activityOptions = holidayType in activities ? activities[holidayType] : [];

  return (
    <div className="form-row">
      <label>
        <h3 className="text-center">
          What would you like to do on your holiday?
        </h3>
      </label>
      <select value={value} onChange={(e) => updateFormData("holidayActivity", e.target.value)}>
        <option value="">Select your favorite holiday activity</option>
        {activityOptions.map((activity) => (
          <option key={activity} value={activity}>
            {activity}
          </option>
        ))}
      </select>
    </div>
  );
};
