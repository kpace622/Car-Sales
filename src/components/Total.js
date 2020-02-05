import React from 'react';
import { connect } from 'react-redux';

import { addItem, calcPrice } from '../actions/actions';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

// export default Total;

const mapStateToProps = state => {
  return {
    car: state.car,
    features: state.additionalFeatures,
    price: state.car.price
  }
}

export default connect(
  mapStateToProps,
  {
    addItem,
    calcPrice
  }
)(Total);