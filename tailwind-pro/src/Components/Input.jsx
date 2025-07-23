import React from "react";

function Input(props) {
  return <div>
    <input type={props.type} placeholder={props.placeholder} className="border-2 border-primary-color-500 rounded-sm p-2 w-full text-[18px]"/>
  </div>;
}

export default Input;
