import EmployeeCard from "./EmployeeCard"
const EmployeeList = ({employees, deleteEmployeeById}) => {
  console.log("employee list");
  return (
    <div>
      {
        employees.length === 0 ? 
        "No employee found" :
         <>
          {
            employees.map((employee) => (
              <EmployeeCard 
                key={employee.id}
                employee={employee}
                onDelete = {deleteEmployeeById}
              />
            ))
          }
         </>
      }
    </div>
  )
}

export default EmployeeList