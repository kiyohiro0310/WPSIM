import { Fragment } from 'react';
import { Form, generateForm } from './components/Form';
import { useFormik } from "formik";
import { basicSchema } from "./schemas";

function App() {
  const userFormik = useFormik({
    initialValues: {
      email: "",
      age: 0,
      password: "",
      confirmPassword: ""
    },
    validationSchema: basicSchema,
  });
  return (
    <Fragment>
      <div className='container mx-auto flex p-12'>
        {/* <Form /> */}
        {generateForm([{label: "Email", type: "email", id: "email", value: "email"}])}
      </div>
    </Fragment>
  );
}

export default App;
