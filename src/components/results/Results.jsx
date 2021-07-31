import React from 'react';
import PropType from 'prop-types';

import ReactJson from 'react-json-view';

// eslint-disable-next-line react/prop-types
const Results = (results) => {
  console.log('RESULTS', results);

  // eslint-disable-next-line keyword-spacing
  return (
    <>
      <ReactJson src={results} />
    </>
  );
};

Results.propType = {
  results: PropType.array,
};

export default Results;
