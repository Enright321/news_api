import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img src={spinner} style={spinnerStyle} alt="Loading" />
    </div>
  )
}

const spinnerStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block'
}

export default Spinner;
