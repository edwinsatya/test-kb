import React from "react";
import ImageWrapper from "../../atoms/ImageWrapper";
import Title from "../../atoms/Title";
import ProgressBar from "../../atoms/ProgressBar";

export default function Card({ classProps, dataProps }) {
  if (dataProps) {
    return (
      <div className={classProps}>
        <ImageWrapper dataProps={dataProps} />
        <div className="flex flex-col p-1 md:p-2 xl:p-3">
          <Title
            classProps={
              "text-[10px] md:text-lg xl:text-2xl font-semibold my-1 xl:my-2 2xl:my-3"
            }
            title={
              dataProps.campaignName.length <= 13
                ? dataProps.campaignName
                : dataProps.campaignName.substr(0, 12) + "..."
            }
          />
          <ProgressBar dataProps={dataProps.percentage} />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <Title
                classProps={"text-[6px] md:text-base xl:text-lg font-semibold"}
                title="Terkumpul"
              />
              <Title
                classProps={"text-[6px] md:text-base xl:text-lg font-semibold"}
                title="Sisa hari"
              />
            </div>
            <div className="flex justify-between">
              <Title
                classProps={"text-[6px] md:text-base xl:text-lg font-semibold"}
                title={dataProps.donationReceived}
              />
              <Title
                classProps={"text-[6px] md:text-base xl:text-lg font-semibold"}
                title={dataProps.remainderDay}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No Data</div>;
  }
}
