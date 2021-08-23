export const nameValidation = {
  required: { value: true, message: "Name is required" },
  pattern: { value: /^[A-Za-z]+$/i, message: "Name is invalid" },
  minLength: { value: 3, message: "Min length of name is 3" },
  maxLength: { value: 15, message: "Max length of name is 15" },
};

export const surnameValidation = {
  required: { value: true, message: "Surname is required" },
  pattern: { value: /^[A-Za-z]+$/i, message: "Surname is invalid" },
  minLength: { value: 3, message: "Min length of surname is 3" },
  maxLength: { value: 15, message: "Max length of surname is 15" },
};

export const emailValidation = {
  required: { value: true, message: "Email is required" },
  pattern: {
    value: /^$|^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/,
    message: "Email is invalid",
  },
};

export const textareaValidation = {
  required: { value: true, message: "Description is required" },
  minLength: { value: 10, message: "Description is to short" },
};

export const radioButtonValidation = {
  required: { value: true, message: "Type of gender is required" },
};

export const checkboxValidation = {
  required: { value: true, message: "Please, read terms & condition" },
};
