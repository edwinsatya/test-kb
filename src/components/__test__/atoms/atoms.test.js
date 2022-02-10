import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../../config/redux/store";
import ImageWrapper from "../../atoms/ImageWrapper";
import InputSelect from "../../atoms/Input/Select";
import Logo from "../../atoms/Logo";
import ProgressBar from "../../atoms/ProgressBar";
import Title from "../../atoms/Title";

const dataProps = {
  campaignName: "Tribute to Seventeen",
  imageUrl:
    "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/97347/31_97347_1545999748_841841_f.png",
  percentage: 0,
  donationReceived: "Rp50.000",
  remainderDay: 0,
  donationGoal: 500000000,
};

describe("ImageWrapper Component", () => {
  it("Should render with no Image", () => {
    let component = renderer.create(<ImageWrapper />);
    expect(component).toMatchSnapshot();
  });

  it("Should render with Image from dataProps", () => {
    let component = renderer.create(<ImageWrapper dataProps={dataProps} />);
    expect(component).toMatchSnapshot();
  });
});

describe("InputSelect Component", () => {
  it("Should render normally", () => {
    let component = renderer.create(
      <Provider store={store}>
        <InputSelect />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Logo Component", () => {
  it("Should render normally", () => {
    let component = renderer.create(<Logo />);
    expect(component).toMatchSnapshot();
  });
});

describe("ProgressBar Component", () => {
  it("Should render normally with no dataProps", () => {
    let component = renderer.create(<ProgressBar />);
    expect(component).toMatchSnapshot();
  });

  it("Should render normally with dataProps", () => {
    let component = renderer.create(
      <ProgressBar dataProps={dataProps.percentage} />
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Title Component", () => {
  it("Should render normally with no titleProps", () => {
    let component = renderer.create(<Title />);
    expect(component).toMatchSnapshot();
  });

  it("Should render normally with titleProps", () => {
    let component = renderer.create(<Title title="Terkumpul" />);
    expect(component).toMatchSnapshot();
  });
});
