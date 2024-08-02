import React, { createContext, useEffect, useState } from "react";
import axios from "../api/Axios";

export const loginContext = createContext();

const Logincontext = (props) => {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [allcourse, setallcourse] = useState({});
  const [buyedcourse, setbuyedcourse] = useState();
  const [axioserror, setaxioserror] = useState("");

  const userloggedin = async () => {
    try {
      await axios.get("/");
      setLogin(true);
    } catch (error) {
      console.log(error);
      setLogin(false);
    }
  };

  const userloggedout = async () => {
    try {
      await axios.get("/user/signout");
      setLogin(false);
    } catch (error) {
      console.log(error);
      setLogin(true);
    }
  };

  const logedinuser = async () => {
    try {
      const response = await axios.post("/user");
      setAdmin(response.data.student.admin);
    } catch (error) {
      console.log(error);
      setAdmin(null);
    }
  };

  const allcourses = async () => {
    try {
      const response = await axios.get("/course/allcourses");
      setallcourse(response.data);
    } catch (error) {
      console.log(error.response.data.message);
      setallcourse(null);
      setaxioserror(error.response.data.message);
    }
  };

  const accesscourse = async () => {
    try {
      const { data } = await axios.post("/course/buyedcourse");
      setbuyedcourse(data.coursebuy);
    } catch (error) {
      console.log(error.response.data.message);
      // alert(error.response.data.message);
      setbuyedcourse(null);
    }
  };

  useEffect(() => {
    userloggedin();
    logedinuser();
    allcourses();
    accesscourse();
  }, [login]);

  return (
    <loginContext.Provider
      value={{
        login,
        setLogin,
        admin,
        setAdmin,
        userloggedout,
        allcourse,
        allcourses,
        buyedcourse,
        accesscourse,
        setbuyedcourse,
        axioserror,
      }}
    >
      {props.children}
    </loginContext.Provider>
  );
};

export default Logincontext;
