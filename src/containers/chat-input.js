import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { chatInput } from '../actions';

const propTypes = {
  dispatch: PropTypes.func,
};

let ChatInput = ({ dispatch }) => {
  let input: Object;
  const room: string = 'main';
  const user: string = 'bob';

  return (
    <div>
      <form
        onSubmit={(e: Function) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(chatInput(input.value, room, user));
          input.value = '';
        }
      }
      >
        <input
          ref={(node) => {
            input = node;
          }
        }
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

ChatInput.propTypes = propTypes;

ChatInput = connect()(ChatInput);

export default ChatInput;
