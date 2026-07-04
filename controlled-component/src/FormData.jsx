import { useState } from "react"

const FormData = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form data submitted");
        console.log(formData);
    }
  return (
    <div>
        <h2>Registration form</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="string"
                name="name"
                value={formData.name}
                placeholder="enter your name"
                onChange={handleChange}
            />
            {
                formData.name.length > 0 && 
                formData.length < 3 && 
                <p>Name must be greater than 3 characters</p>
            }
            <br></br>
            <br></br>
            <input 
                type="email"
                name="email"
                value={formData.email}
                placeholder="enter your email"
                onChange={handleChange}
            />
            {
                formData.email.length > 0 &&
                !formData.includes("@") && 
                <p>Email must contain @</p>
            }
            <br></br>
            <br></br>
            <input 
                type="password"
                name="password"
                value={formData.password}
                placeholder="enter your password"
                onChange={handleChange}
            />
            {
                formData.password.length > 0 &&
                formData.password.length < 6 && 
                <p>password must be greater than 6 characters</p>
            }
            <br></br>
            <br></br>

            <button type="submit">
                Register
            </button>
        </form>
    </div>
  )
}

export default FormData