import { createStore } from 'redux';

let comments = ['very good!','perfect'];

function commentReducer(state = [], action){
  switch (action.type) {
    case 'ADD_COMMENT':
      return[...state, action.comment]
    default:
      return state;
  }
}
let store = createStore(commentReducer, comments);
export default store;
