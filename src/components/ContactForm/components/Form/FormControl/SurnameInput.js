import { surnameValidation } from "../../../../../validateForm";

const SurnameInput = ({ register, errors, styledError }) => (
  <div className="form-control-wrapper">
    <label className="form-label" htmlFor="surname">
      Surname:
    </label>
    <input
      {...register("surname", { ...surnameValidation })}
      id="surname"
      placeholder="enter your surname"
      style={errors.surname ? styledError.input : null}
      className="form-control"
    ></input>
    {errors.surname && (
      <p style={styledError.message}>{errors.surname.message}</p>
    )}
  </div>
);

export default SurnameInput;
