import * as yup from "yup";

const contactSchema = yup.object().shape({
  fullname: yup.string("Enter a Valid String").required("Required"),
  email: yup
    .string("Enter a Valid String")
    .email("Enter a Valid Email")
    .required("Required"),
  message: yup.string("Enter a Valid String").required("Required"),
  phone: yup.string("Enter a Valid String"),
  website: yup.string("Enter a Valid String"),
});

export default contactSchema;
