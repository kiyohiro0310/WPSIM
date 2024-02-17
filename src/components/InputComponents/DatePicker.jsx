import React from "react";

export default function DatePicker({ label, value, id, formik, b_error }) {
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
        type="date"
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
      {b_error && formik.touched[id] && (
        <p className="text-red-600 mb-2">
          {b_error.charAt(0).toUpperCase() +
            b_error.slice(1)}
        </p>
      )}
    </div>
  );
}
