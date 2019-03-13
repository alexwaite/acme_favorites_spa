import React from 'react';
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
    this.setState({ users: response.data });
  }
  render() {
    const users = this.state.users;
    return (
      <ul id="users">
        {users.map(user => {
          return (
            <li key={user.id}>
              {user.name}
              <ul>
                {user.favorites.map(favorite => {
                  return (
                    <li key={favorite.thing.id}>
                      {favorite.thing.name} (Ranked: {favorite.rank})
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}
