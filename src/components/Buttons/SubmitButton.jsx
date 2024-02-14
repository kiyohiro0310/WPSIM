import React from "react";

export default function SubmitButton({ formik }) {
  console.log(formik.isSubmitting);
  return (
    <button
      type="submit"
      className="px-6 py-2 font-bold bg-red-700 rounded-md text-white hover:bg-red-800"
    >
      Submit
    </button>
  );
}
