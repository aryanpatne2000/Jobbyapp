/*import "./index.css";

const FiltersGroup = (props) => {
  const {
    employmentTypesList = [],
    salaryRangesList = [],
    changeEmployment,
    changeSalary,
  } = props;

  const renderTypeOfEmploymentList = () =>
    employmentTypesList.map((eachItem) => {
      const onChangeEmployment = () =>
        changeEmployment(eachItem.employmentTypeId);

      return (
        <li key={eachItem.employmentTypeId}>
          <input type="checkbox" onChange={onChangeEmployment} />
          {eachItem.label}
        </li>
      );
    });

  const renderSalaryRangeList = () =>
    salaryRangesList.map((eachItem) => {
      const onChangeSalary = () =>
        changeSalary(eachItem.salaryRangeId);

      return (
        <li key={eachItem.salaryRangeId}>
          <input
            type="radio"
            name="salary"
            onChange={onChangeSalary}
          />
          {eachItem.label}
        </li>
      );
    });

  return (
    <div className="sidebar">
      <div className="profile-cardd">
        <img
          src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
          alt="profile"
          className="profile"
        />
        <h2 className="profile-name">Rahul Attuluri</h2>
        <p className="profile-para">
          Lead Software Developer and AI-ML expert
        </p>
      </div>
      <hr className="horizontal" />
      <div className="filters">
        <h3>Type of Employment</h3>
        <ul className="typeofemployement">{renderTypeOfEmploymentList()}</ul>
      </div>
      <hr className="horizontal" />
      <div className="filters">
        <h3>Salary Range</h3>
        <ul className="salaryRange">{renderSalaryRangeList()}</ul>
      </div>
    </div>
  );
};

export default FiltersGroup;
*/

import './index.css'

const FiltersGroup = props => {
  const {
    employmentTypesList = [],
    salaryRangesList = [],
    changeEmployment,
    changeSalary,
    selectedEmploymentTypes = [],
    selectedSalaryRange = '',
  } = props

  const renderTypeOfEmploymentList = () =>
    employmentTypesList.map(eachItem => {
      const isChecked = selectedEmploymentTypes.includes(eachItem.employmentTypeId)

      const onChangeEmployment = () =>
        changeEmployment(eachItem.employmentTypeId)

      return (
        <li key={eachItem.employmentTypeId}>
          <input
            type="checkbox"
            id={eachItem.employmentTypeId}
            checked={isChecked}
            onChange={onChangeEmployment}
          />
          <label htmlFor={eachItem.employmentTypeId}>
            {eachItem.label}
          </label>
        </li>
      )
    })

  const renderSalaryRangeList = () =>
    salaryRangesList.map(eachItem => {
      const isChecked = selectedSalaryRange === eachItem.salaryRangeId

      const onChangeSalary = () =>
        changeSalary(eachItem.salaryRangeId)

      return (
        <li key={eachItem.salaryRangeId}>
          <input
            type="radio"
            name="salary"
            id={eachItem.salaryRangeId}
            checked={isChecked}
            onChange={onChangeSalary}
          />
          <label htmlFor={eachItem.salaryRangeId}>
            {eachItem.label}
          </label>
        </li>
      )
    })

  return (
    <div className="sidebar">
      <div className="profile-cardd">
        <img
          src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
          alt="profile"
          className="profile"
        />
        <h2 className="profile-name">Rahul Attuluri</h2>
        <p className="profile-para">
          Lead Software Developer and AI-ML expert
        </p>
      </div>

      <hr className="horizontal" />

      <div className="filters">
        <h3>Type of Employment</h3>
        <ul className="typeofemployement">
          {renderTypeOfEmploymentList()}
        </ul>
      </div>

      <hr className="horizontal" />

      <div className="filters">
        <h3>Salary Range</h3>
        <ul className="salaryRange">
          {renderSalaryRangeList()}
        </ul>
      </div>
    </div>
  )
}

export default FiltersGroup