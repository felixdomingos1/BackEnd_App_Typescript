import * as Yup from "yup";

const esquema = Yup.object().shape({
  firstName: Yup.string().max(50).required(),
  email: Yup.string().max(250).required(),
  password: Yup.string().max(50).required(),
});

export default esquema;
