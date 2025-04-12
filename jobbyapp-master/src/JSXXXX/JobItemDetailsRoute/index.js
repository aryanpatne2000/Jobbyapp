import {GoHome} from 'react-icons/go'
import {IoIosLogOut, IoIosSearch} from 'react-icons/io'
import {BsBriefcase, BsStar} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {FaExternalLinkAlt} from 'react-icons/fa'
import './index.css'

const JobItemDetailsRoute = () => {
  return (
    <div className="background">
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
        <hr />
        <div className="description-external-conatiner">
          <h3 className="description-heading">Description</h3>
          <div className="ExternalLinkIcon">
            <p className="visit">Visit</p>
            <FaExternalLinkAlt className="ExternalLinkAlt" />
          </div>
        </div>
        <p className="job-description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev partners to minimize/avoid any production outages.
          The role will focus on production support.
        </p>
        <h4>Skills</h4>
        <div className="skill-container">
          <div className="skills">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
              className="skill-image"
            />
            <p className="skill-para">Docker</p>
          </div>
          <div className="skills">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
              className="skill-image"
            />
            <p className="skill-para">Docker</p>
          </div>
          <div className="skills">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
              className="skill-image"
            />
            <p className="skill-para">Docker</p>
          </div>
          <div className="skills">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
              className="skill-image"
            />
            <p className="skill-para">Docker</p>
          </div>
          <div className="skills">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
              className="skill-image"
            />
            <p className="skill-para">Docker</p>
          </div>
          <div className="skills">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
              className="skill-image"
            />
            <p className="skill-para">Docker</p>
          </div>
        </div>
        <h4>Life at Company</h4>
        <p className="job-description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev partners to minimize/avoid any production outages.
          The role will focus on production support.
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png"
          className="office-pic"
        />
      </div>
      <div className="similarJobs">
        <h1 className="similarJobsHeading">Similar jobs</h1>
      </div>
      <div className="similar-jobs">
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

        <h3 className="description-heading">Description</h3>
        <p className="job-description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev partners to minimize/avoid any production outages.
          The role will focus on production support.
        </p>
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
        </div>
      </div>
      <div className="similar-jobs">
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

        <h3 className="description-heading">Description</h3>
        <p className="job-description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev partners to minimize/avoid any production outages.
          The role will focus on production support.
        </p>
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
        </div>
      </div>
      <div className="similar-jobs">
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

        <h3 className="description-heading">Description</h3>
        <p className="job-description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev partners to minimize/avoid any production outages.
          The role will focus on production support.
        </p>
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
        </div>
      </div>
    </div>
  )
}
export default JobItemDetailsRoute
