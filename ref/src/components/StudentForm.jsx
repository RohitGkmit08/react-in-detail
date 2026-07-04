import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"

const StudentForm = ({students, setStudents}) => {
    const inputRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.name === "" || formData.email === ""){
            return
        }

        const newStudent = {
            id: Date.now(),
            ...formData
        }

        setStudents([...students, newStudent])

        setFormData({
            name: "",
            email : ""
        })

        inputRef.current.focus();
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Student form :</h2>

        <input 
            ref={inputRef}
            type="string"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
        />
        {
            formData.name.length > 0 && formData.name.length < 3 && <p style={{color:"red"}}>Name should have atleast 3 characters</p>
        }
        <br></br>
        <br></br>

        <input 
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
        />
        {
            formData.email.length > 0 && !formData.email.includes("@") && <p style={{color:"red"}}>Email must contain @</p>
        }
        <br></br>
        <br></br>

        <button type="submit">
            Add student
        </button>
    </form>

  )
}

export default StudentForm