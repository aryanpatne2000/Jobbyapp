import "./index.css"

const Skills =(props)=>{

const {skillsData}=props
const {imageUrl,name}=skillsData

    return(
        <li className="skills">
        <img
          src={imageUrl}
          className="skill-image"
        />
        <p className="skill-para">{name}</p>
      </li>

    )
}

export default Skills