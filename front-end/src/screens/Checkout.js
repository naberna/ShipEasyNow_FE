import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import VehicleDetailsForm from "../forms/orderForm/VehicleDetailsForm";
import CalculationCostForm from "../forms/orderForm/CalculationCostForm";
import { BsInfoCircleFill } from "react-icons/bs";
import InformationDetailsForm from "../forms/orderForm/InformationDetailsForm";
import PickUpAndDeliveryForm from "../forms/orderForm/PickUpAndDeliveryForm";
import BookShipmentForm from "../forms/orderForm/BookShipmentForm";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Vehicle Details", "Information Details", "Calculation Cost", "Pick up & Delivery", "Book Shipment"];
}

function getStepContent(step, props) {
  
  switch (step) {
    case 0:
      return <VehicleDetailsForm {...props} />;
    case 1:
      return <InformationDetailsForm {...props}/>;
    case 2:
      return <CalculationCostForm {...props}/>;
    case 3:
      return <PickUpAndDeliveryForm {...props} />;
    case 4:
      return <BookShipmentForm {...props}/>;
    default:
      return "Unknown step";
  }
}

function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const location = useLocation();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [checkoutForm, setCheckoutForm]  = useState(location.state);
  const handleChange = (input) => (e) => {
    setCheckoutForm({
      ...checkoutForm,
      [input]: e.target.value 
    });
  };

  useEffect(() => {
    console.log('B', location)
  }, [])

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const useStylesCustomTooltip = makeStyles((theme) => ({
    arrow: {
      color: "#193B48",
    },
    tooltip: {
      backgroundColor: "#193B48",
    },
  }));

  function CustomTooltip(props) {
    const classes = useStylesCustomTooltip();

    return <Tooltip arrow classes={classes} {...props} />;
  }

  const infoText = `The car will be picked up and delivered as close as legally and safely possible to any residential and/or business address.`;

  const insuranceText = `Your vehicle is fully insured from pickup to delivery.`;

  let zipFrom = null;
  let zipTo = null;

  if(location.state) {
    zipFrom = location.state.zipFrom;
    zipTo = location.state.zipTo;
  }

  return (
    <div>
      <div className="shipment">
        <Container>
          <div className="shipment-info">
            <div className="basic">
              <div className="col-2 title">Ship From</div>
              <div className="col-4 info">{zipFrom}</div>
              <div className="col-2 title">Ship To</div>
              <div className="col-4 info">{zipTo}</div>
            </div>
            <div className="service">
              <div className="col-2 title">Service type</div>
              <div className="col-4 info">
                {/* {location.state.transportTye} */}
                <CustomTooltip title={infoText}>
                  <span>
                    <BsInfoCircleFill />
                  </span>
                </CustomTooltip>
              </div>
              <div className="col-2 title">Insurance</div>
              <div className="col-4 info">
                Included
                <CustomTooltip title={insuranceText}>
                  <span>
                    <BsInfoCircleFill />
                  </span>
                </CustomTooltip>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index, {checkoutForm, handleChange, handleNext})}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        form={`form-step${activeStep}`} 
                        type="submit"
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {/* {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )} */}
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
