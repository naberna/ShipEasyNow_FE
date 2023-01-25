import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  carMakeListReducer,
  carModelListReducer,
  carSizeListReducer,
  carYearListReducer,
} from "./reducers/carReducers";
import {
  zipCodeFromReducer,
  zipCodeToReducer,
} from "./reducers/zipCodeReducers";
import {
  newOrderReducer,
  newOrderFormReducer,
  calculateFormReducer,
  newOrderCarReducer,
} from "./reducers/orderFormReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from './reducers/userReducers';

const initialState = {
  newOrderCarList: {
    newOrderCar: localStorage.getItem('newOrderCar')
      ? JSON.parse(localStorage.getItem('newOrderCar'))
      : [],
  },
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  carMakeList: carMakeListReducer,
  carModelList: carModelListReducer,
  carYearList: carYearListReducer,
  carSizeList: carSizeListReducer,
  zipCodeFromList: zipCodeFromReducer,
  zipCodeToList: zipCodeToReducer,
  newOrderList: newOrderReducer,
  newOrderCarList: newOrderCarReducer,
  newOrderFormList: newOrderFormReducer,
  calculatePriceList: calculateFormReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
