import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

import { getDataApi } from "./services";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (dataApi) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: dataApi,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest);
    try {
      const res = await getDataApi();
      const sortDataApiByGoal = res
        .map((e) => e)
        .sort((a, b) => (a.percentage > b.percentage ? 1 : -1));
      dispatch(fetchDataSuccess(sortDataApiByGoal));
    } catch (error) {
      const errMsg = error.message;
      dispatch(fetchDataFailure(errMsg));
    }
  };
};

export const changeSortby = (sortType, dataApi) => {
  return (dispatch) => {
    if (sortType == "goal") {
      const sortDataApiByGoal = dataApi
        .map((e) => e)
        .sort((a, b) => (a.percentage > b.percentage ? 1 : -1));
      console.log(sortDataApiByGoal, "goal");

      dispatch(fetchDataSuccess(sortDataApiByGoal));
    } else {
      const sortDataApiByDay = dataApi
        .map((e) => e)
        .sort((a, b) => (a.remainderDay > b.remainderDay ? 1 : -1));
      console.log(sortDataApiByDay, "day");
      dispatch(fetchDataSuccess(sortDataApiByDay));
    }
  };
};
