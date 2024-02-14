import * as yup from "yup";


// TODO: Naga create schema for input field validation
// TODO: Please refer this documentdation when implementing
// TODO: https://westernsydneyedu.sharepoint.com/:x:/r/sites/WPMISProject/Shared%20Documents/Documentation/Updated%202024%20Documentation/Technical%20Requirements/Input%20Validation%20Standards.xlsx?d=wbf33d67bc4794bf189b7f4ea8d0e227c&csf=1&web=1&e=EvuxgQ
// Start date should be past, end date should be future
// domain emal => @student.western, staff: @westernsydney
const passwordRules = /&^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5.}$/;
const nameRules = /^(?!.*  )[a-zA-Z]+(?:['. -][a-zA-Z]+)*$/;
const titleRules = /^(?!.*  )[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
const studentEmailRules =/^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@student\.westernsydney\.edu\.au$/;
const staffEmailRules =/^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@westernsydney\.edu\.au$/;
const companyEmailRules = /^(?!\.)(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+)*\.[a-zA-Z0-9]{2,}$/;
const internationalRules = /^[0-9()+\- ]+$/;
const domesticRules = /^(?:\+61|02|03|07|08|04|05)[0-9]{8}$/;

export const basicSchema = yup.object().shape({

    //email: yup.string().email("Please enter a valid email").required(),
    //age: yup.number().positive().integer().required("Required"),
    //password: yup.string().min(8).matches(passwordRules, {message: "Please create a stronger password"}).required(),
    //comfirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords mush match"),
    firstName: yup.string().min(1)
                           .max(100,{message:"Exceeded limit of 100 characters"})
                           .matches(nameRules,{message:"Please enter valid first name"})
                           .required("This field is required!!"),
    lastName: yup.string().min(1)
                            .max(100,{message:"Exceeded limit of 100 characters"})
                            .matches(nameRules,{message:"Please enter valid last name"})
                            .required("This field is required!!"),
    position: yup.string().min(1)
                            .max(100,{message:"Exceeded limit of 100 characters"})
                            .matches(titleRules,{message:"Please enter valid position"})
                            .required("This field is required!!"),
    jobTitle: yup.string().min(1)
                          .max(100,{message:"Exceeded limit of 100 characters"})
                          .matches(titleRules,{message:"Please enter valid job title"})
                          .required("This field is required!!"),
    employerName: yup.string().min(1)
                              .max(150,{message:"Exceeded limit of 150 characters"})
                              .matches(nameRules,{message:"Please enter valid employer name"})
                              .required("This field is required!!"),
    subjectName: yup.string().min(1)
                              .max(100,{message:"Exceeded limit of 100 characters"})
                              .matches(titleRules,{message:"Please enter valid subject name"})
                              .required("This field is required!!"),
    studentEmail:yup.string().email()
                            .max(254,{message:"Exceeded limit of 254 characters"})
                            .matches(studentEmailRules,{message:"Please enter valid student email"})
                            .required("This field is required!!"),
    staffEmail:yup.string().email()
                           .max(254,{message:"Exceeded limit of 254 characters"})
                           .matches(staffEmailRules,{message:"Please enter valid staff email"})
                           .required("This field is required!!"),
    companyEmail:yup.string().email()
                           .max(254,{message:"Exceeded limit of 254 characters"})
                           .matches(companyEmailRules,{message:"Please enter valid company email"})
                           .required("This field is required!!"),
    contactInternational:yup.string().min(7)
                                    .max(26,{message:"Exceeded limit of 26 characters"})
                                    .matches(internationalRules,{message:"Please enter valid contact number"})
                                    .required("This field is required!!"),
    contactDomestic:yup.string().min(10)
                                    .max(17,{message:"Exceeded limit of 17 characters"})
                                    .matches(domesticRules,{message:"Please enter valid contact number"})
                                    .required("This field is required!!"),

    keyResponsibilities: yup.string().min(1)
                                      .max(4000,{message:"Exceeded limit of 4000 characters"})
                                      .required("This field is required!!"),
    startDate: Yup.date().required("This field is required!!"),
    endDate: Yup.date().min(Yup.ref('startDate'), "End date cannot be before Start date").required("This field is required!!"),

});