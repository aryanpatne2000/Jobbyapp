/*import {Component} from 'react'
import { ThreeDots } from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'


import FiltersGroup from '../FiltersGroup'
import Jobcard from '../Jobcard'
import Header from '../Header'


import './index.css'

const employmentTypesList = [
    {
      label: 'Full Time',
      employmentTypeId: 'FULLTIME',
    },
    {
      label: 'Part Time',
      employmentTypeId: 'PARTTIME',
    },
    {
      label: 'Freelance',
      employmentTypeId: 'FREELANCE',
    },
    {
      label: 'Internship',
      employmentTypeId: 'INTERNSHIP',
    },
  ]
  
  const salaryRangesList = [
    {
      salaryRangeId: '1000000',
      label: '10 LPA and above',
    },
    {
      salaryRangeId: '2000000',
      label: '20 LPA and above',
    },
    {
      salaryRangeId: '3000000',
      label: '30 LPA and above',
    },
    {
      salaryRangeId: '4000000',
      label: '40 LPA and above',
    },
  ]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    JobsList: [],
    apiStatus: apiStatusConstants.initial,
    employmentType:"",
    minimumPackage:"",
    searchInput: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {employmentType,minimumPackage,searchInput} =
      this.state
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minimumPackage}&search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.jobs.map(jobs => ({
        companyLogoUrl: jobs.company_logo_url,
        employmentType: jobs.employment_type,
        id: jobs.id,
        jobDescription: jobs.job_description,
        location: jobs.location,
        packagePerAnnum: jobs.package_per_annum,
        rating:jobs.rating,
        title:jobs.title
      }))
      this.setState({
        JobsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <ThreeDots  color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

 
  renderJobsListView = () => {
    const {JobsList} = this.state
    const shouldShowJobsList = JobsList.length > 0

    return shouldShowJobsList ? (
     
        <ul className="jobsrenderdiv">
          {JobsList.map(jobs => (
            <Jobcard jobData={jobs} key={jobs.id} />
          ))}
        </ul>
     
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Jobs Found</h1>
        <p className="no-products-description">
          We could not find any Jobs. Try other filters.
        </p>
      </div>
    )
  }

  renderAllJobs = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  

  changeEmployment = employmentType => {
    this.setState({employmentType}, this.getProducts)
  }

  changeSalary =  minimumPackage => {
    this.setState({minimumPackage}, this.getProducts)
  }

  

  changeSearchInput = searchInput => {
    this.setState({searchInput})
  }

   onEnterSearchInput = event => {
   
    if (event.key === 'Enter') {
        this.getProducts()
    }
  }

   onChangeSearchInput = event => {
    this.changeSearchInput(event.target.value)
  }

   renderSearchInput = () => {
    const {searchInput} = this.state
    return (
        <div className="search-container">
        <input 
        type="text" 
        placeholder="Search"
        className="search-input"
        value={searchInput}
        onChange={this.onChangeSearchInput}
        onKeyDown={this.onEnterSearchInput}
          />
        <IoIosSearch size={24} className="search-icon" />
      </div>
    )
  }



  render() {
    const {searchInput} = this.state

    return (
        <div className="div2">
        <Header />
        <div className="container">
           <FiltersGroup
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
            changeEmployment={this.changeEmployment}
            changeSalary={this.changeSalary}
           />
          <div className="jobs-section">
          {this.renderSearchInput()}  
          {this.renderAllJobs()}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
*/

import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'

import FiltersGroup from '../FiltersGroup'
import Jobcard from '../Jobcard'
import Header from '../Header'

import './index.css'

const employmentTypesList = [
  {label: 'Full Time', employmentTypeId: 'FULLTIME'},
  {label: 'Part Time', employmentTypeId: 'PARTTIME'},
  {label: 'Freelance', employmentTypeId: 'FREELANCE'},
  {label: 'Internship', employmentTypeId: 'INTERNSHIP'},
]

const salaryRangesList = [
  {salaryRangeId: '1000000', label: '10 LPA and above'},
  {salaryRangeId: '2000000', label: '20 LPA and above'},
  {salaryRangeId: '3000000', label: '30 LPA and above'},
  {salaryRangeId: '4000000', label: '40 LPA and above'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    JobsList: [],
    apiStatus: apiStatusConstants.initial,
    employmentType: [],
    minimumPackage: '',
    searchInput: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {employmentType, minimumPackage, searchInput} = this.state
    const employmentTypesParam = employmentType.join(',')
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentTypesParam}&minimum_package=${minimumPackage}&search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.jobs.map(jobs => ({
        companyLogoUrl: jobs.company_logo_url,
        employmentType: jobs.employment_type,
        id: jobs.id,
        jobDescription: jobs.job_description,
        location: jobs.location,
        packagePerAnnum: jobs.package_per_annum,
        rating: jobs.rating,
        title: jobs.title,
      }))
      this.setState({
        JobsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  changeEmployment = type => {
    this.setState(prevState => {
      const {employmentType} = prevState
      const isAlreadySelected = employmentType.includes(type)
      const updatedEmploymentType = isAlreadySelected
        ? employmentType.filter(each => each !== type)
        : [...employmentType, type]

      return {employmentType: updatedEmploymentType}
    }, this.getProducts)
  }

  changeSalary = minimumPackage => {
    this.setState({minimumPackage}, this.getProducts)
  }

  changeSearchInput = searchInput => {
    this.setState({searchInput})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getProducts()
    }
  }

  onChangeSearchInput = event => {
    this.changeSearchInput(event.target.value)
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          onKeyDown={this.onEnterSearchInput}
        />
        <IoIosSearch size={24} className="search-icon" />
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderJobsListView = () => {
    const {JobsList} = this.state
    const shouldShowJobsList = JobsList.length > 0

    return shouldShowJobsList ? (
      <ul className="jobsrenderdiv">
        {JobsList.map(jobs => (
          <Jobcard jobData={jobs} key={jobs.id} />
        ))}
      </ul>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Jobs Found</h1>
        <p className="no-products-description">
          We could not find any Jobs. Try other filters.
        </p>
      </div>
    )
  }

  renderAllJobs = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {employmentType, minimumPackage} = this.state

    return (
      <div className="div2">
        <Header />
        <div className="container">
          <FiltersGroup
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
            changeEmployment={this.changeEmployment}
            changeSalary={this.changeSalary}
            selectedEmploymentTypes={employmentType}
            selectedSalaryRange={minimumPackage}
          />
          <div className="jobs-section">
            {this.renderSearchInput()}
            {this.renderAllJobs()}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
