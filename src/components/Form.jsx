import { useFormik } from "formik";
import React from "react";
import InputField from "./InputComponents/InputField";
import SubmitButton from "./Buttons/SubmitButton";
import { studentFormikInitialValues } from "../formiks/student";
import { basicSchema } from "../schemas";

// This submit handler will use to send data into backend
const onSubmit = () => {
  console.log("Submitted");
};
// Create function to make form
// parameters should be array
export function Form() {
  // This formik is for sample
  const userFormik = useFormik({
    initialValues: studentFormikInitialValues,
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(userFormik);

  return (
    <form
      onSubmit={userFormik.handleSubmit}
      className="shadow-lg rounded-md p-3 w-1/2 mx-auto justify-center items-center"
    >
      <InputField
        label="Email"
        value={userFormik.values.email}
        id="email"
        type="email"
        formik={userFormik}
      />
      <InputField
        label="Age"
        value={userFormik.values.age}
        id="age"
        type="number"
        formik={userFormik}
      />
      <InputField
        label="Password"
        value={userFormik.values.password}
        id="password"
        type="password"
        formik={userFormik}
      />
      <InputField
        label="Confirm Password"
        value={userFormik.values.confirmPassword}
        id="confirmPassword"
        type="password"
        formik={userFormik}
      />
      <SubmitButton />
    </form>
  );
}

// 1. Create function for generate form
// This form parameter should be array
// This methid create form on basis of parameters
// How to use => generateForm.apply(this, array);
export function generateForm(...args) {
  // This formik is for sample

  return (
    <form
      onSubmit={args.formik.handleSubmit}
      className="shadow-lg rounded-md p-3 w-1/2 mx-auto justify-center items-center"
    >

      {/* <InputField
        label="Email"
        value={args.formik.values.email}
        id="email"
        type="email"
        formik={args.formik}
      />
      <InputField
        label="Age"
        value={args.formik.values.age}
        id="age"
        type="number"
        formik={args.formik}
      />
      <InputField
        label="Password"
        value={args.formik.values.password}
        id="password"
        type="password"
        formik={args.formik}
      />
      <InputField
        label="Confirm Password"
        value={args.formik.values.confirmPassword}
        id="confirmPassword"
        type="password"
        formik={args.formik}
      /> */}
      <SubmitButton />
    </form>
  );
}
