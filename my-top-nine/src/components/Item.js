import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Item = (props) => {
  console.log(props);
  return (
    <div>
      <Card className="item-card">
        <CardImg top width="100%" src={props.item.imageUrl} alt={props.item.name} />
        <CardBody>
          <CardTitle>{props.item.name}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;