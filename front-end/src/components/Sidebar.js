import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InstantQuote from "../forms/orderForm/InstantQuote";
import individual from "../assets/individual-b.png";
import brief from "../assets/briefcase-b.png";
import truck from "../assets/shipped-b.png";
import estate from "../assets/real-estate-b.png";
import { GoX } from "react-icons/go";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      isToolbarOpen : false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      document.querySelector(".toolbar").className = "toolbar scroll";
      // document.querySelector(".toolbar-tools").className = "toolbar-tools scroll open";
    } else {
      document.querySelector(".toolbar").className = "toolbar";
      // document.querySelector(".toolbar-tools").className = "toolbar-tools";
    }
  };
  render() {
    return (
      <aside>
      <div className="toolbar">
        <ul>
          <li className={`${
              this.state.active === "linkIndividual" && this.state.isToolbarOpen ? "link-selected" : ""
            }`}
            onClick={() => this.setState({ active: "linkIndividual", isToolbarOpen: true })}
          >
            <Link>
              <img src={individual} alt="individual" />
              <div className="title">For Individuals</div>
            </Link>
          </li>
          <li className={`${
              this.state.active === "linkBusiness" && this.state.isToolbarOpen ? "link-selected" : ""
            }`}
            onClick={() => this.setState({ active: "linkBusiness" })}
          >
            <Link>
              <img src={brief} alt="business" />
              <div className="title">For Businesses</div>
            </Link>
          </li>
          <li className={`${
              this.state.active === "linkCarriers" && this.state.isToolbarOpen ? "link-selected" : ""
            }`}
            onClick={() => this.setState({ active: "linkCarriers" })}
          >
            <Link>
              <img src={truck} alt="carriers" />
              <div className="title">For Carriers</div>
            </Link>
          </li>
          <li className={`${
              this.state.active === "linkDealers" && this.state.isToolbarOpen ? "link-selected" : ""
            }`}
            onClick={() => this.setState({ active: "linkDealers" })}
          >
            <Link>
              <img src={estate} alt="dealers" />
              <div className="title">For Dealers</div>
            </Link>
          </li>
        </ul>
        
        <div className={`toolbar-tools ${
              this.state.active === "linkIndividual" && this.state.isToolbarOpen ? "open" : ""
            }`}
            onClick={() => this.setState({ active: "linkIndividual" })}>
              <div class="toolbar-close" id="cancel" onClick={() => this.setState({ isToolbarOpen: false })}><span><GoX/></span></div>
              <InstantQuote/>
          </div>
      </div>
    </aside>
    )
  }
}
