import EmployeeCard from "./EmployeeCard"
const EmployeeList = ({employees}) => {
  
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
              />
            ))
          }
         </>
      }
    </div>
  )
}

export default EmployeeList