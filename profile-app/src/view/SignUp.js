import React, { useState } from "react";
import { signup } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const initialState = {
    username: "",
    password: "",
    campus: "",
    course: "",
  };
  const [state, setState] = useState(initialState);
  const history = useHistory()

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleSignup = async (user) => {
    try {
      const {data} = await signup(user);
      if(data){
        history.push("/")
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(state)
    setState(initialState);
};

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <label htmlFor="campus">Campus</label>
          <input
            type="campus"
            name="campus"
            value={state.campus}
            onChange={handleChange}
          />
          <label htmlFor="course">Course</label>
          <input
            type="course"
            name="course"
            value={state.course}
            onChange={handleChange}
          />
          <button type="submit">Create the Account</button>
        </form>
        <div>
          <h2>Hello!!</h2>
          <h3>Welcome to IronProfile!</h3>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
