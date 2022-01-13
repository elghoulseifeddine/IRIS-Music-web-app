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
import React,{useEffect,useState} from "react";

// reactstrap components
import {
  Button,
  NavLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ArtistNavbar from "components/Navbars/ArtistNavbar";
import {useSelector,useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import { getUserById } from "JS/Actions/userActions";
import PostList from "MyPages/PostList";


function ProfilePage() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch=useDispatch();

  const [activeTab, setActiveTab] = React.useState("2");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const gettingUserByID=async()=>{
    await dispatch(getUserById(currentUser._id));
    setLoading(false);
  }

  const [loading,setLoading]= useState(true);
  useEffect(() => {
    gettingUserByID()
  }, [loading,dispatch,isAuth,currentUser]);

  
  return (
    <div>
    {!loading && 
    <div>
      <ArtistNavbar/>
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={(currentUser.image)||(require("assets/img/faces/R.jpg").default)}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {`${currentUser.lastName} ${currentUser.firstName}`} <br />
              </h4>
              <h6 className="title">{`${currentUser.tel}`}</h6>
              <h6 className="description">{`${currentUser.style}`}</h6>
              <h6 className="description">{`${currentUser.instrument}`}</h6>
              <h6 className="description">{`${currentUser.genre}`}</h6>
              
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              {`${currentUser.description}`}
              </p>
              <br />
              <NavLink to='/add-profile' tag={Link}>
              <Button className="btn-round" color="default" outline  >
                <i className="fa fa-cog" /> Set your Profile
              </Button>
              </NavLink>
            </Col>
          </Row>
          <br />
        {/* Tab panes */}
        <TabContent className="following" activeTab={activeTab}>     
          <TabPane className="text-center" tabId="2" id="following">
          <h3 className="text-muted">My Posts</h3>
            <Button className="btn-round" color="warning" to='/add-post' tag={Link}>
              Add Post
            </Button>
            <PostList />
          </TabPane>
        </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </div>}
    {loading&&<h1>Loading</h1>}
    </div>
  );
}

export default ProfilePage;
