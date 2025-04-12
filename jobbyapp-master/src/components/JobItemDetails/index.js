import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import {BsBriefcase, BsStar} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {FaExternalLinkAlt} from 'react-icons/fa'
import Header from '../Header'
import SimilarJobs from "../SimilarJobs"
import Skills from "../Skills"
import LifeAtCompany from "../LifeAtCompany"

import "./index.css"

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}


class JobItemDetails extends Component {

  state = {
    jobsData: {},
    similarjobsData: [],
    apiStatus: apiStatusConstants.initial,
    
  }

  componentDidMount() {
    this.getJobData()
  }

  getFormattedJobDetails = data => ({
    companyLogoUrl: data.company_logo_url,
    companyWebsiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    skills: data.skills.map(skill => ({
      imageUrl: skill.image_url,
      name: skill.name,
    })),
    lifeAtCompany: {
      description: data.life_at_company.description,
      imageUrl: data.life_at_company.image_url,
    },
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    title: data.title
  })
 

  
  getFormattedSimilarJob = data => ({
    companyLogoUrl: data.company_logo_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    location: data.location,
    rating: data.rating,
    title: data.title
  })
    
  
  getJobData = async () => {
    const { match } = this.props
    const { params } = match
    const { id } = params
  
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
  
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
  
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = this.getFormattedJobDetails(fetchedData.job_details)
      const updatedSimilarJobsData = fetchedData.similar_jobs.map(eachSimilarJob =>
        this.getFormattedSimilarJob(eachSimilarJob)
      )
      this.setState({
        jobsData: updatedData,
        similarjobsData:updatedSimilarJobsData,
        apiStatus: apiStatusConstants.success,
      })
    }
  
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }
  

  renderLoadingView = () => (
    <div className="products-details-loader-container">
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Job Not Found</h1>
      <Link to="/jobs">
        <button type="button" className="button">
          Find Jobs
        </button>
      </Link>
    </div>
  )


  renderJobsDetailsView=()=>{
        const {jobsData,similarjobsData}=this.state
       const {companyLogoUrl,companyWebsiteUrl,employmentType,id,jobDescription,skills, lifeAtCompany,location,packagePerAnnum,rating}=jobsData

      
    return(
  
    <>
            <div className="job-card">
  <div className="job-header">
    <img
      src={companyLogoUrl}
      alt="Company Logo"
      className="company-logo"
    />
    <div className="job-title-container">
      <h2 className="job-title">DevOps Engineer</h2>
      <div className="rating">
        <BsStar className="star" /> <span className="rating-span">{rating}</span>
      </div>
    </div>
  </div>

  <div className="job-details">
    <div className="main-conatiner-of-icons">
      <div className="loaction-conatiner">
        <MdLocationOn className="loaction-icon" size={22} />
        <p className="location-para">{location}</p>
      </div>
      <div className="briefcase-conatiner">
        <BsBriefcase className="briefcase-icon" size={22} />
        <p className="briefcase-para">{employmentType}</p>
      </div>
    </div>
    <p className="salary">{packagePerAnnum}</p>
  </div>
  <hr />
  <div className="description-external-conatiner">
    <h3 className="description-heading">Description</h3>
    <div className="ExternalLinkIcon">
      <p className="visit">Visit</p>
      <a href={companyWebsiteUrl}>
      <FaExternalLinkAlt className="ExternalLinkAlt" size={20} />
      </a>
    </div>
  </div>
  <p className="job-description">
 {jobDescription}
  </p>
  <h4 className="skills-heading">Skills</h4>
  <div className="main-skill-container">
    <ul className="skill-container">

      {skills.map((eachItems)=>(
          <Skills skillsData={eachItems} key={eachItems.name}/>
      ))}
    
    </ul>
  </div>
 {<LifeAtCompany lifeAtCompany={lifeAtCompany}/>}
             </div>
            <div className="similarJobs">
             <h1 className="similarJobsHeading">Similar jobs</h1>
             </div>
         {similarjobsData.map((eachItems)=>(
               <SimilarJobs similarJobsData={eachItems}/>
           )
            )}
          
            </>


     )

  }

  renderJobDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }



  render (){

    return(  <div className="background">
      <Header />
      {this.renderJobDetails()}
     
     
          </div>)
   
 
  }


}

export default JobItemDetails