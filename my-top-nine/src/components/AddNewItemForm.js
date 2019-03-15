import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AddNewItemForm extends React.Component {
  state = {
    newItem: {
      name: '',
      category: ''
    }
  }
  render() {
    return(
      <div>
        <h3>Add New Item:</h3>
        <Form inline>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Text Area</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Movies
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Video Games
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
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