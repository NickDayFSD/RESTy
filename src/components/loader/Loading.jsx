import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Loader = ({ loading }) => {
  const loaderStyling = {
    display: 'float',
  };

  // eslint-disable-next-line keyword-spacing
  if (loading === true) loaderStyling.display = 'hidden';

  return (
    <>
      <h2 style={loaderStyling}>LOADING RESULTS</h2>
    </>
  );
};

Loader.PropTypes = {
  loading: PropTypes.bool,
};

export default Loader;
