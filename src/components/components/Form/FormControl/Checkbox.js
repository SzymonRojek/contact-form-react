import { checkboxValidation } from "../../../../../validateForm";

const Checkbox = ({ register, errors, styledError }) => (
  <div>
    <p className="form-paragraph">Have you read the terms and conditions?</p>
    <label htmlFor="termsRead">If Yes:</label>
    <input
      {...register("termsRead", { ...checkboxValidation })}
      type="checkbox"
      value="termsRead"
      id="termsRead"
    />
    {errors.termsRead && (
      <p style={styledError.message}>{errors.termsRead.message}</p>
    )}
  </div>
);

export default Checkbox;
