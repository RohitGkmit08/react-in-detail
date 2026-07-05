const EmployeeCard = ({employee}) => {
  return (
    <div className="employee-card">
      <p className="employee-card-text">Name: {employee.name}</p>
      <p className="employee-card-text">Email: {employee.email}</p>
      <p className="employee-card-text">Department: {employee.department}</p>
    </div>
  )
}

export default EmployeeCard;