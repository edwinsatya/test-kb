import React from "react";
import Card from "../../molecules/Card";
import { useSelector } from "react-redux";

export default function MainContent() {
  const dataApi = useSelector((state) => state.dataApi);
  const errorMsg = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return <div>Loading..</div>;
  } else if (errorMsg) {
    return (
      <div className="mt-5 md:mt-8 xl:mt-16">
        <div className=" bg-red-300 p-5">
          <h2 className="text-lg font-bold">
            Response from server : {errorMsg}
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5 md:mt-8 xl:mt-16 grid grid-cols-3 gap-5 md:gap-8 xl:gap-10">
        {dataApi.length > 0 ? (
          dataApi?.map((data, index) => (
            <Card
              key={index}
              classProps={
                "border border-gray-300 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-none"
              }
              dataProps={data}
            ></Card>
          ))
        ) : (
          <div className="text-md font-bold">No Have Item</div>
        )}
      </div>
    );
  }
}
