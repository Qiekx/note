import React, { PropTypes } from 'react'

class TodoList extends React.Component {
  handleChange(id){
    this.props.handleCompleted(id);
    // alert(i);
  }
  handleClick(id){
    this.props.handleDeleted(id)
  }
  render () {
    let list=this.props.items.map( item =>
      <div key={item.id} className="item">
        <input type='radio' checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>
        <span style={item.completed?{textDecoration:'line-through',opacity:'0.6'}:null} className="title">{item.title}</span>
        <button onClick={this.handleClick.bind(this,item.id)}>删除</button>
      </div>

    )
    return(
      <div>
        {list}
      </div>
    )
  }
}

export default TodoList;
