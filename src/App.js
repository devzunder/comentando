import React, { Component } from 'react';
import './main.css'
import Comments from './comments'
import New from './new'

class App extends Component {

  state={
    comments:[ ]
  }
  sendComment = comment =>{
    this.setState ({
      comments:[...this.state.comments,comment],
    })
  }


  render() {
    return (
      <div className="App row">
        <div className='col-1'></div>
      <New sendComment={this.sendComment} />
      <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
