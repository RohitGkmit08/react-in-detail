import { useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import EmployeeForm from "./components/EmployeeForm"
import EmployeeList from "./components/EmployeeList"
import EmployeeCard from "./components/EmployeeCard"
import Statistics from "./components/Statistics"

function App() {
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
      department : "Ttesting"
    }
  ])

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header/>

      <SearchBar searchText={searchText} setSearchText={setSearchText}/>

      <EmployeeForm setEmployees={setEmployees}/>

      <EmployeeList employees={employees}/>

      <EmployeeCard />
      
      <Statistics employees={employees}/>
    </>
  )
}

export default App
