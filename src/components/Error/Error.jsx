import "./Error.css";
export const Error = ({ resetForm }) => {
  const handleFormReset = () => resetForm();
  return (
    <div className="error-message-wrapper">
      <div className="error-message">
        <h3>Error</h3>
        <p>Please fill all the form correctly </p>
      </div>
      <div className="btns-wrapper">
        <button className="btn" onClick={handleFormReset}>Start Over</button>
      </div>
    </div>
  );
};
