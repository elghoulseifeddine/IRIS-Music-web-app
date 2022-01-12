import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Youtuber from "./Youtuber.js";
const DetailsPostCard = ({ body, video}) => {

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
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default DetailsPostCard;
