export const FormSummary = ({ name, destinaton, holidayType,holidayActivity }) => {

  return (
    <div>
      <p>
        Dear {name}, {<br/>} We just booked your dream trip to {destinaton} filled with 
         { holidayType} activities. Among other things, you are gonna enjoy 
       { holidayActivity}. Enjoy!
      </p>
    </div>
  );
};
