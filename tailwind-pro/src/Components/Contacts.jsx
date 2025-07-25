import React from "react";

const Contacts = ({ icon, heading, value }) => {
  return (
    <div>
      <div className=" flex items-center gap-2">
        <div className="img w-15 h-15 p-1 rounded-full border-2 border-dashed flex flex-col border-primaryColor-200">
          <div className="w-[100%] bg-primary-color-200 h-[100%] flex justify-center items-center rounded-full">
          <img src={icon} alt="" className="bg-primaryColor-700"/>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className="title font-bold text-2xl">{heading}</h2>
          
          <a href="#" className="underline text-primaryColor-200  text-[18px]">
              {value}
            </a>
       
        </div>
      </div>
    </div>
  );
};

export default Contacts;
