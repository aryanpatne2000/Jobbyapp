import {GoHome} from 'react-icons/go'
import {IoIosLogOut, IoIosSearch} from 'react-icons/io'
import {BsBriefcase, BsStar} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const Jobs = () => (
  <>
    <div className="background">
      {/* Navbar */}
      <div className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="website-logo"
          alt="Website Logo"
        />
        <div className="nav-icons">
          <GoHome size={20} className="icon" />
          <BsBriefcase size={20} className="icon" />
          <IoIosLogOut size={20} className="icon" />
        </div>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <IoIosSearch size={24} className="search-icon" />
      </div>

      <div className="profile-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
          className="profile-image"
          alt="User Profile"
        />
        <h2 className="profile-name">Aryan Patne</h2>
        <p className="profile-description">
          Lead software developer and AI-ML expert
        </p>
      </div>

      <hr />

      {/* Filters */}
      <div className="filters-container">
        {/* Employment Type */}
        <h3 className="filter-heading">Type of Employment</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <input type="checkbox" id="fulltime" />
            <label htmlFor="fulltime">Full Time</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" id="parttime" />
            <label htmlFor="parttime">Part Time</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" id="freelance" />
            <label htmlFor="freelance">Freelance</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" id="internship" />
            <label htmlFor="internship">Internship</label>
          </li>
        </ul>

        <hr className="horizontal" />

        {/* Salary Range */}
        <h3 className="filter-heading">Salary Range</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <input type="radio" name="salary" id="10lpa" />
            <label htmlFor="10lpa">10 LPA and above</label>
          </li>
          <li className="filter-item">
            <input type="radio" name="salary" id="20lpa" />
            <label htmlFor="20lpa">20 LPA and above</label>
          </li>
          <li className="filter-item">
            <input type="radio" name="salary" id="30lpa" />
            <label htmlFor="30lpa">30 LPA and above</label>
          </li>
          <li className="filter-item">
            <input type="radio" name="salary" id="40lpa" />
            <label htmlFor="40lpa">40 LPA and above</label>
          </li>
        </ul>
      </div>

      {/* Job Card */}
      <div className="job-card">
        <div className="job-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png"
            alt="Company Logo"
            className="company-logo"
          />
          <div className="job-title-container">
            <h2 className="job-title">DevOps Engineer</h2>
            <div className="rating">
              <BsStar className="star" /> <span>4</span>
            </div>
          </div>
        </div>

        <div className="job-details">
          <div className="main-conatiner-of-icons">
            <div className="loaction-conatiner">
              <MdLocationOn className="loaction-icon" />
              <p className="location-para">Delhi</p>
            </div>
            <div className="briefcase-conatiner">
              <BsBriefcase className="briefcase-icon" />
              <p className="briefcase-para">Internship</p>
            </div>
          </div>
          <p className="salary">10 LPA</p>
        </div>

        <h3 className="description-heading">Description</h3>
        <p className="job-description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev partners to minimize/avoid any production outages.
          The role will focus on production support.
        </p>
      </div>
    </div>

    <div className="div2">
      <div className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="logo"
        />
        <nav className="nav-links">
          <p>Home</p>
          <p>Jobs</p>
        </nav>
        <button className="logout-btn">Logout</button>
      </div>

      <div className="container">
        <div className="sidebar">
          <div className="profile-card2">
            <img src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png" />
            <h2 className="profile-name">Rahul Attuluri</h2>
            <p className="profile-para">
              Lead Software Developer and AI-ML expert
            </p>
          </div>
          <hr className="horizontal" />
          <div className="filters">
            <h3>Type of Employment</h3>
            <ul>
              <li>
                <input type="checkbox" /> Full Time
              </li>
              <li>
                <input type="checkbox" /> Part Time
              </li>
              <li>
                <input type="checkbox" /> Freelance
              </li>
              <li>
                <input type="checkbox" /> Internship
              </li>
            </ul>
            <hr className="horizontal" />
            <h3>Salary Range</h3>
            <ul>
              <li>
                <input type="radio" name="salary" /> 10 LPA and above
              </li>
              <li>
                <input type="radio" name="salary" /> 20 LPA and above
              </li>
              <li>
                <input type="radio" name="salary" /> 30 LPA and above
              </li>
              <li>
                <input type="radio" name="salary" /> 40 LPA and above
              </li>
            </ul>
          </div>
        </div>

        <div className="jobs-section">
          <div className="search-container-lg">
            <input
              type="text"
              placeholder="Search"
              className="search-input-lg"
            />
            <IoIosSearch size={24} className="search-icon-lg" />
          </div>

          <div className="job-card">
            <div className="job-header">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
                alt="Netflix Logo"
              />
              <div className="job-name-container">
                <h2 className="job-name">DevOps Engineer</h2>
                <p className="rating">
                  <BsStar className="star" /> 4
                </p>
              </div>
            </div>
            <div className="job-details">
              <div className="main-conatiner-of-icons">
                <div className="loaction-conatiner">
                  <MdLocationOn className="loaction-icon" />
                  <p className="location-para">Delhi</p>
                </div>
                <div className="briefcase-conatiner">
                  <BsBriefcase className="briefcase-icon" />
                  <p className="briefcase-para">Internship</p>
                </div>
              </div>
              <p className="salary">10 LPA</p>
            </div>
            <hr className="horizontal" />
            <h3 className="description-heading">Description</h3>
            <p className="job-description">
              We are looking for a DevOps Engineer with a minimum of 5 years of
              industry experience, preferably working in the financial IT
              community. The position in the team is focused on delivering
              exceptional services to both BU and Dev partners to minimize/avoid
              any production outages. The role will focus on production support.
            </p>
          </div>

          <div className="job-card">
            <div className="job-header">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
                alt="Netflix Logo"
              />
              <div className="job-name-container">
                <h2 className="job-name">DevOps Engineer</h2>
                <p className="rating">
                  <BsStar className="star" /> 4
                </p>
              </div>
            </div>
            <div className="job-details">
              <div className="main-conatiner-of-icons">
                <div className="loaction-conatiner">
                  <MdLocationOn className="loaction-icon" />
                  <p className="location-para">Delhi</p>
                </div>
                <div className="briefcase-conatiner">
                  <BsBriefcase className="briefcase-icon" />
                  <p className="briefcase-para">Internship</p>
                </div>
              </div>
              <p className="salary">10 LPA</p>
            </div>
            <hr className="horizontal" />
            <h3 className="description-heading">Description</h3>
            <p className="job-description">
              We are looking for a DevOps Engineer with a minimum of 5 years of
              industry experience, preferably working in the financial IT
              community. The position in the team is focused on delivering
              exceptional services to both BU and Dev partners to minimize/avoid
              any production outages. The role will focus on production support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Jobs
