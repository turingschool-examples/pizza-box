import { remote } from 'electron';
import React, { Component } from 'react';

import database from '../database';

export default class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pizzas: []
    };
  }

  fetchPizzas () {
    database.select().from('pizzas').then(pizzas => this.setState({ pizzas }));
  }

  componentDidMount () {
    this.fetchPizzas();
  }

  render () {
    const { pizzas } = this.state;
    return (
      <div className="pizzas">
        {pizzas.map(p =>
          <div className="pizza" key={p.id}>
            <h3>{p.name}</h3>
            <p>Quantity: {p.quantity}</p>
          </div>
        )}
      </div>
    );
  }
}
