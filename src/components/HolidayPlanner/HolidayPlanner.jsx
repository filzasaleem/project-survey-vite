import "./HolidayPlanner.css";

export const HolidayPlanner = ({nextStep}) => {

const handleNextStep = () => nextStep();
  return (
    <div>
    <article className="text holiday-planner">
      <h1>Holiday Planner</h1>
      <p>Welcome to the holiday planner.</p>
      <p>Lets plan your dream trip!</p>
    </article>
       <button onClick={handleNextStep} > "Let's plan"  </button>
     </div>
  )
}
