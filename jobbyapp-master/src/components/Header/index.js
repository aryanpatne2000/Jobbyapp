import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GoHome} from 'react-icons/go'
import {IoIosLogOut} from 'react-icons/io'
import {BsBriefcase} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="wesite-logoo"
          />
        </Link>
        <div>
          <Link to="/">
            <GoHome size={20} className="gohomeicon" />
          </Link>
          <Link to="/jobs">
            <BsBriefcase size={20} className="gohomeicon" />
          </Link>

          <IoIosLogOut
            size={20}
            className="gohomeicon"
            onClick={onClickLogout}
          />
        </div>
      </div>

      <div className="navbar-large">
        <div className="nav-left">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </Link>
        </div>

        <div className="nav-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </div>

        <div className="nav-right">
          <button className="logout-btn" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Header)
