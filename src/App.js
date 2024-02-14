import { Fragment } from "react";
import { GenerateForm } from "./components/Form";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";

const onSubmit = (values, actions) => {
  // Send value to backend
  console.log("You've submitted.");
  console.log(values);

  actions.resetForm();

};

function App() {
  const userFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <Fragment>

      <div className="container mx-auto flex p-12">
        <GenerateForm
          fields={[
            { label: "First Name", type: "text", id: "firstName" },
            { label: "Last Name", type: "text", id: "lastName" },
            { label: "Age", type: "number", id: "age" },
          ]}
          formik={userFormik}
        />

      </div>
    </Fragment>
  );
}

export default App;
