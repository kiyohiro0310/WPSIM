import React from 'react'

// dropdown, date picker
export default function NumberInputField({value, id, type, formik}) {
  return (
    <div className="flex flex-col">
        <label htmlFor={id} className="text-xl font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</label>
        <input
          className="border-2 rounded-md p-3 mb-2"
          type={type}
          id={id}
          value={value}
          onChange={formik.handleChange}
          placeholder={`Enter your ${id}`}
          onBlur={formik.handleBlur}
        />
      </div>
  )
}
