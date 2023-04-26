import React from 'react';
import PropTypes from 'prop-types';

function Button({ title, cname, onClick }) {
  return (
    <button type="button" className={cname} onClick={onClick}>{title}</button>
  );
}
Button.defaultProps = {
  cname: '',
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  cname: PropTypes.string,
  onClick: PropTypes.object,
};
export default Button;
