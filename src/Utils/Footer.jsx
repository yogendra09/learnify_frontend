import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-max bg-[#8B77E8] py-10 px-20 flex flex-col items-center">
      <h1 className="mainlogoheading text-center text-white">Learnify</h1>
      <div className="socialmedia flex gap-5">
      <i className="text-white text-2xl ri-instagram-line"></i>
      <i className="text-white text-2xl ri-dribbble-fill"></i>
      <i className="text-white text-2xl ri-github-line"></i>
      <i className="text-white text-2xl ri-linkedin-line"></i>
      </div>
      <div className="links flex gap-4 text-sm mt-4 text-white">
        <h1>Porfolio</h1>
        <h1>Events</h1>
        <h1>Hosting</h1>
        <h1>Careers</h1>
        <h1>Contact us</h1>
        <h1>Blog </h1>
      </div>
      <div className="links flex gap-4 text-sm mb-4 text-white">
        <h1>Location</h1>
        <h1>Shop</h1>
        <h1>New</h1>
        <h1>Sale</h1>
        <h1>Special Offers</h1>
      </div>
      <div className="links flex gap-4 text-sm mb-4 text-white">
        <h1>About Us</h1>
        <h1>Terms & Conditions</h1>
        <h1>Privacy Policy</h1>
      </div>
    </div>
  );
};

export default Footer;
