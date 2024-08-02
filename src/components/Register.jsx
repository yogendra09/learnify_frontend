import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/Axios"
import { loginContext } from "../context/Logincontext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const {login, setLogin} = useContext(loginContext)
  const navigate = useNavigate()


  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!firstname) {
        newErrors.firstname = "First Name is required";
      } else if (firstname.length < 4) {
        newErrors.firstname = "firstname must be at least 6 characters";
      }
      if (!lastname) {
        newErrors.lastname = "First Name is required";
      } else if (lastname.length < 4) {
        newErrors.lastname = "lastname must be at least 6 characters";
      }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      try {
        await axios.post("/user/signup", {email, firstname, lastname, password});
        setLogin(true)
        navigate("/")
      } catch (error) {
        setLogin(false)
        
      }
      console.log("Form  submitted");

    }
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="centerLogin shadow-md p-5 rounded-md bg-[#f0edff]">
        <h1 className="text-[#8B77E8] text-xl font-semibold my-4">Register</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            className="w-[300px] px-2 py-1 rounded-sm  "
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs leading-none">{errors.email}</p>
          )}
          <input
            className="w-[300px] px-2 py-1 rounded-sm  "
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs leading-none">{errors.email}</p>
          )}
          <input
            className="w-[300px] px-2 py-1 rounded-sm  "
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs leading-none">{errors.email}</p>
          )}
          <input
            className="w-[300px] px-2 py-1 rounded-sm"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-xs leading-none">
              {errors.password}
            </p>
          )}
          <button
            className="bg-[#8B77E8] text-white py-2 rounded-sm my-2"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="text-xs">
          Already have an account <Link to="/login" className="text-blue-600">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
