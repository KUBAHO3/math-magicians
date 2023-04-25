import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ title, cname }) {
  return (
    <button type="button" className={cname}>{title}</button>
  );
}

export default Button;
