import React from "react";
import { Form } from "react-bootstrap";

export default function PickUpAndDeliveryForm(props) {
  const { handleChange, checkoutForm } = props;
  return (
    <div>
    <Form className="vehicle">
      <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <label className="title">Vehicle Pick Up Details</label>
          <Form.Group controlId="pickUpAddress">
            <Form.Label className="form-subtitle">Pick up address</Form.Label>
            <Form.Control type="text" placeholder="Street Address" defaultValue={checkoutForm.pickUpAddress} onChange={handleChange("pickUpAddress")}/>
          </Form.Group>

          <Form.Group controlId="pickUpAddress">
            <Form.Label className="form-subtitle">Pick up address (optional)</Form.Label>
            <Form.Control type="text" placeholder="Apt, Suite, etc. (optional)" defaultValue={checkoutForm.pickUpAddressAdd} onChange={handleChange("pickUpAddressAdd")}/>
          </Form.Group>


        <label className="title">Vehicle Delivery Details</label>
          <Form.Group controlId="deliveryAddress">
            <Form.Label className="form-subtitle">Delivery address</Form.Label>
            <Form.Control type="email" placeholder="Street Address" defaultValue={checkoutForm.deliveryAddress} onChange={handleChange("deliveryAddress")} />
          </Form.Group>

          <Form.Group controlId="deliveryAddress">
            <Form.Label className="form-subtitle">Delivery address (optional)</Form.Label>
            <Form.Control type="email" placeholder="Apt, Suite, etc. (optional)" defaultValue={checkoutForm.deliveryAddressAdd} onChange={handleChange("deliveryAddressAdd")} />
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
          
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 details">
        <div className="details-table">
          <div className="main-title">Details</div>
          <div className="table">
            <div className="table-col">
              <div className="title">Distance</div>
              <div className="expl">2mi</div>
            </div>
            <div className="table-col">
              <div className="title">First available date</div>
              <div className="expl">05/03/2021</div>
            </div>
            <div className="table-col">
              <div className="title">Vehicle</div>
              <div className="expl">2019 Alfa Romeo Giulia Quadrifoglio</div>
            </div>
            <div className="table-col">
              <div className="title">Vehicle Condition</div>
              <div className="expl">2mi</div>
            </div>
            <div className="table-col">
              <div className="title">Transport Type</div>
              <div className="expl">2mi</div>
            </div>
            <div className="table-col">
              <div className="title">Transit time</div>
              <div className="expl">1-2 days</div>
            </div>
            <div className="table-col">
              <div className="title">Due Now</div>
              <div className="expl">
                <div className="total-price">$0</div>
                <div className="total-price-info">
                  Don’t worry - you won’t pay until your pickup is scheduled.
                </div>
              </div>
            </div>
            <div className="table-col">
              <div className="title">Price Option</div>
              <div className="expl">$269 Discounted cash price</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Form>
    </div>
  );
}
