import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserItem = (props) => {
  return (
    <div>
      <Card className="item-card">
        {/* <CardImg top width="100%" src={props.userItem.imageUrl} alt={props.userItem.name} /> */}
        <CardBody>
          <CardTitle>{props.userItem.item}</CardTitle>
          <CardSubtitle><strong>Category: </strong>{props.userItem.category}</CardSubtitle>
          <CardText></CardText>
          <Button onClick={e => props.deleteFromTopNine(e, props.userItem)}>Remove</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserItem;