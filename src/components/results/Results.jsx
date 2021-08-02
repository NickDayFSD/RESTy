import React from 'react';
import PropType from 'prop-types';

import ReactJson from 'react-json-view';

// eslint-disable-next-line react/prop-types
const Results = (results, loading) => {
  // eslint-disable-next-line keyword-spacing
  if (loading === true)
    return (
      <>
        <img
          src="https://giphy.com/embed/PMD7JN8BHLnbcqSTL5/video"
          alt="loading"
        />
      </>
    );

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
