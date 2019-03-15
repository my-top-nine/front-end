import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AddNewItemForm extends React.Component {
  state = {
    newItem: {
      name: '',
      category: ''
    }
  }

  handleChange = e => {
    this.setState({ 
      newItem: {
        ...this.state.newItem,
        name: e.target.value
      }
     })
  }

  handleRadio = e => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        category: e.target.value
      }
    })
  }

  postAddNewItem = (e) => {
    this.props.postAddNewItem(e, this.state.newItem, this.props.history);
  }

  render() {
    return(
      <div>
        <h3>Add New Item:</h3>
        <Form inline onSubmit={this.postAddNewItem}>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Text Area</Label>
            <Col sm={10}>
              <Input 
              type="textarea" 
              name='name' 
              value={this.state.newItem.name} 
              onChange={this.handleChange}
              id="exampleText" 
              />
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset">
          <legend>Categories</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" onClick={(e) => this.handleRadio(e)} name="category" 
              value="Movies"/>{' '}
              Movies
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" onClick={(e) => this.handleRadio(e)} name="category" 
              value="Video Games"/>{' '}
              Video Games
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" onClick={(e) => this.handleRadio(e)} name="category" 
              value="Music"/>{' '}
              Music
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}