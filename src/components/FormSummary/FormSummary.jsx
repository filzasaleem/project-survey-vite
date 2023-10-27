import "./FormSummary.css";
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
      "You seem to be a bit excited for the trip, so get ready for some fun and relaxation!";
  } else {
    feelings =
      "With your high level of excitement, you're in for an amazing trip filled with joy and adventure!";
  }

  return (
    <article className="text form-summary">
      <h3>Dear <span className="primary-color">{name}</span></h3>
      <p>
        {" "}
        We just booked your dream trip to <span className="primary-color">{destination}</span> filled with <span className="primary-color">{holidayType}</span> activities. Among other things, you are gonna enjoy <span className="primary-color">{holidayActivity}</span>.
      </p> 
      <p>{feelings}</p> 
      <h4>Enjoy!</h4>
      
    </article>
  );
};
