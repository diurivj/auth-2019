import React, { Component } from 'react';
import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/auth';

class Signup extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <h2>Signup</h2>
        <Card style={{ width: '50vw' }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              <Input onChange={this.handleInput} type="email" name="email" placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Input
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Signup" />
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Signup;
