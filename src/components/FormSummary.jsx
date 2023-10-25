export const FormSummary = ({
  name,
  destination,
  holidayType,
  holidayActivity,
}) => {
  return (
    <div>
      <h3>Dear {name}</h3>
      <p>
        {" "}
        We just booked your dream trip to {destination} filled with
        {" "}{holidayType} activities. Among other things, you are gonna enjoy {" "}
        {holidayActivity}. Enjoy!
      </p>
    </div>
  );
};
