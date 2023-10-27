export const Error = ({ resetForm }) => {
  const handleFormReset = () => resetForm();
  return (
    <>
      <div className="error-message">
        <h3>Error</h3>
        <p>Please fill all the form correctly </p>
      </div>
      <div className="btn">
        <button onClick={handleFormReset}>Start Over</button>
      </div>
    </>
  );
};
