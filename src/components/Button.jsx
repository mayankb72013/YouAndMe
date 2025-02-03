import React from 'react';
import Logo from '../icons/logo';

const variant = {
  "type1": "bg-gradient-to-tr from-pink-600 via-pink-500 to-pink-400 rounded-3xl text-white",
  "type2": "bg-white rounded-3xl text-pink-600",
  "type3": "bg-transparent rounded-3xl"
};
const size = {
  "sm": "px-5 py-3",
  "md": "px-6 py-4",
  "lg": "px-7 py-5"
};
const hover = {
  "type1": "hover:bg-gradient-to-tr hover:from-pink-700 hover:via-pink-600 hover:to-pink-500",
  "type2": "hover:bg-gradient-to-tr hover:from-pink-600 hover:via-pink-500 hover:to-pink-400 hover:text-white"
};
const active = {
  "type1": "active:bg-gradient-to-tr active:from-pink-800 active:via-pink-700 active:to-pink-600",
  "type2": "active:bg-gradient-to-tr active:from-pink-800 active:via-pink-700 active:to-pink-600"
};

export default function Button(props) {
  return (
    <button
      className={`${variant[props.type]} ${size[props.size]} ${props.font} ${hover[props.type]} ${active[props.type]} cursor-pointer group`}
    >
      <div className="flex gap-3 items-center">
        {props.frontImage && React.cloneElement(props.frontImage, {
          className: "group-hover:fill-white"  
        })}
        {props.children}
        {props.endImage}
      </div>
    </button>
  );
}
