import { Component } from 'react'
import propTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    comment: propTypes.object.isRequired
  }
  constructor () {
    super()
    this.state = {
      timeString: ''
    }
  }
  componentDidMount () {
    this._updateTimeString()
    this.timer = window.setInterval(this._updateTimeString.bind(this), 5000)
  }
  componentWillUnmount () {
    window.clearInterval(this.timer)
  }
  _updateTimeString () {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  handleDelComment (comment) {
    console.log(comment)
  }
  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.userName} </span>：
        </div>
        <p>{comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span
          className='comment-delete'
          onClick={this.handleDelComment.bind(this, comment)}
        >
          删除
        </span>
      </div>
    )
  }
}