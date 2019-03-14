import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserItem = (props) => {
  return (
    <div>
      <Card className="item-card">
        <CardImg top width="100%" src={props.userItem.imageUrl} alt={props.userItem.name} />
        <CardBody>
          <CardTitle>{props.userItem.name}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserItem;