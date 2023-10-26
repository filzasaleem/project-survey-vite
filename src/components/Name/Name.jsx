import "./Name.css";
export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);

  return (
    <div className="form-row">
      <label>
        <h3 className="text-center">What's your name?</h3>
      </label>
      <input type="text" value={value} onChange={userName} />
    </div>
  );
};
