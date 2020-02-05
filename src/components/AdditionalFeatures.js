import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// export default AdditionalFeatures;

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
)(AdditionalFeatures);
