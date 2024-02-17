import * as yup from "yup";


const nameRules = /^(?!.*  )[a-zA-Z]+(?:['. -][a-zA-Z]+)*$/;
const titleRules = /^(?!.*  )[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
const studentEmailRules =
  /^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@student\.westernsydney\.edu\.au$/;
const staffEmailRules =
  /^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@westernsydney\.edu\.au$/;
const companyEmailRules =
  /^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+)*\.[a-zA-Z0-9]{2,}$/;
const internationalRules = /^[0-9()+\- ]+$/;
const domesticRules = /^(?:\+61|02|03|07|08|04|05)[0-9]{8}$/;

// TODO (Hoang): 1. Please add new validation in basicSchema for course name, course id, subject id,
// TODO: specialization, year enrollled, internship ref number. Please refer documentation for valiation rule
// TODO (Hoang): 2. Categorise this for student, staff, company. I've created file for each, please use them.

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
  position: yup
    .string()
    .min(1)
    .max(100, { message: "Exceeded limit of 100 characters" })
    .matches(titleRules, { message: "Please enter valid position" })
    .required("This field is required!!"),
  jobTitle: yup
    .string()
    .min(1)
    .max(100, { message: "Exceeded limit of 100 characters" })
    .matches(titleRules, { message: "Please enter valid job title" })
    .required("This field is required!!"),
  employerName: yup
    .string()
    .min(1)
    .max(150, { message: "Exceeded limit of 150 characters" })
    .matches(nameRules, { message: "Please enter valid employer name" })
    .required("This field is required!!"),
  subjectName: yup
    .string()
    .min(1)
    .max(100, { message: "Exceeded limit of 100 characters" })
    .matches(titleRules, { message: "Please enter valid subject name" })
    .required("This field is required!!"),
  studentEmail: yup
    .string()
    .email()
    .max(254, { message: "Exceeded limit of 254 characters" })
    .matches(studentEmailRules, { message: "Please enter valid student email" })
    .required("This field is required!!"),
  staffEmail: yup
    .string()
    .email()
    .max(254, { message: "Exceeded limit of 254 characters" })
    .matches(staffEmailRules, { message: "Please enter valid staff email" })
    .required("This field is required!!"),
  companyEmail: yup
    .string()
    .email()
    .max(254, { message: "Exceeded limit of 254 characters" })
    .matches(companyEmailRules, { message: "Please enter valid company email" })
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

  keyResponsibilities: yup
    .string()
    .min(1)
    .max(4000, { message: "Exceeded limit of 4000 characters" })
    .required("This field is required!!"),
  startDate: yup.date().min().required("This field is required!!"),
  endDate: yup
    .date()
    .min(yup.ref("startDate"), "End date cannot be before Start date")
    .required("This field is required!!"),
});

// Please ignore this, it's sample
export const sampleSchema = yup.object().shape({
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
  date: yup.string().required("This field is required!"),
  position: yup.array().required("This field is required!!"),
});
