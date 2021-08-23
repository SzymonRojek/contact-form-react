import { textareaValidation } from "../../../../../validateForm";

const Textarea = ({ register, errors, styledError }) => (
  <div className="form-control-wrapper">
    <label className="form-label" htmlFor="description">
      Description:
    </label>
    <textarea
      {...register("description", { ...textareaValidation })}
      id="description"
      style={errors.description ? styledError.input : null}
      className="form-control form-control-textarea"
    ></textarea>
    {errors.description && (
      <p style={styledError.message}>{errors.description.message}</p>
    )}
  </div>
);

export default Textarea;
