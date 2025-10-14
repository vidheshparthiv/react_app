import { useState } from "react";

function Login() {
  const users = [
    { email: "user@gmail.com", password: "user123" },
    { email: "user2@gmail.com", password: "user1234" }
  ];

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let matchedUser = null;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === data.email) {
        matchedUser = users[i];
        break;
      }
    }

    if (matchedUser) {
      if (matchedUser.password === data.password) {
        alert("Login successful!");
      } else {
        alert("Incorrect password.");
      }
    } else {
      alert("User not found.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
