import React, { Component } from 'react';
import TodoFeature from './features/todo';
import Form from './features/todo/component/form'
import './style.scss';
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false
      }
  }
  
  isLogin =(data=undefined)=>{
    if(data!=undefined){
      this.setState({show:true});
      alert(`Welcome ${data.username}, your email is ${data.email}`);
    } 
  }
  render() {
  return (
    <div className="wrapper">
    <div className="App">
     {this.state.show || <Form isLogin={this.isLogin}></Form>}
     {this.state.show && <TodoFeature/>}
    </div>
    </div>
  );
  }
}

export default App;
