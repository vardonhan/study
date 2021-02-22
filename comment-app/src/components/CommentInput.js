import { Component } from 'react'
import propTypes from 'prop-types'

export default class ComponentInput extends Component {
  static propTypes = {
    onSubmit: propTypes.func
  }

  constructor () {
    super()
    this.state = {
      userName: '',
      content: ''
    }
  }

  componentDidMount () {
    this._loadUserName()
    this.textarea.focus()
  }

  _loadUserName () {
    const userName = window.localStorage.getItem('userName')
    if (userName) this.setState({userName})
  }

  _saveUserName (name) {
    window.localStorage.setItem('userName', name)
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

  handleInputBlur (e) {
    this._saveUserName(e.target.value)
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
              onBlur={this.handleInputBlur.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              ref={textarea => this.textarea = textarea}
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