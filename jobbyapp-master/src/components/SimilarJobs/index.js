import {BsBriefcase, BsStar} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import "./index.css"

const SimilarJobs = (props) => {

const {similarJobsData}=props
const {companyLogoUrl,employmentType,id,jobDescription,location,rating,title}=similarJobsData

    return ( 
        
        <div className="similar-jobs">
            <div className="similar-job-header">
              <img
                src={companyLogoUrl}
                alt="Company Logo"
                className="similar-company-logo"
              />
              <div className="similar-job-title-container">
                <h2 className="similar-job-title">{title}</h2>
                <div className="similar-rating">
                  <BsStar className="similar-star" /> <span>{rating}</span>
                </div>
              </div>
            </div>
            <div className="similar-job-details">
              <div className="similar-main-conatiner-of-icons">
                <div className="similar-loaction-conatiner">
                  <MdLocationOn className="similar-jobs-loaction-icon" size={25} />
                  <p className="similar-location-para">{location}</p>
                </div>
                <div className="similar-briefcase-conatiner">
                  <BsBriefcase className="similar-jobs-briefcase-icon" size={21} />
                  <p className="similar-briefcase-para">{employmentType}</p>
                </div>
              </div>
            </div>
    
            <h3 className="similar-description-heading">Description</h3>
            <p className="similar-job-description">
              {jobDescription}
            </p>
          </div>
           );
}
 
export default SimilarJobs;