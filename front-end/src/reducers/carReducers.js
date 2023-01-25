import {
  CAR_MAKE_LIST_FAIL,
  CAR_MAKE_LIST_REQUEST,
  CAR_MAKE_LIST_SUCCESS,
  CAR_MODEL_LIST_FAIL,
  CAR_MODEL_LIST_REQUEST,
  CAR_MODEL_LIST_SUCCESS,
  CAR_SIZE_LIST_REQUEST,
  CAR_SIZE_LIST_SUCCESS,
  CAR_SIZE_LIST_FAIL,
  CAR_YEAR_LIST_REQUEST,
  CAR_YEAR_LIST_SUCCESS,
  CAR_YEAR_LIST_FAIL,
} from "../constants/carConstants";

export const carMakeListReducer = (state = { carMakes: [] }, action) => {
  switch (action.type) {
    case CAR_MAKE_LIST_REQUEST:
      return { loading: true };
    case CAR_MAKE_LIST_SUCCESS:
      return { loading: false, carMakes: action.payload.makes };
    case CAR_MAKE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const carModelListReducer = (state = { carModels: [] }, action) => {
  switch (action.type) {
    case CAR_MODEL_LIST_REQUEST:
      return { loading: true };
    case CAR_MODEL_LIST_SUCCESS:
      return { loading: false, carModels: action.payload.models };
    case CAR_MODEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const carYearListReducer = (state = { carYears: [] }, action) => {
  switch (action.type) {
    case CAR_YEAR_LIST_REQUEST:
      return { loading: true };
    case CAR_YEAR_LIST_SUCCESS:
      return { loading: false, carYears: action.payload.years };
    case CAR_YEAR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const carSizeListReducer = (state = { carSizes: [] }, action) => {
  switch (action.type) {
    case CAR_SIZE_LIST_REQUEST:
      return { loading: true };
    case CAR_SIZE_LIST_SUCCESS:
      return { loading: false, carSizes: action.payload.size };
    case CAR_SIZE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
