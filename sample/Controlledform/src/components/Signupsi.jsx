import React, { useState } from 'react'


const Signupsi = () => {
  // manage state data
  let [dataForm, setdataForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // for error handling
  let [error, setError] = useState({});
  let [submitData, setSubmitData] = useState(null);

  // logic for submit form
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = dataForm;

    // temporary error object
    let newError = {};

    // validation
    if (!name) {
      newError.name = "Name field is required";
    }
    
    if (!email) {
    newError.email = "Email field is required"; // always assign to the email key
    } else if (!email.includes("@")) {
    newError.email = "Enter a valid email"; // this will now work
    }
    if (!password) {
      newError.password = "Password field is required";
    }
    if (!confirmPassword) {
      newError.confirmPassword = "Confirm password field is required";
    } else if (password !== confirmPassword) {
      newError.confirmPassword = "Password is not matching";
    }

    // if there are errors, set error state and stop submission
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    // store data in localStorage
    setSubmitData(dataForm);
    //send data in local storage
    localStorage.setItem("signUpData", JSON.stringify(dataForm));
    //get the data from local storage
    let saveData = JSON.parse(localStorage.getItem("signUpData"));
    console.log(saveData)

    // reset form fields
    setdataForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    // clear errors after successful submission
    setError({});
  }

  // logic for handle change
  function handleChange(e) {
    const { name, value } = e.target;
    setdataForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          id="username"
          name="name"
          value={dataForm.name}
          onChange={handleChange}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        <br />

        <label htmlFor="useremail">Email:</label>
        <input
          type="email"
          id="useremail"
          name="email"
          value={dataForm.email}
          onChange={handleChange}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <br />

        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          id="pass"
          name="password"
          value={dataForm.password}
          onChange={handleChange}
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        <br />

        <label htmlFor="confirm">Confirm Password:</label>
        <input
          type="password"
          id="confirm"
          name="confirmPassword"
          value={dataForm.confirmPassword}
          onChange={handleChange}
        />
        {error.confirmPassword && (
          <p style={{ color: "red" }}>{error.confirmPassword}</p>
        )}
        <br />

        <button type="submit">Sign Up</button>

        {/* Display submitted data */}
        {submitData && (
          <div>
            <h3>Data of user</h3>
            <p>Username: {submitData.name}</p>
            <p>Email: {submitData.email}</p>
            <p>Password: {submitData.password}</p>
            <p>Confirm Password: {submitData.confirmPassword}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signupsi;