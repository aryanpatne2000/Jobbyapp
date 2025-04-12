import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
   
    <div className="backgnd-Home">
    <Header />
      <div className="home-content">
        <h1 className="heading">Find The Job That Fits Your Life</h1>
        <p className="discription">
          Millions of people are searching for jobs
          <br />
          salary informtion,company reviews.Find the
          <br />
          job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="findjobs">Find Jobs</button>
        </Link>

    
      </div>
    </div>
  </>
)

export default Home
