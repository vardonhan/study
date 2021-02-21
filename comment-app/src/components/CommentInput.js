import { Component } from 'react'

export default class ComponentInput extends Component {
  constructor () {
    super()
    this.state = {
      userName: '',
      content: ''
    }
  }

  handleValueChange(type, e) {
    this.setState({
      [`${type}`]: e.target.value
    })
  }

  handleSubmit () {
    // 父组件如果传了函数 调用
    if (this.props.onSubmit && typeof this.props.onSubmit === 'function') this.props.onSubmit({
      userName: this.state.userName,
      content: this.state.content
    })
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.userName}
              onChange={this.handleValueChange.bind(this, 'userName')}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleValueChange.bind(this, 'content')}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}
          >
            发布
          </button>
        </div>
      </div>
    )
  }
}