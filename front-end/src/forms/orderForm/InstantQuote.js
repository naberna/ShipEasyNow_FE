import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { zipCodeListFrom } from "../../actions/zipCodeActions";
import { zipCodeListTo } from "../../actions/zipCodeActions";
import { orderNew } from "../../actions/orderFormActions";
import {
  zipFromValidation,
  zipToValidation,
  pickUpDateValidation,
  dropOffDateValidation,
  numberOfCarsValidation,
} from "../validations/formValidations";

const InstantQuote = () => {
  const HISTORY = useHistory();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    zipFrom: "",
    zipTo: "",
    pickUpDate: "",
    dropOffDate: "",
    numberOfCars: "",
  });

  // These are for <p></p> tags.
  const [zipFrom, setZipFrom] = useState("");
  const [zipTo, setZipTo] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [numberOfCars, setNumberOfCars] = useState("");

  const handleChange = (inputName) => (e) => {
    e.preventDefault();

    setInputs({
      ...inputs,
      [inputName]: e.target.value,
    });
  };

  function convertDateFormat(date) {
    var newDate = new Date(date);
    return String(
      newDate.getDate() +
        "/" +
        (newDate.getMonth() + 1) +
        "/" +
        newDate.getFullYear()
    );
  }

  const Continue = async (e) => {
    e.preventDefault();
    let formData = {
      zipFrom: inputs.zipFrom,
      zipTo: inputs.zipTo,
      pickUpDate: inputs.pickUpDate,
      dropOffDate: inputs.dropOffDate,
      numberOfCars: inputs.numberOfCars,
    };

    // Handle Validations
    const isZipFrom = await zipFromValidation.isValid(formData);
    const isZipTo = await zipToValidation.isValid(formData);
    const isPickUpDate = await pickUpDateValidation.isValid(formData);
    const isDropOffDate = await dropOffDateValidation.isValid(formData);
    const isNumberOfCars = await numberOfCarsValidation.isValid(formData);

    dispatch(zipCodeListFrom(inputs.zipFrom));
    dispatch(zipCodeListTo(inputs.zipTo));

    dispatch(
      orderNew(
        inputs.zipFrom,
        inputs.zipTo,
        convertDateFormat(inputs.pickUpDate),
        convertDateFormat(inputs.dropOffDate),
        inputs.numberOfCars
      )
    );

    // error messages for validations
    if (isZipFrom) {
      setZipFrom("");
    } else {
      zipFromValidation.validate(formData).catch((ex) => {
        setZipFrom(ex.message);
      });
    }

    if (isZipTo) {
      setZipTo("");
    } else {
      zipToValidation.validate(formData).catch((ex) => {
        setZipTo(ex.message);
      });
    }

    if (isPickUpDate) {
      setPickUpDate("");
    } else {
      pickUpDateValidation.validate(formData).catch((ex) => {
        setPickUpDate(ex.message);
      });
    }

    if (isDropOffDate) {
      setDropOffDate("");
    } else {
      dropOffDateValidation.validate(formData).catch((ex) => {
        setDropOffDate(ex.message);
      });
    }

    if (isNumberOfCars) {
      setNumberOfCars("");
    } else {
      numberOfCarsValidation.validate(formData).catch((ex) => {
        setNumberOfCars(ex.message);
      });
    }

    if (
      isZipFrom &&
      isZipTo &&
      isPickUpDate &&
      isDropOffDate &&
      isNumberOfCars
    ) {
      HISTORY.push({ pathname: "/checkout", state: inputs });
    }
  };

  return (
    <Form className="instantquote p-3 mb-5">
      <Form.Group controlId="formGroupFrom">
        <Form.Label className="form-subtitle">Transport car FROM</Form.Label>
        <Form.Control
          type="text"
          placeholder="ZIP or CITY"
          name="zipFrom"
          onChange={handleChange("zipFrom")}
          defaultValue={inputs.zipFrom}
        />
        <p>{zipFrom}</p>
      </Form.Group>
      <Form.Group controlId="formGroupTo">
        <Form.Label className="form-subtitle">Transport car TO</Form.Label>
        <Form.Control
          type="text"
          placeholder="ZIP or CITY"
          name="zipTo"
          onChange={handleChange("zipTo")}
          defaultValue={inputs.zipTo}
        />
        <p>{zipTo}</p>
      </Form.Group>
      <Form.Group controlId="pickUpDate">
        <Form.Label className="form-subtitle">Pick Up Date</Form.Label>
        <Form.Control
          type="date"
          onChange={handleChange("pickUpDate")}
          name="pickUpDate"
          defaultValue={inputs.pickUpDate}
        ></Form.Control>
        <p>{pickUpDate}</p>
      </Form.Group>
      <Form.Group controlId="dropOffDate">
        <Form.Label className="form-subtitle">Drop Off Date</Form.Label>
        <Form.Control
          type="date"
          onChange={handleChange("dropOffDate")}
          name="dropOffDate"
          defaultValue={inputs.dropOffDate}
          data-date-format="DD/MM/YYYY"
        ></Form.Control>
        <p>{dropOffDate}</p>
      </Form.Group>
      <Form.Group controlId="selectNumberOfCars">
        <Form.Control
          as="select"
          className="dropdown"
          onChange={handleChange("numberOfCars")}
          name="numberOfCars"
          defaultValue={inputs.numberOfCars}
          data-date-format="DD/MM/YYYY"
        >
          <option>Number Of Cars</option>
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Form.Control>
        <p>{numberOfCars}</p>
      </Form.Group>
      <button className="btn button" onClick={Continue}>
        Vehicle Details
        <BsArrowRightShort />
      </button>
    </Form>
  );
};

export default InstantQuote;
