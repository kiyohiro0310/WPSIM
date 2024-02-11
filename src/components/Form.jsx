import { useFormik } from "formik";
import React from "react";
import InputField from "./InputField";
import SubmitButton from "./Buttons/SubmitButton";
import { basicSchema } from "../schemas";

const onSubmit = () => {
    console.log("Submitted");
}
// Create function to make form
// parameters should be array
export default function Form() {
  // This formik is for sample
  const userFormik = useFormik({
    initialValues: {
      email: "",
      age: 0,
      password: "",
      confirmPassword: ""
    },
    validationSchema: basicSchema,
    onSubmit
  });

  console.log(userFormik);

  return (
    <form onSubmit={userFormik.handleSubmit} className="shadow-lg rounded-md p-3 w-1/2 mx-auto justify-center items-center">
      <InputField
        value={userFormik.values.email}
        id="email"
        type="email"
        formik={userFormik}
      />
      <InputField
        value={userFormik.values.age}
        id="age"
        type="number"
        formik={userFormik}
      />
      <InputField
        value={userFormik.values.password}
        id="password"
        type="password"
        formik={userFormik}
      />
      <InputField
        value={userFormik.values.confirmPassword}
        id="confirmPassword"
        type="password"
        formik={userFormik}
      />
      <SubmitButton />
    </form>
  );
}
