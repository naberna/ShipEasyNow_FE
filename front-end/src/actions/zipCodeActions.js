import Axios from "axios";
import {
  ZIP_CODE_FROM_FAIL,
  ZIP_CODE_FROM_REQUEST,
  ZIP_CODE_FROM_SUCCESS,
  ZIP_CODE_TO_FAIL,
  ZIP_CODE_TO_REQUEST,
  ZIP_CODE_TO_SUCCESS,
} from "../constants/zipCodeConstants";

export const zipCodeListFrom = (zipCode) => async (dispatch, getState) => {
  dispatch({ type: ZIP_CODE_FROM_REQUEST, payload: zipCode});
  try {
    const { data } = await Axios({
      method: "POST",
      url: `http://159.65.45.58:5000/cities/get_with_zip/${zipCode}`,
      headers: {
        "cache-Control": "no-cache",
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({ type: ZIP_CODE_FROM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ZIP_CODE_FROM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  localStorage.setItem('zipCodesFrom', JSON.stringify(getState().zipCodeFromList));
};

export const zipCodeListTo = (zipCode) => async (dispatch, getState) => {
  dispatch({ type: ZIP_CODE_TO_REQUEST, payload: zipCode });
  try {
    const { data } = await Axios({
      method: "POST",
      url: `http://159.65.45.58:5000/cities/get_with_zip/${zipCode}`,
      headers: {
        "cache-Control": "no-cache",
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({ type: ZIP_CODE_TO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ZIP_CODE_TO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  localStorage.setItem('zipCodesTo', JSON.stringify(getState().zipCodeToList));
};
