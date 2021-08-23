import { nameValidation } from "../../../../../validateForm";

const NameInput = ({ register, errors, styledError }) => (
  <div className="form-control-wrapper">
    <label className="form-label" htmlFor="name">
      Name:
    </label>
    <input
      {...register("name", { ...nameValidation })}
      id="name"
      placeholder="enter your name"
      style={errors.name ? styledError.input : null}
      className="form-control"
    ></input>
    {errors.name && <p style={styledError.message}>{errors.name.message}</p>}
  </div>
);

export default NameInput;
