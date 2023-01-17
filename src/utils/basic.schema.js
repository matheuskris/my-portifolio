import * as Yup from "yup";

export const basicSchema = Yup.object({
  firstName: Yup.string().required("Put your Name"),
  lastName: Yup.string().required("Put your Last Name"),
  email: Yup.string().email().required(),
  phone: Yup.number(),
  message: Yup.string().required("please, write a message"),
});
