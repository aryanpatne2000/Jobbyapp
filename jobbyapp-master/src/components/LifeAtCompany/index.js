import "./index.css"

const LifeAtCompany=(props)=>{
const {lifeAtCompany}=props
const { description, imageUrl}=lifeAtCompany

    return(
        <div className="lifeatcompanydiv">
        <div className="lifeatcompanyheading-para">
          <h4 className="LifeatCompanyheading">Life at Company</h4>
          <p className="job-description">
           {description}
          </p>
        </div>
        <img
          src={imageUrl}
          className="office-pic"
        />
      </div>
        

    )
}

export default LifeAtCompany