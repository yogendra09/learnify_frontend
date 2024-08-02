import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/Axios";

const Updatecourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lecturename, setlecturename] = useState("");
  const [description, setdescription] = useState("");
  const [lecturevideo, setlecturevideo] = useState(null);
  const [lectureimage, setlectureimage] = useState(null);
  const [loading, setlogin] = useState(false);

  const [alllecture, setalllectures] = useState([]);
  console.log(alllecture);

  const allLectures = async () => {
    try {
      const { data } = await axios.get(`/course/details/${id}`);
      setalllectures(data.lectures);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadLecture = async (e) => {
    e.preventDefault();
    setlogin(true)
    const formData = new FormData();
    formData.append("lectureimage", lectureimage);
    formData.append("lecturename", lecturename);
    formData.append("description", description);
    formData.append("lecturevideo", lecturevideo);

    try {
      const { data } = await axios.post(`/course/addlecture/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      if(data){
        setlogin(false)
      }
      setlecturename("");
      setdescription("");
      setlectureimage(null);
      setlecturevideo(null);
      allLectures();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allLectures();
  }, []);

  return loading ? (
    "loading"
  ) : (
    <div className="w-full p-20 relative max-sm:p-4 ">
      <div className="showlectures-or-addlectures flex gap-3 items-center justify-between">
        <h1 className="bg-[#ececf0] text-[#6a4cee] py-1 px-2 rounded-md">
          Lectures Added to Your Course
        </h1>
        <h1 className="bg-[#8B77E8] text-white px-2 py-1 rounded-md">
          Add new Lecture
        </h1>
      </div>
      <div className="showlectures-or-addlectures py-5 flex gap-8 max-sm:flex-col-reverse max-sm:w-full">
        <div className="lectures w-1/2 flex flex-col gap-3 max-sm:w-full">
          {alllecture &&
            alllecture.map((lecture, i) => (
              <div
                key={i}
                className="video w-full h-[80px] bg-zinc-50 shadow-md flex p-2 rounded-md gap-2"
              >
                <div className="videoimg w-1/3 h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={lecture.lectureimage.url}
                    alt=""
                  />
                </div>
                <div className="lecturedisc w-2/3 flex justify-between items-center">
                  <div className="info">
                    <h1 className="text-md ">{lecture.lecturename}</h1>
                    <h1 className="text-xs">{lecture.description}</h1>
                  </div>
                  <div className="edit-deletbtn flex gap-3">
                    <i className="text-xl ri-edit-box-fill"></i>
                    <i className="text-xl ri-delete-bin-5-fill"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="from-to-add-lectures w-1/2 bg-slate-50 shadow-lg max-sm:w-full rounded-md">
          <form className="flex flex-col gap-2 p-2" onSubmit={uploadLecture}>
            <input
              className="rounded-sm px-2 py-1"
              type="text"
              placeholder="Lecture No Or Title"
              value={lecturename}
              onChange={(e) => setlecturename(e.target.value)}
            />
            <input
              className="rounded-sm px-2 py-1"
              type="text"
              placeholder="Lecture description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <input
              className="rounded-sm py-1"
              type="file"
              placeholder="Lecture Image"
              onChange={(e) => setlectureimage(e.target.files[0])}
            />
            <input
              className="rounded-sm py-1"
              type="file"
              placeholder="Lecture Video"
              onChange={(e) => setlecturevideo(e.target.files[0])}
            />
            <button className="bg-[#8B77E8] text-white py-1" type="submit">
              Add Lecture
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatecourse;
