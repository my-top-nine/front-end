import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {



  render() {
    return (
      <Form className="login-form" inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="username" className="mr-sm-2">Username</Label>
          <Input 
            type="username" 
            name="username" 
            id="username" 
            placeholder="Username" 
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="password" className="mr-sm-2">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Password" 
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}