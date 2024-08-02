import React, { useContext, useEffect } from "react";
import Coursescard from "./Coursescard";
import { loginContext } from "../context/Logincontext";

const Courses = () => {
  const { allcourse, allcourses, admin } = useContext(loginContext);

  useEffect(() => {
    allcourses();
  }, []);

  return (
    <div className="w-full py-20 flex items-start justify-center gap-5 flex-wrap mx-auto px-20 max-sm:w-full max-sm:px-5">
      {allcourse.length > 0 ? allcourse.map((course) => (
        <Coursescard course={course} key={course._id} admin={admin} id={course._id} />
      )) : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUnw-XV8gvRIhoXrubp-8iTz4qkDWZkuKkg&s" alt="" /> }
    </div>
  )
};

export default Courses;
