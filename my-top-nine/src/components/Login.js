import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: '',
        error: null
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

  // getUserId = () => {
  //   const token = localStorage.getItem('userToken');
  //   const tokenInfo = decode(token);
  //   console.log(tokenInfo)
  //   this.setState({ user: {
  //     ...this.state.user,
  //     username: username,
  //     id: tokenInfo.id
  //   }});
  // }

  login = e => {
    e.preventDefault();
    axios
    .post('https://my-top-nine.herokuapp.com/api/tokens', this.state.credentials)
    .then(res => {
      localStorage.setItem('userToken', res.data.jwt);
    })
    .catch(err => this.setState({ credentials: {
      ...this.state.credentials,
      error: err
    } }));
    if(!this.state.credentials.error && (this.state.credentials !== '')) {
    this.props.getUserId(this.state.credentials.username);
    }
    this.setState({
      credentials: {
        username: '',
        password: '',
        error: ''
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
        {this.state.error && <p>No user exists!</p> }
        <Button>Submit</Button>
        {}
      </Form>
    );
  }
}