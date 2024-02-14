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
          if (item.type === "dropdown")
          return (
            <DropdownInputField
              key={index}
              label="Dropdown"
              value={formik.values[item.id]}
              id={item.id}
              // otions field should be input as item.options
              // ottions={item.option}
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
                { value: "4", label: "Option 4" },
                { value: "5", label: "Option 5" },
              ]}
              formik={args[1]}
            ></DropdownInputField>
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
        <SubmitButton formik={formik}/>
      </form>
    );
  }