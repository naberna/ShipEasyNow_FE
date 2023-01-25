import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import {
  makeCars,
  modelCars,
  yearCars,
  // sizeCars,
} from "../../actions/carActions";
import { orderNewCar, calculateCost } from "../../actions/orderFormActions";
import {
  vehicleMakeValidation,
  vehicleModelValidation,
  vehicleYearValidation,
  mileageValidation,
  vinNumberValidation,
  isItOperableValidation,
  isItInAuctionValidation,
} from "../validations/formValidations";

export default function VehicleDetailsForm(props) {
  const newOrderList = useSelector((state) => state.newOrderList);
  const { newOrder = {} } = newOrderList;

  const dispatch = useDispatch();

  const carMakeList = useSelector((state) => state.carMakeList);
  const carModelList = useSelector((state) => state.carModelList);
  const carYearList = useSelector((state) => state.carYearList);
  // const carSizeList = useSelector((state) => state.carSizeList);

  const { loading: makeLoading, error: makeError, carMakes } = carMakeList;
  const { loading: modelLoading, error: modelError, carModels } = carModelList;
  const { loading: yearLoading, error: yearError, carYears } = carYearList;
  // const { carSizes } = carSizeList;

  const [inputs, setInputs] = useState({
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    mileage: "",
    vinNumber: "",
    isItOperable: "",
    isItInAuction: "",
  });

  const handleChange = (inputName) => (e) => {
    e.preventDefault();

    setInputs({
      ...inputs,
      [inputName]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(makeCars());
    dispatch(modelCars(inputs.vehicleMake));
    dispatch(yearCars(inputs.vehicleMake, inputs.vehicleModel));
    // dispatch(
    //   sizeCars(inputs.vehicleMake, inputs.vehicleModel, inputs.vehicleYear)
    // );
  }, [dispatch, inputs]);

  // These are for <p></p> tags.
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [isItOperable, setIsItOperable] = useState("");
  const [isItInAuction, setIsItAuction] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let formData = {
      vehicleMake: inputs.vehicleMake,
      vehicleModel: inputs.vehicleModel,
      vehicleYear: inputs.vehicleYear,
      mileage: inputs.mileage,
      vinNumber: inputs.vinNumber,
      isItOperable: inputs.isItOperable,
      isItInAuction: inputs.isItInAuction,
    };

    // Handle Validations
    const isVehicleMake = vehicleMakeValidation.isValid(formData);
    const isVehicleModel = vehicleModelValidation.isValid(formData);
    const isVehicleYear = vehicleYearValidation.isValid(formData);
    const isMileage = mileageValidation.isValid(formData);
    const isVinNumber = vinNumberValidation.isValid(formData);
    const isOperable = isItOperableValidation.isValid(formData);
    const isAuction = isItInAuctionValidation.isValid(formData);

    // error messages for validations
    if (isVehicleMake) {
      setVehicleMake("");
    } else {
      vehicleMakeValidation.validate(formData).catch((ex) => {
        setVehicleMake(ex.message);
      });
    }

    if (isVehicleModel) {
      setVehicleModel("");
    } else {
      vehicleModelValidation.validate(formData).catch((ex) => {
        setVehicleModel(ex.message);
      });
    }

    if (isVehicleYear) {
      setVehicleYear("");
    } else {
      vehicleYearValidation.validate(formData).catch((ex) => {
        setVehicleYear(ex.message);
      });
    }

    if (isMileage) {
      setMileage("");
    } else {
      mileageValidation.validate(formData).catch((ex) => {
        setMileage(ex.message);
      });
    }

    if (isVinNumber) {
      setVinNumber("");
    } else {
      vinNumberValidation.validate(formData).catch((ex) => {
        setVinNumber(ex.message);
      });
    }

    if (isOperable) {
      setIsItOperable("");
    } else {
      isItOperableValidation.validate(formData).catch((ex) => {
        setIsItOperable(ex.message);
      });
    }

    if (isAuction) {
      setIsItAuction("");
    } else {
      isItInAuctionValidation.validate(formData).catch((ex) => {
        setIsItAuction(ex.message);
      });
    }

    const handleRadioChange = (input) => {
      if (input === "1") {
        return true;
      } else {
        return false;
      }
    };

    if (
      isVehicleMake &&
      isVehicleModel &&
      isVehicleYear &&
      isMileage &&
      isVinNumber &&
      isOperable &&
      isAuction
    ) {
      dispatch(
        orderNewCar(
          inputs.vehicleMake,
          inputs.vehicleModel,
          inputs.vehicleYear,
          //TODO: actions, reducer and store are ready for VEHICLE SIZE
          //needs to be fixed on BE, that's why car size is hard coded.
          "pickup",
          String(newOrder.order_id),
          inputs.mileage,
          inputs.vinNumber,
          handleRadioChange(inputs.isItOperable),
          handleRadioChange(inputs.isItInAuction)
        )
      );

      dispatch(
        calculateCost(
          newOrder.order_id,
          "individual",
        )
      );
    }
    props.handleNext();
  };

  return (
    <div>
      <div className="shipment-box">You are ready to book. CONTINUE!!!</div>
      {Array.from({ length: newOrder.order_number_of_cars }, (v, i) => (
        <Form className="vehicle" onSubmit={handleFormSubmit} id="form-step0">
          <Row>
            <Col xs={12} md={6}>
              <label className="title">Vehicle Details</label>

              <Form.Group controlId="vehicleMake">
                <Form.Label className="form-subtitle" htmlFor="vehicleMake">
                  Vehicle Make
                </Form.Label>
                {makeLoading ? (
                  <LoadingBox></LoadingBox>
                ) : makeError ? (
                  <MessageBox variant="danger">{makeError}</MessageBox>
                ) : (
                  <Form.Control
                    as="select"
                    id="vehicleMake"
                    value={inputs.vehicleMake}
                    onChange={handleChange("vehicleMake")}
                    required
                  >
                    <option>Vehicle Make</option>
                    {carMakes.map((makes, index) => (
                      <option key={index}>{makes}</option>
                    ))}
                  </Form.Control>
                )}
                <p>{vehicleMake}</p>
              </Form.Group>

              <Form.Group controlId="vehicleModel">
                <Form.Label className="form-subtitle" htmlFor="vehicleModel">
                  Vehicle Model
                </Form.Label>
                {modelLoading ? (
                  <LoadingBox></LoadingBox>
                ) : modelError ? (
                  <MessageBox variant="danger">{modelError}</MessageBox>
                ) : (
                  <Form.Control
                    as="select"
                    id="vehicleModel"
                    value={inputs.vehicleModel}
                    onChange={handleChange("vehicleModel")}
                    required
                  >
                    <option>Vehicle Model</option>
                    {carModels.map((models, index) => (
                      <option key={index}>{models}</option>
                    ))}
                  </Form.Control>
                )}
                <p>{vehicleModel}</p>
              </Form.Group>

              <Form.Group controlId="vehicleYear">
                <Form.Label className="form-subtitle" htmlFor="vehicleYear">
                  Vehicle Year
                </Form.Label>
                {yearLoading ? (
                  <LoadingBox></LoadingBox>
                ) : yearError ? (
                  <MessageBox variant="danger">{yearError}</MessageBox>
                ) : (
                  <Form.Control
                    as="select"
                    id="vehicleYear"
                    value={inputs.vehicleYear}
                    onChange={handleChange("vehicleYear")}
                    required
                  >
                    <option>Vehicle Year</option>
                    {carYears.map((years, index) => (
                      <option key={index}>{years}</option>
                    ))}
                  </Form.Control>
                )}
                <p>{vehicleYear}</p>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formGroupMileage">
                <Form.Label className="form-subtitle">Mileage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mileage"
                  name="mileage"
                  defaultValue={inputs.mileage}
                  onChange={handleChange("mileage")}
                  required
                />
                <p>{mileage}</p>
              </Form.Group>
              <Form.Group controlId="availableVinNumber">
                <Form.Label className="form-subtitle">Vin Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Vin Number"
                  name="vinNumber"
                  defaultValue={inputs.vinNumber}
                  onChange={handleChange("vinNumber")}
                  required
                />
                <p>{vinNumber}</p>
              </Form.Group>

              <Form.Group className="radio">
                <Form.Label className="radio-subtitle">
                  Is it operable?{" "}
                </Form.Label>
                <div className="radio-check">
                  <Form.Check
                    type="radio"
                    label="Yes"
                    id="op-yes"
                    name="isItOperable"
                    value="1"
                    onChange={handleChange("isItOperable")}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    id="op-no"
                    name="isItOperable"
                    value="0"
                    onChange={handleChange("isItOperable")}
                  />
                </div>
                <p>{isItOperable}</p>
              </Form.Group>
              <Form.Group className="radio">
                <Form.Label className="radio-subtitle">
                  Is it In Auction?{" "}
                </Form.Label>
                <div className="radio-check">
                  <Form.Check
                    type="radio"
                    label="Yes"
                    id="au-yes"
                    name="isItInAuction"
                    value="1"
                    onChange={handleChange("isItInAuction")}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    id="au-no"
                    name="isItInAuction"
                    value="0"
                    onChange={handleChange("isItInAuction")}
                  />
                </div>
                <p>{isItInAuction}</p>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      ))}
    </div>
  );
}
