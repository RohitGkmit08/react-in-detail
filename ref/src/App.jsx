// what problems useRef solves-

import { useState } from "react"
import SearchBar from "./components/SearchBar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

// a built-in React function that lets you persist values between renders and directly access DOM elements without triggering a component re-render.
// React discourages direct DOM manipulation, because React wants to manipulate the DOM itsef.Because React and manual DOM manipulation can get out of sync.

// 1. Persist values between re-renders, 2.Changing that value should NOT trigger a re-render, 3. can access DOM-elements.
// it returns an object. Why not value but an object? Because React wants a stable container.

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [students, setStudents] = useState([
      {
        id: 1,
        name: "Rohit",
        email: "rohit@gmail.com"
      },
      {
        id: 2,
        name: "Aman",
        email: "aman@gmail.com"
      },
      {
        id:3,
        name: "Shampy",
        email: "shampy@gmail.com"
      }
  ])

  const filteredStudents = students.filter((student) => (
    student.name.
    toLowerCase().includes(searchText.toLowerCase())
  ))
  return (
    <div>
      <h1>Student Portal</h1>
      <SearchBar 
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <StudentForm 
        students={students}
        setStudents={setStudents}
      />

      <StudentList
        students={filteredStudents}
      />
    </div>
  )
}

export default App

