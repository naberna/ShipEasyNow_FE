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

export const newOrderReducer = (state = { newOrder: {} }, action) => {
  switch (action.type) {
    case NEW_ORDER_REQUEST:
      return { loading: true };
    case NEW_ORDER_SUCCESS:
      return { loading: false, newOrder: action.payload };
    case NEW_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newOrderCarReducer = (state = { newOrderCar: {} }, action) => {
  switch (action.type) {
    case NEW_ORDER_CAR_REQUEST:
      return { loading: true };
    case NEW_ORDER_CAR_SUCCESS:
      return { loading: false, newOrderCar: action.payload };
    case NEW_ORDER_CAR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newOrderFormReducer = (state = { newOrderForm: {} }, action) => {
  switch (action.type) {
    case NEW_ORDER_INFORMAION_DETAILS:
      return { ...state, informationDetails: action.payload };
    case NEW_ORDER_PAYMENT_METHOD:
      return { ...state, paymentMethods: action.payload };
    default:
      return state;
  }
};

export const calculateFormReducer = (
  state = { paymentMethods: {} },
  action
) => {
  switch (action.type) {
    case CALCULATE_COST_REQUEST:
      return { loading: true };
    case CALCULATE_COST_SUCCESS:
      return { loading: false, paymentMethods: action.payload };
    case CALCULATE_COST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
