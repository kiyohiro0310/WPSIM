// TODO: Please utilise below regex when start implementing

import * as yup from "yup";
// const passwordRules = /&^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5.}$/;
const nameRules = /^(?!.*  )[a-zA-Z]+(?:['. -][a-zA-Z]+)*$/;
// const titleRules = /^(?!.*  )[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
const studentEmailRules =/^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@student\.westernsydney\.edu\.au$/;
// const staffEmailRules =/^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@westernsydney\.edu\.au$/;
// const companyEmailRules = /^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+)*\.[a-zA-Z0-9]{2,}$/;
// const internationalRules = /^[0-9()+\- ]+$/;
// const domesticRules = /^(?:\+61|02|03|07|08|04|05)[0-9]{8}$/;

// Student register
// Register schema
export const registerStudentSchema = yup.object().shape({
    studentId: yup.string().min(1)
                           .max(100,{message:"Exceeded limit of 100 characters"})
                           .matches(nameRules,{message:"Please enter valid first name"})
                           .required("This field is required!!"),
    firstName: yup.string().min(1)
                           .max(100,{message:"Exceeded limit of 100 characters"})
                           .matches(nameRules,{message:"Please enter valid first name"})
                           .required("This field is required!!"),
    lastName: yup.string().min(1)
                            .max(100,{message:"Exceeded limit of 100 characters"})
                            .matches(nameRules,{message:"Please enter valid last name"})
                            .required("This field is required!!"),
    studentEmail:yup.string().email()
                            .max(254,{message:"Exceeded limit of 254 characters"})
                            .matches(studentEmailRules,{message:"Please enter valid student email"})
                            .required("This field is required!!"),
});