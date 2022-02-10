import React from "react";

export default function ProgressBar({ dataProps }) {
  if (dataProps) {
    return (
      <div className="bg-gray-200 h-[4px] md:h-2 xl:h-3 w-full mb-1 xl:mb-2 rounded-md overflow-hidden">
        <div
          className={`${
            dataProps < 100 ? "bg-blue-500" : "bg-pink-500"
          } h-[4px] md:h-2 xl:h-3`}
          style={{ width: `${dataProps}%` }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-200 h-[4px] md:h-2 xl:h-3 w-full mb-1 xl:mb-2 rounded-md overflow-hidden">
        <div
          className={`bg-gray-200 h-[4px] md:h-2 xl:h-3`}
          style={{ width: `100%` }}
        ></div>
      </div>
    );
  }
}
