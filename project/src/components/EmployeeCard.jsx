const EmployeeCard = ({employee, onDelete}) => {
   console.log(`${employee.name} Card Rendered`);
  return (
    <div className="employee-card">
      <p className="employee-card-text">Name: {employee.name}</p>
      <p className="employee-card-text">Email: {employee.email}</p>
      <p className="employee-card-text">Department: {employee.department}</p>
      <button onClick={() => onDelete(employee.id)}>
        Delete
      </button>
    </div>
  )
}

export default EmployeeCard;