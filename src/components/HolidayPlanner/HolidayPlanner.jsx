import "./HolidayPlanner.css";
import {Button} from "../Button/Button.jsx";

export const HolidayPlanner = ({nextStep}) => {

const handleNextStep = () => nextStep();
  return (
    <div className="holiday-planner">
    <article className="text holiday-planner-text">
      <h1>Holiday Planner</h1>
      <p>Welcome to the holiday planner.</p>
      <p>Lets plan your dream trip!</p>
    </article>
      {/* <Button onClick={handleNextStep} /> */}
      <button className="btn btn-start" onClick={handleNextStep} >Let's plan </button>
    </div>
  )
}
