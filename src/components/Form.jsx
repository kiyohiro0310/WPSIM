import React from "react";
import InputField from "./InputComponents/InputField";
import SubmitButton from "./Buttons/SubmitButton";
import Dropdown from "./InputComponents/Dropdown";
import DatePicker from "./InputComponents/DatePicker";
import RadioButton from "./InputComponents/RadioButton";
import CheckBox from './InputComponents/CheckBox';
import TextArea from './InputComponents/TextArea';

export function GenerateForm({ fields, formik }) {
  return generateForm(fields, formik);
}

export function generateForm(...args) {
  // 1. Get formik
  const formik = args[1];
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="shadow-lg rounded-md p-3 w-1/2 mx-auto justify-center items-center"
    >
      {args[0].map((item, index) => {
        if (item.type === "dropdown")
          return (
            <Dropdown
              key={index}
              label={item.label}
              value={formik.values[item.id]}
              id={item.id}
              options={item.options}
              formik={args[1]}
            />
          );
        else if (item.type === "date")
          return (
            <DatePicker
              key={index}
              label={item.label}
              value={formik.values[item.id]}
              id={item.id}
              formik={args[1]}
            />
          );
        else if (item.type === "textarea")
          return (
            <TextArea
              key={index}
              label={item.label}
              value={formik.values[item.id]}
              id={item.id}
              formik={args[1]}
            />
          );
        else if (item.type === "checkbox")
          return (
            <CheckBox
              key={index}
              label={item.label}
              value={formik.values[item.id]}
              options={item.options}
              id={item.id}
              formik={args[1]}
            />
          );
        else if (item.type === "radio")
          return (
            <RadioButton
              key={index}
              label={item.label}
              value={formik.values[item.id]}
              options={item.options}
              id={item.id}
              formik={args[1]}
            />
          );
        else
          return (
            <InputField
              key={index}
              label={item.label}
              value={formik.values[item.id]}
              id={item.id}
              type={item.type}
              formik={args[1]}
            />
          );
      })}
      <SubmitButton formik={formik} />
    </form>
  );
}
