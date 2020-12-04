import React, { Component } from 'react';
import './App.css';
import CarsComponents from './components/cars/CarsComponents';

class App extends Component {
  myCars = [
    {
      model: 'opel',
      volEngine: 2.5,
      age: 2,
      weight: 1000,
      fuel: 'electro',
      prize: 4500
    }, {
      model: 'mersedes',
      volEngine: 2.5,
      age: 3,
      weight: 1000,
      fuel: 'petrol',
      prize: 4500
    },
    {
      model: 'citroen',
      volEngine: 2.5,
      age: 5,
      weight: 1000,
      fuel: 'gas',
      prize: 4500
    },
    {
      model: 'honda',
      volEngine: 2.5,
      age: 11,
      weight: 1000,
      fuel: 'diesel',
      prize: 4500
    }]

  render() {
    return (
      <div>
        {
          this.myCars.map((value, index) => {
            let name = 'target';
            if (index % 2) {
              name = 'point';
            }
            return (<CarsComponents item={value} key={index} clsName={name} />);
          })
        }
      </div>

    );
  }
}

export default App;
