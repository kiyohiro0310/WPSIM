import React from "react";

export default function Dropdown({
  label,
  id,
  options,
  formik,
  b_error
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xl font-bold">
        {label}
      </label>
      <select
        className="border-2 rounded-md p-3 mb-2"
        id={id}
        onChange={formik.handleChange}
        placeholder="select your options"
      >
        <option>Please select from the list</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {formik.errors[id] && formik.touched[id] && (
        <p className="text-red-600 mb-2">
          {formik.errors[id].charAt(0).toUpperCase() +
            formik.errors[id].slice(1)}
        </p>
      )}
      {b_error && (
        <p className="text-red-600 mb-2">
          {b_error.charAt(0).toUpperCase() +
            b_error.slice(1)}
        </p>
      )}
    </div>
  );
}
