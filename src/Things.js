import React from 'react';
import axios from 'axios';

export default class Things extends React.Component {
  constructor() {
    super();
    this.state = {
      things: [],
    };
  }
  async componentDidMount() {
    const response = await axios.get('/things');
    this.setState({ things: response.data });
  }
  render() {
    const things = this.state.things;
    return (
      <ul id="things">
        {things.map(thing => {
          return (
            <li key={thing.id}>
              {thing.name}
              <ul>
                {thing.favorites.map(favorite => {
                  return (
                    <li key={favorite.user.id}>
                      Favorited by: {favorite.user.name}
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
