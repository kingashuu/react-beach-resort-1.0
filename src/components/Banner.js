import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1 className="">{title}</h1>
      <div className=""></div>
      <p className="">{subtitle}</p>
      {children}
    </div>
  );
}
