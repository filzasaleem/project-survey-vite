export const Hotel = ({ value, updateFormData }) => {
  const hotel = (e) => updateFormData("hotel", e.target.value);
  return (
    <div>
      <label>Your ideal hotel …</label>
      <select value={value} onChange={hotel}>
        <option value="">Select your fav hotel</option>
        <option value="has a kids club">Has a kids club</option>
        <option value="should has spa"> should has spa</option>
        <option value="should be close to nature">
          should be close to nature
        </option>
      </select>
    </div>
  );
};
