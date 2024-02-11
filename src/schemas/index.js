import * as yup from "yup";

const passwordRules = /&^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5.}$/;

// Start date should be past, end date...
// domain emal => @student.western, staff: @westernsydney
export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(8).matches(passwordRules, {message: "Please create a stronger password"}).required(),
    comfirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords mush match"),
});