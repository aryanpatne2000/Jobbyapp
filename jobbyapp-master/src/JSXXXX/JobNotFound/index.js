import './index.css'

const JobNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="404 Not Found"
        />
      </div>
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found</p>
    </div>
  )
}

export default JobNotFound
