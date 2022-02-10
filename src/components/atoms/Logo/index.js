import React from "react";

export default function Logo({ classProps }) {
  return (
    <div className={`${classProps} rounded-full`}>
      <img
        className="w-full"
        src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png"
        alt="logo"
      />
    </div>
  );
}
