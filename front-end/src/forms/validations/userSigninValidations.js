import * as yup from "yup";

export const userSigninValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
});
