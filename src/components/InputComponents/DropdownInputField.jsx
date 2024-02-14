import React from "react";

export default function DropdownInputField({label, value, id, options, formik}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-xl font-bold">{label}</label>
            <select
                className="border-2 rounded-md p-3 mb-2"
                id={id}
                value={value}
                onChange={formik.handleChange}
                placeholder="select your options"
            >
                <option value="">Please select from the list</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}