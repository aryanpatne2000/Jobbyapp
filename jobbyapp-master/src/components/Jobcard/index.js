
import {Link} from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import {IoIosLogOut, IoIosSearch} from 'react-icons/io'
import {BsBriefcase, BsStar} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import "./index.css"

const Jobcard = (props) => {
  const {jobData} = props
  const {companyLogoUrl,
    employmentType,
    jobDescription,
    id,
    location,
    packagePerAnnum,
    rating,
    title} = jobData
    return (
         <li className="job-card">
          <Link to={`/jobs/${id}`}>
            <div className="job-header">
                <img
                    src={companyLogoUrl}
                    alt="Netflix Logo"
                    className='company-logo'
                />
                <div className="job-name-container">
                  <div className='title-rating'>

                 
                     <h2 className="job-name">{title}</h2>
                    <p className="rating">
                    <BsStar className="star" /> {rating}
                    </p>
                    </div>
                      </div>
                    </div>
                    <div className="job-details">
                      <div className="main-conatiner-of-icons">
                        <div className="loaction-conatiner">
                          <MdLocationOn className="loaction-icon" />
                          <p className="location-para">{location}</p>
                        </div>
                        <div className="briefcase-conatiner">
                          <BsBriefcase className="briefcase-icon" />
                          <p className="briefcase-para">{employmentType}</p>
                        </div>
                      </div>
                      <p className="salary">{packagePerAnnum}</p>
                    </div>
                    <hr className="horizontal" />
                    <h3 className="description-heading">Description</h3>
                    <p className="job-descriptionn">
                     {jobDescription}
                    </p>
                    </Link>
                  </li>
                 
      )
}
 
export default Jobcard