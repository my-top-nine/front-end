import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: '',
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

  getLogin = e => {
    e.preventDefault();
    this.props.getLogin(this.state.credentials);
  }

  postNewUser = e => {
    e.preventDefault();
    this.props.postNewUser(this.state.credentials);
  }

  render() {

    let button;

    if(this.props.loginErr) {
      button = <div><Button>Sign Up!</Button><p>New Users Must Sign Up</p></div>
    } else {
      button = <div><Button>Log In!</Button></div>
    }

    let whichForm;

    if(this.props.loginErr) {
      whichForm = this.postNewUser;
    } else {
      whichForm = this.getLogin;
    };

    return (
      <div>
        {(!this.props.isLoggedIn || this.props.loginErr) &&
      <Form className="login-form" inline onSubmit={whichForm}>
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
        {button}
      </Form>
        } {/* conditional prevents this from rendering if logged in */}
      </div>
    );
  }
}