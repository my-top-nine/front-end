import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Form, FormGroup, Label, Input } from 'reactstrap';

const Item = (props) => {
  return (
    <div>
      <Card className="item-card">
        {/* <CardImg top width="100%" src={props.item.imageUrl} alt={props.item.name} /> */}
        <CardBody>
          <CardTitle>{props.item.name}</CardTitle>
          <CardSubtitle><strong>Category: </strong>{props.item.category}</CardSubtitle>
          {props.isLoggedIn && <Form inline>
            <FormGroup>
              <Label for="exampleSelect">Position:</Label>
              <Input type="select" name="select" id={props.item.Id}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </Input>
            </FormGroup>
            <Button>Add To TopNine</Button>
          </Form>}
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;