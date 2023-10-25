export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);

  return (
    <div>
      <label>What's your name:</label>
      <input type="text" value={value} onChange={userName} />
    </div>
  );
};
