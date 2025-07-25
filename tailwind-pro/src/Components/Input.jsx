import React from "react";
const variantClasses = {
  default: "border-gray-300 focus:ring-primaryColor-700",
  danger: "border-red-500 focus:ring-red-500",
};
function Input(props) {
  return <div>
    <input type={props.type} value={props.value} name={props.name} onChange={props.onChange} placeholder={props.placeholder} className={`border-2 border-primary-color-500 rounded-sm p-2 w-full text-[18px] ${variantClasses[props.variant]} ${props.className}`}/>
  </div>;
}

export default Input;
