import { Fragment } from "react";
import { GenerateForm } from "./components/Form";
import { useFormik } from "formik";
import { sampleSchema } from "./schemas";


const onSubmit = (values, actions) => {
  console.log("You've submitted successfully.");
  console.log(values);
};

function App() {
  // 1. Define input fields
  const inputFields = [
    { label: "First Name", type: "text", id: "firstName" },
    { label: "Last Name", type: "text", id: "lastName" },
    { label: "Date", type: "date", id: "date" },
    { label: "Position", type: "checkbox", id: "position", options: [
      { label: "Staff", value: "staff"},
      { label: "Student", value: "student"},
      { label: "Company", value: "company"},
    ]}
  ]

  // 2. Create formik
  const userFormik = useFormik({
    //2-1. Set initial values for your input fields
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      position: ""
    },

    //2-2. Create your schema and set here for input validation
    validationSchema: sampleSchema,

    // 2-3. Create your submit handler method and set here
    onSubmit: onSubmit,
  });


  return (
    <Fragment>
      <div className="container mx-auto flex p-12">
        <GenerateForm
          fields={inputFields}
          formik={userFormik}
        />
      </div>
    </Fragment>

  );
}

export default App;
