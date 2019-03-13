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
    const response = await axios.get('/users');
    console.log(response.data);
    this.setState({ users: response.data });
  }
  render() {
    const users = this.state.users;
    return (
      <ul id="users">
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    );
  }
}
