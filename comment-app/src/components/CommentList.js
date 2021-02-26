import { Component } from 'react'
import Comment from './Comment'
import propTypes from 'prop-types'

export default class ComponentList extends Component {
  static defaultProps = {
    comments: []
  }
  static propTypes = {
    comments: propTypes.array,
    onDelComment: propTypes.func
  }

  handleDelComment (component) {
    if (this.props.onDelComment) {
      this.props.onDelComment(component)
    }
  }

  render () {
    return (
      <ul>
        {this.props.comments.map(comment => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} onDelComment={this.handleDelComment.bind(this)} />
            </li>
          )
        })}
      </ul>
    )
  }
}