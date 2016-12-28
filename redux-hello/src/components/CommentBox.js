import React, { PropTypes } from 'react';
import store from '../store';

class CommentBox extends React.Component {
  constructor(){
    super();
    this.state={
      comments: store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault();
    store.dispatch({ type: 'ADD_COMMENT', comment: this.refs.content.value});
    this.refs.commentForm.reset();
    this.setState({comments:store.getState()});
  }
  render () {
    console.log(this.state.comments)
    let commentList = this.state.comments.map((item, i) => <div key={i} className='comment'>{item}</div>)
    return(
      <div className='comment-box'>
        <div>
          {commentList}
        </div>
        <form onSubmit={this.handleSubmit.bind(this)} className='comment-form' ref='commentForm'>
          <input ref='content' type='text' className='input'></input>
          <button type='submit' className='submit-btn'>提交</button>
        </form>
        <div className ='underline'></div>
      </div>
    )
  }
}

export default CommentBox;
