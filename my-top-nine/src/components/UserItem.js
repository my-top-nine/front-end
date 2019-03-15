import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserItem = (props) => {
  console.log(props)
  return (
    <div>
      <Card className="item-card">
        {/* <CardImg top width="100%" src={props.userItem.imageUrl} alt={props.userItem.name} /> */}
        <CardBody>
          <CardTitle>{props.userItem.name}</CardTitle>
          <CardSubtitle>{props.userItem.category}</CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserItem;