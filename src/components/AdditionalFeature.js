import React from 'react';
import { addItem } from '../actions/actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item.additionalFeatures)
  };


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buyItem} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {
    addItem
  }
)(AdditionalFeature);

// export default AdditionalFeature;
