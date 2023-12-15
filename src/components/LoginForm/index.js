// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else if (event === '') {
      this.setState({
        errorMessage: 'Unknown error occurred',
      })
    }
  }

  renderPasswordField = () => {
    const {password, errorMessage} = this.state
    return (
      <>
        <label className="label-input" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </>
    )
  }

  renderUsernameField = () => {
    const {username, errorMessage} = this.state
    return (
      <>
        <label className="label-input" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </>
    )
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />

        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default LoginForm
