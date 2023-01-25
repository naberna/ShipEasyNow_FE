import Axios from "axios";
import {
  CAR_MAKE_LIST_REQUEST,
  CAR_MAKE_LIST_SUCCESS,
  CAR_MAKE_LIST_FAIL,
  CAR_MODEL_LIST_REQUEST,
  CAR_MODEL_LIST_SUCCESS,
  CAR_MODEL_LIST_FAIL,
  CAR_SIZE_LIST_REQUEST,
  CAR_SIZE_LIST_SUCCESS,
  CAR_SIZE_LIST_FAIL,
  CAR_YEAR_LIST_REQUEST,
  CAR_YEAR_LIST_SUCCESS,
  CAR_YEAR_LIST_FAIL,
} from "../constants/carConstants";

export const makeCars = () => async (dispatch) => {
  dispatch({
    type: CAR_MAKE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios({
      method: "POST",
      url: "http://159.65.45.58:5000/cars/get_all_makes/",
      headers: {
        "cache-Control": "no-cache",
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({ type: CAR_MAKE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAR_MAKE_LIST_FAIL, payload: error.message });
  }
};

export const modelCars = (vehicleMake) => async (dispatch) => {
  if (vehicleMake) {
    dispatch({
      type: CAR_MODEL_LIST_REQUEST, payload: vehicleMake
    });
    try {
      const { data } = await Axios({
        method: "POST",
        url: `http://159.65.45.58:5000/cars/${vehicleMake}/model`,
        headers: {
          "cache-Control": "no-cache",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      dispatch({ type: CAR_MODEL_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CAR_MODEL_LIST_FAIL, payload: error.message });
    }
  }
};

export const yearCars = (vehicleMake, vehicleModel) => async (dispatch) => {
  if (vehicleModel) {
    dispatch({
      type: CAR_YEAR_LIST_REQUEST, payload: { vehicleMake, vehicleModel}
    });
    try {
      const { data } = await Axios({
        method: "POST",
        url: `http://159.65.45.58:5000/cars/${vehicleMake}/${vehicleModel}/year`,
        headers: {
          "cache-Control": "no-cache",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      dispatch({ type: CAR_YEAR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CAR_YEAR_LIST_FAIL, payload: error.message });
    }
  }
};

export const sizeCars = (vehicleMake, vehicleModel, vehicleYear) => async (dispatch) => {
  if (vehicleYear) {
    dispatch({
      type: CAR_SIZE_LIST_REQUEST, payload: { vehicleMake, vehicleModel, vehicleYear}
    });
    try {
      const { data } = await Axios({
        method: "POST",
        url: `http://159.65.45.58:5000/cars/${vehicleMake}/${vehicleModel}/${vehicleYear}/size`,
        headers: {
          "cache-Control": "no-cache",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      dispatch({ type: CAR_SIZE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CAR_SIZE_LIST_FAIL, payload: error.message });
    }
  }
};