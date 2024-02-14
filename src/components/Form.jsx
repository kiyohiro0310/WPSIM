import React from "react";
import InputField from "./InputComponents/InputField";
import SubmitButton from "./Buttons/SubmitButton";
import DropdownInputField from "./InputComponents/DropdownInputField";

// Create function to make form
// parameters should be array

// TODO: Kiyo will create generate form function
// 1. Create function for generate form
// This form parameter should be array
// This methid create form on basis of parameters
// How to use => generateForm.apply(this, fields: array, formik);
export function generateForm(...args) {
  // 1. Get formik
  const formik = args[1];
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="shadow-lg rounded-md p-3 w-1/2 mx-auto justify-center items-center"
    >
      {args[0].map((item, index) => {
        // If type is not date or input field is not dropdown return text input field
        if (item.type !== "date")
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
        else return (
          <DropdownInputField 
            
          
          />
        );
      })}
      <SubmitButton />
    </form>
  );
}

// export function Form() {
//     // This formik is for sample
//     const userFormik = useFormik({
//       initialValues: studentFormikInitialValues,
//       validationSchema: basicSchema,
//       onSubmit,
//     });

//     console.log(userFormik);

//     return (
//       <form
//         onSubmit={userFormik.handleSubmit}
//         className="shadow-lg rounded-md p-3 w-1/2 mx-auto justify-center items-center"
//       >
//         <InputField
//           label="Email"
//           value={userFormik.values.email}
//           id="email"
//           type="email"
//           formik={userFormik}
//         />
//         <InputField
//           label="Age"
//           value={userFormik.values.age}
//           id="age"
//           type="number"
//           formik={userFormik}
//         />
//         <InputField
//           label="Password"
//           value={userFormik.values.password}
//           id="password"
//           type="password"
//           formik={userFormik}
//         />
//         <InputField
//           label="Confirm Password"
//           value={userFormik.values.confirmPassword}
//           id="confirmPassword"
//           type="password"
//           formik={userFormik}
//         />
//         <SubmitButton />
//       </form>
//     );
//   }
