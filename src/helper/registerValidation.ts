import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup.string().email("its not propper email").required(),
  password: yup
    .string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(20, "Password is too long - should be 20 chars maximum.")
    .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters.")
    .required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  name: yup.string().required(),
  family: yup.string().required(),
});

export default registerSchema;
