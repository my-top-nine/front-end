import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axios
    .post('https://my-top-nine.herokuapp.com/api/tokens', this.state.credentials)
    .then(res => {
        localStorage.setItem('token', res.data);
    })
    .catch(err => console.log(err));
    this.props.getUserId(1);
    this.setState({
      credentials: {
        username: '',
        password: ''
      }
    });
  }

  render() {
    return (
      <Form className="login-form" inline onSubmit={this.login}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="username" className="mr-sm-2">Username</Label>
          <Input 
            type="username" 
            name="username" 
            id="username" 
            placeholder="Username" 
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="password" className="mr-sm-2">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Password" 
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}