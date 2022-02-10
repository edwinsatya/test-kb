import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../../config/redux/store";
import MainContent from "../../organism/MainContent";

describe("MainContent Component", () => {
  it("Should render with store", () => {
    let component = renderer.create(
      <Provider store={store}>
        <MainContent />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
