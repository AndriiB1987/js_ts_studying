import React, { Component } from 'react';
import './Cars.css';

class CarsComponents extends Component {


  render() {
    let { item, clsName } = this.props;
    return (
      <div className={clsName}>
        {
          <h3>
            |model: {item.model} |age: - {item.age} |volEngine:- {item.volEngine} |fuel:- {item.fuel} |weight: - {item.weight}|prize: - {item.prize}|
          </h3>
        }
      </div>
    );
  }
}


export default CarsComponents;
