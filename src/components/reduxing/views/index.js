import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import {buttonClickAction,changeTextAction} from '../actions.js'

class Reduxing extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    const {text, onChangeText, onButtonClick} = this.props
    return (
      <div className="header">
        <div>  
          <h1 onClick={onChangeText}> {text}</h1>
          <Button type="primary" onClick={onButtonClick}>点我</Button>
        </div>
      </div>
    )
  }
}
//映射Redux state到组件的属性  
function mapStateToProps(state) {  
  return { text: state.text }  
}  

//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
  return{  
      onButtonClick:()=>dispatch(buttonClickAction),  
      onChangeText:()=>dispatch(changeTextAction)  
  }  
}

let reduxingData = connect(mapStateToProps, mapDispatchToProps)(Reduxing)

export default reduxingData