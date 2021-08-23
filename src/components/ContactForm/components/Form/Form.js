import { useForm } from "react-hook-form";

import {
  NameInput,
  SurnameInput,
  EmailInput,
  TextareaInput,
  RadioInput,
  Checkbox,
} from "./FormControl";

const styledError = {
  message: {
    color: "crimson",
    fontSize: "14px",
  },
  input: { border: "1px solid crimson" },
};

const Form = ({ setIsSubmitted }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <p className="paragraph-required">*All fields required</p>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <NameInput
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <SurnameInput
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <EmailInput
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <TextareaInput
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <div className="form-control-wrapper">
          <div>
            <p className="form-paragraph">Geneder options:</p>

            <RadioInput register={register} value="female" label="female" />

            <RadioInput register={register} value="male" label="male" />

            <RadioInput register={register} value="other" label="other" />

            {errors.gender && (
              <p style={styledError.message}>{errors.gender.message}</p>
            )}
          </div>
        </div>

        <Checkbox
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <button className="form-button">send</button>
      </form>
    </>
  );
};

export default Form;
