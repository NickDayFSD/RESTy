import React from 'react';
import PropType from 'prop-types';

// eslint-disable-next-line react/prop-types
const Results = ({ results }) => {
  return (
    <>
      <p>{results}</p>
    </>
  );
};

Results.propType = {
  results: PropType.array,
};

export default Results;
