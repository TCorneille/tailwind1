import React from "react";

const Button = (props) => {
  return <div>
    <button type={props.type} className="button bg-primaryColor-200 text-[18px] hover:bg-primaryColor-200 text-amber-50 font-medium px-3 py-1 rounded-md">{props.value}</button>
  </div>;
};

export default Button;