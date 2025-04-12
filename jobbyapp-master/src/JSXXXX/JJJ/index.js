import {GoHome} from 'react-icons/go'
import {IoIosLogOut, IoIosSearch} from 'react-icons/io'
import {BsBriefcase, BsStar} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {FaExternalLinkAlt} from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const JJJ = () => {
  return (
    <div className="background">
      <Header />

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
              <BsStar className="star" /> <span className="rating-span">4</span>
            </div>
          </div>
        </div>

        <div className="job-details">
          <div className="main-conatiner-of-icons">
            <div className="loaction-conatiner">
              <MdLocationOn className="loaction-icon" size={22} />
              <p className="location-para">Delhi</p>
            </div>
            <div className="briefcase-conatiner">
              <BsBriefcase className="briefcase-icon" size={22} />
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
            <FaExternalLinkAlt className="ExternalLinkAlt" size={20} />
          </div>
        </div>
        <p className="job-description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev partners to minimize/avoid any production outages.
          The role will focus on production support.
        </p>
        <h4 className="skills-heading">Skills</h4>
        <div className="main-skill-container">
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
        </div>
        <div className="lifeatcompanydiv">
          <div className="lifeatcompanyheading-para">
            <h4 className="LifeatCompanyheading">Life at Company</h4>
            <p className="job-description">
              We are looking for a DevOps Engineer with a minimum of 5 years of
              <br />
              industry experience, preferably working in the financial IT <br />
              community. The position in the team is focused on delivering
              <br />
              exceptional services to both BU and Dev partners to minimize/avoid
              <br />
              any production outages. The role will focus on production support.
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png"
            className="office-pic"
          />
        </div>
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
        <div className="job-details">
          <div className="main-conatiner-of-icons">
            <div className="loaction-conatiner">
              <MdLocationOn className="similar-jobs-loaction-icon" size={21} />
              <p className="location-para">Delhi</p>
            </div>
            <div className="briefcase-conatiner">
              <BsBriefcase className="similar-jobs-briefcase-icon" size={21} />
              <p className="briefcase-para">Internship</p>
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
        <div className="job-details">
          <div className="main-conatiner-of-icons">
            <div className="loaction-conatiner">
              <MdLocationOn className="similar-jobs-loaction-icon" size={21} />
              <p className="location-para">Delhi</p>
            </div>
            <div className="briefcase-conatiner">
              <BsBriefcase className="similar-jobs-briefcase-icon" size={21} />
              <p className="briefcase-para">Internship</p>
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
        <div className="job-details">
          <div className="main-conatiner-of-icons">
            <div className="loaction-conatiner">
              <MdLocationOn className="similar-jobs-loaction-icon" size={21} />
              <p className="location-para">Delhi</p>
            </div>
            <div className="briefcase-conatiner">
              <BsBriefcase className="similar-jobs-briefcase-icon" size={21} />
              <p className="briefcase-para">Internship</p>
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
      </div>
    </div>
  )
}
export default JJJ
