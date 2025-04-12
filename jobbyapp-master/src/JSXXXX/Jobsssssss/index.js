import {GoHome} from 'react-icons/go'
import {IoIosLogOut, IoIosSearch} from 'react-icons/io'
import {BsBriefcase, BsStar} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import Header from '../Header'
import './index.css'

const Jobsssssss = () => (
  <>
    <div className="div2">
      <Header />

      <div className="container">
        <div className="sidebar">
          <div className="profile-card">
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
          </div>
            <hr className="horizontal" />
            <div className="filters">
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
        <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <IoIosSearch size={24} className="search-icon" />
          </div>
          
          <ul>

          <li className="job-card">
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
          </li>

          <li className="job-card">
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
          </li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default Jobsssssss
