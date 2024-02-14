import React from "react";
import InputField from "./InputComponents/InputField";
import SubmitButton from "./Buttons/SubmitButton";
import DropdownInputField from "./InputComponents/DropdownInputField";

// TODO: Kiyo will create generate form function
// 1. Create function for generate form
// This form parameter should be array
// This methid create form on basis of parameters
export function GenerateForm({fields, formik}) {
  return (
    generateForm(fields, formik)
  );

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
          // If type is not date or input field is not dropdown return text input field
          if (item.type === "dropdown") return <p>Return dropdown input field</p>;
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
        <SubmitButton formik={formik}/>
      </form>
    );
  }