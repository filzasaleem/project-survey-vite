export const FormSummary = ({
  name,
  destination,
  holidayType,
  holidayActivity,
  excitmentLevel,
}) => {
  let feelings = "";
  if (excitmentLevel < 35) {
    feelings =
      "Although you might not be super thrilled about the trip, you're still going to have a great time!";
  } else if (excitmentLevel < 65 && excitmentLevel > 34) {
    feelings =
      "You seem to have moderate excitement for the trip, so get ready for some fun and relaxation!";
  } else {
    feelings =
      "With your high level of excitement, you're in for an amazing trip filled with joy and adventure!";
  }

  return (
    <div>
      <h3>Dear {name}</h3>
      <p>
        {" "}
        We just booked your dream trip to {destination} filled with{" "}
        {holidayType} type activities. Among other things, you are gonna enjoy{" "}
        {holidayActivity}. <br />
        {feelings}
        Enjoy!
      </p>
    </div>
  );
};
