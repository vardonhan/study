import { Component } from 'react'
import './index.css'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import WrapLoadData from './WrapLoadData'
import propTypes from 'prop-types'

class ComponentApp extends Component {
  static propTypes = {
    data: propTypes.any,
    saveData: propTypes.func.isRequired
  }
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      comments: props.data
    }
  }

  handleSubmit (comment) {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push({
      ...comment,
      id: `${Math.random()}-${Math.random()}`,
      createdTime: +new Date()
    })
    this.setState({
      comments: this.state.comments
    })
    this.props.saveData(this.state.comments)
  }

  handleDelComment (component) {
    const comments = this.state.comments
    const index = this.state.comments.findIndex(item => item.id === component.id)
    comments.splice(index, 1)
    this.setState({ comments })
    this.props.saveData(comments)
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput
          onSubmit={this.handleSubmit.bind(this)}
        />
        <CommentList
          comments={this.state.comments}
          onDelComment={this.handleDelComment.bind(this)}
        />
      </div>
    )
  }
}
ComponentApp = WrapLoadData(ComponentApp, 'comments')
export default ComponentApp