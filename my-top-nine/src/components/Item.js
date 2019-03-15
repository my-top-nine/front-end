import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Form, FormGroup, Label, Input } from 'reactstrap';

class Item extends React.Component {

  state = {
    chooseItem: {
      position: "1",
    }
  }

  handleChange = e => {
    this.setState({
      chooseItem: {
        ...this.state.chooseItem,
        position: e.target.value
      }
    })
  }

  addToTopNine = e => {
    this.props.addToTopNine(e, Number(this.state.chooseItem.position), this.props.item);
  }

  render() {
  return (
    <div>
      <Card className="item-card">
        {/* <CardImg top width="100%" src={props.item.imageUrl} alt={props.item.name} /> */}
        <CardBody>
          <CardTitle>{this.props.item.name}</CardTitle>
          <CardSubtitle><strong>Category: </strong>{this.props.item.category}</CardSubtitle>
          {this.props.isLoggedIn && <Form inline onSubmit={this.addToTopNine}>
            <FormGroup>
              <Label for="positionSelect">Position:</Label>
              <Input 
              type="select" 
              name="select" 
              id={this.props.item.Id}
              onChange={this.handleChange}
              >
                <option onClick={e => this.handleChange(e)}>1</option>
                <option onClick={e => this.handleChange(e)}>2</option>
                <option onClick={e => this.handleChange(e)}>3</option>
                <option onClick={e => this.handleChange(e)}>4</option>
                <option onClick={e => this.handleChange(e)}>5</option>
                <option onClick={e => this.handleChange(e)}>6</option>
                <option onClick={e => this.handleChange(e)}>7</option>
                <option onClick={e => this.handleChange(e)}>8</option>
                <option onClick={e => this.handleChange(e)}>9</option>
              </Input>
            </FormGroup>
            <Button>Add To TopNine</Button>
          </Form>}
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  );
}};

export default Item;