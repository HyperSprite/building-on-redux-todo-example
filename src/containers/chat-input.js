import React from 'react';
import { connect } from 'react-redux';
import { chatInput } from '../actions';

let ChatInput = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(chatInput(input.value));
        input.value = '';
      }}
      >
        <input ref={(node) => {
          input = node;
        }}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

ChatInput = connect()(ChatInput);

export default ChatInput;
