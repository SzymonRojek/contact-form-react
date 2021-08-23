import { radioButtonValidation } from "../../../../../validateForm";

const RadioInput = ({ register, value, label }) => (
  <div>
    <input
      {...register("gender", { ...radioButtonValidation })}
      type="radio"
      value={value}
      id="gender"
    />
    <label className="form-label form-label-padding" htmlFor="gender">
      {label}
    </label>
  </div>
);

export default RadioInput;
