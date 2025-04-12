
import Header from '../Header'

import './index.css'

const Home = () => {
  return (
    <>
      <div className="backgnd">
        <Header />
        <h1 className="heading">Find The Job That Fits Your Life</h1>
        <p className="discription">
          Millions of people are searching for jobs
          <br />
          salary informtion,company reviews.Find the
          <br />
          job that fits your abilities and potential.
        </p>
        <button className="findjobs">Find Jobs</button>
      </div>
    </>
  )
}

export default Home
