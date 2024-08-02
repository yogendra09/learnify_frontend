import React, { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Register from "../components/Register";
import { loginContext } from "../context/Logincontext";
import Addcourse from "../components/Addcourse";
import Updatecourse from "../components/Updatecourse";
import Coursedetails from "../components/Coursedetails";
import Dashboard from "../components/Dashboard";
import ShowLecture from "../components/ShowLecture";
import Notfound from "../components/Notfound";

const Router = () => {
  // const [auth, setauth] = useState(false);

  const { login, admin } = useContext(loginContext);
  // console.log(login);
  return (
    <Routes>
      <Route path="/" element={login ? <Home /> : <Navigate to={`/login`} />} />
      <Route
        path="/login"
        element={login ? <Navigate to={`/`} /> : <Login />}
      />
      <Route
        path="/register"
        element={login ? <Navigate to={`/`} /> : <Register />}
      />
      <Route
        path="/about"
        element={login ? <About /> : <Navigate to={`/login`} />}
      />
      <Route
        path="/courses"
        element={login ? <Courses /> : <Navigate to={`/login`} />}
      />

      <Route
        path="/courses/:id"
        element={login ? <Coursedetails /> : <Navigate to={`/login`} />}
      />
      <Route
        path="/addcourse"
        element={login ? <Addcourse /> : <Navigate to={`/login`} />}
      />
      <Route
        path="/contact"
        element={login ? <Contact /> : <Navigate to={`/login`} />}
      />
      <Route
        path="/updatecourse/:id"
        element={admin ? <Updatecourse /> : <Navigate to={`/courses`} />}
      />

      <Route path="*" element={login ? <Notfound /> : <Notfound />}></Route>
      <Route
        path="/dashboard"
        element={login ? <Dashboard /> : <Navigate to={`/login`} />}
      />
      <Route
        path="/dashboard/course/:id"
        element={login ? <ShowLecture /> : <Navigate to={`/login`} />}
      />
    </Routes>
  );
};

export default Router;
