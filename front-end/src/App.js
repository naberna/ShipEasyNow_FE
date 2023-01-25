import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import Signin from "./forms/userform/Signin";
import Register from "./forms/userform/Register";
import Sidebar from "./components/Sidebar";
import Forgetpassword from "./forms/userform/ForgetPassword";
import NotFound from "./screens/NotFound";
import Contact from "./screens/Contact";
import Help from "./screens/Help";
import Blog from "./screens/Blog";
import Howindividuals from "./screens/Howindividuals";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./actions/userActions";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoBriefcase, GoDeviceMobile } from "react-icons/go";
import { FaRoute } from "react-icons/fa";

function App() {
  const history = useHistory();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <React.Fragment>
      <Router>
        <header>
          <Container fluid className="topbar">
            <Link to="/">
              <GoBriefcase /> CAREERS
            </Link>
            <Link to="/contact">
              <GoDeviceMobile /> CONTACT US
            </Link>
            <Link to="/">
              <FaRoute /> CHECK MY ORDER
            </Link>
            <Link to="/">(000) 000-0000</Link>
          </Container>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/">Ship Easy Now</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">WHY SHIP EASY NOW?</Nav.Link>
                <NavDropdown title="HOW IT WORKS?" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/howitworks-individuals">
                    For Individuals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">For Businesses</NavDropdown.Item>
                  <NavDropdown.Item href="/">For Carriers</NavDropdown.Item>
                  <NavDropdown.Item href="/">For Dealers</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/downloadapp">APP</Nav.Link>
                <Nav.Link href="/help">HELP</Nav.Link>
              </Nav>
              <Nav>
                {userInfo ? (
                  <Link
                    to="#signout"
                    className="btn button"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                ) : (
                  <>
                    <Link to="/signin" className="btn button">
                      Sign In
                    </Link>

                    <Link to="/register" className="btn button-second link">
                      Register
                    </Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Sidebar history={history} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpassword" component={Forgetpassword} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/contact" component={Contact} />
          <Route path="/help" component={Help} />
          <Route path="/blog" component={Blog} />
          <Route path="/howitworks-individuals" component={Howindividuals} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
