import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';
import ChatItems from '../components/chat-items';

const mapStateToProps = (state) => {
  return {
    chatitems: state.chatitems,
  };
};

const ChatListItems = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ChatItems);

export default ChatListItems;
