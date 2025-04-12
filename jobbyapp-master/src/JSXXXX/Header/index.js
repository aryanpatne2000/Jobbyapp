import {GoHome} from 'react-icons/go'
import {IoIosLogOut} from 'react-icons/io'
import {BsBriefcase} from 'react-icons/bs'
import './index.css'

const Header = () => {
  return (
    <>
      <div className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="wesite-logo"
        />
        <div>
          <GoHome size={20} className="gohomeicon" />
          <BsBriefcase size={20} className="gohomeicon" />
          <IoIosLogOut size={20} className="gohomeicon" />
        </div>
      </div>

      <div className="navbar-large">
        <div className="nav-left">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
        </div>

        <div className="nav-center">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Jobs
          </a>
        </div>

        <div className="nav-right">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </>
  )
}

export default Header
