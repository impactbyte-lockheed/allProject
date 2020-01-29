import React from "react";
import { useForm } from "react-hook-form";

const ReacHooksForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
    localStorage.setItem("login", JSON.stringify(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">email</label>
        <input
          name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />

        {errors.email && errors.email.message}
      </div>
      <div>
        <label htmlFor="name">username</label>
        <input
          name="username"
          ref={register({
            validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.username && errors.username.message}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReacHooksForm;
