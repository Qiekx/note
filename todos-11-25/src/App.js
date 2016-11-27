import React from 'react';
import TodoList from './component/TodoList';
import TodoControl from './component/TodoControl';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      items:[
        {title:'sss',completed:false,id:1},
        {title:'sss',completed:true,id:2}
      ],
      //show为0时，显示All，show:1,显示Active，show为2，显示Completed
      show:0
    }
  }
  handleCompleted(id){
    let index = this.myFindIndex(id);
    this.state.items[index].completed = ! this.state.items[index].completed;
    this.setState({items: this.state.items})
  }
  handleDeleted(id){
    let index = this.myFindIndex(id);
    this.state.items.splice(index,1);
    this.setState({items: this.state.items});
  }
  myFindIndex(id){
    var index = this.state.items.findIndex(ele => id==ele.id )
      return index;
    }

  handleShow(i){
    this.setState({show:i})
  }
  handleSubmit(e){
    e.preventDefault();
    let inputValue = this.refs.input.value.trim();
    this.refs.input.value=null;
    if(inputValue==""){
      this.refs.input.focus();
      return alert('输入内容不能为空！')
    }
    let date = new Date();
    let newItem={title:inputValue,completed:false,id:date.getTime()}
    this.state.items.push(newItem);
    this.setState({items:this.state.items});

  }
  render () {
    if(this.state.show==0){
      var showItems=this.state.items
    }else if (this.state.show==1) {
      var showItems=this.state.items.filter(function(element){
        return element.completed==false;
      })
    }else if (this.state.show==2) {
      var showItems=this.state.items.filter(function(element){
        return element.completed==true;
      })
    }
    return(
      <div className="main">
        <h1>TODO</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder="add a todo" ref="input" className="add"/>
          <button className="addBtn">ADD #{this.state.items.length+1}</button>
        </form>
        <TodoList items={showItems} handleCompleted={this.handleCompleted.bind(this)}
         handleDeleted={this.handleDeleted.bind(this)}/>

        <TodoControl handleShow={this.handleShow.bind(this)} show={this.state.show}/>
      </div>
    )
  }
}

export default App;
