import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortby } from "../../../../config/redux/actions";

export default function InputSelect() {
  const dispatch = useDispatch();
  const dataApi = useSelector((state) => state.dataApi);

  const onChange = (e) => {
    dispatch(changeSortby(e.target.value, dataApi));
  };

  return (
    <div>
      <select
        defaultValue={"goal"}
        onChange={onChange}
        className="border h-6 text-xs px-1 md:h-8 md:text-base md:px-3 xl:h-10 xl:text-lg xl:px-5 border-gray-200 bg-gray-200 text-gray-700 rounded focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value={"goal"}>Sorting by Donation Goal</option>
        <option value={"day"}>Sorting by Days Remaining</option>
      </select>
    </div>
  );
}
