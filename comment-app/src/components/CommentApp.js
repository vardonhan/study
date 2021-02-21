import { Component } from 'react'
import './index.css'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class ComponentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmit (comment) {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push({
      ...comment,
      id: `${Math.random()}-${Math.random()}`
    })
    this.setState({
      comments: this.state.comments
    })
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput
          onSubmit={this.handleSubmit.bind(this)}
        />
        <CommentList
          comments={this.state.comments}
        />
      </div>
    )
  }
}