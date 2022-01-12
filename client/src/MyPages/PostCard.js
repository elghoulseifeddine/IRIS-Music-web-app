import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import { deletePost } from "JS/Actions/postActions";
import { Link } from "react-router-dom";
import Youtuber from "./Youtuber.js";



const PostCard = ({ body, video, id}) => {
    const dispatch= useDispatch();
    // const currentUser = useSelector((state) => state.userReducer.currentUser);
  return (
    <div>
      <CardGroup>
        <Card>
          <CardBody>
            <Youtuber video={video} />
            <CardTitle tag="h5">{body}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button onClick={()=>dispatch(deletePost(id))}>Suprimer post</Button>
            <Button to={`/update-post/${id}`} tag={Link} >Mettre a jour</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default PostCard;
