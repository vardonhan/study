import { Component } from 'react'
import Comment from './Comment'

export default class ComponentList extends Component {
  static defaultProps = {
    comments: []
  }
  render () {
    return (
      <ul>
        {this.props.comments.map(comment => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          )
        })}
      </ul>
    )
  }
}