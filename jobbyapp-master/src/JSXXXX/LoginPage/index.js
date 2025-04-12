import './index.css'

const LoginPage = () => {
  return (
    <div className="backgnd">
      <div className="login-card">
        <div className="logo-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="webite-logo"
          />
        </div>
        <div className="first-field">
          <label htmlFor="username" className="label-1">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="Username"
          />
        </div>
        <div className="first-field">
          <label htmlFor="username" className="label-1">
            PASSWORD
          </label>
          <input
            type="password"
            id="username"
            className="input-field"
            placeholder="Password"
          />
        </div>
        <div className="btn-container">
          <button className="login-btn">Login</button>
        </div>
        <p className="error-msg">*Error message of the password</p>
      </div>
    </div>
  )
}

export default LoginPage
