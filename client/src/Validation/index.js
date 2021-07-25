import * as yup from "yup";

export const tenantSchema = yup.object().shape({
  fname: yup.string().required(),
  otherNames: yup.string().required(),
  nat_id: yup.string().required(),
  email: yup.string(),
  phoneno: yup.string(),
  nok_name: yup.string(),
  nok_phone: yup.string(),
  nok_relation: yup.string(),
  hseno: yup.number().required(),
  rent: yup.number().required(),
  checkin: yup.string().required(),
});
export const userSchema = yup.object().shape({
  fname: yup.string().required(),
  otherNames: yup.string().required(),
  nat_id: yup.string().required(),
  designation: yup.string(),
  phoneno: yup.string(),
  email: yup.string(),
  password: yup.string().min(5),
});
