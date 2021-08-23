import { emailValidation } from "../../../../../validateForm";

const EmailInput = ({ register, errors, styledError }) => (
  <div className="form-control-wrapper">
    <label className="form-label" htmlFor="email">
      Email:
    </label>
    <input
      {...register("email", { ...emailValidation })}
      id="email"
      placeholder="enter your email"
      style={errors.email ? styledError.input : null}
      className="form-control e"
    ></input>
    {errors.email && <p style={styledError.message}>{errors.email.message}</p>}
  </div>
);

export default EmailInput;
