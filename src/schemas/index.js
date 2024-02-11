import * as yup from "yup";


// TODO: Naga create schema for input field validation
// TODO: Please refer this documentdation when implementing
// TODO: https://westernsydneyedu.sharepoint.com/:x:/r/sites/WPMISProject/Shared%20Documents/Documentation/Updated%202024%20Documentation/Technical%20Requirements/Input%20Validation%20Standards.xlsx?d=wbf33d67bc4794bf189b7f4ea8d0e227c&csf=1&web=1&e=EvuxgQ
// Start date should be past, end date should be future
// domain emal => @student.western, staff: @westernsydney
const passwordRules = /&^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5.}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(8).matches(passwordRules, {message: "Please create a stronger password"}).required(),
    comfirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords mush match"),
});