import React from "react";

export default function RadioButton({ label, id, options, formik, b_error }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xl font-bold">
        {label}
      </label>

      {options.map((option, index) => (
        <div key={index} className="mb-2 space-x-2">
          <input
            type="radio"
            id={option.value}
            name={id}
            value={option.value}
            onChange={formik.handleChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}

      {formik.errors[id] && formik.touched[id] && (
        <p className="text-red-600 mb-2">
          {formik.errors[id].charAt(0).toUpperCase() +
            formik.errors[id].slice(1)}
        </p>
      )}
      {b_error && (
        <p className="text-red-600 mb-2">
          {b_error.charAt(0).toUpperCase() + b_error.slice(1)}
        </p>
      )}
    </div>
  );
}
