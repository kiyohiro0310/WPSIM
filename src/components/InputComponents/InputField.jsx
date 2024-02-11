import React from 'react'

// TODO (Hoang): Create another compoenent file for dropdown input field
export default function InputField({label, value, id, type, formik}) {
  return (
    <div className="flex flex-col">
        <label htmlFor={id} className="text-xl font-bold">{label}</label>
        <input
          className="border-2 rounded-md p-3 mb-2"
          type={type}
          id={id}
          value={value}
          onChange={formik.handleChange}
          placeholder={`Enter your ${label}`}
          onBlur={formik.handleBlur}
        />
      </div>
  )
}
