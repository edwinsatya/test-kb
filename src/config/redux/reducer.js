import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  dataApi: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        dataApi: action.payload,
        error: "",
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        dataApi: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
