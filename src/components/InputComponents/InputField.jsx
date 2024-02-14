import React from "react";

// TODO (Hoang): Create another compoenent file for dropdown input field
export default function InputField({ label, value, id, type, formik }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xl font-bold">
        {label}
      </label>
      <input
        className={
          formik.errors[id] && formik.touched[id]
            ? "border-red-600 border-2 rounded-md p-3 mb-2"
            : "border-2 rounded-md p-3 mb-2"
        }
        type={type}
        id={id}
        value={value}
        onChange={formik.handleChange}
        placeholder={`Enter your ${label}`}
        onBlur={formik.handleBlur}
      />
      {formik.errors[id] && formik.touched[id] && (
        <p className="text-red-600 mb-2">
          {formik.errors[id].charAt(0).toUpperCase() +
            formik.errors[id].slice(1)}
        </p>
      )}
    </div>
  );
}
