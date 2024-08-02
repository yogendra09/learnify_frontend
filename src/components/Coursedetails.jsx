import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/Axios";
import Razorpay from "razorpay";

const Coursedetails = () => {
  const { id } = useParams();
  const [coursedets, setCoursedets] = useState({});
  const [newurl, seturl] = useState('');
  const [newprice, setnewprice] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate()

  const coursedetails = async () => {
    try {
      const { data } = await axios.get(`/course/details/${id}`);
      setCoursedets(data);
      seturl(data.courseimage.url);
      setnewprice(data.price);
    } catch (error) {
      console.log(error);
      seturl('');
    }
  };

  const createOrderId = async () => {
    try {
      const response = await axios.post(`/create/orderId`, { newprice:newprice*100 }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setOrderId(response.data.id);
    } catch (error) {
      console.error('Error creating order ID:', error);
    }
  };

  const handlePayment = async () => {
    createOrderId();
    if (!orderId) return; // Ensure orderId is available

    const options = {
      key: "rzp_test_GG5OUnq85pmaQI", // Enter the Key ID generated from the Dashboard
      amount: newprice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: coursedets.coursename,
      description: coursedets.description,
      image: newurl,
      order_id: orderId, // Pass the `id` obtained in the response of Step 1
      handler: async (response) => {
        try {
          const verificationResponse = await axios.post('/api/payment/verify', { response });
          if (verificationResponse.data === true) {
            alert("Payment successful");
            await axios.post(`/course/buynewcourse/`, {id});
            navigate("/dashboard")
          } else {
            alert("Payment failed");
          }
        } catch (error) {
          console.error('Error verifying payment:', error);
        }
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };

  useEffect(() => {
    coursedetails();
  }, []);

  return (
    <div className="coursedets w-full flex p-20 gap-10 max-sm:w-full max-sm:flex-col max-sm:p-5">
      <div className="coursemaindeetials w-[60%]">
        <h1 className="text-2xl font-semibold my-4">Course Details</h1>
        <p className="text-sm bg-[#CDC2FF] mt-2 w-max px-2 py-1 rounded-md">Course Name</p>
        <h1 className="text-xl capitalize mt-2 font-semibold text-[#8B77E8]">{coursedets.coursename}</h1>
        <p className="text-sm bg-[#CDC2FF] mt-2 w-max px-2 py-1 rounded-md">Course Description</p>
        <p className="text-sm mt-2">{coursedets.description}</p>
        <p className="text-sm bg-[#CDC2FF] mt-2 w-max px-2 py-1 rounded-md">Course Category</p>
        <p className="text-sm mt-2">{coursedets.category}</p>
        <p className="text-sm bg-[#CDC2FF] mt-2 w-max px-2 py-1 rounded-md">Course Instructor</p>
        <p className="text-sm mt-2">{coursedets.author}</p>
      </div>
      <div className="imagediv-and-buy-option w-[40%] max-sm:w-full">
        <div className="imagediv w-full h-[300px] rounded-md overflow-hidden">
          <img className="w-full h-full object-cover" src={newurl} alt="" />
        </div>
        <button onClick={handlePayment} className="bg-[#8B77E8] text-white px-2 py-1 mt-2 w-full capitalize rounded-md">Buy Now</button>
        <button className="bg-[#8B77E8] text-white px-2 py-1 mt-2 w-full capitalize rounded-md">${newprice}</button>
      </div>
    </div>
  );
};

export default Coursedetails;
