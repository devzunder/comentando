import React, {Component} from 'react'
import Comment from './comment'

export default class Comments extends Component{
    render(){
        return(
            <div>
            {this.props.comments.map(c =>   < Comment c={c} />)}
          </div>
        )
    }
}