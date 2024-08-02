import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../context/Logincontext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // const [courses, setcourses] = useState([]);
  const { buyedcourse ,accesscourse } = useContext(loginContext);
  // console.log(buyedcourse);


  // console.log(courses.length);
  useEffect(() => {
    accesscourse()
  },[]);

  return (
    <div className="p-20 max-sm:p-5">
      <h1 className="text-2xl text-[#8B77E8] font-semibold">All Courses</h1>
      <div className="w-full  flex items-start justify-center gap-5 flex-wrap mt-8" >
        {buyedcourse  &&  buyedcourse.length > 0 ?
          buyedcourse.map((course, i) => (
            <div
              key={i}
              className="w-[300px] rounded-md h-[200px] shadow-md  overflow-hidden"
            >
              <div className="imagediv w-full h-[80%] ">
                <img
                  src={course.courseimage.url}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="start flex justify-between items-center p-1">
              <h1 className="text-lg text-[#8B77E8]">{course.coursename}</h1>
             <Link to={`/dashboard/course/${course._id}`}> <button className="text-sm bg-[#8B77E8] text-white px-2 py-1 rounded-sm">Start Course</button></Link>
              </div>
            </div>
          )): <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUnw-XV8gvRIhoXrubp-8iTz4qkDWZkuKkg&s" alt="" /> }
      </div>
    </div>
  );
};

export default Dashboard;
