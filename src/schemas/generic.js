import * as yup from "yup";

// const passwordRules = /&^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5.}$/;
const nameRules = /^(?!.*  )[a-zA-Z]+(?:['. -][a-zA-Z]+)*$/;
const internationalRules = /^[0-9()+\- ]+$/;
const domesticRules = /^(?:\+61|02|03|07|08|04|05)[0-9]{8}$/;

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1)
    .max(100, { message: "Exceeded limit of 100 characters" })
    .matches(nameRules, { message: "Please enter valid first name" })
    .required("This field is required!!"),
  lastName: yup
    .string()
    .min(1)
    .max(100, { message: "Exceeded limit of 100 characters" })
    .matches(nameRules, { message: "Please enter valid last name" })
    .required("This field is required!!"),
  contactInternational: yup
    .string()
    .min(7)
    .max(26, { message: "Exceeded limit of 26 characters" })
    .matches(internationalRules, {
      message: "Please enter valid contact number",
    })
    .required("This field is required!!"),
  contactDomestic: yup
    .string()
    .min(10)
    .max(17, { message: "Exceeded limit of 17 characters" })
    .matches(domesticRules, { message: "Please enter valid contact number" })
    .required("This field is required!!"),
});