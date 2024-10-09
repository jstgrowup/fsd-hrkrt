import * as Yup from "yup";

export const formikInitialValuesforAuth = {
  email: "",
  password: "",
  confirmPassword: "",
};
export const authFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email")
    .email("Invalid email"),
  password: Yup.string().required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
