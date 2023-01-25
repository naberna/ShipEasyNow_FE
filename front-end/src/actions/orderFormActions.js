import Axios from "axios";
import {
  NEW_ORDER_INFORMAION_DETAILS,
  NEW_ORDER_PAYMENT_METHOD,
  CALCULATE_COST_REQUEST,
  CALCULATE_COST_SUCCESS,
  CALCULATE_COST_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAIL,
  NEW_ORDER_CAR_REQUEST,
  NEW_ORDER_CAR_SUCCESS,
  NEW_ORDER_CAR_FAIL,
} from "../constants/orderFormConstants";

export const orderNew =
  (zipCodeFrom, zipCodeTo, pickUpDate, dropOffDate, numberOfCars) =>
  async (dispatch, getState) => {
    dispatch({
      type: NEW_ORDER_REQUEST,
      payload: {
        zipCodeFrom,
        zipCodeTo,
        pickUpDate,
        dropOffDate,
        numberOfCars,
      },
    });
    try {
      const { data } = await Axios({
        method: "POST",
        url: "http://159.65.163.193/order/new",
        headers: {
          "cache-Control": "no-cache",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          order_from_zip: zipCodeFrom,
          order_to_zip: zipCodeTo,
          order_pick_up_date: pickUpDate,
          order_drop_off_date: dropOffDate,
          order_number_of_cars: numberOfCars,
        },
      });
      dispatch({ type: NEW_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: NEW_ORDER_FAIL, payload: error.message });
    }
    localStorage.setItem(
      "newOrderList",
      JSON.stringify(getState().newOrderList)
    );
  };

export const orderNewCar =
  (
    carMake,
    carModel,
    carYear,
    carSize,
    orderId,
    carMileage,
    carVinNumber,
    carIsOperable,
    carIsInAuction
  ) =>
  async (dispatch, getState) => {
    dispatch({
      type: NEW_ORDER_CAR_REQUEST,
      payload: {
        carMake,
        carModel,
        carYear,
        carSize,
        orderId,
        carMileage,
        carVinNumber,
        carIsOperable,
        carIsInAuction,
      },
    });
    try {
      const { data } = await Axios({
        method: "POST",
        url: "http://159.65.163.193:5000/car/new",
        headers: {
          "cache-Control": "no-cache",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          car_make: carMake,
          car_model: carModel,
          car_year: carYear,
          car_size: carSize,
          order_id: orderId,
          car_mileage: carMileage,
          car_vin_number: carVinNumber,
          car_is_operable: carIsOperable,
          car_is_in_auction: carIsInAuction,
        },
      });
      dispatch({ type: NEW_ORDER_CAR_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: NEW_ORDER_CAR_FAIL, payload: error.message });
    }
    localStorage.setItem('newOrderCar', JSON.stringify(getState().newOrderCarList.newOrderCar));
  };

export const informationDetailsList = (data) => (dispatch) => {
  dispatch({ type: NEW_ORDER_INFORMAION_DETAILS, payload: data });
  // localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: NEW_ORDER_PAYMENT_METHOD, payload: data });
};

export const calculateCost =
  (orderList, individual) => async (dispatch) => {
    dispatch({
      type: CALCULATE_COST_REQUEST,
      payload: { orderList, individual },
    });
    try {
      const { data } = await Axios({
        method: "POST",
        url: "http://159.65.163.193:5000/pricing/get_price",
        headers: {
          "cache-Control": "no-cache",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          order_id: orderList,
          client_type: individual,
        },
      });
      dispatch({ type: CALCULATE_COST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CALCULATE_COST_FAIL, payload: error.message });
    }
  };
