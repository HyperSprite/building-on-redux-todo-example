import React, { PropTypes } from 'react';

const propTypes = {
  value: PropTypes.string,
  room: PropTypes.string,
};

const Input = ({ value, room }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(chatInput( value, room));
      input.value = '';
    }}
  >
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button type="submit">
      Submit
    </button>
  </form>
);


Input.propTypes = propTypes;

export default Input;
