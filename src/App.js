import { Fragment } from "react";
import { GenerateForm } from "./components/Form";
import { useFormik } from "formik";
import { sampleSchema } from "./schemas";

const onSubmit = (values, actions) => {
  // Send value to backend
  console.log("You've submitted.");
  console.log(values);

  actions.resetForm();
};

function App() {
  // 1. Define input fields
  const inputFields = [
    { label: "First Name", type: "text", id: "firstName" },
    { label: "Last Name", type: "text", id: "lastName" },
    { label: "Position", type: "text", id: "position" },
    { label: "Dropdown", type: "dropdown", id: "dropdown", options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
    ] },
  ]

  // 2. Create formik
  const userFormik = useFormik({
    //2-1. Set initial values for your input fields
    initialValues: {
      firstName: "",
      lastName: "",
      position: "",
      dropdown: ""
    },

    //2-2. Create your schema and set here for input validation
    validationSchema: sampleSchema,

    // 2-3. Create your submit handler method and set here
    onSubmit,
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
