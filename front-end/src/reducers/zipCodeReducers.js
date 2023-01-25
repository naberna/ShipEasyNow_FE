import {
    ZIP_CODE_FROM_FAIL,
    ZIP_CODE_FROM_REQUEST,
    ZIP_CODE_FROM_SUCCESS,
    ZIP_CODE_TO_FAIL,
    ZIP_CODE_TO_REQUEST,
    ZIP_CODE_TO_SUCCESS,
  } from "../constants/zipCodeConstants";
  
  export const zipCodeFromReducer = (
    state = { loading: true, zipCodeFrom: [] },
    action
  ) => {
    switch (action.type) {
      case ZIP_CODE_FROM_REQUEST:
        return { loading: true };
      case ZIP_CODE_FROM_SUCCESS:
        return { loading: false, zipCodesFrom: action.payload };
      case ZIP_CODE_FROM_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const zipCodeToReducer = (
      state = { loading: true, zipCodeTo: [] },
      action
    ) => {
      switch (action.type) {
        case ZIP_CODE_TO_REQUEST:
          return { loading: true };
        case ZIP_CODE_TO_SUCCESS:
          return { loading: false, zipCodesTo: action.payload };
        case ZIP_CODE_TO_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  