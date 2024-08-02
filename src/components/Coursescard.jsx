import React, { useContext } from "react";
import { loginContext } from "../context/Logincontext";
import { Link } from "react-router-dom";

const Coursescard = (props) => {
  const { admin } = useContext(loginContext);
  const { coursename, courseimage, price, _id } = props.course;
  // console.log(_id);

  return (
    <div className="w-[290px] h-[220px] overflow-hidden bg-slate-50 shadow-md rounded-md relative">
      <Link to={`/courses/${_id}`}>
        <div className="imagedb w-full h-[80%]">
          <img
            className="w-full h-full object-cover"
            src={courseimage.url}
            alt=""
          />
        </div>
      </Link>

      <div className="textdb w-full h-[20%] flex items-center px-2 justify-between">
        <h1 className="text-lg font-semibold">{coursename}</h1>
        <h1 className="text font-semibold">${price}</h1>
      </div>
      {admin ? (
        <Link to={`/updatecourse/${_id}`}>
          <button className="bg-[#8B77E8] absolute top-2 left-2 px-4 py-1 font-semibold text-white rounded-sm">
            Edit
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Coursescard;
