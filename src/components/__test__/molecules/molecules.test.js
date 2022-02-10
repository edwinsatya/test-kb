import React from "react";
import renderer from "react-test-renderer";
import Card from "../../molecules/Card";

const dataProps = [
  {
    campaignName: "Tribute to Seventeen",
    imageUrl:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/97347/31_97347_1545999748_841841_f.png",
    percentage: 0,
    donationReceived: "Rp50.000",
    remainderDay: 0,
    donationGoal: 500000000,
  },
  {
    campaignName: "Tribute to Seventeen",
    imageUrl:
      "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/97347/31_97347_1545999748_841841_f.png",
    percentage: 0,
    donationReceived: "Rp50.000",
    remainderDay: 0,
    donationGoal: 500000000,
  },
];

describe("Card Component", () => {
  it("Should render with no dataProps from api", () => {
    let component = renderer.create(<Card />);
    expect(component).toMatchSnapshot();
  });

  it("Should render with dataProps from api", () => {
    let component = renderer.create(<Card dataProps={dataProps[0]} />);
    expect(component).toMatchSnapshot();
  });

  it("Should render with multiple data", () => {
    dataProps.forEach((data, index) => {
      let component = renderer.create(<Card dataProps={data} key={index} />);
      expect(component).toMatchSnapshot();
    });
  });
});
