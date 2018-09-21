import React, {Component} from 'react'

export default class New extends Component{
    state={
        newComment: ''
      }
      handleChange = event =>{
        this.setState({
          newComment:event.target.value
        })
      }

      sendComment = () =>{
          this.props.sendComment(this.state.newComment)
          this.setState({
            newComment: ''
        })
      }
    
    render(){
        return(
            <div>
            <div>
            <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
          </div>
         <div>
            <button onClick={this.sendComment}>Enviar</button>
          </div>
          </div>
        )
    }
}