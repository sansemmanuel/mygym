import React from "react";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-10">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <p className="mb-4">
            <strong className="font-medium">MyGym💪</strong> is a Comprehensive app for managing bookings, memberships, payments, and enhancing customer experience in gyms efficiently.
          </p>
         
          
          <p className="text-gray-400">©{new Date().getFullYear()} - SparkTech Solutions</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
