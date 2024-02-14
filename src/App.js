import { Fragment } from "react";
import { generateForm } from "./components/Form";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";

const onSubmit = () => {
  console.log("Submitted");
};
function App() {
  const userFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(userFormik.errors);
  return (
    <Fragment>
      <div className="container mx-auto flex p-12">
        {/* // How to use => generateForm.apply(this, fields: array, formik); */}
        {/* id and formik name must be same*/}
        {generateForm(
          [
            { label: "First Name", type: "text", id: "firstName" },
            { label: "Last Name", type: "text", id: "lastName" },
            { label: "Drop down", type: "dropdown", id: "dropdown" },
          ],
          userFormik
        )}
      </div>
    </Fragment>
  );
}

export default App;
