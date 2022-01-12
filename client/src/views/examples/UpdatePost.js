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
import React, { useState, useEffect } from "react";

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
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArtistNavbar from "components/Navbars/ArtistNavbar";
import { updatePost } from "JS/Actions/postActions";
import { getPost } from "JS/Actions/postActions";
// import { getUserById } from "JS/Actions/userActions";


function UpdatePost() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  const {id}=useParams();
  // const isAuth = useSelector((state) => state.postReducer.isAuth);
  // const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);

  useEffect(async() => {
    await dispatch(getPost(id));
    setLoading(false)
  }, [loading]);
  // const currentPost = useSelector((state) => state.postReducer.currentPost);
  const navigate = useNavigate();

  const [body, setBody] = useState("");
  const [video, setVideo] = useState("");
  
  

  const handleUpdatePost = (e) => {
    e.preventDefault();
    if (body === "" || video === "") {
      alert("Missing some inputs");
    }
    dispatch(updatePost({ body, video},id ));
    
    navigate("/profile-page");
    setBody("");
    setVideo("");
  };

  return ( 
      <div>
    {!loading && <div>
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
                <label>Video Link</label>
                  <Input
                    placeholder={video}
                    type="text"
                    onChange={(e) => setVideo(e.target.value)}
                  />
                  <label>Description</label>
                  <Input
                    placeholder={body}
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <NavLink>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      onClick={(e) => handleUpdatePost(e)}
                    >
                      Mettre a jour
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
    </div>}
    {loading && <h1>Loading</h1>}
    </div>
  );
}

export default UpdatePost;
