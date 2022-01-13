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
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  NavLink,
} from "reactstrap";

// core components
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArtistNavbar from "components/Navbars/ArtistNavbar";
import { updateUser } from "JS/Actions/userActions";


function AddProfile() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [instrument, setInstrument] = useState("");
  const rating = 1;
  const id=currentUser._id;
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [style, setStyle] = useState("");

  const handleRegisterProfile = (e) => {
    e.preventDefault();
    dispatch(updateUser({ description, instrument, rating, genre,image,style},id ));
    navigate("/profile-page");
  };

  return ( loading?(<h1>Stana</h1>):(
    <div>
      <ArtistNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center"></div>
                <Form className="register-form">
                <label>Your style?</label>
                  <Input
                    type="select"
                    placeholder="My Style"
                    onChange={(e) => setStyle(e.target.value)}
                  >
                  <option value="">Select your Style</option>
                    <option>Soliste</option>
                    <option>Band</option>
                    <option>Troupe</option>
                    <option>DJ</option>
                    <option>Rapper</option>
                    
                  </Input>
                  <label>Your music genre?</label>
                  <Input
                    type="select"
                    placeholder="My Genre"
                    onChange={(e) => setGenre(e.target.value)}
                  >
                  <option value="">Select your genre</option>
                    <option>Jazz</option>
                    <option>Rock</option>
                    <option>Orientale</option>
                    <option>Occidentale</option>
                    <option>World music</option>
                    <option>Rap</option>
                    <option>Ray</option>
                    <option>HipHop</option>
                    <option>Electro</option>
                    <option>House</option>
                  </Input>
                  <label>Your music Instrument?</label>
                  <Input
                    type="select"
                    placeholder="Instrument?"
                    onChange={(e) => setInstrument(e.target.value)}
                  >
                    <option value="">Select your instrument</option>
                    <option>Violon</option>
                    <option>Aoud</option>
                    <option>Clavier</option>
                    <option>Drums</option>
                    <option>Percussions</option>
                    <option>Flute</option>
                    <option>Guitar</option>
                    <option>Guitar bass</option>
                    <option>Saxo</option>
                    <option>Kanoun</option>
                  </Input>

                  <label>Description</label>
                  <Input
                    placeholder="Description"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label>Photo de profile</label>
                  <Input
                    placeholder="Description"
                    type="file"
                    onChange={(e)=>setImage(e.target.files[0]) } accept= "image/*"
                  />
                  <NavLink>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      onClick={(e) => handleRegisterProfile(e)}
                    >
                      Valider
                    </Button>
                  </NavLink>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by IRIS MUSIC
          </h6>
        </div>
      </div>
    </div>
  ));
}

export default AddProfile;
