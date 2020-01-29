import React from "react";
import { useFormik } from "formik";

const TodoListFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div>
      <h1>Formik test</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoListFormik;
