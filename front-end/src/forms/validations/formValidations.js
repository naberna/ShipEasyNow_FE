import * as yup from "yup";

export const zipFromValidation = yup.object().shape({
  zipFrom: yup
    .string()
    .min(3, "Too Short!")
    .max(5, "Too Long!")
    .required("Zip From required"),
});

export const zipToValidation = yup.object().shape({
  zipTo: yup
    .string()
    .min(3, "Too Short!")
    .max(5, "Too Long!")
    .required("Zip To required"),
});

export const pickUpDateValidation = yup.object().shape({
  pickUpDate: yup.date().default(() => new Date()),
});

export const dropOffDateValidation = yup.object().shape({
  dropOffDate: yup
  .date()
  .when(
      "startDate",
      (pickUpDateValidation, schema) => pickUpDateValidation && schema.min(pickUpDateValidation))
});

export const numberOfCarsValidation = yup.object().shape({
  numberOfCars: yup.string().ensure().required("Number of cars required!"),
});

export const vehicleMakeValidation = yup.object().shape({
  vehicleMake: yup.string().ensure().required("Required!"),
});

export const vehicleModelValidation = yup.object().shape({
  vehicleModel: yup.string().ensure().required("Required!"),
});

export const vehicleYearValidation = yup.object().shape({
  vehicleYear: yup.string().ensure().required("Required!"),
});

export const mileageValidation = yup.object().shape({
  mileage: yup.number().required().positive().integer(),
});

export const vinNumberValidation = yup.object().shape({
  vinNumber: yup.number().required().positive().integer(),
});

export const isItOperableValidation = yup.object().shape({
  isItOperable: "",
});

export const isItInAuctionValidation = yup.object().shape({
  isItInAuction: "",
});

export const informationDetailsValidation = yup.object().shape({
  firstName: yup
    .string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  transportEmail: yup.string().email().required(),
  transportPhone: yup.number().required().positive().integer(),
});
