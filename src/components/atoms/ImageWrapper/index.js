import React from "react";

export default function ImageWrapper({ classProps, dataProps }) {
  if (dataProps) {
    return (
      <div className={`${classProps} w-full`}>
        <img
          className="w-full h-20 md:h-48 xl:h-96"
          src={dataProps.imageUrl}
          alt={dataProps.campaignName}
        />
      </div>
    );
  }

  return (
    <div className={`${classProps} w-full`}>
      <img
        className="w-full h-20 md:h-48 xl:h-96"
        src="https://www.poltekkes-solo.ac.id/cni-content/themes/poltekkes/images/noimage.jpg"
        alt="no-image"
      />
    </div>
  );
}
