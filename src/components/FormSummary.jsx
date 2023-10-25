export const FormSummary = ({destination, hotel, onFlight}) => {
  console.log("in the form summary");
  return (
    <div>
      <p>
        For your favouriteholiday Destination you would like to go to {destination}. you would like to stay in a hotel 
            where you woul like to have {hotel} and on the flight you would prefer to do {onFlight}.
      </p>
    </div>
  );
};
