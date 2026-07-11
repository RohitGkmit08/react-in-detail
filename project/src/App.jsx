import { useState, useMemo, useCallback } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import EmployeeForm from "./components/EmployeeForm"
import EmployeeList from "./components/EmployeeList"
import Statistics from "./components/Statistics"

function App() {
  console.log("App Rendered");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rohit",
      email: "rohit@gmail.com",
      department: "Developer"
    },
    {
      id: 2,
      name: "Aman",
      email: "aman@gmail.com",
      department: "HR"
    },
    {
      id: 3,
      name: "Priya",
      email: "pirya@gmail.com",
      department: "Testing"
    }
  ])

  const [searchText, setSearchText] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      return employee.name.toLowerCase().includes(searchText.toLowerCase())
    })
  }, [searchText, employees])
  
  const deleteEmployee = useCallback((id) => {
    setEmployees((prev) => prev.filter(employee => employee.id !== id))
  }, [])
  
  return (
    <>
      <Header/>

      <SearchBar searchText={searchText} setSearchText={setSearchText}/>

      <EmployeeForm setEmployees={setEmployees}/>

      <EmployeeList employees={filteredEmployees} deleteEmployeeById={deleteEmployee}/>
      
      <Statistics employees={employees}/>
    </>
  )
}

export default App
