import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/users/');
      this.setState({ users: response });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const users = this.state.users;
    return <div id="users">{users[0]}</div>;
  }
}
