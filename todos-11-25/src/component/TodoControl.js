import React from 'react'

class TodoControl extends React.Component {
  handleClick(i){
    this.props.handleShow(i)
  }
  render () {
    let styles = {
      div:{
        margin:'20px 0px'
      },
      active:{
        backgroundColor:'#cfc',
        padding:'4px 10px',
        marginRight:'10px'
      },
      btn:{
        marginRight:'10px'
      }
    }
    let name = ['All','Active','Completed']
    let buttons = name.map((item,index) =>
      <button key={index} onClick={this.handleClick.bind(this,index)}
      style={this.props.show==index?styles.active:styles.btn}>{item}</button>
    )
    return(
      <div style={styles.div}>
        {buttons}
      </div>
    )
  }
}

export default TodoControl;
