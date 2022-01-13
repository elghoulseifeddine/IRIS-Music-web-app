/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import LOGOBLACK from "../../myImages/Irismusic-Black.png";
import LOGOWHITE from "../../myImages/Irismusic-white.png";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "JS/Actions/userActions";

function ClientNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [logo, setLogo] = React.useState(LOGOWHITE);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        setLogo(LOGOBLACK);
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
        setLogo(LOGOWHITE);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" data-placement="bottom" tag={Link}>
            <img src={logo} width={80} alt=""/>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/artists" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Trouver un artiste
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <i className="nc-icon nc-book-bookmark" />{" "}
                {`${currentUser.lastName} ${currentUser.firstName}`}
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                onClick={() => handleLogout()}
              >
                <i className="nc-icon nc-spaceship"></i> Se Déconnecter
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ClientNavbar;
